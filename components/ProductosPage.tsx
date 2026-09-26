import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import { localeBase, type Locale } from "@/lib/i18n";
import { getProducts, getProductosHub } from "@/lib/productContent";
import { SITE_URL, ORG_ID, WEBSITE_ID, lang2locale, breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

/**
 * /productos — el índice del software propio.
 *
 * Es la página que reparte autoridad hacia cada producto y la que responde,
 * para Google y para un motor de respuesta, "¿qué software vende Neurovia?".
 */
export default function ProductosPage({ lang = "es" }: { lang?: Locale }) {
  const hub = getProductosHub(lang);
  const productos = getProducts(lang);
  const base = localeBase(lang);
  const path = `${base}/productos`;
  const url = `${SITE_URL}${path}`;
  const bc = breadcrumbJsonLd([{ name: hub.labels.productos, path }], lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: hub.metaTitle,
        description: hub.metaDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        breadcrumb: { "@id": bc["@id"] },
        inLanguage: lang2locale(lang),
        mainEntity: {
          "@type": "ItemList",
          itemListElement: productos.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.producto,
            url: `${SITE_URL}${base}/productos/${p.slug}`,
          })),
        },
      },
      bc,
    ],
  };

  return (
    <div lang={lang}>
      <script {...jsonLdProps(jsonLd)} />
      <Navbar lang={lang} />

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pb-14 pt-[150px] sm:px-10 sm:pt-[180px]">
            <nav aria-label={hub.labels.breadcrumbAria} className="mb-4 text-[13px] text-faint">
              <a href={`${base}/`} className="navlink">
                {hub.labels.home}
              </a>
              <span className="mx-2" aria-hidden="true">
                ›
              </span>
              <span aria-current="page">{hub.labels.productos}</span>
            </nav>

            <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              {hub.eyebrow}
            </div>
            <h1 className="m-0 max-w-[900px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              {hub.h1}
            </h1>
            <p className="m-0 mt-6 max-w-[660px] text-lg leading-[1.6] text-muted">{hub.lead}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[820px] px-5 pt-[72px] sm:px-10">
          {hub.intro.map((p, i) => (
            <p key={i} className="mt-5 text-[17px] leading-[1.7] text-muted">
              {p}
            </p>
          ))}
        </section>

        <section className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pt-[64px] sm:px-10">
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
            {productos.map((p) => (
              <article key={p.slug} className="svc-card flex flex-col rounded-2xl border border-line bg-white p-[38px]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="m-0 font-heading text-[25px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
                    {p.producto}
                  </h2>
                  <span className="rounded-full border border-line px-2.5 py-[3px] text-[11px] text-faint">
                    {p.estado}
                  </span>
                </div>
                <p className="mt-[13px] flex-1 text-[15px] leading-[1.65] text-muted">{p.metaDescription}</p>
                {p.precio && <div className="mt-4 text-[15px] font-semibold text-ink">{p.precio}</div>}
                <div className="mt-[22px] flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href={`${base}/productos/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline"
                    style={{ color: "var(--accent)" }}
                  >
                    {hub.cardCta} <span aria-hidden="true">→</span>
                  </a>
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-faint underline decoration-line-2 underline-offset-4"
                    >
                      {p.demoLabel ?? hub.labels.verDemo}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-[72px] max-w-[660px] border-t border-line-soft pt-9">
            <h2 className="m-0 font-heading text-[26px] font-bold leading-[1.15] tracking-[-0.025em] text-ink">
              {hub.customTitle}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-muted">{hub.customLead}</p>
            <a
              href={`${base}/desarrollo-de-software-a-medida-villahermosa`}
              className="badge-link mt-5 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold"
            >
              {hub.customCta} <span className="arr">→</span>
            </a>
          </div>
        </section>

        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
