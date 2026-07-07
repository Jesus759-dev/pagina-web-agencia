"use client";

import NeuroviaLogo from "@/components/NeuroviaLogo";
import { WA_DEFAULT } from "@/lib/site";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

export default function Navbar({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang);
  const base = localeBase(lang);
  // Root-relative anchors (`/#…` or `/en/#…`) so the nav works from subpages too.
  const links = [
    { href: `${base}/#servicios`, label: t.nav.servicios },
    { href: `${base}/#punto-de-venta`, label: t.nav.puntoDeVenta },
    { href: `${base}/#proyectos`, label: t.nav.proyectos },
    { href: `${base}/#proceso`, label: t.nav.proceso },
    { href: `${base}/#nosotros`, label: t.nav.nosotros },
    { href: `${base}/#contacto`, label: t.nav.contacto },
  ];
  const otherHome = lang === "en" ? "/" : "/en";

  return (
    <div className="fixed left-1/2 top-[18px] z-50 w-max max-w-[calc(100%-32px)] -translate-x-1/2">
      <nav
        className="flex items-center gap-2.5 rounded-full border py-[9px] pl-5 pr-[9px]"
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

        <span className="hidden h-5 w-px md:block" style={{ background: "rgba(12,18,32,.12)" }} />

        <div className="hidden items-center gap-[26px] px-[18px] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="pill-link flex items-center gap-1.5 text-sm">
              {l.label}
            </a>
          ))}
        </div>

        {/* Language switch */}
        <a
          href={otherHome}
          className="rounded-full border border-[rgba(12,18,32,.14)] px-3 py-[7px] font-code text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-2 no-underline transition-colors hover:text-ink"
          aria-label={t.nav.switchLabel}
        >
          {t.nav.switchLabel}
        </a>

        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.gtag?.("event", "contacto_whatsapp")}
          className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold no-underline"
        >
          {t.nav.cta}
        </a>
      </nav>
    </div>
  );
}
