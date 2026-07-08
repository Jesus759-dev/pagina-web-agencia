import { CRM_URL } from "@/lib/site";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

/** Sample pipeline rows for the CRM preview mock (brand names, no real data). */
const MOCK: { initials: string; name: string; stage: "prospect" | "proposal" | "won" }[] = [
  { initials: "PV", name: "Provalsa", stage: "won" },
  { initials: "RC", name: "Royers", stage: "proposal" },
  { initials: "AM", name: "Alpha Mobil", stage: "prospect" },
];

const STAGE_COLOR: Record<"prospect" | "proposal" | "won", string> = {
  prospect: "#9a9184",
  proposal: "#b07a2b",
  won: "#2e7d5b",
};

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

          {/* CRM preview mock — a small sales pipeline, drawn in CSS */}
          <div className="hidden md:block">
            <div
              className="rounded-2xl border border-line bg-surface-2 p-6"
              style={{ boxShadow: "0 10px 30px -18px rgba(60,48,30,0.4)" }}
              aria-hidden="true"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="font-heading text-[15px] font-semibold text-ink">{t.mockTitle}</div>
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-line-2" />
                  <span className="h-1.5 w-1.5 rounded-full bg-line-2" />
                  <span className="h-1.5 w-1.5 rounded-full bg-line-2" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                {MOCK.map((r) => (
                  <div
                    key={r.name}
                    className="flex items-center gap-3 rounded-xl border border-line bg-white px-3.5 py-3"
                  >
                    <span
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-[12px] font-bold"
                      style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                    >
                      {r.initials}
                    </span>
                    <span className="flex-1 text-sm font-semibold text-ink">{r.name}</span>
                    <span
                      className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
                      style={{ background: STAGE_COLOR[r.stage] }}
                    >
                      {t.stages[r.stage]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
