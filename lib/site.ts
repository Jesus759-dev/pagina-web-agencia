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

/**
 * Portal de sistemas en vivo desarrollados por Neurovia (acceso a las demos:
 * Requisiciones, Mantenimiento Vehicular, Inventario y Punto de Venta).
 */
export const SISTEMAS_PORTAL = "https://neuroviasystems.cloud/";

/**
 * Catálogo de sistemas en producción. Cada uno vive en su propio subdominio
 * del portal .cloud. Se muestran en la página /sistemas del sitio.
 */
export const SISTEMAS = [
  {
    name: "Sistema de Requisiciones",
    host: "requisiciones.neuroviasystems.cloud",
    url: "https://requisiciones.neuroviasystems.cloud",
    desc: "Órdenes de compra, cuentas por pagar, proveedores y reporte dinámico.",
  },
  {
    name: "Mantenimiento Vehicular",
    host: "mantenimiento.neuroviasystems.cloud",
    url: "https://mantenimiento.neuroviasystems.cloud",
    desc: "Control de flota, órdenes de servicio, unidades y bitácora de mantenimiento.",
  },
  {
    name: "Inventario",
    host: "inventario.neuroviasystems.cloud",
    url: "https://inventario.neuroviasystems.cloud",
    desc: "Gestión de almacén, entradas y salidas, existencias y movimientos.",
  },
  {
    name: "Punto de Venta",
    host: "puntodeventa.neuroviasystems.cloud",
    url: POS_LANDING,
    desc: "Terminal de ventas, tickets, cajas y control de operaciones diarias.",
  },
] as const;
