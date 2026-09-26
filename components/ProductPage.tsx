import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import WaConsultaButton from "@/components/WaConsultaButton";
import RichText from "@/components/RichText";

import { getDict, localeBase, type Locale } from "@/lib/i18n";
import { buildProductJsonLd, getProductosHub, type ProductPageData } from "@/lib/productContent";
import { SITE_URL, ORG_ID, WEBSITE_ID, lang2locale, breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

/**
 * Plantilla de las páginas de producto (/productos/<slug>).
 *
 * Es la parte comercial de un producto cuya app vive en un subdominio .cloud.
 * Por eso el CTA principal es hablar con nosotros y el secundario es entrar al
 * sistema: el subdominio sigue siendo la app, no el argumento de venta.
 */
export default function ProductPage({
  data,
  lang = "es",
}: {
  data: ProductPageData;
  lang?: Locale;
}) {
  const ui = getDict(lang).service;
  const hub = getProductosHub(lang);
  const base = localeBase(lang);
  const path = `${base}/productos/${data.slug}`;
  const url = `${SITE_URL}${path}`;
  const bc = breadcrumbJsonLd(
    [
      { name: hub.labels.productos, path: `${base}/productos` },
      { name: data.producto, path },
    ],
    lang
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: data.metaTitle,
        description: data.metaDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        mainEntity: { "@id": `${url}#app` },
        breadcrumb: { "@id": bc["@id"] },
        inLanguage: lang2locale(lang),
      },
      bc,
      buildProductJsonLd(data, lang),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: data.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div lang={lang}>
      <script {...jsonLdProps(jsonLd)} />
      <Navbar lang={lang} />

      <main>
        {/* Hero */}
        <section className="bg-hero">
          <div className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pb-16 pt-[150px] sm:px-10 sm:pt-[180px]">
            <nav aria-label={hub.labels.breadcrumbAria} className="mb-4 text-[13px] text-faint">
              <a href={`${base}/`} className="navlink">
                {hub.labels.home}
              </a>
              <span className="mx-2" aria-hidden="true">
                ›
              </span>
              <a href={`${base}/productos`} className="navlink">
                {hub.labels.productos}
              </a>
              <span className="mx-2" aria-hidden="true">
                ›
              </span>
              <span aria-current="page">{data.producto}</span>
            </nav>

            <div className="mb-[18px] flex flex-wrap items-center gap-3">
              <span className="font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
                {data.eyebrow}
              </span>
              <span className="rounded-full border border-line px-2.5 py-[3px] text-[11px] text-faint">
                {data.estado}
              </span>
            </div>

            <h1 className="m-0 max-w-[880px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              {data.h1}
            </h1>
            <p className="m-0 mt-6 max-w-[660px] text-lg leading-[1.6] text-muted">{data.heroLead}</p>

            {(data.precio || data.precioNota) && (
              <p className="m-0 mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[15px] leading-[1.4]">
                {data.precio && <span className="font-semibold text-ink">{data.precio}</span>}
                {data.precioNota && <span className="text-faint">{data.precioNota}</span>}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <WaConsultaButton message={data.waMessage} lang={lang} />
              {data.demoUrl && (
                <a
                  href={data.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
                >
                  {data.demoLabel ?? hub.labels.verDemo} <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Secciones descriptivas */}
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

        {/* Módulos */}
        <section className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pt-[100px] sm:px-10">
          <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
            {data.modulosTitle}
          </h2>
          <div className="mt-[52px] grid grid-cols-1 gap-[22px] md:grid-cols-2 xl:grid-cols-3">
            {data.modulos.map((m) => (
              <div key={m.title} className="svc-card rounded-2xl border border-line bg-white p-[34px]">
                <h3 className="m-0 font-heading text-[20px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
                  {m.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-muted">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planes — solo si el producto publica precios */}
        {data.planes && (
          <section id="planes" className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] scroll-mt-28 px-5 pt-[100px] sm:px-10">
            <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
              {data.planes.title}
            </h2>
            {data.planes.lead && (
              <p className="m-0 mt-5 max-w-[640px] text-[17px] leading-[1.65] text-muted">{data.planes.lead}</p>
            )}

            <div className="mt-[44px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
              {data.planes.items.map((p) => (
                <div
                  key={p.nombre}
                  className={`svc-card flex flex-col rounded-2xl border p-[34px] ${
                    p.destacado ? "border-transparent" : "border-line bg-white"
                  }`}
                  style={p.destacado ? { background: "var(--accent-soft)", borderColor: "var(--accent)" } : undefined}
                >
                  <h3 className="m-0 font-heading text-[22px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
                    {p.nombre}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.5] text-faint">{p.ideal}</p>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-heading text-[40px] font-bold leading-none tracking-[-0.03em] text-ink">
                      {p.precio}
                    </span>
                    <span className="text-[14px] text-faint">{p.periodo}</span>
                  </div>

                  <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                    {p.incluye.map((item) => (
                      <li key={item} className="flex items-start gap-[10px] text-[15px] leading-[1.5] text-ink-2">
                        <span className="mt-0.5 font-semibold" style={{ color: "var(--accent)" }} aria-hidden="true">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {data.demoUrl && (
                    <a
                      href={data.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline ${
                        p.destacado ? "btn-primary" : "cta-outline"
                      }`}
                    >
                      {data.planes?.ctaLabel ?? data.demoLabel ?? hub.labels.verDemo}{" "}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {data.planes.nota && (
              <p className="mt-6 max-w-[660px] text-sm leading-[1.6] text-faint">{data.planes.nota}</p>
            )}
          </section>
        )}

        {/* Para quién es */}
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

        {/* Enlaces relacionados */}
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
    </div>
  );
}
