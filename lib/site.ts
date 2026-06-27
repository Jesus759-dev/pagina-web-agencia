/**
 * Site-wide constants. Single source of truth for the WhatsApp contact link
 * so every CTA stays in sync.
 */
export const WHATSAPP_NUMBER = "529937226350";

/** Build a wa.me link with a prefilled (URL-encoded) message. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Hola Neurovia Systems, me interesa saber más sobre sus servicios"
);

export const WA_INVENTARIO = waLink(
  "Hola Neurovia Systems, me interesa el Sistema de Inventario (pago único o membresía)"
);

/**
 * Landing page del producto Punto de Venta.
 * TODO: reemplazar con la URL final cuando esté disponible.
 */
export const POS_LANDING = "https://puntodeventa.neuroviasystems.cloud";
