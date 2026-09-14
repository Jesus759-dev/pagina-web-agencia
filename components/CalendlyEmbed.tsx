import Script from "next/script";
import WaLink from "@/components/WaLink";
import { CALENDLY_URL, WHATSAPP_DISPLAY } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

/**
 * Booking block for /agenda.
 *
 * - With NEXT_PUBLIC_CALENDLY_URL set (lib/site.ts → CALENDLY_URL) it renders
 *   the Calendly inline widget (Cal.com / TidyCal work the same: one script,
 *   one div).
 * - Without it, visitors get a real way to book: WhatsApp with the "agenda"
 *   prefilled message (asks for available times) plus email. Never a
 *   developer placeholder; ad traffic lands here.
 */
export default function CalendlyEmbed({ lang = "es" }: { lang?: Locale }) {
  if (CALENDLY_URL) {
    return (
      <>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        <div
          className="calendly-inline-widget overflow-hidden rounded-2xl border border-line bg-white"
          data-url={CALENDLY_URL}
          style={{ minWidth: 320, height: 700 }}
          aria-label="Calendario de reservas"
        />
      </>
    );
  }

  const es = lang === "es";
  const steps = es
    ? ["Escríbenos por WhatsApp con el botón de abajo.", "Te proponemos dos horarios y confirmamos por el mismo chat.", "La llamada dura 20 minutos y no tiene costo."]
    : ["Message us on WhatsApp with the button below.", "We suggest two time slots and confirm in the same chat.", "The call takes 20 minutes and is free."];

  return (
    <div className="rounded-3xl border border-line bg-white p-7 sm:p-10">
      <h2 className="m-0 font-heading text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[32px]">
        {es ? "Agenda tu llamada por WhatsApp" : "Book your call on WhatsApp"}
      </h2>
      <ol className="mt-6 flex flex-col gap-3.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-start gap-3.5 text-[15.5px] leading-[1.55] text-ink-2">
            <span
              className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full font-code text-[12px] font-semibold text-white"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <WaLink
          context="agenda"
          lang={lang}
          className="btn-primary inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[15px] font-semibold no-underline"
        >
          <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
          {es ? "Agendar por WhatsApp" : "Book on WhatsApp"}
        </WaLink>
        <a
          href="mailto:soporte@neuroviasystems.com.mx"
          className="cta-outline inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[15px] font-semibold no-underline"
        >
          soporte@neuroviasystems.com.mx
        </a>
      </div>
      <p className="mb-0 mt-5 text-[13px] text-faint">
        {es ? "WhatsApp" : "WhatsApp"} {WHATSAPP_DISPLAY}
        {es ? " · Villahermosa, Tabasco (hora del centro de México)" : " · Villahermosa, Tabasco (Central Mexico time)"}
      </p>
    </div>
  );
}
