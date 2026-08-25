/**
 * CalendlyEmbed — isolated placeholder for the scheduling widget.
 *
 * TODO (Jesús): when you have the Calendly (or similar) account, replace the
 * placeholder block below with the real inline embed. For Calendly:
 *
 *   1. Add the script once (e.g. in this component, via next/script):
 *        import Script from "next/script";
 *        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
 *   2. Replace the placeholder <div> with:
 *        <div
 *          className="calendly-inline-widget"
 *          data-url="https://calendly.com/TU-USUARIO/20min"
 *          style={{ minWidth: 320, height: 700 }}
 *        />
 *
 * Keep this component isolated so swapping the provider touches only this file.
 * (Cal.com, TidyCal, SavvyCal, etc. work the same way — one script + one div.)
 */
export default function CalendlyEmbed() {
  return (
    <div
      className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-line-2 bg-surface-2 px-6 py-16 text-center"
      aria-label="Contenedor del widget de agenda"
    >
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
        style={{ background: "var(--accent-soft)" }}
        aria-hidden="true"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      </div>
      <p className="m-0 font-heading text-[18px] font-semibold text-ink">
        Aquí irá el calendario de reservas
      </p>
      <p className="mt-2 max-w-[420px] text-[14px] leading-[1.6] text-muted">
        Placeholder del widget de agenda (Calendly o similar). Se conecta editando
        únicamente <code className="font-code text-[13px]">components/CalendlyEmbed.tsx</code>.
        Mientras tanto, usa WhatsApp o correo abajo.
      </p>
    </div>
  );
}
