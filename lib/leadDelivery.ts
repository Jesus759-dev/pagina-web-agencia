/**
 * Entrega de prospectos (solo servidor).
 *
 * Canales, los mismos que ya usa el chatbot:
 * - Correo con Resend  → RESEND_API_KEY + LEADS_EMAIL_TO (por defecto ventas@)
 * - Telegram (opcional) → TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID
 *
 * Si ningún canal está configurado, lanza: el visitante debe ver el error y
 * poder irse por WhatsApp, en vez de creer que su solicitud llegó.
 */

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  company: string;
  need: string;
  message: string;
  source: "form" | "chatbot";
  page: string;
  attribution: Record<string, string>;
};

const RESEND_API = process.env.RESEND_API_BASE || "https://api.resend.com";
const TELEGRAM_API = process.env.TELEGRAM_API_BASE || "https://api.telegram.org";
const LEADS_TO = process.env.LEADS_EMAIL_TO || "ventas@neuroviasystems.com.mx";

const NEED_LABEL: Record<string, string> = {
  sistema: "Sistema a la medida",
  "punto-de-venta": "Punto de venta",
  crm: "CRM",
  automatizacion: "Automatización con IA",
  "pagina-web": "Página web",
  otro: "Otro",
};

function plainText(l: LeadPayload): string {
  const lines = [
    l.source === "chatbot" ? "Nuevo prospecto (chatbot)" : "Nuevo prospecto (formulario)",
    "",
    `Nombre: ${l.name}`,
    `WhatsApp: +52 ${l.phone}  ·  https://wa.me/52${l.phone}`,
  ];
  if (l.email) lines.push(`Correo: ${l.email}`);
  if (l.company) lines.push(`Empresa: ${l.company}`);
  if (l.need) lines.push(`Qué necesita: ${NEED_LABEL[l.need] ?? l.need}`);
  if (l.message) lines.push("", `Mensaje: ${l.message}`);
  const attr = Object.entries(l.attribution).filter(([, v]) => v);
  if (attr.length) {
    lines.push("", "Origen de la visita:");
    for (const [k, v] of attr) lines.push(`  ${k}: ${v}`);
  }
  if (l.page) lines.push("", `Página: ${l.page}`);
  lines.push("", `Recibido: ${new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" })}`);
  return lines.join("\n");
}

const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function sendEmail(l: LeadPayload, text: string): Promise<void> {
  const res = await fetch(`${RESEND_API}/emails`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
    body: JSON.stringify({
      from: process.env.NOTIFY_EMAIL_FROM || "Prospectos Neurovia <onboarding@resend.dev>",
      to: LEADS_TO,
      reply_to: l.email || undefined,
      subject: `Prospecto: ${l.name}${l.company ? ` · ${l.company}` : ""}${l.need ? ` · ${NEED_LABEL[l.need] ?? l.need}` : ""}`,
      text,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`resend ${res.status}`);
}

async function sendTelegram(text: string): Promise<void> {
  const res = await fetch(`${TELEGRAM_API}/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
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

/** Manda el lead por los canales configurados. Basta con que uno funcione. */
export async function notifyLead(lead: LeadPayload): Promise<void> {
  const text = plainText(lead);
  const tasks: Promise<void>[] = [];
  if (process.env.RESEND_API_KEY) tasks.push(sendEmail(lead, text));
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) tasks.push(sendTelegram(text));

  if (!tasks.length) throw new Error("sin canales de entrega configurados (RESEND_API_KEY o TELEGRAM_*)");

  const results = await Promise.allSettled(tasks);
  const errors = results.filter((r) => r.status === "rejected");
  for (const e of errors) console.error("[lead]", String((e as PromiseRejectedResult).reason));
  if (errors.length === results.length) throw new Error("todos los canales fallaron");
}
