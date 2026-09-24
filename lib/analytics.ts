// Punto único de medición. La regla: SOLO cuenta como conversión un prospecto
// real (formulario o chatbot con datos de contacto). Los clics a WhatsApp y al
// correo son eventos secundarios: indican interés, no un lead.
//
// - generate_lead  → GA4, con lead_source ("form" | "chatbot"). Es la conversión.
// - ads_conversion_Contacto_1 → la conversión de Google Ads que ya existe en la
//   cuenta; se alimenta ahora de leads reales, no de clics.
// - fbq("track","Lead") → lo que optimizan las campañas de Meta.
// - whatsapp_click / email_click / newsletter_signup → secundarios, para ver
//   qué botones mueven a la gente sin inflar las conversiones.

export type LeadSource = "form" | "chatbot";

function gtag(...args: unknown[]): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

function fbq(command: "init" | "track" | "trackCustom", ...args: unknown[]): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(command, ...args);
  }
}

/**
 * Prospecto real: dejó nombre y WhatsApp. Se dispara una sola vez por lead
 * (en /gracias para el formulario, al guardar contacto en el chatbot).
 */
export function trackFormLead(source: LeadSource): void {
  gtag("event", "generate_lead", { currency: "MXN", value: 1, lead_source: source });
  gtag("event", "ads_conversion_Contacto_1");
  fbq("track", "Lead", { content_name: source });
}

/** Clic a WhatsApp: evento secundario, NO es conversión. */
export function trackWhatsAppClick(location: string): void {
  gtag("event", "whatsapp_click", { location });
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
