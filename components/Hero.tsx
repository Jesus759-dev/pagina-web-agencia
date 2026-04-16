"use client";

import { useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, ChevronDown } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

/**
 * The cobe globe is a desktop-only decoration that weighs ~30 KB
 * and runs WebGL. We lazy-load it so the Hero's LCP and Speed Index
 * are not delayed by the 3D work.
 */
const GlobePulse = dynamic(
  () => import("@/components/ui/cobe-globe-pulse").then((m) => m.GlobePulse),
  { ssr: false, loading: () => null }
);

/* ----------------------------------------------------------------------
 * Every animation in this component was removed or made static. The
 * Hero is now rendered in a single paint; no client-side timers, no
 * framer-motion, no continuous keyframes on the visible viewport.
 * This yields green Speed Index / LCP on throttled mobile (the
 * typewriter, letter stagger and continuous orb/path fades were
 * previously inflating the score).
 * -------------------------------------------------------------------- */

/* ---------- Stats ---------- */

const stats = [
  { value: "3x", label: "más rápido que desarrollo tradicional" },
  { value: "80%", label: "reducción en tareas manuales" },
  { value: "100%", label: "proyectos con documentación completa" },
  { value: "+15", label: "tecnologías de IA dominadas" },
];

/* ---------- Hero ---------- */

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (spotlightRef.current) {
      spotlightRef.current.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(0,200,232,0.05), transparent 55%)`;
    }
  }, []);

  return (
    <section
      ref={heroRef}
      aria-label="Sección principal"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
      onMouseMove={handleMouseMove}
    >
      {/* Animated SVG Paths background */}
      <BackgroundPaths />

      {/* Spotlight overlay */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-[1] transition-[background] duration-200"
        aria-hidden="true"
      />

      {/* Background orbs — STATIC gradients (no animation at all).
          The floating animation inflated the Speed Index on mobile
          because Lighthouse's throttled measurement window extends
          past 4 s, and each orb is huge (500×500 px with heavy blur)
          so any sub-pixel movement counted as significant visual change. */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute left-[8%] top-[18%] h-[500px] w-[500px] rounded-full bg-cyan-core/6 blur-[130px]" />
        <div className="absolute right-[8%] top-[8%] h-[450px] w-[450px] rounded-full bg-violet-core/6 blur-[130px]" />
        <div className="absolute bottom-[15%] left-[38%] h-[350px] w-[350px] rounded-full bg-electric-blue/4 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248,250,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Two-column layout: text left, globe right ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* LEFT — text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge — static, no JS-driven animation. The green dot's
                animate-ping is a tiny (2.5px) element and does not
                meaningfully impact Speed Index. */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                {/* Static green dot with a halo glow — no animation.
                    Visually reads as "online/available" without costing SI. */}
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40"
                  style={{ filter: "blur(3px)" }}
                />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-text-secondary tracking-wide">Disponible para nuevos proyectos</span>
            </div>

            {/* Headline — semantic, SEO-friendly H1 that makes sense
                on its own (without depending on the typewriter animation).
                Google and screen readers read the complete sentence
                immediately on first paint, which is critical for LCP and SEO. */}
            <h1 className="font-heading text-4xl font-light leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              <span className="block text-text-primary">Desarrollo de software con</span>
              <span className="block font-bold gradient-text mt-1">
                inteligencia artificial
              </span>
              <span className="block text-text-primary mt-1">para empresas.</span>
            </h1>

            {/* Static decorative subtitle — previous typewriter ran
                continuously from t=3.5s which still fell inside the
                mobile Speed Index window under Lighthouse throttling. */}
            <p className="mt-4 font-code text-sm uppercase tracking-[0.2em] text-cyan-light/80">
              <span className="text-text-muted mr-2">{">"}</span>
              Neurovia Systems · IA · Software · Automatización
            </p>

            {/* Subheadline — SEO-friendly paragraph with industry keywords */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl lg:mx-0">
              <strong className="text-text-primary">Neurovia Systems</strong> construye
              plataformas web, dashboards corporativos, automatizaciones empresariales
              e infraestructura IT para empresas que quieren crecer.{" "}
              <span className="text-text-primary font-medium">Entregas rápidas, resultados medibles.</span>
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contacto"
                className="group relative overflow-hidden cta-amber inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <span
                  className="pointer-events-none absolute inset-0 -skew-x-12 translate-x-[-120%] group-hover:translate-x-[200%] transition-transform duration-700"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }}
                />
                Agenda una consulta gratuita
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-semibold text-text-primary backdrop-blur-sm transition-all hover:border-cyan-core/60 hover:text-cyan-light hover:bg-surface/60"
              >
                Ver lo que hacemos
              </a>
            </div>

            <p className="mt-3 text-sm text-text-muted">
              Sin compromiso. Primera sesión 100% gratuita.
            </p>

            {/* Stats row — rendered statically, no JS animation needed */}
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center lg:text-left">
                  <p className="font-heading text-3xl font-bold gradient-text sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-text-muted sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Globe (hidden on mobile to save WebGL context).
              No framer-motion entrance — the globe fades itself in via
              the canvas `transition: opacity 1.4s` inside GlobePulse. */}
          <div
            className="hidden lg:block w-full max-w-sm shrink-0 lg:w-[420px] xl:w-[480px]"
            aria-hidden="true"
          >
            {/* Glow ring behind globe */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-core/10 blur-[60px] scale-90" />
              <div className="absolute inset-0 rounded-full bg-violet-core/8 blur-[80px] scale-75 translate-y-8" />
              <GlobePulse className="relative z-10" speed={0.003} />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator — static, no animation. The bounce previously
          ran continuously from t=0 which counted as visual progress in
          the Speed Index measurement window. */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <ChevronDown size={24} className="text-text-muted opacity-70" />
      </div>
    </section>
  );
}
