"use client";

import { useState, useEffect, useCallback } from "react";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

/* Royers gallery — opened from the Royers card. */
const ROYERS_GALLERY = [
  "/assets/royers-6.jpeg",
  "/projects/royers-construction.jpg",
  "/assets/royers-4.jpeg",
];

function Pill({ label }: { label: string }) {
  return (
    <span
      className="rounded-full px-[11px] py-1 font-code text-[11px] font-medium uppercase tracking-[0.06em]"
      style={{ color: "var(--accent)", background: "var(--accent-soft)" }}
    >
      {label}
    </span>
  );
}

/* Overlay de censura para capturas con datos sensibles del cliente. */
function Confidencial({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 z-[3] flex items-center justify-center">
      <div
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white"
        style={{
          background: "rgba(12,18,32,.55)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        {label}
      </div>
    </div>
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

export default function Portfolio({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).portfolio;
  const base = localeBase(lang);
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
        {t.eyebrow}
      </div>
      <h2 className="m-0 max-w-[840px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
        {t.h2}
      </h2>
      <p className="m-0 mt-5 max-w-[640px] text-lg leading-[1.6] text-muted">{t.lead}</p>

      {/* Enlace al catálogo de sistemas (página /sistemas del propio sitio) */}
      <a
        href={`${base}/sistemas`}
        className="btn-primary mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
      >
        {t.ctaSystems} <span aria-hidden="true">→</span>
      </a>

      {/* Nuevo producto destacado: CRM */}
      <a
        href="https://crm.neuroviasystems.cloud/"
        target="_blank"
        rel="noopener noreferrer"
        className="proj-card mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl border-2 bg-white px-8 py-7 no-underline"
        style={{
          borderColor: "var(--accent)",
          boxShadow: "0 18px 50px -18px color-mix(in srgb, var(--accent) 35%, transparent)",
        }}
      >
        <span
          className="rounded-full px-2.5 py-[3px] font-code text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
          style={{ background: "var(--accent)" }}
        >
          {t.crmBadge}
        </span>
        <div className="min-w-[240px] flex-1">
          <h3 className="m-0 font-heading text-[27px] font-semibold leading-[1.16] tracking-[-0.02em] text-ink">
            CRM
          </h3>
          <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{t.crmDesc}</p>
        </div>
        <span className="btn-primary inline-flex flex-none items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
          {t.crmCta} <span aria-hidden="true">→</span>
        </span>
      </a>

      {/* Featured — full width */}
      <div className="proj-card mt-[52px] grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-[1.3fr_1fr]">
        <div className="relative min-h-[340px] overflow-hidden" style={{ background: "#0a1530" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/chemiservis-portal.png"
            alt={t.alts.portal}
            className="block h-full w-full object-cover"
            style={{ filter: "blur(18px)", transform: "scale(1.1)" }}
          />
          <Confidencial label={t.confidential} />
        </div>
        <div className="p-10">
          <div className="mb-3.5 flex items-center gap-2.5">
            <Pill label={t.inProduction} />
            <span className="text-[13px] text-[#7a838f]">{t.featured.cat}</span>
          </div>
          <h3 className="m-0 font-heading text-[27px] font-semibold leading-[1.16] tracking-[-0.02em] text-ink">
            {t.featured.title}
          </h3>
          <p className="mt-3.5 text-[15px] leading-[1.6] text-muted">{t.featured.desc}</p>
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
              alt={t.alts.mantenimiento}
              className="block h-full w-full object-cover"
              style={{ filter: "blur(18px)", transform: "scale(1.1)" }}
            />
            <Confidencial label={t.confidential} />
          </div>
          <div className="p-[26px]">
            <div className="mb-[11px] flex items-center gap-2.5">
              <Pill label={t.inProduction} />
              <span className="text-[13px] text-[#7a838f]">{t.mantenimiento.cat}</span>
            </div>
            <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              {t.mantenimiento.title}
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">{t.mantenimiento.desc}</p>
          </div>
        </article>

        {/* Cliente petrolero — Hidráulica */}
        <article className="proj-card overflow-hidden rounded-2xl border border-line bg-white">
          <div className="relative aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/chemiservis-offshore.png"
              alt={t.alts.hidraulica}
              className="block h-full w-full object-cover"
              style={{ filter: "blur(18px)", transform: "scale(1.1)" }}
            />
            <Confidencial label={t.confidential} />
          </div>
          <div className="p-[26px]">
            <div className="mb-[11px] flex items-center gap-2.5">
              <Pill label={t.inProduction} />
              <span className="text-[13px] text-[#7a838f]">{t.hidraulica.cat}</span>
            </div>
            <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              {t.hidraulica.title}
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">{t.hidraulica.desc}</p>
          </div>
        </article>

        {/* Royers — enlace al sitio + galería */}
        <a
          href="https://royers.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-card block cursor-pointer overflow-hidden rounded-2xl border border-line bg-white no-underline"
        >
          <div className="relative aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/royers-4.jpeg"
              alt={t.alts.royers}
              className="block h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setLbIdx(0);
              }}
              className="absolute right-3 top-3 z-[4] inline-flex items-center gap-[7px] rounded-full border-0 px-3 py-1.5 text-xs font-semibold text-white"
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
              {t.lightbox.galleryAria}
            </button>
          </div>
          <div className="p-[26px]">
            <div className="mb-[11px] flex items-center gap-2.5">
              <Pill label={t.inProduction} />
              <span className="text-[13px] text-[#7a838f]">{t.royers.cat}</span>
            </div>
            <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              {t.royers.title}
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">
              {t.royers.descPrefix}
              <span className="font-semibold" style={{ color: "var(--accent)" }}>
                {t.tapToVisit}
              </span>
              .
            </p>
          </div>
        </a>

        {/* Alpha Mobil */}
        <a
          href="https://alphamobil.com.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-card block overflow-hidden rounded-2xl border border-line bg-white no-underline"
        >
          <div className="relative aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/alphamobil-escritorio.webp"
              alt={t.alts.alphamobil}
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="p-[26px]">
            <div className="mb-[11px] flex items-center gap-2.5">
              <Pill label={t.inProduction} />
              <span className="text-[13px] text-[#7a838f]">{t.alphamobil.cat}</span>
            </div>
            <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              {t.alphamobil.title}
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">{t.alphamobil.desc}</p>
          </div>
        </a>

        {/* Provalsa */}
        <a
          href="https://provalsa.com.mx/"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-card block overflow-hidden rounded-2xl border border-line bg-white no-underline"
        >
          <div className="relative aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/provalsa.jpg"
              alt={t.alts.provalsa}
              className="block h-full w-full object-cover"
            />
          </div>
          <div className="p-[26px]">
            <div className="mb-[11px] flex items-center gap-2.5">
              <Pill label={t.inProduction} />
              <span className="text-[13px] text-[#7a838f]">{t.provalsa.cat}</span>
            </div>
            <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              {t.provalsa.title}
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">{t.provalsa.desc}</p>
          </div>
        </a>

        {/* TACEF Aceros */}
        <a
          href="https://calm-entremet-3d7138.netlify.app/tacef%20aceros.dc"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-card block overflow-hidden rounded-2xl border border-line bg-white no-underline"
        >
          <div
            className="relative flex aspect-video items-center justify-center overflow-hidden"
            style={{ background: "radial-gradient(circle at 50% 38%, #2b3543, #0d1219)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://calm-entremet-3d7138.netlify.app/assets/logo.jpg"
              alt={t.alts.tacef}
              className="max-h-[60%] max-w-[68%] object-contain"
            />
          </div>
          <div className="p-[26px]">
            <div className="mb-[11px] flex items-center gap-2.5">
              <Pill label={t.inProduction} />
              <span className="text-[13px] text-[#7a838f]">{t.tacef.cat}</span>
            </div>
            <h3 className="m-0 font-heading text-[21px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              {t.tacef.title}
            </h3>
            <p className="mt-[11px] text-sm leading-[1.6] text-muted">
              {t.tacef.descPrefix}
              <span className="font-semibold" style={{ color: "var(--accent)" }}>
                {t.tapToVisit}
              </span>
              .
            </p>
          </div>
        </a>
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
            {t.comingSoon.badge}
          </div>
          <h3 className="m-0 font-heading text-[25px] font-semibold leading-[1.16] tracking-[-0.02em] text-ink">
            {t.comingSoon.title}
          </h3>
          <p className="mt-[11px] max-w-[620px] text-[15px] leading-[1.6] text-muted">
            {t.comingSoon.descA}
            <strong className="font-semibold text-ink">{t.comingSoon.once}</strong>
            {t.comingSoon.or}
            <strong className="font-semibold text-ink">{t.comingSoon.membership}</strong>.
          </p>
        </div>
        <a
          href="https://wa.me/529937226350?text=Hola%20Neurovia%20Systems%2C%20me%20interesa%20el%20Sistema%20de%20Inventario%20%28pago%20%C3%BAnico%20o%20membres%C3%ADa%29"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.gtag?.("event", "contacto_whatsapp")}
          className="cta-outline inline-flex flex-none items-center gap-2 rounded-full px-[26px] py-[13px] text-sm font-semibold no-underline"
        >
          {t.comingSoon.cta} <span className="arr">→</span>
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
          aria-label={t.lightbox.galleryAria}
        >
          <div className="mb-4 flex w-full max-w-[1100px] items-center justify-between">
            <div className="text-white">
              <div className="font-heading text-[18px] font-semibold tracking-[-0.02em]">
                {t.lightbox.title}
              </div>
              <div className="mt-0.5 text-[13px] text-white/60">
                {t.lightbox.subtitle} · {lbIdx + 1} / {ROYERS_GALLERY.length}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLbIdx(-1);
              }}
              aria-label={t.lightbox.close}
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
              aria-label={t.lightbox.prev}
              className="absolute left-[-8px] top-1/2 z-[3] inline-flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border-0 text-[22px] text-ink"
              style={{ background: "rgba(255,255,255,.92)", boxShadow: "0 6px 18px rgba(0,0,0,.3)" }}
            >
              ‹
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ROYERS_GALLERY[lbIdx]}
              alt={t.lightbox.imgAlt}
              className="max-h-[74vh] max-w-full rounded-xl object-contain"
              style={{ background: "#0c1220", boxShadow: "0 20px 60px rgba(0,0,0,.5)" }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label={t.lightbox.next}
              className="absolute right-[-8px] top-1/2 z-[3] inline-flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full border-0 text-[22px] text-ink"
              style={{ background: "rgba(255,255,255,.92)", boxShadow: "0 6px 18px rgba(0,0,0,.3)" }}
            >
              ›
            </button>
          </div>
          <div className="mt-3.5 text-xs text-white/50">{t.lightbox.hint}</div>
        </div>
      )}
    </section>
  );
}
