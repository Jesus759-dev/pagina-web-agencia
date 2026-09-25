import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaConsultaButton from "@/components/WaConsultaButton";

import { getDict, localeBase, type Locale } from "@/lib/i18n";
import { buildServiceJsonLd, type ServicePageData } from "@/lib/serviceContent";

/**
 * Shared server-rendered template for the local-SEO service landing pages,
 * bilingual: it renders the Spanish tree with lang="es" and the English tree
 * with lang="en". All copy ships in the initial HTML for crawlers.
 */
/**
 * El contenido marca con **asteriscos** la etiqueta con que arranca un párrafo
 * ("**Requisiciones y compras.** Solicitud, autorización…"). Aquí se convierte
 * en <strong> real: se lee mejor de un vistazo y para un lector de pantalla o
 * un motor de respuesta es el subtítulo del párrafo, no adorno.
 */
function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function ServicePage({
  data,
  lang = "es",
}: {
  data: ServicePageData;
  lang?: Locale;
}) {
  const ui = getDict(lang).service;
  const base = localeBase(lang);
  const jsonLd = buildServiceJsonLd(data, lang);

  return (
    <div lang={lang}>
      <Navbar lang={lang} />

      <main>
        {/* Hero — single <h1> with the local keyword */}
        <section className="bg-hero">
          <div className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pb-16 pt-[150px] sm:px-10 sm:pt-[180px]">
            {/* Miga de pan: orienta al visitante y le da a Google la jerarquía
                (el BreadcrumbList equivalente va en el JSON-LD). */}
            <nav aria-label={ui.breadcrumbAria} className="mb-4 text-[13px] text-faint">
              <a href={`${base}/`} className="navlink">
                {ui.home}
              </a>
              <span className="mx-2" aria-hidden="true">
                ›
              </span>
              <span aria-current="page">{data.eyebrow}</span>
            </nav>
            <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              {data.eyebrow}
            </div>
            <h1 className="m-0 max-w-[860px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              {data.h1}
            </h1>
            <p className="m-0 mt-6 max-w-[640px] text-lg leading-[1.6] text-muted">{data.heroLead}</p>
            {data.priceNote && (
              <p className="m-0 mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[15px] leading-[1.4]">
                <span className="font-semibold text-ink">{data.priceNote}</span>
                <span className="text-faint">{ui.priceHint}</span>
              </p>
            )}
            <div className={`${data.priceNote ? "mt-4" : "mt-9"} flex flex-wrap items-center gap-3`}>
              <WaConsultaButton message={data.waMessage} lang={lang} />
              <a
                href={`${base}/`}
                className="cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
              >
                <span aria-hidden="true">←</span> {ui.backHome}
              </a>
            </div>
          </div>
        </section>

        {/* Intro / descriptive sections */}
        {data.sections.map((s) => (
          <section key={s.h2} className="mx-auto max-w-[820px] px-5 pt-[88px] sm:px-10">
            <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]">
              {s.h2}
            </h2>
            {s.body.map((p, i) => (
              <p key={i} className="mt-5 text-[17px] leading-[1.7] text-muted">
                <RichText text={p} />
              </p>
            ))}
          </section>
        ))}

        {/* Benefits */}
        <section className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pt-[100px] sm:px-10">
          <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
            {ui.benefitsEyebrow}
          </div>
          <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
            {data.benefitsTitle}
          </h2>
          <div className="mt-[52px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
            {data.benefits.map((b) => (
              <div key={b.title} className="svc-card rounded-2xl border border-line bg-white p-[38px]">
                <h3 className="m-0 font-heading text-[22px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Audience */}
        <section className="mx-auto max-w-[820px] px-5 pt-[100px] sm:px-10">
          <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]">
            {data.audienceTitle}
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-muted">{data.audienceLead}</p>
          <ul className="mt-6 flex flex-col gap-3.5">
            {data.audience.map((a) => (
              <li key={a} className="flex items-start gap-[11px] text-[16px] leading-[1.55] text-ink-2">
                <span className="mt-0.5 font-semibold" style={{ color: "var(--accent)" }} aria-hidden="true">
                  →
                </span>
                {a}
              </li>
            ))}
          </ul>
        </section>

        <Process lang={lang} />
        <Testimonials lang={lang} />

        {/* FAQ */}
        <section className="mx-auto max-w-[820px] px-5 pt-[100px] sm:px-10">
          <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
            {ui.faqEyebrow}
          </div>
          <h2 className="m-0 font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[40px]">
            {ui.faqTitle}
          </h2>
          <div className="mt-10 flex flex-col gap-7">
            {data.faq.map((f) => (
              <div key={f.q} className="border-b border-line-soft pb-7">
                <h3 className="m-0 font-heading text-[19px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">
                  {f.q}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links to sibling service pages */}
        <section className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pt-[100px] sm:px-10">
          <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
            {ui.relatedEyebrow}
          </div>
          <h2 className="m-0 max-w-[760px] font-heading text-[28px] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[34px]">
            {ui.relatedTitle}
          </h2>
          <div className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {data.related.map((r) => (
              <a
                key={r.href}
                href={`${base}${r.href}`}
                className="svc-card flex items-center justify-between gap-4 rounded-2xl border border-line bg-white px-6 py-5 text-[16px] font-semibold text-ink no-underline"
              >
                {r.label}
                <span aria-hidden="true" style={{ color: "var(--accent)" }}>
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
