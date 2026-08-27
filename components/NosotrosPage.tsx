import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDict, localeBase, type Locale } from "@/lib/i18n";
import { getNosotros } from "@/lib/nosotrosContent";

const SITE_URL = "https://neuroviasystems.com.mx";

/**
 * Shared bilingual "About" page. Its main job is entity clarity for search + AI
 * answer engines: it plainly states who Neurovia Systems is and links its
 * AboutPage schema back to the #organization node in the root layout.
 */
export default function NosotrosPage({ lang = "es" }: { lang?: Locale }) {
  const c = getNosotros(lang);
  const base = localeBase(lang);
  const path = `${SITE_URL}${base}/nosotros`;
  const homeLabel = lang === "en" ? "Home" : "Inicio";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${path}#aboutpage`,
        url: path,
        name: c.metaTitle,
        description: c.metaDescription,
        inLanguage: lang === "en" ? "en-US" : "es-MX",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeLabel, item: `${SITE_URL}${base}/` },
          { "@type": "ListItem", position: 2, name: c.eyebrow, item: path },
        ],
      },
    ],
  };

  return (
    <div lang={lang}>
      <Navbar lang={lang} />

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-[1240px] px-5 pb-16 pt-[150px] sm:px-10 sm:pt-[180px]">
            <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              {c.eyebrow}
            </div>
            <h1 className="m-0 max-w-[860px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              {c.h1}
            </h1>
            <p className="m-0 mt-6 max-w-[680px] text-lg leading-[1.6] text-muted">{c.lead}</p>
          </div>
        </section>

        {c.sections.map((s) => (
          <section key={s.h2} className="mx-auto max-w-[820px] px-5 pt-[88px] sm:px-10">
            <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]">
              {s.h2}
            </h2>
            {s.body.map((p, i) => (
              <p key={i} className="mt-5 text-[17px] leading-[1.7] text-muted">
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* Where we operate */}
        <section className="mx-auto max-w-[1240px] px-5 pt-[100px] sm:px-10">
          <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]">
            {c.citiesTitle}
          </h2>
          <div className="mt-9 grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {c.cities.map((city) => (
              <div key={city.name} className="svc-card rounded-2xl border border-line bg-white p-8">
                <h3 className="m-0 font-heading text-[19px] font-semibold tracking-[-0.01em] text-ink">
                  {city.name}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-muted">{city.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social proof */}
        <section className="mx-auto max-w-[820px] px-5 pt-[100px] sm:px-10">
          <h2 className="m-0 font-heading text-[28px] font-bold leading-[1.12] tracking-[-0.025em] text-ink sm:text-[34px]">
            {c.proofTitle}
          </h2>
          <ul className="mt-6 flex flex-col gap-3.5">
            {c.proof.map((p) => (
              <li key={p} className="flex items-start gap-[11px] text-[16px] leading-[1.55] text-ink-2">
                <span className="mt-0.5 font-semibold" style={{ color: "var(--accent)" }} aria-hidden="true">
                  →
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a
              href={`${base}/agenda`}
              className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
            >
              {c.ctaLabel} <span aria-hidden="true">→</span>
            </a>
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
