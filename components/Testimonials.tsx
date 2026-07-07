import { getDict, type Locale } from "@/lib/i18n";

// Names/initials are not translated — the quote and role come from the dictionary.
const PROFILES = [
  { initials: "PV", name: "PROVALSA" },
  { initials: "RC", name: "Royers S.A. de C.V." },
  { initials: "EM", name: "Emasur" },
];

export default function Testimonials({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).testimonials;
  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-10 pt-[120px] sm:px-10">
      <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
        {t.eyebrow}
      </div>
      <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
        {t.h2}
      </h2>

      <div className="testi-grid mt-[52px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
        {t.items.map((it, i) => (
          <div key={PROFILES[i].name} className="flex flex-col rounded-2xl border border-line bg-white p-8">
            <div className="text-[15px] tracking-[2px] text-[#f5a623]">★★★★★</div>
            <p className="mb-[22px] mt-4 flex-1 text-[15px] leading-[1.65] text-ink-2">
              &ldquo;{it.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                {PROFILES[i].initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{PROFILES[i].name}</div>
                <div className="text-xs text-faint">{it.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
