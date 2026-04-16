"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Check } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FormState {
  nombre: string;
  email: string;
  empresa: string;
  necesidad: string;
  mensaje: string;
}

type FormStatus = "idle" | "success";

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 220, damping: 20 },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.25 },
  },
};

const checkmarkVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 18, delay: 0.15 },
  },
};

// ---------------------------------------------------------------------------
// Bullet items
// ---------------------------------------------------------------------------

const bullets = [
  "Analisis gratuito de tu caso",
  "Propuesta de solucion personalizada",
  "Estimado de tiempo y costo sin rodeos",
  "Sin ventas agresivas, solo claridad",
];

// ---------------------------------------------------------------------------
// Stat cards
// ---------------------------------------------------------------------------

const stats = [
  { label: "respuesta", value: "< 24h" },
  { label: "gratuito", value: "100%" },
  { label: "sesion", value: "45 min" },
];

// ---------------------------------------------------------------------------
// Select options
// ---------------------------------------------------------------------------

const necesidadOptions = [
  { value: "", label: "Selecciona una opcion" },
  { value: "Aplicacion con IA", label: "Aplicacion con IA" },
  { value: "Sitio Web Moderno", label: "Sitio Web Moderno" },
  { value: "Automatizacion de Procesos", label: "Automatizacion de Procesos" },
  { value: "Consultoria IA", label: "Consultoria IA" },
  { value: "Otro", label: "Otro" },
];

// ---------------------------------------------------------------------------
// Shared input classes
// ---------------------------------------------------------------------------

const inputBase =
  "w-full rounded-xl border border-border bg-elevated px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-core/50 focus:border-cyan-core/50";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Contact() {
  const formId = useId();

  const [form, setForm] = useState<FormState>({
    nombre: "",
    email: "",
    empresa: "",
    necesidad: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Send form contents via WhatsApp (no email channel configured)
    const message = encodeURIComponent(
      `Hola Neurovia Systems, soy ${form.nombre || "(sin nombre)"}.\n` +
        `Empresa: ${form.empresa || "—"}\n` +
        `Necesidad: ${form.necesidad || "Consulta general"}\n` +
        (form.email ? `Email de contacto: ${form.email}\n` : "") +
        `\nMensaje:\n${form.mensaje || "(sin mensaje)"}`
    );

    window.open(
      `https://wa.me/529937226350?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
    setStatus("success");
  }

  function handleReset() {
    setForm({ nombre: "", email: "", empresa: "", necesidad: "", mensaje: "" });
    setStatus("idle");
  }

  return (
    <section
      id="contacto"
      aria-label="Contacto"
      className="relative overflow-hidden bg-void py-24 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-start">
          {/* ----------------------------------------------------------------
              LEFT COLUMN
          ---------------------------------------------------------------- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-core/30 bg-cyan-core/10 px-4 py-1.5 text-sm font-medium text-cyan-light">
                <span aria-hidden="true">💬</span>
                Respuesta en menos de 24h
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-heading mt-6 text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              Hablemos de
              <br />
              <span className="gradient-text">tu proyecto</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-md text-lg leading-relaxed text-text-secondary"
            >
              Una conversacion de 45 minutos puede cambiar el rumbo de tu negocio.
              Sin compromisos, sin tecnicismos.
            </motion.p>

            {/* Bullets */}
            <motion.ul
              variants={itemVariants}
              className="mt-8 space-y-3"
              aria-label="Que incluye la consulta"
            >
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-text-secondary">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-core/20"
                    aria-hidden="true"
                  >
                    <Check size={12} className="text-cyan-core" strokeWidth={3} />
                  </span>
                  {bullet}
                </li>
              ))}
            </motion.ul>

            {/* Direct contact */}
            <motion.div variants={itemVariants} className="mt-10 space-y-3">
              <p className="text-sm font-medium uppercase tracking-wider text-text-muted">
                Contacto directo
              </p>
              <a
                href="https://wa.me/529937226350?text=Hola%20Neurovia%20Systems%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-text-secondary transition-colors hover:text-cyan-light"
                aria-label="Abrir WhatsApp con Neurovia Systems"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-core/10 transition-colors group-hover:bg-cyan-core/20">
                  <MessageCircle size={16} className="text-cyan-core" />
                </span>
                +52 993 722 6350 (WhatsApp)
              </a>
            </motion.div>

            {/* Stat cards */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-3 gap-3"
              role="list"
              aria-label="Datos clave"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  role="listitem"
                  className="rounded-xl border border-border bg-surface/60 px-3 py-4 text-center backdrop-blur-sm"
                >
                  <p className="font-heading text-lg font-bold text-cyan-core">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ----------------------------------------------------------------
              RIGHT COLUMN – Form / Success
          ---------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
          >
            <div className="rounded-2xl border border-border bg-surface/60 p-8 backdrop-blur-xl">
              <AnimatePresence mode="wait">
                {status === "idle" ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  >
                    <h3 className="font-heading text-xl font-bold text-text-primary">
                      Cuéntanos tu idea
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">
                      Todos los campos son opcionales excepto nombre y email.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-6 space-y-5"
                      noValidate
                      aria-label="Formulario de contacto"
                    >
                      {/* Nombre */}
                      <div>
                        <label
                          htmlFor={`${formId}-nombre`}
                          className="mb-1.5 block text-sm font-medium text-text-muted"
                        >
                          Nombre completo <span aria-hidden="true" className="text-cyan-core">*</span>
                        </label>
                        <input
                          id={`${formId}-nombre`}
                          type="text"
                          name="nombre"
                          value={form.nombre}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          placeholder="Maria Garcia"
                          className={inputBase}
                          aria-required="true"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor={`${formId}-email`}
                          className="mb-1.5 block text-sm font-medium text-text-muted"
                        >
                          Email de trabajo <span aria-hidden="true" className="text-cyan-core">*</span>
                        </label>
                        <input
                          id={`${formId}-email`}
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          placeholder="maria@empresa.com"
                          className={inputBase}
                          aria-required="true"
                        />
                      </div>

                      {/* Empresa */}
                      <div>
                        <label
                          htmlFor={`${formId}-empresa`}
                          className="mb-1.5 block text-sm font-medium text-text-muted"
                        >
                          Empresa
                        </label>
                        <input
                          id={`${formId}-empresa`}
                          type="text"
                          name="empresa"
                          value={form.empresa}
                          onChange={handleChange}
                          autoComplete="organization"
                          placeholder="Mi Empresa S.A."
                          className={inputBase}
                        />
                      </div>

                      {/* Necesidad */}
                      <div>
                        <label
                          htmlFor={`${formId}-necesidad`}
                          className="mb-1.5 block text-sm font-medium text-text-muted"
                        >
                          ¿Que necesitas?
                        </label>
                        <select
                          id={`${formId}-necesidad`}
                          name="necesidad"
                          value={form.necesidad}
                          onChange={handleChange}
                          className={`${inputBase} cursor-pointer`}
                        >
                          {necesidadOptions.map((opt) => (
                            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Mensaje */}
                      <div>
                        <label
                          htmlFor={`${formId}-mensaje`}
                          className="mb-1.5 block text-sm font-medium text-text-muted"
                        >
                          Cuentanos de tu proyecto
                        </label>
                        <textarea
                          id={`${formId}-mensaje`}
                          name="mensaje"
                          value={form.mensaje}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe brevemente el problema que quieres resolver..."
                          className={`${inputBase} resize-none`}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="cta-amber group w-full rounded-xl px-6 py-4 text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-core/30 active:scale-[0.98]"
                      >
                        Enviar mensaje{" "}
                        <span
                          className="inline-block transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col items-center py-12 text-center"
                    role="status"
                    aria-live="polite"
                    aria-label="Mensaje enviado con exito"
                  >
                    {/* Animated checkmark */}
                    <motion.div
                      variants={checkmarkVariants}
                      className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-cyan-core/40 bg-cyan-core/15"
                    >
                      <Check size={36} className="text-cyan-core" strokeWidth={2.5} />
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.4 }}
                      className="font-heading mt-6 text-2xl font-bold text-text-primary"
                    >
                      ¡Mensaje enviado! 🎉
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.48, duration: 0.4 }}
                      className="mt-3 max-w-xs text-text-secondary"
                    >
                      Te contactaremos en menos de 24 horas.
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      onClick={handleReset}
                      className="mt-8 rounded-xl border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-cyan-core/50 hover:text-cyan-light"
                    >
                      Enviar otro mensaje
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/*
 * ---------------------------------------------------------------------------
 * Usage example (in app/page.tsx or any layout file):
 * ---------------------------------------------------------------------------
 *
 * import Contact from "@/components/Contact";
 *
 * export default function Home() {
 *   return (
 *     <>
 *       ...
 *       <Contact />
 *       ...
 *     </>
 *   );
 * }
 * ---------------------------------------------------------------------------
 */
