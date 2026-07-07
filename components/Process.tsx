import { getDict, type Locale } from "@/lib/i18n";

export default function Process({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).process;
  return (
    <section id="proceso" className="mx-auto max-w-[1240px] px-5 pb-10 pt-[120px] sm:px-10">
      <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
        {t.eyebrow}
      </div>
      <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
        {t.h2}
      </h2>

      <div className="proc-grid mt-[52px] grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((s, i) => (
          <div
            key={s.title}
            className="pt-[22px]"
            style={{ borderTop: `2px solid ${i === 0 ? "var(--accent)" : "#e2e5ea"}` }}
          >
            <div className="font-code text-sm" style={{ color: i === 0 ? "var(--accent)" : "#9aa3af" }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3.5 font-heading text-[22px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              {s.title}
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
