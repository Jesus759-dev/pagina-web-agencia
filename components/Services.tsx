const SERVICES = [
  {
    n: "01",
    title: "Desarrollo de páginas web",
    desc: "Sitios de alto rendimiento optimizados para convertir visitantes en clientes. Velocidad, SEO y experiencia impecable.",
    items: [
      "Landing pages de alta conversión",
      "E-commerce optimizado con IA",
      "Aplicaciones web progresivas (PWA)",
      "Optimización SEO avanzada",
    ],
  },
  {
    n: "02",
    title: "Automatizaciones de procesos con IA",
    desc: "Identificamos las tareas que consumen tu tiempo y las automatizamos con flujos inteligentes. Menos errores, más productividad.",
    items: [
      "Automatización de procesos con n8n",
      "Integración de APIs y servicios",
      "Workflows inteligentes con IA",
      "Reportes automáticos personalizados",
    ],
  },
  {
    n: "03",
    title: "Desarrollo de sistemas web y software",
    desc: "Software y sistemas web con IA integrada que resuelven problemas reales de tu negocio. Una solución diseñada a tu medida, no un producto genérico.",
    items: [
      "Plataformas y dashboards a medida",
      "Procesamiento de documentos con IA",
      "Asistentes y chatbots personalizados",
      "Integración con tus sistemas existentes",
    ],
  },
  {
    n: "04",
    title: "Infraestructura IT, redes y hardware",
    desc: "Armamos, desplegamos y mantenemos tu infraestructura de cómputo y conectividad. De una workstation a medida a un despliegue Ubiquiti empresarial.",
    items: [
      "Armado de PCs a medida",
      "Routers, APs y redes Ubiquiti",
      "Mantenimiento preventivo y correctivo",
      "Soporte técnico y consultoría IT",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-[1240px] px-5 pb-10 pt-[120px] sm:px-10">
      <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
        Servicios
      </div>
      <h2 className="m-0 max-w-[760px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
        Cuatro maneras de transformar tu negocio.
      </h2>
      <p className="m-0 mt-5 max-w-[600px] text-lg leading-[1.6] text-muted">
        Software con IA, sitios web, automatizaciones e infraestructura IT. Un solo equipo para
        todo tu stack tecnológico.
      </p>

      <div className="mt-[52px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
        {SERVICES.map((s) => (
          <div key={s.n} className="svc-card rounded-2xl border border-line bg-white p-[38px]">
            <div className="font-code text-[13px]" style={{ color: "var(--accent)" }}>
              {s.n}
            </div>
            <h3 className="m-0 mt-4 font-heading text-[25px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              {s.title}
            </h3>
            <p className="mt-[13px] text-[15px] leading-[1.65] text-muted">{s.desc}</p>
            <div className="mt-[22px] flex flex-col gap-2.5">
              {s.items.map((it) => (
                <div key={it} className="flex items-start gap-[11px] text-sm text-[#3a4452]">
                  <span className="font-semibold" style={{ color: "var(--accent)" }}>
                    →
                  </span>
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
