import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { GUIAS_HUB, getGuides } from "@/lib/guidesContent";
import { SITE_URL, ORG_ID, WEBSITE_ID, breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

export const metadata: Metadata = {
  title: GUIAS_HUB.metaTitle,
  description: GUIAS_HUB.metaDescription,
  alternates: { canonical: "/guias" },
  openGraph: {
    title: `${GUIAS_HUB.metaTitle} | Neurovia Systems`,
    description: GUIAS_HUB.metaDescription,
    url: `${SITE_URL}/guias`,
    locale: "es_MX",
    type: "website",
  },
};

export default function Page() {
  const guias = getGuides();
  const bc = breadcrumbJsonLd([{ name: "Guías", path: "/guias" }], "es");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/guias#webpage`,
        url: `${SITE_URL}/guias`,
        name: GUIAS_HUB.metaTitle,
        description: GUIAS_HUB.metaDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        breadcrumb: { "@id": bc["@id"] },
        inLanguage: "es-MX",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: guias.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: g.h1,
            url: `${SITE_URL}/guias/${g.slug}`,
          })),
        },
      },
      bc,
    ],
  };

  return (
    <div lang="es">
      <script {...jsonLdProps(jsonLd)} />
      <Navbar />
      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pb-14 pt-[150px] sm:px-10 sm:pt-[180px]">
            <nav aria-label="Ruta de navegación" className="mb-4 text-[13px] text-faint">
              <a href="/" className="navlink">Inicio</a>
              <span className="mx-2" aria-hidden="true">›</span>
              <span aria-current="page">Guías</span>
            </nav>
            <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              {GUIAS_HUB.eyebrow}
            </div>
            <h1 className="m-0 max-w-[900px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              {GUIAS_HUB.h1}
            </h1>
            <p className="m-0 mt-6 max-w-[660px] text-lg leading-[1.6] text-muted">{GUIAS_HUB.lead}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] xl:max-w-[1520px] 2xl:max-w-[1680px] px-5 pt-[64px] sm:px-10">
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {guias.map((g) => (
              <article key={g.slug} className="svc-card flex flex-col rounded-2xl border border-line bg-white p-[34px]">
                <h2 className="m-0 font-heading text-[22px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink">
                  <a href={`/guias/${g.slug}`} className="no-underline text-ink">{g.h1}</a>
                </h2>
                <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-muted">{g.metaDescription}</p>
                <div className="mt-5 flex items-center justify-between text-[13px]">
                  <span className="text-faint">{g.minutos} min de lectura</span>
                  <a href={`/guias/${g.slug}`} className="font-semibold no-underline" style={{ color: "var(--accent)" }}>
                    Leer <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
