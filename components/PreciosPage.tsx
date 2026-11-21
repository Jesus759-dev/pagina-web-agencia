import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaConsultaButton from "@/components/WaConsultaButton";
import { getPrecios } from "@/lib/preciosContent";
import { type Locale } from "@/lib/i18n";

const SITE_URL = "https://neuroviasystems.com.mx";

/**
 * Página de precios de referencia. Renderiza los importes en HTML estático
 * (sin JavaScript ni login) y publica un OfferCatalog en JSON-LD para que
 * buscadores y agentes lean los precios de forma legible por máquina.
 */
export default function PreciosPage({ lang = "es" }: { lang?: Locale }) {
  const data = getPrecios(lang);

  // OfferCatalog con un Offer por concepto que tiene precio numérico.
  const offers = data.groups.flatMap((g) =>
    g.items
      .filter((it) => typeof it.minPrice === "number")
      .map((it) => ({
        "@type": "Offer",
        name: it.name,
        priceCurrency: "MXN",
        priceSpecification: {
          "@type": it.unit === "monthly" ? "UnitPriceSpecification" : "PriceSpecification",
          priceCurrency: "MXN",
          minPrice: it.minPrice,
          ...(it.unit === "monthly" ? { unitCode: "MON", billingIncrement: 1 } : {}),
          valueAddedTaxIncluded: false,
        },
      })),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: data.metaTitle,
    url: `${SITE_URL}${lang === "en" ? "/en" : ""}/precios`,
    provider: {
      "@type": "Organization",
      name: "Neurovia Systems",
      url: SITE_URL,
    },
    itemListElement: offers,
  };

  return (
    <div lang={lang}>
      <Navbar lang={lang} />
      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pb-16 pt-[150px] sm:px-10 sm:pt-[180px]">
            <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              {data.eyebrow}
            </div>
            <h1 className="m-0 max-w-[860px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              {data.h1}
            </h1>
            <p className="m-0 mt-6 max-w-[680px] text-lg leading-[1.6] text-muted">{data.intro}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <WaConsultaButton message={data.waMessage} lang={lang} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[920px] px-5 pt-[72px] sm:px-10">
          <div className="flex flex-col gap-10">
            {data.groups.map((g) => (
              <div key={g.title}>
                <h2 className="m-0 font-heading text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[28px]">
                  {g.title}
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {g.items.map((it) => (
                    <li
                      key={it.name}
                      className="flex flex-col gap-1 rounded-2xl border border-line bg-white p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <div className="min-w-0">
                        <span className="text-[16px] font-semibold text-ink">{it.name}</span>
                        {it.note && <span className="mt-1 block text-[14px] leading-[1.5] text-faint">{it.note}</span>}
                      </div>
                      <span className="shrink-0 text-[16px] font-semibold" style={{ color: "var(--accent)" }}>
                        {it.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[14px] leading-[1.6] text-faint">{data.note}</p>
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
