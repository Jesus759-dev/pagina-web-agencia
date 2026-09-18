/**
 * Owner notifications for the site chatbot (server-only).
 *
 * Channels (any combination, configured by env vars in the hosting panel,
 * never in the repo):
 * - Telegram: TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID  (instant push to the phone)
 * - Email via Resend: RESEND_API_KEY + NOTIFY_EMAIL_TO (+ optional NOTIFY_EMAIL_FROM)
 *
 * Notifications never throw: a failed push must not break the visitor's chat.
 */

export type ChatEvent =
  | { kind: "chat_started"; page: string; lang: string; firstMessage: string }
  | { kind: "lite_choice"; page: string; lang: string; choice: string }
  | { kind: "lead"; page: string; lang: string; data: Record<string, string>; transcript: string }
  | { kind: "appointment"; page: string; lang: string; data: Record<string, string>; transcript: string };

const TELEGRAM_API = process.env.TELEGRAM_API_BASE || "https://api.telegram.org";
const RESEND_API = process.env.RESEND_API_BASE || "https://api.resend.com";

function telegramConfigured(): boolean {
  return Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
}
function emailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL_TO);
}

/** The bot only runs when at least one channel can reach the owner. */
export function notifyConfigured(): boolean {
  return telegramConfigured() || emailConfigured();
}

const LABELS: Record<string, string> = {
  nombre: "Nombre",
  telefono: "WhatsApp / teléfono",
  correo: "Correo",
  empresa: "Empresa",
  giro: "Giro",
  necesidad: "Necesidad",
  presupuesto: "Presupuesto",
  dia_hora: "Día y hora preferidos",
  tema: "Tema",
};

function headline(e: ChatEvent): string {
  if (e.kind === "chat_started") return "💬 Alguien está hablando con el asistente";
  if (e.kind === "lite_choice") return "👉 Alguien usó el chat y se fue a WhatsApp";
  if (e.kind === "lead") return "✅ Nuevo contacto desde el chat";
  return "📅 Solicitud de cita desde el chat";
}

function plainText(e: ChatEvent): string {
  const lines = [headline(e), `Página: ${e.page} (${e.lang})`];
  if (e.kind === "chat_started") {
    lines.push("", `Primer mensaje: ${e.firstMessage}`);
  } else if (e.kind === "lite_choice") {
    lines.push("", `Eligió: ${e.choice}`, "Revisa tu WhatsApp: le abrimos el chat con ese mensaje ya escrito.");
  } else {
    lines.push("");
    for (const [k, v] of Object.entries(e.data)) if (v) lines.push(`${LABELS[k] ?? k}: ${v}`);
    const phone = (e.data.telefono || "").replace(/\D/g, "");
    if (phone.length >= 10) {
      const wa = phone.length === 10 ? `52${phone}` : phone;
      lines.push(`Abrir WhatsApp: https://wa.me/${wa}`);
    }
    lines.push("", "Conversación:", e.transcript);
  }
  return lines.join("\n");
}

const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function sendTelegram(text: string): Promise<void> {
  const url = `${TELEGRAM_API}/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: escapeHtml(text).slice(0, 4000),
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`telegram ${res.status}`);
}

async function sendEmail(subject: string, text: string): Promise<void> {
  const res = await fetch(`${RESEND_API}/emails`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
    body: JSON.stringify({
      from: process.env.NOTIFY_EMAIL_FROM || "Asistente Neurovia <onboarding@resend.dev>",
      to: process.env.NOTIFY_EMAIL_TO,
      subject,
      text,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`resend ${res.status}`);
}

export async function notifyOwner(e: ChatEvent): Promise<void> {
  const text = plainText(e);
  const tasks: Promise<void>[] = [];
  if (telegramConfigured()) tasks.push(sendTelegram(text));
  // Email only for leads and appointments; chat activity is Telegram-only to avoid inbox noise.
  if (emailConfigured() && (e.kind === "lead" || e.kind === "appointment")) tasks.push(sendEmail(headline(e).replace(/^\S+\s/, ""), text));
  const results = await Promise.allSettled(tasks);
  for (const r of results) if (r.status === "rejected") console.error("[chat-notify]", String(r.reason));
  if (e.kind === "lead" || e.kind === "appointment") console.log("[chat-notify]", e.kind, JSON.stringify(e.data));
}
