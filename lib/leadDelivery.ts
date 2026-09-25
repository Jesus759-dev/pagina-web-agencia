/**
 * Entrega de prospectos (solo servidor).
 *
 * Dos avisos por cada prospecto, INDEPENDIENTES entre sí:
 *   1. Telegram  → siempre que esté configurado (TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID)
 *   2. Correo    → Resend si hay RESEND_API_KEY; si no, SMTP del buzón de Hostinger
 *
 * Si uno falla, el otro sale igual y el visitante llega a /gracias. Solo se
 * considera un fallo real cuando NINGÚN canal entregó: ahí sí hay que avisarle
 * al visitante, para que no crea que su solicitud llegó.
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

export type DeliveryResult = { channel: "telegram" | "resend" | "smtp"; ok: boolean; error?: string };

const RESEND_API = process.env.RESEND_API_BASE || "https://api.resend.com";
const TELEGRAM_API = process.env.TELEGRAM_API_BASE || "https://api.telegram.org";
const LEADS_TO = () => process.env.LEADS_EMAIL_TO || "ventas@neuroviasystems.com.mx";
const SMTP_USER = () => process.env.SMTP_USER || "ventas@neuroviasystems.com.mx";
const FROM = () => process.env.NOTIFY_EMAIL_FROM || `Prospectos Neurovia <${SMTP_USER()}>`;

const NEED_LABEL: Record<string, string> = {
  sistema: "Sistema a la medida",
  "punto-de-venta": "Punto de venta",
  crm: "CRM",
  automatizacion: "Automatización con IA",
  "pagina-web": "Página web",
  otro: "Otro",
};

const serviceOf = (l: LeadPayload) => NEED_LABEL[l.need] ?? (l.need || "Sin especificar");
const waUrl = (phone: string) => `https://wa.me/52${phone}`;
const stamp = () => new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City", dateStyle: "full", timeStyle: "short" });
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const leadSubject = (l: LeadPayload) => `Nuevo lead: ${l.name} – ${serviceOf(l)}`;

/** Versión de texto (Telegram y respaldo del correo). */
function plainText(l: LeadPayload): string {
  const lines = [
    l.source === "chatbot" ? "Nuevo lead (chatbot)" : "Nuevo lead (formulario)",
    "",
    `Nombre: ${l.name}`,
    `WhatsApp: +52 ${l.phone}  ·  ${waUrl(l.phone)}`,
  ];
  if (l.email) lines.push(`Correo: ${l.email}`);
  if (l.company) lines.push(`Empresa: ${l.company}`);
  lines.push(`Servicio: ${serviceOf(l)}`);
  if (l.message) lines.push("", `Mensaje: ${l.message}`);
  const attr = Object.entries(l.attribution).filter(([, v]) => v);
  if (attr.length) {
    lines.push("", "Origen de la visita:");
    for (const [k, v] of attr) lines.push(`  ${k}: ${v}`);
  }
  if (l.page) lines.push("", `Página: ${l.page}`);
  lines.push("", `Recibido: ${stamp()}`);
  return lines.join("\n");
}

/** Correo en HTML: tabla simple, legible en el celular y en Gmail. */
function html(l: LeadPayload): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 14px 8px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">${esc(label)}</td>
         <td style="padding:8px 0;color:#0f2a44;font-size:15px">${value}</td></tr>`
      : "";
  const attr = Object.entries(l.attribution).filter(([, v]) => v);
  const attrRows = attr.map(([k, v]) => row(k, esc(v))).join("");

  return `<!doctype html><html lang="es"><body style="margin:0;background:#f5f7fa;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa;padding:24px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:14px;border:1px solid #e5e9ef;overflow:hidden">
        <tr><td style="background:#0f2a44;padding:18px 22px;color:#fff">
          <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9ad6f7">Neurovia Systems</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px">Nuevo lead · ${esc(l.source === "chatbot" ? "chatbot" : "formulario")}</div>
        </td></tr>
        <tr><td style="padding:20px 22px">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            ${row("Nombre", esc(l.name))}
            ${row("Empresa", esc(l.company))}
            ${row("WhatsApp", `<a href="${waUrl(l.phone)}" style="color:#2f8fe8;font-weight:600;text-decoration:none">+52 ${esc(l.phone)}</a>`)}
            ${row("Correo", l.email ? `<a href="mailto:${esc(l.email)}" style="color:#2f8fe8;text-decoration:none">${esc(l.email)}</a>` : "")}
            ${row("Servicio", esc(serviceOf(l)))}
            ${row("Mensaje", esc(l.message).replace(/\n/g, "<br>"))}
          </table>
          <div style="margin-top:18px;padding-top:14px;border-top:1px solid #e5e9ef">
            <div style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#6b7280;margin-bottom:6px">Origen</div>
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
              ${row("Página", esc(l.page))}
              ${attrRows || row("campaña", "directo / sin parámetros")}
              ${row("Fecha", esc(stamp()))}
            </table>
          </div>
          <a href="${waUrl(l.phone)}" style="display:inline-block;margin-top:20px;background:#2f8fe8;color:#fff;font-weight:700;font-size:15px;text-decoration:none;padding:12px 22px;border-radius:999px">Contestar por WhatsApp</a>
        </td></tr>
      </table>
    </td></tr>
  </table></body></html>`;
}

/* --------------------------------- canales --------------------------------- */

async function sendResend(l: LeadPayload): Promise<void> {
  const res = await fetch(`${RESEND_API}/emails`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
    body: JSON.stringify({
      from: FROM(),
      to: LEADS_TO(),
      reply_to: l.email || undefined,
      subject: leadSubject(l),
      html: html(l),
      text: plainText(l),
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`resend ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

async function sendSmtp(l: LeadPayload): Promise<void> {
  // Import dinámico: nodemailer solo se carga si de verdad se usa SMTP.
  const nodemailer = (await import("nodemailer")).default;
  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER(), pass: process.env.SMTP_PASS as string },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
  await transport.sendMail({
    from: FROM(),
    to: LEADS_TO(),
    replyTo: l.email || undefined,
    subject: leadSubject(l),
    html: html(l),
    text: plainText(l),
  });
}

async function sendTelegram(text: string): Promise<void> {
  const res = await fetch(`${TELEGRAM_API}/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: esc(text).slice(0, 4000),
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`telegram ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

/* --------------------------------- entrega --------------------------------- */

/** Qué canal atiende el correo: Resend si hay llave, si no SMTP del buzón. */
function emailChannel(): "resend" | "smtp" | null {
  if (process.env.RESEND_API_KEY) return "resend";
  if (process.env.SMTP_PASS) return "smtp";
  return null;
}

/**
 * Manda el prospecto por todos los canales configurados, sin que uno dependa
 * del otro. Devuelve el resultado por canal (lo usa el endpoint de prueba).
 * Lanza solo si ningún canal entregó.
 */
export async function deliverLead(lead: LeadPayload): Promise<DeliveryResult[]> {
  const text = plainText(lead);
  const jobs: { channel: DeliveryResult["channel"]; run: () => Promise<void> }[] = [];

  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    jobs.push({ channel: "telegram", run: () => sendTelegram(text) });
  }
  const mail = emailChannel();
  if (mail === "resend") jobs.push({ channel: "resend", run: () => sendResend(lead) });
  if (mail === "smtp") jobs.push({ channel: "smtp", run: () => sendSmtp(lead) });

  if (!jobs.length) {
    throw new Error("sin canales configurados: falta TELEGRAM_BOT_TOKEN+TELEGRAM_CHAT_ID y RESEND_API_KEY o SMTP_PASS");
  }

  const settled = await Promise.allSettled(jobs.map((j) => j.run()));
  const results: DeliveryResult[] = settled.map((r, i) => ({
    channel: jobs[i].channel,
    ok: r.status === "fulfilled",
    error: r.status === "rejected" ? String(r.reason).slice(0, 300) : undefined,
  }));

  for (const r of results) {
    if (!r.ok) console.error(`[lead] canal ${r.channel} falló: ${r.error}`);
    else console.log(`[lead] canal ${r.channel} ok (${lead.source}: ${lead.name})`);
  }

  if (!results.some((r) => r.ok)) throw new Error("todos los canales fallaron");
  return results;
}

/** Igual que deliverLead, para quien solo necesita saber si hubo entrega. */
export async function notifyLead(lead: LeadPayload): Promise<void> {
  await deliverLead(lead);
}
