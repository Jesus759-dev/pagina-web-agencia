import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import RichText from "@/components/RichText";

import type { Guide } from "@/lib/guidesContent";
import { SITE_URL, ORG_ID, WEBSITE_ID, breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

const OG_IMAGE = `${SITE_URL}/images/og-robotic-hand.jpg`;

function fecha(iso: string): string {
  return new Date(`${iso}T12:00:00-06:00`).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Plantilla de guía (/guias/<slug>).
 *
 * El orden está pensado para quien la cita, no solo para quien la lee: primero
 * la respuesta directa en un bloque propio, luego el desarrollo. Así un
 * buscador o una IA encuentra en el primer párrafo lo que tiene que citar, y
 * la persona que solo quería el dato no tiene que leer la guía entera.
 */
export default function GuidePage({ guide }: { guide: Guide }) {
  const path = `/guias/${guide.slug}`;
  const url = `${SITE_URL}${path}`;
  const bc = breadcrumbJsonLd(
    [
      { name: "Guías", path: "/guias" },
      { name: guide.h1, path },
    ],
    "es"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: guide.metaTitle,
        description: guide.metaDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        mainEntity: { "@id": `${url}#article` },
        breadcrumb: { "@id": bc["@id"] },
        inLanguage: "es-MX",
      },
      bc,
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.h1,
        description: guide.metaDescription,
        // El resumen que un buscador o una IA puede citar tal cual.
        abstract: guide.respuesta,
        image: OG_IMAGE,
        datePublished: guide.publicado,
        dateModified: guide.actualizado,
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: { "@id": `${url}#webpage` },
        inLanguage: "es-MX",
        keywords: guide.keyword,
        timeRequired: `PT${guide.minutos}M`,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: guide.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div lang="es">
      <script {...jsonLdProps(jsonLd)} />
      <Navbar />

      <main>
        <article>
          <header className="bg-hero">
            <div className="mx-auto max-w-[820px] px-5 pb-12 pt-[150px] sm:px-10 sm:pt-[180px]">
              <nav aria-label="Ruta de navegación" className="mb-4 text-[13px] text-faint">
                <a href="/" className="navlink">
                  Inicio
                </a>
                <span className="mx-2" aria-hidden="true">
                  ›
                </span>
                <a href="/guias" className="navlink">
                  Guías
                </a>
              </nav>

              <h1 className="m-0 font-heading text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[46px]">
                {guide.h1}
              </h1>

              <p className="m-0 mt-5 text-[13px] text-faint">
                Neurovia Systems · Actualizado el{" "}
                <time dateTime={guide.actualizado}>{fecha(guide.actualizado)}</time> · {guide.minutos} min de lectura
              </p>
            </div>
          </header>

          {/* La respuesta directa, antes que todo lo demás */}
          <section aria-label="Respuesta corta" className="mx-auto max-w-[820px] px-5 pt-10 sm:px-10">
            <div
              className="rounded-2xl border px-6 py-6 sm:px-8"
              style={{ borderColor: "var(--accent)", background: "var(--accent-soft)" }}
            >
              <div className="font-code text-[12px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
                La respuesta corta
              </div>
              <p className="m-0 mt-3 text-[18px] leading-[1.65] text-ink">{guide.respuesta}</p>
            </div>
          </section>

          {guide.sections.map((s) => (
            <section key={s.h2} className="mx-auto max-w-[820px] px-5 pt-[64px] sm:px-10">
              <h2 className="m-0 font-heading text-[26px] font-bold leading-[1.15] tracking-[-0.025em] text-ink sm:text-[32px]">
                {s.h2}
              </h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-5 text-[17px] leading-[1.75] text-muted">
                  <RichText text={p} />
                </p>
              ))}
              {s.items && (
                <ul className="mt-5 flex flex-col gap-3.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-[11px] text-[16px] leading-[1.65] text-ink-2">
                      <span className="mt-0.5 font-semibold" style={{ color: "var(--accent)" }} aria-hidden="true">
                        →
                      </span>
                      <span>
                        <RichText text={it} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Preguntas frecuentes */}
          <section className="mx-auto max-w-[820px] px-5 pt-[80px] sm:px-10">
            <h2 className="m-0 font-heading text-[26px] font-bold leading-[1.15] tracking-[-0.025em] text-ink sm:text-[32px]">
              Preguntas frecuentes
            </h2>
            <div className="mt-8 flex flex-col gap-7">
              {guide.faq.map((f) => (
                <div key={f.q} className="border-b border-line-soft pb-7">
                  <h3 className="m-0 font-heading text-[19px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">
                    {f.q}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.65] text-muted">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Siguiente paso */}
          <section className="mx-auto max-w-[820px] px-5 pt-[72px] sm:px-10">
            <div className="rounded-2xl border border-line bg-white px-6 py-8 sm:px-10">
              <h2 className="m-0 font-heading text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-ink">
                {guide.cta.title}
              </h2>
              <p className="mt-3 text-[16px] leading-[1.65] text-muted">{guide.cta.body}</p>
              <a
                href={guide.cta.href}
                className="btn-primary mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
              >
                {guide.cta.label} <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-[820px] px-5 pt-[56px] sm:px-10">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-line-soft pt-6 text-[14px]">
              <span className="text-faint">Relacionado:</span>
              {guide.related.map((r) => (
                <a key={r.href} href={r.href} className="navlink">
                  {r.label}
                </a>
              ))}
            </div>
          </section>
        </article>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
