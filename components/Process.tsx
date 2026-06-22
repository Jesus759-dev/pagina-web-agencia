const STEPS = [
  { n: "01", title: "Descubrimiento", desc: "Entendemos tu negocio y tus objetivos." },
  { n: "02", title: "Estrategia y diseño", desc: "Diseñamos la solución ideal para tu caso." },
  { n: "03", title: "Desarrollo", desc: "Construimos con agilidad y transparencia total." },
  { n: "04", title: "Entrega y crecimiento", desc: "Lanzamos, medimos y mejoramos continuamente." },
];

export default function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-[1240px] px-5 pb-10 pt-[120px] sm:px-10">
      <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
        Proceso
      </div>
      <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
        De la idea al resultado en 4 pasos.
      </h2>

      <div className="proc-grid mt-[52px] grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className="pt-[22px]"
            style={{
              borderTop: `2px solid ${i === 0 ? "var(--accent)" : "#e2e5ea"}`,
            }}
          >
            <div
              className="font-code text-sm"
              style={{ color: i === 0 ? "var(--accent)" : "#9aa3af" }}
            >
              {s.n}
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
