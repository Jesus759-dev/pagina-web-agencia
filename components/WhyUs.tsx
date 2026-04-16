"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Gauge,
  BarChart3,
  MessageCircle,
  Server,
  HeadphonesIcon,
} from "lucide-react";

const differentiators = [
  {
    icon: Cpu,
    title: "IA nativa, no IA agregada",
    description:
      "Cada solucion esta disenada con IA desde su arquitectura, no como un complemento de ultima hora.",
  },
  {
    icon: Gauge,
    title: "Velocidad de entrega sin sacrificar calidad",
    description:
      "Usamos las herramientas mas avanzadas para entregar resultados en semanas, no meses.",
  },
  {
    icon: BarChart3,
    title: "Resultados medibles desde el primer sprint",
    description:
      "Cada entrega incluye metricas claras para que veas el impacto real desde el dia uno.",
  },
  {
    icon: MessageCircle,
    title: "Hablas con quien construye, no con intermediarios",
    description:
      "Comunicacion directa con el equipo tecnico. Sin capas innecesarias de gestion.",
  },
  {
    icon: Server,
    title: "Tecnologia del nivel de las Big Tech",
    description:
      "Usamos las mismas herramientas y frameworks que las empresas tecnologicas mas avanzadas.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte real post-entrega",
    description:
      "No desaparecemos despues de entregar. Te acompanamos con soporte, mejoras y escalabilidad.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhyUs() {
  return (
    <section
      aria-label="Por que elegirnos"
      className="bg-deep-space py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Por que las empresas{" "}
            <span className="gradient-text">nos eligen</span> sobre otras
            agencias
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="card-glow group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-cyan-core/30 hover:bg-elevated"
              >
                <div className="mb-4 inline-flex rounded-lg border border-border bg-elevated p-2.5 transition-colors group-hover:border-cyan-core/40">
                  <Icon
                    size={22}
                    className="text-cyan-core transition-colors group-hover:text-cyan-light"
                  />
                </div>
                <h3 className="font-heading text-base font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
