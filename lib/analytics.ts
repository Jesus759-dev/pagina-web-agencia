// Central place for conversion tracking. Every contact CTA and form goes
// through trackLead() so GA4, the Google Ads "Contacto" conversion and the
// Meta Pixel always fire together from the same user action.
//
// The Google Ads conversion is a CLICK conversion, so it must fire on the
// click (here), never on page load. Meta's standard "Lead" event is what the
// Meta Ads campaigns optimize for.

export type LeadSource = "whatsapp" | "email" | "newsletter" | "agenda";

/** GA4 event name per source (kept stable: reports and Ads conversions depend on them). */
const GA4_EVENT: Record<LeadSource, string> = {
  whatsapp: "contacto_whatsapp",
  email: "clic_correo",
  newsletter: "generate_lead",
  agenda: "generate_lead",
};

/** Sources that count as a Google Ads "Contacto" click conversion. */
const ADS_CONVERSION_SOURCES: ReadonlySet<LeadSource> = new Set(["whatsapp", "email"]);

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
 * Fire all lead events for a user action: GA4 event (+ Google Ads conversion
 * for direct-contact clicks) + Meta Pixel "Lead".
 *
 * Call it on the click of any wa.me / api.whatsapp.com / mailto: link and on
 * successful form submissions.
 */
export function trackLead(source: LeadSource): void {
  gtag("event", GA4_EVENT[source], source === "whatsapp" || source === "email" ? undefined : { source });
  if (ADS_CONVERSION_SOURCES.has(source)) {
    gtag("event", "ads_conversion_Contacto_1");
  }
  fbq("track", "Lead", { content_name: source });
}

/** Meta Pixel PageView — used by the client-side route listener (SPA navigations). */
export function trackPageView(): void {
  fbq("track", "PageView");
}
