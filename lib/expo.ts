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
