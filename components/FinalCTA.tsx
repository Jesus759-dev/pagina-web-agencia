"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      aria-label="Contacto"
      className="relative overflow-hidden bg-deep-space py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
            El momento de actuar{" "}
            <span className="gradient-text">es ahora.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Cada dia que pasa sin aprovechar la IA es una oportunidad que tu
            competencia esta tomando. Agenda una sesion estrategica gratuita y
            descubre como podemos transformar tu negocio.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/529937226350?text=Hola%20Neurovia%20Systems%2C%20quiero%20agendar%20una%20consulta%20estrat%C3%A9gica%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-amber group inline-flex items-center gap-3 rounded-xl px-10 py-5 text-lg transition-transform hover:scale-105"
            >
              Agenda tu consulta estrategica gratuita
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <p className="mt-4 text-sm text-text-muted">
            Sesion de 45 minutos. Sin ventas agresivas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
