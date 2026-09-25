import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import WaConsultaButton from "@/components/WaConsultaButton";

import { localeBase, type Locale } from "@/lib/i18n";
import { getCasos } from "@/lib/casosContent";
import { SITE_URL, ORG_ID, WEBSITE_ID, lang2locale, breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

/**
 * /casos-de-exito — una página, un caso por <article>.
 *
 * Se renderiza en el servidor y con HTML semántico a propósito: además de
 * Google, la leen motores de respuesta que necesitan poder contestar "¿qué ha
 * hecho Neurovia?" sin ejecutar JavaScript. Cada caso lleva su CreativeWork en
 * el JSON-LD, colgado del mismo @id del negocio.
 */
export default function CasosPage({ lang = "es" }: { lang?: Locale }) {
  const c = getCasos(lang);
  const base = localeBase(lang);
  const path = `${base}/casos-de-exito`;
  const url = `${SITE_URL}${path}`;
  const bc = breadcrumbJsonLd([{ name: c.eyebrow, path }], lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: c.metaTitle,
        description: c.metaDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        breadcrumb: { "@id": bc["@id"] },
        inLanguage: lang2locale(lang),
        mainEntity: {
          "@type": "ItemList",
          itemListElement: c.casos.map((k, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@id": `${url}#${k.id}` },
          })),
        },
      },
      bc,
      ...c.casos.map((k) => ({
        "@type": "CreativeWork",
        "@id": `${url}#${k.id}`,
        name: `${k.cliente} — ${k.sector}`,
        headline: k.cliente,
        description: k.problema,
        abstract: k.resultado,
        creator: { "@id": ORG_ID },
        about: k.sector,
        keywords: k.tecnologias.join(", "),
        inLanguage: lang2locale(lang),
        isPartOf: { "@id": `${url}#webpage` },
      })),
    ],
  };

  return (
    <div lang={lang}>
      <script {...jsonLdProps(jsonLd)} />
      <Navbar lang={lang} />

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pb-14 pt-[150px] sm:px-10 sm:pt-[180px]">
            <nav aria-label={c.labels.breadcrumbAria} className="mb-4 text-[13px] text-faint">
              <a href={`${base}/`} className="navlink">
                {c.labels.home}
              </a>
              <span className="mx-2" aria-hidden="true">
                ›
              </span>
              <span aria-current="page">{c.eyebrow}</span>
            </nav>

            <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              {c.eyebrow}
            </div>
            <h1 className="m-0 max-w-[900px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              {c.h1}
            </h1>
            <p className="m-0 mt-6 max-w-[660px] text-lg leading-[1.6] text-muted">{c.lead}</p>
            <div className="mt-8">
              <WaConsultaButton message={c.waMessage} lang={lang} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[820px] px-5 pt-[72px] sm:px-10">
          {c.intro.map((p, i) => (
            <p key={i} className="mt-5 text-[17px] leading-[1.7] text-muted">
              {p}
            </p>
          ))}
        </section>

        {c.casos.map((k) => (
          <article
            key={k.id}
            id={k.id}
            className="mx-auto max-w-[820px] scroll-mt-28 px-5 pt-[76px] sm:px-10"
            aria-labelledby={`${k.id}-title`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-code text-[12px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
                {k.sector}
              </span>
              {k.badge && (
                <span className="rounded-full border border-line px-2.5 py-[3px] text-[11px] text-faint">{k.badge}</span>
              )}
            </div>

            <h2
              id={`${k.id}-title`}
              className="m-0 mt-3 font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]"
            >
              {k.cliente}
            </h2>

            <h3 className="mt-7 font-heading text-[17px] font-semibold text-ink">{c.labels.problema}</h3>
            <p className="mt-2 text-[17px] leading-[1.7] text-muted">{k.problema}</p>

            <h3 className="mt-6 font-heading text-[17px] font-semibold text-ink">{c.labels.solucion}</h3>
            <p className="mt-2 text-[17px] leading-[1.7] text-muted">{k.solucion}</p>

            <h3 className="mt-6 font-heading text-[17px] font-semibold text-ink">{c.labels.construido}</h3>
            <ul className="mt-3 flex flex-col gap-2.5">
              {k.construido.map((item) => (
                <li key={item} className="flex items-start gap-[11px] text-[16px] leading-[1.55] text-ink-2">
                  <span className="mt-0.5 font-semibold" style={{ color: "var(--accent)" }} aria-hidden="true">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-heading text-[17px] font-semibold text-ink">{c.labels.tecnologias}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {k.tecnologias.map((t) => (
                <span key={t} className="rounded-md border border-line px-2.5 py-[5px] text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="mt-6 font-heading text-[17px] font-semibold text-ink">{c.labels.resultado}</h3>
            <p className="mt-2 text-[17px] leading-[1.7] text-muted">{k.resultado}</p>

            <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-line-soft pt-5 text-[14px]">
              <span className="text-faint">{c.labels.servicios}:</span>
              {k.servicios.map((sv) => (
                <a key={sv.href} href={`${base}${sv.href}`} className="navlink">
                  {sv.label}
                </a>
              ))}
            </div>
          </article>
        ))}

        <section className="mx-auto max-w-[820px] px-5 pt-[100px] sm:px-10">
          <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]">
            {c.ctaTitle}
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-muted">{c.ctaLead}</p>
        </section>

        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
