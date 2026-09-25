/**
 * Campaña temporal de evento (Expo Construcción Villahermosa, 24 sep 2026).
 *
 * El aviso del inicio y la página /expo se apagan solos cuando pasa END: no hay
 * que acordarse de quitarlos. Para otro evento, cambia estas constantes y listo.
 */

export const EXPO = {
  /** Nombre como lo ve el visitante. */
  name: "Expo Construcción Villahermosa",
  /** Último instante en que se muestra (hora de México). Lunes 28 de septiembre, fin del día. */
  end: "2026-09-29T00:00:00-06:00",
  /** Página a la que lleva el aviso y el código QR. */
  path: "/expo",
  /** Demo abierta de Neurovia Build (control de obra): se entra con un clic, sin contraseña. */
  demoUrl: "https://construccion.neuroviasystems.cloud/login",
} as const;

/** ¿Sigue vigente la campaña? Se evalúa al renderizar (la home revalida cada 5 min). */
export function isExpoActive(now: Date = new Date()): boolean {
  return now.getTime() < new Date(EXPO.end).getTime();
}

/** Clave y duración de la marca "este visitante viene de la expo". */
const VISIT_KEY = "nv-expo-visita";
const VISIT_TTL_MS = 12 * 60 * 60 * 1000;

/** Deja marcado que el visitante pasó por /expo (caduca en 12 h). */
export function markExpoVisit(): void {
  try {
    window.sessionStorage.setItem(VISIT_KEY, String(Date.now()));
  } catch {
    /* sin sessionStorage: el aviso simplemente no reaparecerá */
  }
}

/** ¿Pasó por /expo hace poco? Una marca vieja ya no cuenta. */
export function cameFromExpo(): boolean {
  try {
    const raw = window.sessionStorage.getItem(VISIT_KEY);
    if (!raw) return false;
    const ts = Number(raw);
    if (!Number.isFinite(ts) || Date.now() - ts > VISIT_TTL_MS) {
      window.sessionStorage.removeItem(VISIT_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
