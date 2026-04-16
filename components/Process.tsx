"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Entendemos tu negocio y tus objetivos",
    icon: Search,
  },
  {
    number: "02",
    title: "Estrategia y Diseno",
    description: "Disenamos la solucion ideal para tu caso",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Desarrollo e Implementacion",
    description: "Construimos con agilidad y transparencia total",
    icon: Code2,
  },
  {
    number: "04",
    title: "Entrega y Crecimiento",
    description: "Lanzamos, medimos y mejoramos continuamente",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      aria-label="Proceso de trabajo"
      className="bg-void py-24 sm:py-32"
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
            De la idea al resultado en{" "}
            <span className="gradient-text">4 pasos</span>
          </h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-4 gap-8">
            {/* Connector line */}
            <div
              className="absolute left-[12.5%] right-[12.5%] top-[42px] h-px bg-gradient-to-r from-cyan-core via-violet-core to-electric-blue"
              aria-hidden="true"
            />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-surface">
                    <div className="gradient-cta flex h-12 w-12 items-center justify-center rounded-xl">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  <span className="font-code text-xs font-medium text-cyan-core">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <div className="relative space-y-12 pl-10">
            {/* Vertical line */}
            <div
              className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-core via-violet-core to-electric-blue"
              aria-hidden="true"
            />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full gradient-cta">
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="font-code text-xs font-medium text-cyan-core">
                    {step.number}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
