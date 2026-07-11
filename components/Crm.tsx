import { CRM_URL } from "@/lib/site";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

export default function Crm({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).crm;
  const base = localeBase(lang);

  return (
    <section id="crm" className="mx-auto max-w-[1240px] px-5 pb-10 pt-[120px] sm:px-10">
      <div
        className="overflow-hidden rounded-2xl border-2 bg-white p-[38px] sm:p-[52px]"
        style={{
          borderColor: "var(--accent)",
          boxShadow: "0 18px 50px -12px color-mix(in srgb, var(--accent) 35%, transparent)",
        }}
      >
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-[18px] flex items-center gap-2.5">
              <span
                className="font-code text-[13px] uppercase tracking-[0.12em]"
                style={{ color: "var(--accent)" }}
              >
                {t.eyebrow}
              </span>
              <span
                className="rounded-full px-2.5 py-[3px] font-code text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                style={{ background: "var(--accent)" }}
              >
                {t.badge}
              </span>
            </div>
            <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
              {t.h2}
            </h2>
            <p className="m-0 mt-5 max-w-[600px] text-lg leading-[1.6] text-muted">{t.lead}</p>

            <div className="mt-[22px] flex flex-col gap-2.5">
              {t.features.map((it) => (
                <div key={it} className="flex items-start gap-[11px] text-sm text-[#3a4452]">
                  <span className="font-semibold" style={{ color: "var(--accent)" }}>
                    →
                  </span>
                  {it}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={CRM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block rounded-full px-6 py-3 text-sm font-semibold no-underline"
              >
                {t.cta}
              </a>
              <a
                href={`${base}/sistemas`}
                className="badge-link inline-flex items-center gap-1.5 text-sm font-semibold"
              >
                {t.allSystems} <span className="arr">→</span>
              </a>
            </div>
          </div>

          {/* Captura real de la pantalla de acceso del CRM */}
          <div className="hidden md:block" data-parallax data-parallax-speed="0.14" data-parallax-max="7">
            <div
              className="overflow-hidden rounded-2xl border border-line"
              style={{ boxShadow: "0 16px 44px -20px rgba(60,48,30,0.45)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/crm-login.png"
                alt={t.imgAlt}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
