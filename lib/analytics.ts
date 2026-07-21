// Central place for conversion tracking, so every contact CTA fires the same
// events: the GA4 event + the Google Ads "Contacto" conversion.
// The Google Ads conversion is a CLICK conversion, so it must fire on the
// click (here), never on page load.

export function trackContact(): void {
  window.gtag?.("event", "contacto_whatsapp");
  window.gtag?.("event", "ads_conversion_Contacto_1");
}

export function trackEmail(): void {
  window.gtag?.("event", "clic_correo");
  window.gtag?.("event", "ads_conversion_Contacto_1");
}
