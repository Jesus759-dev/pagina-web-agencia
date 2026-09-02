"use client";

import { useEffect, useState } from "react";
import NeuroviaLogo from "@/components/NeuroviaLogo";
import { WA_DEFAULT } from "@/lib/site";
import { getDict, localeBase, type Locale } from "@/lib/i18n";
import { trackContact } from "@/lib/analytics";

export default function Navbar({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang);
  const base = localeBase(lang);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false); // drives the enter transition

  // Root-relative anchors (`/#…` or `/en/#…`) so the nav works from subpages too.
  const links: { href: string; label: string; badge?: string }[] = [
    { href: `${base}/#servicios`, label: t.nav.servicios },
    { href: `${base}/#punto-de-venta`, label: t.nav.puntoDeVenta },
    { href: `${base}/#crm`, label: "CRM", badge: t.nav.newBadge },
    { href: `${base}/#proyectos`, label: t.nav.proyectos },
    { href: `${base}/#mapa-clientes`, label: t.nav.dondeOperamos },
    { href: `${base}/#proceso`, label: t.nav.proceso },
    { href: `${base}/nosotros`, label: t.nav.nosotros },
    { href: `${base}/#contacto`, label: t.nav.contacto },
  ];
  const otherHome = lang === "en" ? "/" : "/en";

  // Lock scroll + animate the sheet in; Escape closes it.
  useEffect(() => {
    if (!open) {
      setShow(false);
      return;
    }
    const raf = requestAnimationFrame(() => setShow(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="fixed left-1/2 top-[18px] z-50 w-max max-w-[calc(100%-24px)] -translate-x-1/2">
      <nav
        className="flex items-center gap-2 rounded-full border py-[9px] pl-4 pr-[9px] sm:gap-2.5 sm:pl-5"
        style={{
          background: "rgba(255,255,255,.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,.6)",
          boxShadow: "0 6px 22px rgba(15,23,42,.1)",
        }}
      >
        <a href={`${base}/`} className="flex items-center gap-2.5 pr-1.5 no-underline" aria-label={t.nav.homeAria}>
          <NeuroviaLogo size={24} id="nvNav" />
          <span className="flex flex-col gap-[3px] leading-none">
            <span className="brand-text font-heading text-[18px] font-bold tracking-[-0.01em]">
              Neurovia
            </span>
            <span className="font-code text-[8px] tracking-[0.36em] text-faint">SYSTEMS</span>
          </span>
        </a>

        <span className="hidden h-5 w-px md:block" style={{ background: "rgba(15,42,68,.12)" }} />

        <div className="hidden items-center gap-[26px] px-[18px] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="pill-link flex items-center gap-1.5 text-sm">
              {l.label}
              {l.badge && (
                <span
                  className="rounded-full px-1.5 py-[1px] font-code text-[9px] font-semibold uppercase tracking-[0.1em] text-white"
                  style={{ background: "var(--accent)" }}
                >
                  {l.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Language switch — desktop only in the bar; on mobile it lives in the sheet */}
        <a
          href={otherHome}
          className="hidden rounded-full border border-[rgba(15,42,68,.14)] px-3 py-[7px] font-code text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-2 no-underline transition-colors hover:text-ink md:inline-flex"
          aria-label={t.nav.switchLabel}
        >
          {t.nav.switchLabel}
        </a>

        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackContact}
          className="btn-primary rounded-full px-4 py-2.5 text-[13px] font-semibold no-underline sm:px-5 sm:text-sm"
        >
          {t.nav.cta}
        </a>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.nav.menuLabel}
          aria-expanded={open}
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[rgba(15,42,68,.12)] bg-white/60 text-ink transition-transform active:scale-90 md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label={t.nav.menuLabel}>
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 transition-opacity duration-200"
            style={{ background: "rgba(15,42,68,.5)", opacity: show ? 1 : 0 }}
          />
          <div
            className="absolute left-1/2 top-3 w-[calc(100%-24px)] max-w-[420px] -translate-x-1/2 rounded-3xl border p-4 transition-all duration-200 ease-out"
            style={{
              background: "rgba(253,251,247,.96)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderColor: "rgba(255,255,255,.7)",
              boxShadow: "0 20px 50px rgba(15,23,42,.22)",
              opacity: show ? 1 : 0,
              transform: `translateX(-50%) translateY(${show ? "0" : "-10px"}) scale(${show ? 1 : 0.98})`,
            }}
          >
            <div className="mb-2 flex items-center justify-between px-2">
              <span className="font-code text-[11px] uppercase tracking-[0.18em] text-faint">
                {t.nav.menuLabel}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.nav.menuClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-2 transition-transform active:scale-90"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-ink no-underline transition-colors hover:bg-surface"
                >
                  <span>{l.label}</span>
                  {l.badge ? (
                    <span
                      className="rounded-full px-1.5 py-[1px] font-code text-[9px] font-semibold uppercase tracking-[0.1em] text-white"
                      style={{ background: "var(--accent)" }}
                    >
                      {l.badge}
                    </span>
                  ) : (
                    <span className="text-faint" aria-hidden="true">→</span>
                  )}
                </a>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-3 border-t border-line pt-3">
              <a
                href={otherHome}
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-line px-4 py-2.5 text-center font-code text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-2 no-underline transition-transform active:scale-95"
              >
                {t.nav.switchLabel}
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackContact();
                  setOpen(false);
                }}
                className="btn-primary flex-1 rounded-full px-4 py-2.5 text-center text-sm font-semibold no-underline"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
