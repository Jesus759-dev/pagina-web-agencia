import { createHash, randomUUID } from "node:crypto";
import { OPENAI_PIXEL_ID } from "@/lib/site";
import type { LeadPayload } from "@/lib/leadDelivery";

/* --------------------------------------------------------------------------
 * Conversions API de OpenAI (anuncios en ChatGPT), del lado del servidor.
 *
 * El píxel manda el lead desde el navegador, donde un bloqueador o Safari
 * pueden tirarlo. Esto lo manda desde el servidor, en el mismo punto donde el
 * lead se entrega por Telegram y correo. Los dos llevan el MISMO id: OpenAI
 * conserva el primero que recibe y descarta el duplicado.
 *
 * Inactivo mientras no exista OPENAI_CAPI_KEY (vive en
 * ~/.config/neurovia/chat.env en el servidor; el repositorio es público).
 *
 * Doc: https://developers.openai.com/ads/conversions-api
 * -------------------------------------------------------------------------- */

const ENDPOINT = process.env.OPENAI_CAPI_BASE || "https://bzr.openai.com/v1/events";
const SITE = "https://neuroviasystems.com.mx";
const TIMEOUT_MS = 5000;

/** Lo que solo sabe la petición HTTP: no viene en el formulario. */
export type ConversionContext = {
  /** Mismo id que recibe el píxel como event_id, para deduplicar. */
  eventId?: string;
  /** Cookie __obref que deja el píxel de OpenAI: liga el lead con el anuncio. */
  obref?: string;
  ip?: string;
  userAgent?: string;
};

export function openAIConversionsEnabled(): boolean {
  return Boolean(process.env.OPENAI_CAPI_KEY);
}

/** id que se comparte entre servidor y píxel. Solo caracteres seguros. */
export function safeEventId(raw: unknown): string {
  return typeof raw === "string" && /^[A-Za-z0-9_-]{8,64}$/.test(raw) ? raw : randomUUID();
}

/** Contexto a partir de la petición del navegador (cookies, IP, agente). */
export function conversionContextFrom(request: Request, eventId?: string): ConversionContext {
  const cookies = request.headers.get("cookie") ?? "";
  const obref = /(?:^|;\s*)__obref=([^;]+)/.exec(cookies)?.[1];
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return {
    eventId: eventId ? safeEventId(eventId) : undefined,
    obref: obref ? decodeURIComponent(obref).slice(0, 512) : undefined,
    ip: ip && ip !== "desconocida" ? ip : undefined,
    userAgent: request.headers.get("user-agent")?.slice(0, 512) || undefined,
  };
}

const sha256 = (v: string) => createHash("sha256").update(v).digest("hex");

/**
 * Manda un lead_created. `validateOnly` lo valida sin registrarlo como
 * conversión: es lo que usa el endpoint de prueba.
 */
export async function sendLeadToOpenAI(
  lead: LeadPayload,
  ctx: ConversionContext = {},
  { validateOnly = false }: { validateOnly?: boolean } = {}
): Promise<void> {
  const key = process.env.OPENAI_CAPI_KEY;
  if (!key) throw new Error("falta OPENAI_CAPI_KEY");

  // Datos de contacto normalizados como pide OpenAI y cifrados con SHA-256:
  // teléfono con código de país y sin símbolos; correo en minúsculas.
  const user: Record<string, unknown> = {};
  const digits = lead.phone.replace(/\D/g, "");
  if (digits.length === 10) user.phone_numbers_sha256 = [sha256(`52${digits}`)];
  const email = lead.email.trim().toLowerCase();
  if (email) user.emails_sha256 = [sha256(email)];
  if (ctx.ip) user.ip_address = ctx.ip;
  if (ctx.userAgent) user.user_agent = ctx.userAgent;
  if (ctx.obref) user.obref = ctx.obref;

  const page = lead.page.startsWith("/") ? lead.page : "/";
  const body = {
    validate_only: validateOnly,
    events: [
      {
        id: ctx.eventId ?? randomUUID(),
        type: "lead_created",
        timestamp_ms: Date.now(),
        source_url: `${SITE}${page}`,
        action_source: "web",
        data: { type: "customer_action" },
        user,
      },
    ],
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${ENDPOINT}?pid=${encodeURIComponent(OPENAI_PIXEL_ID)}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
    }
  } finally {
    clearTimeout(timer);
  }
}
