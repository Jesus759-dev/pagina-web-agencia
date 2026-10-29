import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaLink from "@/components/WaLink";
import LeadThanks from "@/components/LeadThanks";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

/**
 * Confirmación después de enviar el formulario (/gracias y /en/gracias).
 * Aquí se dispara la conversión (LeadThanks), así que cada idioma necesita
 * la suya: el formulario en inglés redirige a /en/gracias.
 */
export default function GraciasPage({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).gracias;

  return (
    <div lang={lang}>
      <Navbar lang={lang} />
      <LeadThanks />
      <main className="mx-auto flex min-h-[80vh] max-w-[820px] items-center justify-center px-4 pt-32 pb-20 sm:px-10">
        <div className="surface w-full rounded-3xl px-6 py-14 text-center sm:px-12">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-code text-[11.5px] uppercase tracking-[0.12em]"
            style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            {t.badge}
          </div>
          <h1 className="m-0 mt-5 font-heading text-[38px] leading-[1.05] tracking-[-0.03em] text-ink sm:text-[54px]">
            {t.h1}
          </h1>
          <p className="mx-auto m-0 mt-5 max-w-[52ch] text-lg leading-[1.6] text-muted">{t.lead}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <WaLink context="general" lang={lang} className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold no-underline">
              {t.cta} <span aria-hidden="true">→</span>
            </WaLink>
            <a href={`${localeBase(lang)}/`} className="cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold no-underline">
              {t.back}
            </a>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
