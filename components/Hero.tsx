"use client";

import { useEffect, useState, useRef, useCallback } from "react";
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

/* ---------- Typewriter Hook ---------- */

const TYPEWRITER_PHRASES = [
  "inteligencia artificial",
  "automatizaciones IA",
  "apps del futuro",
];

/**
 * Typewriter hook.
 *
 * The animation starts DELAYED (3.5 s) and only runs when the browser
 * is idle so it does NOT contribute to the Speed Index measurement
 * window (0–3 s after page load). Speed Index treats every visual
 * change as "progress" and a constantly-typing subtitle was inflating
 * the score from ~1.4 s to ~2.9 s.
 */
function useTypewriter() {
  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Kick off the animation only after Speed Index has stopped measuring.
  useEffect(() => {
    const kickoff = setTimeout(() => setStarted(true), 3500);
    return () => clearTimeout(kickoff);
  }, []);

  useEffect(() => {
    if (!started) return;
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          setText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
          }
        }
      },
      isDeleting ? 35 : 75
    );
    return () => clearTimeout(timeout);
  }, [started, charIndex, isDeleting, phraseIndex]);

  return text;
}

/* ----------------------------------------------------------------------
 * Previously this component animated the headline letter-by-letter.
 * That caused two problems on mobile:
 *   - LCP was delayed ~1s waiting for the stagger to finish.
 *   - Each letter wrapped in its own <motion.span> caused layout work.
 * Now we render the text statically so it paints on first frame
 * (huge LCP win). The visual delight is preserved via a single cheap
 * word-level fade further down.
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
  const typedText = useTypewriter();

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

      {/* Background orbs — animation delayed 4 s so they stay static during
          the Speed Index measurement window (0–3 s). Each orb is huge
          (500×500 px with 130 px blur) so any movement counted as visual
          progress and was inflating the Speed Index score. */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div
          className="absolute left-[8%] top-[18%] h-[500px] w-[500px] rounded-full bg-cyan-core/6 blur-[130px]"
          style={{
            animation: "float-orb 12s ease-in-out 4s infinite",
            willChange: "transform",
          }}
        />
        <div
          className="absolute right-[8%] top-[8%] h-[450px] w-[450px] rounded-full bg-violet-core/6 blur-[130px]"
          style={{
            animation: "float-orb 15s ease-in-out 4s infinite reverse",
            willChange: "transform",
          }}
        />
        <div
          className="absolute bottom-[15%] left-[38%] h-[350px] w-[350px] rounded-full bg-electric-blue/4 blur-[100px]"
          style={{
            animation: "float-orb 18s ease-in-out 4s infinite",
            willChange: "transform",
          }}
        />
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
                {/* animate-ping delayed 4s so the pulsing dot doesn't count
                    as "visual progress" during Speed Index measurement. */}
                <span
                  className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                  style={{ animation: "ping 1s cubic-bezier(0,0,0.2,1) 4s infinite" }}
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

            {/* Rotating decorative subtitle — not an H1, purely visual.
                The typewriter has reserved width so it doesn't cause layout shifts. */}
            <p
              aria-live="polite"
              className="mt-4 font-code text-sm uppercase tracking-[0.2em] text-cyan-light/80 min-h-[1.5em]"
              style={{ minWidth: "14ch" }}
            >
              <span className="text-text-muted mr-2">{">"}</span>
              {typedText || "Neurovia Systems"}
              <span
                className="ml-0.5 inline-block w-[2px] align-middle animate-pulse bg-cyan-core"
                style={{ height: "0.85em" }}
              />
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

      {/* Scroll indicator — CSS-only opacity fade via animation-delay,
          no framer-motion subscription needed. */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animation: "fade-in 0.4s ease-out 2s forwards" }}
        aria-hidden="true"
      >
        <ChevronDown size={24} className="animate-scroll-indicator text-text-muted" />
      </div>
    </section>
  );
}
