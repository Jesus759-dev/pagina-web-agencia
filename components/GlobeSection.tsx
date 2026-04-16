"use client";

import { motion } from "framer-motion";
import { Palette, Zap } from "lucide-react";
import { GlobePulse } from "@/components/ui/cobe-globe-pulse";

const highlights = [
  {
    icon: Palette,
    value: "Diseños Personalizados",
    label: "Cada proyecto es único, adaptado a tu marca e identidad.",
  },
  {
    icon: Zap,
    value: "Herramientas de Última Generación",
    label: "Integramos las tecnologías más avanzadas del mercado en cada solución.",
  },
];

export default function GlobeSection() {
  return (
    <section
      aria-label="Alcance global"
      className="relative bg-deep-space pt-24 sm:pt-32 pb-12 sm:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* Globe — left on desktop. Translated down so it straddles
              the boundary between this dark section and the light section below. */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-30 w-full max-w-xs shrink-0 sm:max-w-sm lg:w-[460px] xl:w-[520px] lg:translate-y-[42%] lg:-mb-[260px] xl:-mb-[300px]"
            aria-hidden="true"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-core/12 blur-[70px] scale-90" />
              <div className="absolute inset-0 rounded-full bg-violet-core/8 blur-[90px] scale-75 translate-y-10" />
              <GlobePulse className="relative z-10" speed={0.0025} />
            </div>
          </motion.div>

          {/* Text — right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-core/30 bg-cyan-core/10 px-4 py-1.5 text-sm font-medium text-cyan-light">
              🌎 Presencia global
            </span>

            <h2 className="font-heading mt-6 text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Tecnología de clase mundial,{" "}
              <span className="gradient-text">a tu alcance</span>
            </h2>

            {/* Feature cards */}
            <div className="mt-8 flex flex-col gap-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.value}
                    className="flex items-start gap-4 rounded-xl border border-border bg-surface/60 px-5 py-4 backdrop-blur-sm text-left"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-core/10 border border-cyan-core/20">
                      <Icon size={20} className="text-cyan-core" />
                    </div>
                    <div>
                      <p className="font-heading text-base font-bold text-text-primary">{h.value}</p>
                      <p className="mt-0.5 text-sm text-text-muted">{h.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <a
                href="#contacto"
                className="cta-amber inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Hablar con el equipo →
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
