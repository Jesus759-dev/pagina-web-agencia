const STATS = [
  { value: "3x", label: ["más rápido que el", "desarrollo tradicional"] },
  { value: "80%", label: ["reducción en", "tareas manuales"] },
  { value: "100%", label: ["proyectos con", "documentación completa"] },
  { value: "+15", label: ["tecnologías de", "IA dominadas"] },
];

export default function Stats() {
  return (
    <section className="border-b border-line-soft bg-surface">
      <div className="stats-grid mx-auto grid max-w-[1240px] grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.value}
            className={[
              "px-8 py-12 text-center",
              // vertical separators between columns
              i % 2 === 0 ? "border-r border-line/70" : "",
              i < 3 ? "md:border-r md:border-line/70" : "md:border-r-0",
              // horizontal separator between the two mobile rows
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
