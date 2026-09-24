"use client";

import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";
import { waLink, waLinkText, WHATSAPP_DISPLAY, type WaContext } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { trackWhatsAppClick } from "@/lib/analytics";
import { adsRef, captureAttribution } from "@/lib/leadTracking";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  /** Which CTA this is; picks the prefilled message (see WA_MESSAGES in lib/site.ts). */
  context?: WaContext;
  /** Raw prefilled message — for pages with their own copy (service pages). Wins over `context`. */
  message?: string;
  lang?: Locale;
  /** Nombre del botón para el evento whatsapp_click (p. ej. "hero", "contacto"). */
  location?: string;
  /** Extra work on click (e.g. close a menu). Tracking is always fired here. */
  onAfterClick?: () => void;
  children: ReactNode;
};

/**
 * El único enlace a WhatsApp del sitio.
 *
 * - Siempre wa.me, en celular y en computadora.
 * - Mensaje ya escrito según el botón (WA_MESSAGES en lib/site.ts).
 * - Si el visitante llegó de un anuncio de Google, agrega "(ref: XXXXXX)" con
 *   los últimos 6 caracteres del gclid, para poder cruzar la conversación con
 *   el clic del anuncio. Se calcula después de montar, porque vive en sessionStorage.
 * - Cada clic dispara whatsapp_click: evento SECUNDARIO, no es conversión.
 */
export default function WaLink({
  context = "general",
  message,
  lang = "es",
  location,
  onAfterClick,
  children,
  title,
  ...rest
}: Props) {
  const base = message ?? "";
  const [href, setHref] = useState(() => (message ? waLinkText(message) : waLink(context, lang)));

  useEffect(() => {
    // El enlace se arma en el cliente: primero aseguramos que el gclid de la
    // URL ya esté guardado (este efecto puede correr antes que el de la página).
    captureAttribution();
    const ref = adsRef();
    const text = base || undefined;
    if (!ref) {
      setHref(text ? waLinkText(text) : waLink(context, lang));
      return;
    }
    const withRef = (m: string) => `${m} (ref: ${ref})`;
    setHref(text ? waLinkText(withRef(text)) : waLinkText(withRef(waLinkMessage(context, lang))));
  }, [context, base, lang]);

  return (
    <a
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title ?? `WhatsApp ${WHATSAPP_DISPLAY}`}
      onClick={() => {
        trackWhatsAppClick(location ?? context);
        onAfterClick?.();
      }}
    >
      {children}
    </a>
  );
}

/** Texto prellenado del contexto, sin construir la URL (para poder añadirle la referencia). */
function waLinkMessage(context: WaContext, lang: Locale): string {
  const url = new URL(waLink(context, lang));
  return decodeURIComponent(url.searchParams.get("text") ?? "");
}
