"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Cuanto tiempo toma un proyecto tipico?",
    answer:
      "Depende del alcance, pero la mayoria de nuestros proyectos se entregan en 2 a 6 semanas. Trabajamos en sprints semanales con entregas incrementales, asi que ves resultados desde la primera semana.",
  },
  {
    question: "Necesito conocimientos tecnicos para trabajar con ustedes?",
    answer:
      "Para nada. Nosotros nos encargamos de toda la parte tecnica. Te explicamos todo en lenguaje claro y te involucramos solo en las decisiones que importan para tu negocio.",
  },
  {
    question: "Que tipo de empresas trabajan con Neurovia Systems?",
    answer:
      "Trabajamos con startups, PYMEs y empresas en crecimiento que quieren usar IA para escalar su operacion. Nuestros clientes vienen de sectores como salud, finanzas, educacion, e-commerce y servicios profesionales.",
  },
  {
    question: "Que pasa despues de la entrega del proyecto?",
    answer:
      "Ofrecemos soporte post-entrega que incluye mantenimiento, monitoreo y mejoras continuas. No te dejamos solo despues del lanzamiento. Tambien capacitamos a tu equipo para que pueda operar las herramientas de forma independiente.",
  },
  {
    question: "Como se diferencia Neurovia Systems de una agencia de desarrollo tradicional?",
    answer:
      "La diferencia principal es que la IA esta en el ADN de cada solucion que construimos. No agregamos IA como un extra: disenamos desde cero pensando en como la inteligencia artificial puede potenciar cada aspecto de tu proyecto.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-label="Preguntas frecuentes"
      className="bg-void py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-cyan-core/40 bg-surface"
                    : "border-border bg-surface/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 font-heading text-base font-medium text-text-primary sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-cyan-core">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
