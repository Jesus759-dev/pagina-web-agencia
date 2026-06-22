const TESTIMONIALS = [
  {
    quote:
      "Desarrollaron nuestro sitio corporativo con catálogo industrial y tienda online integrada. El resultado superó nuestras expectativas: profesional, rápido y fácil de administrar.",
    initials: "PV",
    name: "PROVALSA",
    role: "Suministros industriales · Cliente desde 2024",
  },
  {
    quote:
      "Entregaron un sitio premium que refleja la calidad de nuestro trabajo. Galería de proyectos, renders 3D y cotización integrada. Cada detalle cuidado al milímetro, como nuestras obras.",
    initials: "RC",
    name: "Royers S.A. de C.V.",
    role: "Constructora · 35+ años en Tabasco",
  },
  {
    quote:
      "Profesionales en cada etapa. Desde la primera reunión hasta la entrega final mostraron compromiso, rapidez y conocimiento técnico. Recomendados al 100%.",
    initials: "EM",
    name: "Emasur",
    role: "Empresa de servicios · Cliente desde 2024",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-10 pt-[120px] sm:px-10">
      <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
        Clientes
      </div>
      <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
        Resultados que hablan por sí solos.
      </h2>

      <div className="testi-grid mt-[52px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="flex flex-col rounded-2xl border border-line bg-white p-8"
          >
            <div className="text-[15px] tracking-[2px] text-[#f5a623]">★★★★★</div>
            <p className="mb-[22px] mt-4 flex-1 text-[15px] leading-[1.65] text-ink-2">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-faint">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
