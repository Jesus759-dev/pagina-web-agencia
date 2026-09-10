"use client";

import { getDict, type Locale } from "@/lib/i18n";
import WaLink from "@/components/WaLink";

/**
 * WhatsApp CTA usado en las páginas de servicio. Recibe el mensaje prellenado
 * de la página (lib/serviceContent.ts) y delega URL, escritorio y tracking a WaLink.
 */
export default function WaConsultaButton({
  message,
  lang = "es",
}: {
  message: string;
  lang?: Locale;
}) {
  const label = getDict(lang).service.ctaConsulta;
  return (
    <WaLink
      message={message}
      lang={lang}
      className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
    >
      {label} <span aria-hidden="true">→</span>
    </WaLink>
  );
}
