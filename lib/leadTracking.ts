/**
 * Atribución de campañas: guarda de dónde llegó el visitante para mandarlo
 * junto con el lead y poder cruzarlo después en Google Ads.
 *
 * Se lee de la URL de llegada y se guarda en sessionStorage (dura la sesión,
 * no deja rastro entre visitas). Nunca guarda datos personales.
 */

export type LeadAttribution = {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing?: string;
  referrer?: string;
};

const KEY = "nv-attr-v1";
const PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

/**
 * Captura los parámetros de la URL actual. Solo escribe la primera vez de la
 * sesión (o cuando llega con parámetros nuevos), para no perder el clic
 * original si el visitante navega por el sitio.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const url = new URL(window.location.href);
    const fresh: LeadAttribution = {};
    for (const p of PARAMS) {
      const v = url.searchParams.get(p);
      if (v) fresh[p] = v.slice(0, 200);
    }
    const hasNew = Object.keys(fresh).length > 0;
    if (!hasNew && window.sessionStorage.getItem(KEY)) return;

    const saved = hasNew ? fresh : {};
    saved.landing = `${url.pathname}${url.search}`.slice(0, 300);
    if (document.referrer && !document.referrer.includes(window.location.host)) {
      saved.referrer = document.referrer.slice(0, 300);
    }
    window.sessionStorage.setItem(KEY, JSON.stringify(saved));
  } catch {
    /* navegador sin sessionStorage: seguimos sin atribución */
  }
}

/** Lo guardado en esta sesión (objeto vacío si no hay nada). */
export function getAttribution(): LeadAttribution {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.sessionStorage.getItem(KEY) || "{}") as LeadAttribution;
  } catch {
    return {};
  }
}

/** Identificador corto del clic de Google Ads para pegarlo en el mensaje de WhatsApp. */
export function adsRef(): string {
  const { gclid, gbraid, wbraid } = getAttribution();
  const id = gclid || gbraid || wbraid;
  return id ? id.slice(-6).toUpperCase() : "";
}

/** ¿El visitante viene de un anuncio de Google? (para ocultar el aviso de la expo). */
export function isGoogleAdsVisitor(): boolean {
  const a = getAttribution();
  if (a.gclid || a.gbraid || a.wbraid) return true;
  if ((a.utm_source || "").toLowerCase() === "google") return true;
  if (typeof window === "undefined") return false;
  try {
    const p = new URL(window.location.href).searchParams;
    return Boolean(p.get("gclid") || p.get("gbraid") || p.get("wbraid")) || p.get("utm_source")?.toLowerCase() === "google";
  } catch {
    return false;
  }
}
