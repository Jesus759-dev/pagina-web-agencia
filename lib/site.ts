import type { Locale } from "@/lib/i18n";

/**
 * Site-wide constants. Single source of truth for the WhatsApp contact links
 * (number, prefilled messages per context, mobile vs desktop URL) so every
 * CTA stays in sync. Render links through components/WaLink.tsx.
 */
export const WHATSAPP_NUMBER = "529937226350";
/** Human-readable number, shown as the desktop fallback ("copy this"). */
export const WHATSAPP_DISPLAY = "+52 993 722 6350";

/**
 * Meta (Facebook/Instagram) Pixel ID, read from NEXT_PUBLIC_META_PIXEL_ID
 * (.env.local for dev, .env.production for the Hostinger build). Never hardcode it
 * here: when the variable is missing the pixel simply is not rendered.
 */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

/**
 * Calendly (or Cal.com/TidyCal) event URL for /agenda, e.g.
 * https://calendly.com/neurovia/20min. Empty = the page offers WhatsApp booking
 * instead (components/CalendlyEmbed.tsx). Set NEXT_PUBLIC_CALENDLY_URL in .env.production.
 */
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

/**
 * Where a WhatsApp CTA lives. The prefilled message depends on it so the
 * visitor never lands on an empty chat box.
 */
export type WaContext = "general" | "float" | "pos" | "custom" | "inventario" | "agenda" | "expo";

export const WA_MESSAGES: Record<Locale, Record<WaContext, string>> = {
  es: {
    general: "Hola, quiero cotizar un sistema para mi negocio. ¿Me pueden dar informes?",
    float: "Hola, quiero cotizar un sistema para mi negocio. ¿Me pueden dar informes?",
    pos: "Hola, quiero cotizar Tomín POS para mi negocio. ¿Cuánto cuesta?",
    custom: "Hola, necesito un sistema a la medida para mi empresa. ¿Podemos agendar una llamada esta semana?",
    inventario: "Hola, quiero cotizar un sistema de inventario. ¿Me pueden dar informes?",
    agenda: "Hola, quiero agendar una llamada para platicar de un proyecto. ¿Qué horarios tienen?",
    expo: "Hola, los vi en la Expo Construcción Villahermosa. Quiero ver cómo aplicaría un sistema en mi obra o mi empresa.",
  },
  en: {
    general: "Hi, I'd like a quote for a system for my business. Can you send me details?",
    float: "Hi, I'd like a quote for a system for my business. Can you send me details?",
    pos: "Hi, I'd like a quote for Tomín POS for my business. How much does it cost?",
    custom: "Hi, I need a custom system for my company. Can we schedule a call this week?",
    inventario: "Hi, I'd like a quote for an inventory system. Can you send me details?",
    agenda: "Hi, I'd like to book a call to talk about a project. What times do you have available?",
    expo: "Hi, I saw you at the Expo Construcción in Villahermosa. I'd like to see how a system would work for my company.",
  },
};

export function waMessage(context: WaContext, lang: Locale = "es"): string {
  return WA_MESSAGES[lang][context];
}

export type WaTarget = "mobile" | "desktop";

/**
 * Build the WhatsApp URL for a raw message.
 * - mobile  → https://wa.me/<num>?text=…  (deep-links into the app)
 * - desktop → https://web.whatsapp.com/send?phone=<num>&text=…  (opens WhatsApp Web
 *   directly instead of wa.me's interstitial, which is where desktop visitors drop off)
 */
export function waLinkText(message: string, target: WaTarget = "mobile"): string {
  const text = encodeURIComponent(message);
  return target === "desktop"
    ? `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${text}`
    : `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/** Build the WhatsApp URL for a CTA context in the given language. */
export function waLink(context: WaContext, lang: Locale = "es", target: WaTarget = "mobile"): string {
  return waLinkText(waMessage(context, lang), target);
}

/**
 * Landing page del producto Punto de Venta.
 * TODO: reemplazar con la URL final cuando esté disponible.
 */
export const POS_LANDING = "https://puntodeventa.neuroviasystems.cloud";

/** CRM — nuevo producto. */
export const CRM_URL = "https://crm.neuroviasystems.cloud/";

/**
 * Portal de sistemas en vivo desarrollados por Neurovia (acceso a las demos:
 * Requisiciones, Mantenimiento Vehicular, Inventario y Punto de Venta).
 */
export const SISTEMAS_PORTAL = "https://neuroviasystems.cloud/";

/**
 * Catálogo de sistemas en producción. Cada uno vive en su propio subdominio
 * del portal .cloud. Se muestran en la página /sistemas del sitio. El texto
 * (nombre/descripción) se traduce en lib/i18n.ts (mismo orden que este array).
 */
export type SistemaLink = {
  host: string;
  url: string;
  /** Marca el producto con un distintivo "Nuevo / New". */
  isNew?: boolean;
};

export const SISTEMAS: SistemaLink[] = [
  {
    host: "crm.neuroviasystems.cloud",
    url: "https://crm.neuroviasystems.cloud/",
    isNew: true,
  },
  {
    host: "requisiciones.neuroviasystems.cloud",
    url: "https://requisiciones.neuroviasystems.cloud",
  },
  {
    host: "mantenimiento.neuroviasystems.cloud",
    url: "https://mantenimiento.neuroviasystems.cloud",
  },
  {
    host: "inventario.neuroviasystems.cloud",
    url: "https://inventario.neuroviasystems.cloud",
  },
  {
    host: "puntodeventa.neuroviasystems.cloud",
    url: POS_LANDING,
  },
];
