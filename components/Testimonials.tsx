"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "PROVALSA",
    role: "Suministros para la Industria",
    company: "Cliente desde 2024",
    quote:
      "Neurovia Systems desarrolló nuestro sitio web corporativo con catálogo de productos industriales y tienda online integrada. El resultado superó nuestras expectativas: diseño profesional, rápido y fácil de administrar.",
    result: "Sitio web + Tienda online",
    avatar: "PV",
    color: "#1E3A8A",
  },
  {
    name: "Royers Construcciones",
    role: "Constructora Premium",
    company: "Cliente desde 2024",
    quote:
      "Entregaron un sitio web premium que refleja la calidad de nuestro trabajo. Galería de proyectos, renders 3D y sistema de cotización integrado. Cada detalle cuidado al milímetro, como nuestras obras.",
    result: "Sitio web premium",
    avatar: "RC",
    color: "#C8A24E",
  },
  {
    name: "Emasur",
    role: "Empresa de Servicios",
    company: "Cliente desde 2024",
    quote:
      "Profesionales en cada etapa del proyecto. Desde la primera reunión hasta la entrega final, Neurovia Systems mostró compromiso, rapidez y conocimiento técnico. Recomendados al 100%.",
    result: "Proyecto entregado a tiempo",
    avatar: "EM",
    color: "#00C8E8",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      aria-label="Testimonios de clientes"
      className="relative py-24"
      style={{ backgroundColor: "#F0F4F8" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
            style={{ borderColor: "#1A2840", backgroundColor: "#E2E8F0", color: "#334155" }}
          >
            ⭐ Lo que dicen nuestros clientes
          </span>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl" style={{ color: "#0D1520" }}>
            Resultados que{" "}
            <span className="gradient-text">hablan</span> por sí solos
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl p-7 transition-all duration-300"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #CBD5E1",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.10), 0 0 0 1px ${t.color}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
              }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className="text-amber-400 text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                className="absolute right-7 top-6 font-heading text-6xl leading-none select-none"
                style={{ color: `${t.color}25` }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <blockquote className="mb-5 flex-1 text-base italic leading-relaxed" style={{ color: "#475569" }}>
                {t.quote}
              </blockquote>

              {/* Result badge */}
              <div className="mb-6">
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    border: `1px solid ${t.color}50`,
                    backgroundColor: `${t.color}12`,
                    color: t.color,
                  }}
                >
                  {t.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: `${t.color}20`,
                    color: t.color,
                  }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#64748B" }}>
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
