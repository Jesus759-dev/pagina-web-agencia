// Punto único de medición. La regla: SOLO cuenta como conversión un prospecto
// real (formulario o chatbot con datos de contacto). Los clics a WhatsApp y al
// correo son eventos secundarios: indican interés, no un lead.
//
// - generate_lead  → GA4, con lead_source ("form" | "chatbot"). Es la conversión.
// - ads_conversion_Contacto_1 → la conversión de Google Ads que ya existe en la
//   cuenta; se alimenta ahora de leads reales, no de clics.
// - fbq("track","Lead") → lo que optimizan las campañas de Meta.
// - oaiq("measure","lead_created") → la conversión de los anuncios en ChatGPT:
//   formulario y chatbot, y además el clic a WhatsApp (ver trackWhatsAppClick).
// - whatsapp_click / email_click / newsletter_signup → secundarios, para ver
//   qué botones mueven a la gente sin inflar las conversiones.

import { trackingEnabled, warnTrackingOff } from "@/lib/tracking-consent";

export type LeadSource = "form" | "chatbot";

/** Ningún evento sale fuera de neuroviasystems.com.mx (localhost, previews…). */
function allowed(): boolean {
  if (trackingEnabled()) return true;
  warnTrackingOff("no es el dominio de producción");
  return false;
}

/**
 * Los píxeles no existen al montar la página: components/Analytics.tsx decide
 * en un efecto si se cargan y luego next/script los inyecta, unos cientos de
 * milisegundos después. Un evento que se dispara al montar —el lead en
 * /gracias— llegaba antes y se perdía en silencio en los tres píxeles.
 *
 * Por eso cada llamada espera a que su píxel aparezca (hasta WAIT_MS) en lugar
 * de descartarse. Si nunca aparece —tráfico interno, que no carga Meta ni
 * OpenAI, o un bloqueador— la llamada se abandona sin errores.
 */
const WAIT_MS = 10_000;
type PixelName = "gtag" | "fbq" | "oaiq";

function whenReady(name: PixelName, args: unknown[]): void {
  if (!allowed() || typeof window === "undefined") return;
  const start = Date.now();
  const tick = () => {
    const fn = window[name] as ((...a: unknown[]) => void) | undefined;
    if (typeof fn === "function") {
      fn(...args);
      return;
    }
    if (Date.now() - start < WAIT_MS) window.setTimeout(tick, 150);
  };
  tick();
}

function gtag(...args: unknown[]): void {
  whenReady("gtag", args);
}

function fbq(command: "init" | "track" | "trackCustom", ...args: unknown[]): void {
  whenReady("fbq", [command, ...args]);
}

/** Píxel de OpenAI. Solo aparece si Analytics lo cargó (dominio real, no interno). */
function oaiq(command: "measure", ...args: unknown[]): void {
  whenReady("oaiq", [command, ...args]);
}

/**
 * Prospecto real: dejó nombre y WhatsApp. Se dispara una sola vez por lead
 * (en /gracias para el formulario, al guardar contacto en el chatbot).
 */
export function trackFormLead(source: LeadSource, eventId?: string): void {
  gtag("event", "generate_lead", { currency: "MXN", value: 1, lead_source: source });
  gtag("event", "ads_conversion_Contacto_1");
  fbq("track", "Lead", { content_name: source });
  // Con el mismo id que mandó el servidor a la Conversions API, OpenAI cuenta
  // el lead una sola vez aunque le llegue por los dos lados.
  oaiq("measure", "lead_created", { type: "customer_action" }, eventId ? { event_id: eventId } : undefined);
}

/**
 * Clic a WhatsApp. En GA4, Google Ads y Meta es un evento SECUNDARIO: no es
 * conversión, para no optimizar campañas hacia gente que solo hizo clic.
 *
 * En ChatGPT Ads sí cuenta como lead_created, por decisión de Jesús: WhatsApp
 * es el canal por donde llega la mayoría de sus prospectos y, sin eso, la
 * campaña casi no tendría conversiones de las que aprender. Todos los
 * botones de WhatsApp del sitio pasan por components/WaLink.tsx, que abre en
 * pestaña nueva y llama aquí: un solo punto, sin doble conteo.
 */
export function trackWhatsAppClick(location: string): void {
  gtag("event", "whatsapp_click", { location });
  oaiq("measure", "lead_created", { type: "customer_action" });
}

/** Clic al correo: evento secundario. */
export function trackEmailClick(location = "contacto"): void {
  gtag("event", "email_click", { location });
}

/** Alta al boletín: interés, no un prospecto de venta. */
export function trackNewsletter(): void {
  gtag("event", "newsletter_signup");
}

/** Actividad del chatbot (GA4). Al ABRIR el chat no se dispara nada. */
export function trackChatEvent(name: "chat_message"): void {
  gtag("event", name);
}

/** Campaña de evento: clic en el aviso del inicio o en la página /expo. */
export function trackExpo(name: "expo_banner_click" | "expo_page_view" | "expo_demo_click"): void {
  gtag("event", name);
}

/** Meta Pixel PageView — usado por el listener de rutas (navegación SPA). */
export function trackPageView(): void {
  fbq("track", "PageView");
}
