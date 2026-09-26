import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { SISTEMAS } from "@/lib/site";
import { getDict, localeBase, type Locale } from "@/lib/i18n";
import { SITE_URL, ORG_ID, WEBSITE_ID, lang2locale, breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

/**
 * Shared catalog page for the in-production systems, bilingual. System URLs
 * come from lib/site.ts (SISTEMAS); names/descriptions from the dictionary.
 */
export default function SistemasPage({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).sistemas;
  const base = localeBase(lang);
  const path = `${base}/sistemas`;
  const url = `${SITE_URL}${path}`;
  const bc = breadcrumbJsonLd([{ name: t.eyebrow, path }], lang);

  // Cada tarjeta enlaza a un sistema que vive en otro dominio; estos enlaces
  // devuelven al visitante (y al rastreador) a las páginas que explican cómo
  // se construye uno así, para que la página no sea un callejón sin salida.
  const related = [
    { href: "/productos", label: lang === "en" ? "Our products" : "Productos propios" },
    { href: "/erp-a-medida-villahermosa", label: lang === "en" ? "Custom ERP" : "ERP a la medida" },
    { href: "/crm-a-medida-villahermosa", label: lang === "en" ? "Custom CRM" : "CRM a la medida" },
    { href: "/wms-villahermosa", label: lang === "en" ? "WMS and inventory" : "WMS e inventario" },
    { href: "/sistema-punto-de-venta-villahermosa", label: lang === "en" ? "Point of sale" : "Punto de venta" },
    { href: "/casos-de-exito", label: lang === "en" ? "Case studies" : "Casos de éxito" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: t.h1,
        description: t.lead,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        breadcrumb: { "@id": bc["@id"] },
        inLanguage: lang2locale(lang),
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
          <div className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pb-16 pt-[150px] sm:px-10 sm:pt-[180px]">
            <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              {t.eyebrow}
            </div>
            <h1 className="m-0 max-w-[860px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              {t.h1}
            </h1>
            <p className="m-0 mt-6 max-w-[660px] text-lg leading-[1.6] text-muted">{t.lead}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pt-[64px] sm:px-10">
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
            {SISTEMAS.map((s, i) => (
              <a
                key={s.host}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="svc-card flex flex-col rounded-2xl border border-line bg-white p-[38px] no-underline"
              >
                <div className="font-code text-[13px]" style={{ color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 flex items-center gap-2.5">
                  <h2 className="m-0 font-heading text-[25px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
                    {t.systems[i].name}
                  </h2>
                  {s.isNew && (
                    <span
                      className="rounded-full px-2.5 py-[3px] font-code text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                      style={{ background: "var(--accent)" }}
                    >
                      {t.newBadge}
                    </span>
                  )}
                </div>
                <div className="mt-1.5 font-code text-[12px] text-faint">{s.host}</div>
                <p className="mt-[13px] flex-1 text-[15px] leading-[1.65] text-muted">{t.systems[i].desc}</p>
                <span
                  className="mt-[22px] inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {t.enter} <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-8 max-w-[660px] text-sm leading-[1.6] text-faint">{t.note}</p>

          <div className="mt-[72px] max-w-[660px] border-t border-line-soft pt-9">
            <h2 className="m-0 font-heading text-[26px] font-bold leading-[1.15] tracking-[-0.025em] text-ink">
              {t.relatedTitle}
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-muted">{t.relatedLead}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {related.map((r) => (
                <a
                  key={r.href}
                  href={`${base}${r.href}`}
                  className="badge-link inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold"
                >
                  {r.label} <span className="arr">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
