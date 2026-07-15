import { getDict, localeBase, type Locale } from "@/lib/i18n";

// Hrefs stay pointing to the (Spanish) service pages for now; labels are
// translated. Phase 2 will add locale-aware service routes.
const CARD_HREFS: (string | null)[] = [
  "/diseno-de-paginas-web-villahermosa",
  "/automatizacion-con-ia-tabasco",
  "/desarrollo-de-software-a-medida-villahermosa",
  null,
  "/agentes-de-inteligencia-artificial",
];

const MORE_HREFS = [
  "/desarrollo-de-aplicaciones-web-tabasco",
  "/sistema-punto-de-venta-villahermosa",
];

export default function Services({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).services;
  const base = localeBase(lang);

  return (
    <section id="servicios" className="mx-auto max-w-[1240px] px-5 pb-10 pt-[120px] sm:px-10">
      <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
        {t.eyebrow}
      </div>
      <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
        {t.h2}
      </h2>
      <p className="m-0 mt-5 max-w-[600px] text-lg leading-[1.6] text-muted">{t.lead}</p>

      <div className="mt-[52px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
        {t.cards.map((s, i) => {
          const href = CARD_HREFS[i];
          return (
            <div key={s.title} className="svc-card rounded-2xl border border-line bg-white p-[38px]">
              <div className="font-code text-[13px]" style={{ color: "var(--accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="m-0 mt-4 font-heading text-[25px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
                {s.title}
              </h3>
              <p className="mt-[13px] text-[15px] leading-[1.65] text-muted">{s.desc}</p>
              <div className="mt-[22px] flex flex-col gap-2.5">
                {s.items.map((it) => (
                  <div key={it} className="flex items-start gap-[11px] text-sm text-[#3a4452]">
                    <span className="font-semibold" style={{ color: "var(--accent)" }}>
                      →
                    </span>
                    {it}
                  </div>
                ))}
              </div>
              {href && (
                <a
                  href={`${base}${href}`}
                  className="badge-link mt-[26px] inline-flex items-center gap-1.5 text-sm font-semibold"
                >
                  {s.linkLabel} <span className="arr">→</span>
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* Internal links to the remaining local-SEO service pages */}
      <div className="mt-[30px] flex flex-wrap gap-3">
        {MORE_HREFS.map((href, i) => (
          <a
            key={href}
            href={`${base}${href}`}
            className="badge-link inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold"
          >
            {t.morePages[i]} <span className="arr">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
