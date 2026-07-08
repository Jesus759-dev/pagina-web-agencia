import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { SISTEMAS } from "@/lib/site";
import { getDict, type Locale } from "@/lib/i18n";

/**
 * Shared catalog page for the in-production systems, bilingual. System URLs
 * come from lib/site.ts (SISTEMAS); names/descriptions from the dictionary.
 */
export default function SistemasPage({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).sistemas;

  return (
    <div lang={lang}>
      <Navbar lang={lang} />

      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-[1240px] px-5 pb-16 pt-[150px] sm:px-10 sm:pt-[180px]">
            <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
              {t.eyebrow}
            </div>
            <h1 className="m-0 max-w-[860px] font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[52px]">
              {t.h1}
            </h1>
            <p className="m-0 mt-6 max-w-[660px] text-lg leading-[1.6] text-muted">{t.lead}</p>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 pt-[64px] sm:px-10">
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
        </section>

        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
