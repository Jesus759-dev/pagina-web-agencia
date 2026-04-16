"use client";

import { motion } from "framer-motion";

const row1 = [
  { name: "Claude 3.5", emoji: "🧠" },
  { name: "Claude Code", emoji: "⚡" },
  { name: "Next.js 15", emoji: "▲" },
  { name: "React 19", emoji: "⚛️" },
  { name: "TypeScript", emoji: "🔷" },
  { name: "Tailwind CSS", emoji: "🎨" },
  { name: "Vercel", emoji: "🚀" },
  { name: "Supabase", emoji: "💚" },
];

const row2 = [
  { name: "n8n", emoji: "🔄" },
  { name: "OpenAI GPT-4", emoji: "🤖" },
  { name: "Python", emoji: "🐍" },
  { name: "Docker", emoji: "🐳" },
  { name: "PostgreSQL", emoji: "🐘" },
  { name: "Make", emoji: "⚙️" },
  { name: "Zapier", emoji: "⚡" },
  { name: "FastAPI", emoji: "🏎️" },
];

function Pill({ name, emoji }: { name: string; emoji: string }) {
  return (
    <div className="mx-4 inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-5 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-cyan-core/40 hover:text-text-primary sm:mx-6">
      <span aria-hidden="true">{emoji}</span>
      {name}
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="tecnologia"
      aria-label="Stack tecnologico"
      className="relative overflow-hidden bg-deep-space py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-7xl px-4 text-center"
      >
        <p className="font-heading text-sm font-medium uppercase tracking-widest text-text-muted">
          Trabajamos con el mejor stack de IA disponible hoy
        </p>
      </motion.div>

      <div className="relative flex flex-col gap-4">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-deep-space to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-deep-space to-transparent" />

        {/* Row 1 — left to right */}
        <div
          className="flex animate-marquee whitespace-nowrap"
          aria-hidden="true"
        >
          {[...row1, ...row1].map((tech, i) => (
            <Pill key={`r1-${tech.name}-${i}`} {...tech} />
          ))}
        </div>

        {/* Row 2 — right to left */}
        <div
          className="flex animate-marquee-reverse whitespace-nowrap"
          aria-hidden="true"
        >
          {[...row2, ...row2].map((tech, i) => (
            <Pill key={`r2-${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </div>

      {/* Accessible fallback list */}
      <ul className="sr-only">
        {[...row1, ...row2].map((t) => (
          <li key={t.name}>{t.name}</li>
        ))}
      </ul>
    </section>
  );
}
