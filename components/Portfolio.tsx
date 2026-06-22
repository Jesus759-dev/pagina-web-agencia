"use client";

import { useState, useEffect, useCallback } from "react";

/* Royers gallery — opened from the Royers card. */
const ROYERS_GALLERY = [
  "/assets/royers-6.jpeg",
  "/projects/royers-construction.jpg",
  "/assets/royers-4.jpeg",
];

function Pill() {
  return (
    <span
      className="rounded-full px-[11px] py-1 font-code text-[11px] font-medium uppercase tracking-[0.06em]"
      style={{ color: "var(--accent)", background: "var(--accent-soft)" }}
    >
      En producción
    </span>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className="mt-[22px] flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-md border border-line px-2.5 py-[5px] text-xs text-muted">
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [lbIdx, setLbIdx] = useState(-1);
  const open = lbIdx >= 0;

  const step = useCallback((d: number) => {
    setLbIdx((i) => {
      if (i < 0) return i;
      const n = ROYERS_GALLERY.length;
      return ((i + d) % n + n) % n;
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLbIdx(-1);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <section id="proyectos" className="mx-auto max-w-[1240px] px-5 pb-10 pt-[120px] sm:px-10">
      <div className="mb-[18px] font-code text-[13px] uppercase tracking-[0.12em]" style={{ color: "var(--accent)" }}>
        Proyectos en producción · Capturas reales
      </div>
      <h2 className="m-0 max-w-[840px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
        Evidencia real de sistemas en vivo.
      </h2>
      <p className="m-0 mt-5 max-w-[640px] text-lg leading-[1.6] text-muted">
        Estas no son maquetas. Son plataformas y sitios que hoy operan en petróleo, construcción,
        mobiliario corporativo e ingeniería.
      </p>

      {/* Featured — full width */}
      <div className="proj-card mt-[52px] grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-[1.3fr_1fr]">
        <div className="relative min-h-[340px] overflow-hidden" style={{ background: "#0a1530" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/chemiservis-portal.png"
            alt="Chemiservis — Portal de Sistemas ERP"
            className="block h-full w-full object-cover"
          />
        </div>
        <div className="p-10">
          <div className="mb-3.5 flex items-center gap-2.5">
            <Pill />
            <span className="text-[13px] text-[#7a838f]">Suite ERP · Petróleo &amp; Gas</span>
          </div>
          <h3 className="m-0 font-heading text-[27px] font-semibold leading-[1.16] tracking-[-0.02em] text-ink">
            Chemiservis — Suite ERP
          </h3>
          <p className="mt-3.5 text-[15px] leading-[1.6] text-muted">
            Plataforma operativa multisistema para la industria petrolera: portal único de acceso
            con módulos de Requisiciones y Compras, Mantenimiento Vehicular e Inventario. Control
            financiero con KPIs en tiempo real, trazabilidad completa y auditoría sobre 23 áreas
            operativas.
          </p>
          <Stack items={["Next.js", "PostgreSQL", "TailwindCSS", "TypeScript"]} />
        </div>
      </div>

      {/* 2×2 cards */}
      <div className="mt-[22px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
        {/* Mantenimiento Vehicular */}
        <article className="proj-card overflow-hidden rounded-2xl border border-line bg-white">
          <div className="relative aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/mantenimiento-vehicular-login.png"
              alt="Chemiservis — Sistema de Mantenimiento Vehicular"
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="p-[26px]">
            <div className="mb-[11px] flex items-center gap-2.5">
              <Pill />
              <span className="text-[13px] text-[#7a838f]">Sistema · Gestión de flota</span>
            </div>
            <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              Mantenimiento Vehicular
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">
              Órdenes de trabajo, alertas por kilometraje, control de costos e historial completo de
              la flota — cada componente bajo control.
            </p>
          </div>
        </article>

        {/* Chemiservis Hidráulica */}
        <article className="proj-card overflow-hidden rounded-2xl border border-line bg-white">
          <div className="relative aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/chemiservis-offshore.png"
              alt="Chemiservis Hidráulica v1.3"
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="p-[26px]">
            <div className="mb-[11px] flex items-center gap-2.5">
              <Pill />
              <span className="text-[13px] text-[#7a838f]">Software técnico</span>
            </div>
            <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              Chemiservis Hidráulica v1.3
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">
              11 módulos técnicos y simulador 3D offshore para fluidos de perforación.
            </p>
          </div>
        </article>

        {/* Royers — opens gallery */}
        <article
          onClick={() => setLbIdx(0)}
          className="proj-card cursor-pointer overflow-hidden rounded-2xl border border-line bg-white"
        >
          <div className="relative aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/royers-4.jpeg"
              alt="Royers S.A. de C.V. — Construcción en Tabasco"
              className="block h-full w-full object-cover"
            />
            <div
              className="absolute right-3 top-3 z-[4] inline-flex items-center gap-[7px] rounded-full px-3 py-1.5 text-xs font-semibold text-white"
              style={{
                background: "rgba(12,18,32,.62)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="14" height="14" rx="2" />
                <path d="M21 7v12a2 2 0 0 1-2 2H7" />
              </svg>
              Ver galería
            </div>
          </div>
          <div className="p-[26px]">
            <div className="mb-[11px] flex items-center gap-2.5">
              <Pill />
              <span className="text-[13px] text-[#7a838f]">Sitio web · Construcción</span>
            </div>
            <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              Royers S.A. de C.V.
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">
              35+ años, 500+ obras y 98% de satisfacción. Renders 3D y obras entregadas —{" "}
              <span className="font-semibold" style={{ color: "var(--accent)" }}>
                toca para ver más capturas
              </span>
              .
            </p>
          </div>
        </article>

        {/* Alpha Mobil */}
        <article className="proj-card overflow-hidden rounded-2xl border border-line bg-white">
          <div className="relative aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/alphamobil-escritorio.webp"
              alt="Alpha Mobil — Showroom de mobiliario corporativo"
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="p-[26px]">
            <div className="mb-[11px] flex items-center gap-2.5">
              <Pill />
              <span className="text-[13px] text-[#7a838f]">Sitio web · Mobiliario</span>
            </div>
            <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              Alpha Mobil
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">
              Showroom corporativo con catálogo, galería de proyectos y cotización directa por
              WhatsApp.
            </p>
          </div>
        </article>
      </div>

      {/* Próximamente */}
      <div className="coming-soon relative mt-[22px] flex flex-wrap items-center gap-8 overflow-hidden rounded-2xl border border-dashed border-[#c7ccd6] bg-surface px-10 py-11">
        <div
          className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl"
          style={{
            background: "linear-gradient(150deg, #3b82f6, #2563eb)",
            boxShadow: "0 10px 24px rgba(37,99,235,.28)",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </div>
        <div className="min-w-[280px] flex-1">
          <div
            className="mb-3 inline-flex items-center gap-[7px] rounded-full px-3 py-[5px] font-code text-[11px] font-medium uppercase tracking-[0.1em]"
            style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            En desarrollo · Próximamente
          </div>
          <h3 className="m-0 font-heading text-[25px] font-semibold leading-[1.16] tracking-[-0.02em] text-ink">
            Sistema de Inventario
          </h3>
          <p className="mt-[11px] max-w-[620px] text-[15px] leading-[1.6] text-muted">
            Control de existencias, almacén y administración de inventario. Estamos construyendo un
            producto propio que estará disponible por{" "}
            <strong className="font-semibold text-ink">pago único</strong> o{" "}
            <strong className="font-semibold text-ink">membresía</strong>.
          </p>
        </div>
        <a
          href="https://wa.me/529937226350?text=Hola%20Neurovia%20Systems%2C%20me%20interesa%20el%20Sistema%20de%20Inventario%20%28pago%20%C3%BAnico%20o%20membres%C3%ADa%29"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-outline inline-flex flex-none items-center gap-2 rounded-full px-[26px] py-[13px] text-sm font-semibold no-underline"
        >
          Quiero saber más <span className="arr">→</span>
        </a>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          onClick={() => setLbIdx(-1)}
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center px-6 py-12"
          style={{
            background: "rgba(8,12,20,.88)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Galería Royers"
        >
          <div className="mb-4 flex w-full max-w-[1100px] items-center justify-between">
            <div className="text-white">
              <div className="font-heading text-[18px] font-semibold tracking-[-0.02em]">
                Royers S.A. de C.V. — Galería
              </div>
              <div className="mt-0.5 text-[13px] text-white/60">
                Renders 3D y obras entregadas · {lbIdx + 1} / {ROYERS_GALLERY.length}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLbIdx(-1);
              }}
              aria-label="Cerrar galería"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border-0 text-[22px] leading-none text-white"
              style={{ background: "rgba(255,255,255,.12)" }}
            >
              ×
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[74vh] w-full max-w-[1100px] flex-1 items-center justify-center"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Imagen anterior"
              className="absolute left-[-8px] top-1/2 z-[3] inline-flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border-0 text-[22px] text-ink"
              style={{ background: "rgba(255,255,255,.92)", boxShadow: "0 6px 18px rgba(0,0,0,.3)" }}
            >
              ‹
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ROYERS_GALLERY[lbIdx]}
              alt="Captura del proyecto Royers"
              className="max-h-[74vh] max-w-full rounded-xl object-contain"
              style={{ background: "#0c1220", boxShadow: "0 20px 60px rgba(0,0,0,.5)" }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Imagen siguiente"
              className="absolute right-[-8px] top-1/2 z-[3] inline-flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border-0 text-[22px] text-ink"
              style={{ background: "rgba(255,255,255,.92)", boxShadow: "0 6px 18px rgba(0,0,0,.3)" }}
            >
              ›
            </button>
          </div>
          <div className="mt-3.5 text-xs text-white/50">
            Toca fuera de la imagen o × para cerrar · ‹ › para navegar
          </div>
        </div>
      )}
    </section>
  );
}
