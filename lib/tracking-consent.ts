/**
 * ¿Hay que medir a este visitante?
 *
 * Dos reglas, las dos del lado del cliente:
 *
 * 1. Solo el sitio real. En localhost, vistas previas (*.vercel.app,
 *    *.netlify.app) o cualquier otro dominio no se carga GA4 ni el píxel, y no
 *    se dispara ningún evento. Así las pruebas no ensucian los informes.
 * 2. Tráfico interno. Con ?internal=1 se guarda una bandera en el navegador:
 *    GA4 sigue midiendo pero marcado como interno (para poder excluirlo en GA4)
 *    y el píxel de Meta no se carga. Con ?internal=0 se borra la bandera.
 */

export const PROD_HOSTS = ["neuroviasystems.com.mx", "www.neuroviasystems.com.mx"] as const;
const INTERNAL_KEY = "neurovia_internal";

/** El sitio real (no localhost, no vistas previas). */
export function isProductionHost(): boolean {
  if (typeof window === "undefined") return false;
  return (PROD_HOSTS as readonly string[]).includes(window.location.hostname);
}

/**
 * Lee ?internal=1 / ?internal=0 y devuelve si este dispositivo está marcado
 * como interno. Se llama al cargar, antes de decidir qué scripts montar.
 */
export function resolveInternalFlag(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const param = new URL(window.location.href).searchParams.get("internal");
    if (param === "1") window.localStorage.setItem(INTERNAL_KEY, "1");
    if (param === "0") window.localStorage.removeItem(INTERNAL_KEY);
    return window.localStorage.getItem(INTERNAL_KEY) === "1";
  } catch {
    return false;
  }
}

/** ¿Este dispositivo está marcado como interno? (sin tocar la URL) */
export function isInternalTraffic(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(INTERNAL_KEY) === "1";
  } catch {
    return false;
  }
}

/** ¿Se puede enviar cualquier evento de medición o conversión? */
export function trackingEnabled(): boolean {
  return isProductionHost();
}

/** Aviso en consola, una sola vez, para saber por qué no se está midiendo. */
let warned = false;
export function warnTrackingOff(reason: string): void {
  if (warned || typeof window === "undefined") return;
  warned = true;
  console.info(`[Neurovia] Medición desactivada: ${reason}. GA4, Meta Pixel y las conversiones no se cargan aquí.`);
}
