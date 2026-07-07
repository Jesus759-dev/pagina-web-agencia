import { getDict, type Locale } from "@/lib/i18n";

export default function WhyUs({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).whyus;
  return (
    <section id="nosotros" className="mt-[60px] border-y border-line-soft bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 py-[120px] sm:px-10">
        <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
          {t.eyebrow}
        </div>
        <h2 className="m-0 max-w-[880px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
          {t.h2}
        </h2>

        <div className="why-grid mt-[52px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {t.reasons.map((r) => (
            <div key={r.title} className="rounded-[14px] border border-line bg-white p-8">
              <h3 className="m-0 font-heading text-xl font-semibold leading-[1.25] tracking-[-0.02em] text-ink">
                {r.title}
              </h3>
              <p className="mt-[11px] text-sm leading-[1.65] text-muted">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
