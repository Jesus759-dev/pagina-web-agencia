"use client";

import { getDict, type Locale } from "@/lib/i18n";
import { trackContact } from "@/lib/analytics";

/**
 * WhatsApp CTA usado en las páginas de servicio. Cliente para poder disparar
 * el evento de conversión de GA4 en el clic sin convertir a ServicePage.
 */
export default function WaConsultaButton({
  href,
  lang = "es",
}: {
  href: string;
  lang?: Locale;
}) {
  const label = getDict(lang).service.ctaConsulta;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackContact}
      className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
    >
      {label} <span aria-hidden="true">→</span>
    </a>
  );
}
