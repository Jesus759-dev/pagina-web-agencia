import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chat/knowledge";
import { notifyConfigured, notifyOwner } from "@/lib/chat/notify";

/**
 * /api/chat — site assistant.
 *
 * GET  → { enabled } so the widget only renders when the bot can actually run
 *        (ANTHROPIC_API_KEY set AND at least one owner-notification channel).
 * POST → one visitor turn. The client sends the text-only history; this
 *        handler runs the Claude tool loop (guardar_contacto / solicitar_cita),
 *        notifies the owner and returns the assistant reply + any events.
 *
 * Secrets live only in the hosting panel env vars. /api/ is disallowed in robots.txt.
 */

const MODEL = process.env.CHAT_MODEL || "claude-opus-5";
const MAX_TURNS_PER_SESSION = 24; // visitor messages
const MAX_TEXT = 1500;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQ_PER_WINDOW = 30; // per IP

function enabled(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY) && notifyConfigured();
}

/**
 * mode "ai"   → full assistant (key + notify channel configured).
 * mode "lite" → no credentials yet: the widget still shows, but hands off to
 *               WhatsApp with a prefilled message instead of answering.
 */
export function GET() {
  const ai = enabled();
  return NextResponse.json({ enabled: ai, mode: ai ? "ai" : "lite" });
}

/* ---------------- light in-memory guards (single Node process) ---------------- */
const hits = new Map<string, number[]>();
const startedSessions = new Map<string, number>(); // sessionId -> ts
const leadSessions = new Set<string>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (now - v[v.length - 1] > WINDOW_MS) hits.delete(k);
  return recent.length > MAX_REQ_PER_WINDOW;
}

/* ---------------- tools ---------------- */
const TOOLS: Anthropic.Beta.BetaTool[] = [
  {
    name: "guardar_contacto",
    description:
      "Registra los datos de un visitante interesado para que Jesús lo contacte. Úsala una sola vez, cuando ya tengas su nombre y al menos un teléfono/WhatsApp o un correo.",
    strict: true,
    input_schema: {
      type: "object",
      properties: {
        nombre: { type: "string", description: "Nombre del visitante" },
        telefono: { type: "string", description: "WhatsApp o teléfono; cadena vacía si no lo dio" },
        correo: { type: "string", description: "Correo; cadena vacía si no lo dio" },
        empresa: { type: "string", description: "Nombre del negocio; cadena vacía si no lo dio" },
        giro: { type: "string", description: "Giro del negocio; cadena vacía si no se sabe" },
        necesidad: { type: "string", description: "Qué necesita resolver, en una o dos frases" },
        presupuesto: { type: "string", description: "Presupuesto mencionado; cadena vacía si no lo dijo" },
      },
      required: ["nombre", "telefono", "correo", "empresa", "giro", "necesidad", "presupuesto"],
      additionalProperties: false,
    },
  },
  {
    name: "solicitar_cita",
    description:
      "Registra una solicitud de llamada o reunión con Jesús. Úsala cuando el visitante quiere agendar y ya dio nombre, un medio de contacto y día y hora preferidos. La cita queda pendiente de confirmación.",
    strict: true,
    input_schema: {
      type: "object",
      properties: {
        nombre: { type: "string" },
        telefono: { type: "string", description: "Cadena vacía si no lo dio" },
        correo: { type: "string", description: "Cadena vacía si no lo dio" },
        dia_hora: { type: "string", description: "Día y hora preferidos tal como los dijo el visitante" },
        tema: { type: "string", description: "De qué quiere hablar" },
      },
      required: ["nombre", "telefono", "correo", "dia_hora", "tema"],
      additionalProperties: false,
    },
  },
];

type ChatTurn = { role: "user" | "assistant"; text: string };
type Body = { sessionId?: unknown; lang?: unknown; page?: unknown; messages?: unknown };

const clean = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function transcriptOf(turns: ChatTurn[]): string {
  return turns
    .slice(-12)
    .map((t) => `${t.role === "user" ? "Visitante" : "Asistente"}: ${t.text.slice(0, 400)}`)
    .join("\n");
}

export async function POST(request: Request) {
  if (!enabled()) return NextResponse.json({ ok: false, error: "disabled" }, { status: 503 });

  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "local";
  if (rateLimited(ip)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const sessionId = clean(body.sessionId, 64);
  const lang = body.lang === "en" ? "en" : "es";
  const page = clean(body.page, 200) || "/";
  const raw = Array.isArray(body.messages) ? body.messages : [];
  const turns: ChatTurn[] = raw
    .filter((m): m is { role: string; text: string } => !!m && typeof m === "object" && typeof (m as { text?: unknown }).text === "string")
    .map((m) => ({ role: m.role === "assistant" ? ("assistant" as const) : ("user" as const), text: m.text.trim().slice(0, MAX_TEXT) }))
    .filter((m) => m.text.length > 0)
    .slice(-40);

  // History must start with the visitor and end with the visitor.
  while (turns.length && turns[0].role !== "user") turns.shift();
  const userTurns = turns.filter((t) => t.role === "user").length;
  if (!sessionId || !turns.length || turns[turns.length - 1].role !== "user") {
    return NextResponse.json({ ok: false, error: "invalid_history" }, { status: 422 });
  }
  if (userTurns > MAX_TURNS_PER_SESSION) {
    return NextResponse.json({ ok: false, error: "session_limit" }, { status: 429 });
  }

  // "Someone is chatting" — once per session, fire-and-forget.
  if (!startedSessions.has(sessionId)) {
    startedSessions.set(sessionId, Date.now());
    if (startedSessions.size > 5000) startedSessions.clear();
    void notifyOwner({ kind: "chat_started", page, lang, firstMessage: turns[turns.length - 1].text });
  }

  const client = new Anthropic();
  const messages: Anthropic.Beta.BetaMessageParam[] = turns.map((t) => ({ role: t.role, content: t.text }));
  const events: string[] = [];
  let handoff = "";

  try {
    let reply = "";
    for (let step = 0; step < 4; step++) {
      const response = await client.beta.messages.create({
        model: MODEL,
        max_tokens: 2048,
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default",
        output_config: { effort: "low" },
        system: [{ type: "text", text: CHAT_SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
        tools: TOOLS,
        messages,
      });

      if (response.stop_reason === "refusal") {
        reply = lang === "en"
          ? "I can't help with that here, but you can message us on WhatsApp and Jesús will reply personally."
          : "No puedo ayudarte con eso por aquí, pero puedes escribirnos por WhatsApp y Jesús te responde personalmente.";
        break;
      }

      const text = response.content
        .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim();
      const toolUses = response.content.filter((b): b is Anthropic.Beta.BetaToolUseBlock => b.type === "tool_use");

      if (response.stop_reason !== "tool_use" || !toolUses.length) {
        reply = text;
        break;
      }

      messages.push({ role: "assistant", content: response.content });
      const results: Anthropic.Beta.BetaToolResultBlockParam[] = [];
      const transcript = transcriptOf(turns);

      for (const tu of toolUses) {
        const input = (tu.input ?? {}) as Record<string, unknown>;
        const data: Record<string, string> = {};
        for (const [k, v] of Object.entries(input)) data[k] = clean(v, 500);
        const hasContact = (data.telefono || "").replace(/\D/g, "").length >= 8 || EMAIL_RE.test(data.correo || "");

        if (!data.nombre || !hasContact || (tu.name === "solicitar_cita" && !data.dia_hora)) {
          results.push({
            type: "tool_result",
            tool_use_id: tu.id,
            is_error: true,
            content: "Faltan datos: se necesita nombre, un teléfono o correo válido" + (tu.name === "solicitar_cita" ? " y día y hora preferidos." : "."),
          });
          continue;
        }

        if (tu.name === "guardar_contacto") {
          if (!leadSessions.has(sessionId)) {
            leadSessions.add(sessionId);
            await notifyOwner({ kind: "lead", page, lang, data, transcript });
          }
          events.push("lead");
          handoff = `Hola, soy ${data.nombre}. Hablé con el asistente del sitio sobre: ${data.necesidad || "un proyecto"}.`;
          results.push({ type: "tool_result", tool_use_id: tu.id, content: "Contacto registrado. Jesús lo contactará en menos de 24 horas." });
        } else if (tu.name === "solicitar_cita") {
          await notifyOwner({ kind: "appointment", page, lang, data, transcript });
          events.push("appointment");
          handoff = `Hola, soy ${data.nombre}. Pedí una llamada para ${data.dia_hora} sobre: ${data.tema || "un proyecto"}.`;
          results.push({ type: "tool_result", tool_use_id: tu.id, content: "Solicitud de cita registrada. Jesús la confirmará por WhatsApp o correo." });
        } else {
          results.push({ type: "tool_result", tool_use_id: tu.id, is_error: true, content: "Herramienta desconocida." });
        }
      }
      messages.push({ role: "user", content: results });
    }

    if (!reply) {
      reply = lang === "en" ? "Got it. Jesús will reach out soon." : "Listo. Jesús te contactará muy pronto.";
    }
    return NextResponse.json({ ok: true, reply, events: Array.from(new Set(events)), handoff });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      console.error("[chat] rate limited by API");
      return NextResponse.json({ ok: false, error: "busy" }, { status: 503 });
    }
    if (error instanceof Anthropic.APIError) {
      console.error(`[chat] API error ${error.status}:`, error.message);
    } else {
      console.error("[chat] unexpected error", error);
    }
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
