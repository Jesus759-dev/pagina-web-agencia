import { getDict, type Locale } from "@/lib/i18n";

export default function Stats({ lang = "es" }: { lang?: Locale }) {
  const stats = getDict(lang).stats;
  return (
    <section className="border-b border-line-soft bg-surface">
      <div className="stats-grid mx-auto grid max-w-[1240px] grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className={[
              "px-8 py-12 text-center",
              i % 2 === 0 ? "border-r border-line/70" : "",
              i < 3 ? "md:border-r md:border-line/70" : "md:border-r-0",
              i < 2 ? "border-b border-line/70 md:border-b-0" : "",
            ].join(" ")}
          >
            <div
              className="font-heading text-[50px] font-bold leading-none tracking-[-0.03em]"
              style={{ color: "var(--accent)" }}
            >
              {s.value}
            </div>
            <div className="mt-2.5 text-sm leading-[1.4] text-muted">
              {s.label[0]}
              <br />
              {s.label[1]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
