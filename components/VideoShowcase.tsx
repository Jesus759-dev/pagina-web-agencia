"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

/**
 * VideoShowcase — hero-adjacent video section.
 *
 * SEO-optimized:
 *  - Native <video> with semantic descriptive heading
 *  - preload="metadata" so the poster loads fast without blocking LCP
 *  - aria-label + figcaption for accessibility and crawlers
 *  - Paired VideoObject JSON-LD schema lives in app/layout.tsx
 *
 * Perf-optimized:
 *  - IntersectionObserver pauses video when off-screen (saves CPU/bandwidth)
 *  - No auto-download of the video bytes until user is near the section
 */
export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [inView, setInView] = useState(false);

  // Pause when scrolled off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (!entry.isIntersecting && videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const goFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
  };

  return (
    <section
      id="video-showcase"
      aria-label="Video de presentación — Neurovia Systems"
      className="relative overflow-hidden bg-void py-24 sm:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-core/5 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-violet-core/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-core/30 bg-cyan-core/10 px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-core opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-core" />
            </span>
            <span className="font-code uppercase tracking-wider text-cyan-light">
              Video presentación
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Conoce a <span className="gradient-text">Neurovia Systems</span> en 60 segundos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            Descubre cómo transformamos negocios con inteligencia artificial, desarrollo web
            profesional e infraestructura IT. Un solo equipo, todo tu stack tecnológico.
          </p>
        </motion.div>

        {/* Video frame */}
        <motion.figure
          ref={containerRef}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="animated-border-wrapper relative mx-auto rounded-3xl p-[1.5px]"
        >
          <div className="relative overflow-hidden rounded-3xl bg-black shadow-[0_30px_120px_-20px_rgba(0,200,232,0.35)]">
            {/* 16:9 aspect wrapper */}
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={inView ? "/videos/neurovia-showcase.mp4" : undefined}
                preload={inView ? "metadata" : "none"}
                playsInline
                muted={muted}
                loop
                aria-label="Video de presentación de Neurovia Systems — IA, desarrollo web e infraestructura IT"
                onClick={togglePlay}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />

              {/* Play overlay when paused */}
              {!playing && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Reproducir video"
                  className="group absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/10"
                >
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                    <span className="absolute inset-0 animate-ping rounded-full bg-cyan-core/60 opacity-60" />
                    <Play
                      size={32}
                      className="relative ml-1 text-deep-space"
                      fill="currentColor"
                    />
                  </span>
                </button>
              )}

              {/* Control bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={playing ? "Pausar video" : "Reproducir video"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
                  >
                    {playing ? <Pause size={14} /> : <Play size={14} />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? "Activar audio" : "Silenciar"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
                  >
                    {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={goFullscreen}
                  aria-label="Pantalla completa"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </div>

          <figcaption className="sr-only">
            Video de presentación de Neurovia Systems. Mostramos cómo desarrollamos
            aplicaciones con inteligencia artificial, sitios web de alto rendimiento,
            automatizaciones empresariales e infraestructura IT para empresas en toda
            Latinoamérica.
          </figcaption>
        </motion.figure>

        {/* Below-video stats / trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { v: "IA", l: "Desarrollo inteligente" },
            { v: "Web", l: "Sitios de alto rendimiento" },
            { v: "Auto", l: "Automatizaciones n8n" },
            { v: "IT", l: "Redes Ubiquiti + Hardware" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-xl border border-border bg-surface/40 px-4 py-3 text-center backdrop-blur-sm"
            >
              <p className="font-heading text-lg font-bold gradient-text">{s.v}</p>
              <p className="mt-0.5 text-xs text-text-muted">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
