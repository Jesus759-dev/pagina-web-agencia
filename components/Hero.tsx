"use client";

import { getDict, localeBase, type Locale } from "@/lib/i18n";
import WaLink from "@/components/WaLink";

/**
 * Hero over the global particle canvas (components/ParticleField.tsx).
 * No background of its own: the canvas shows through at full intensity here
 * and a soft bottom gradient fades it into the page ground.
 *
 * Built for cold Meta Ads traffic (100% mobile): one column, concrete
 * headline + subtitle, WhatsApp as the primary action. On a 390x844 phone the
 * headline, subtitle and primary CTA must be visible without scrolling, so the
 * block is top-aligned on mobile and bottom-aligned (reference look) from md.
 */
export default function Hero({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).hero;
  const base = localeBase(lang);

  return (
    <section
      aria-label={t.sectionAria}
      data-hero
      className="relative flex min-h-[560px] flex-col overflow-hidden md:min-h-[max(640px,100svh)]"
    >
      {/* Fade the canvas into the page ground */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[68%] md:h-[45%]"
        aria-hidden="true"
        style={{ background: "linear-gradient(to top, #fdfbf7 22%, rgba(253,251,247,.75) 55%, transparent)" }}
      />

      {/* Rotated scroll hint (reference) */}
      <div
        className="absolute right-6 top-1/2 z-[2] hidden origin-right -translate-y-1/2 rotate-90 text-[11px] uppercase tracking-[0.2em] text-faint sm:right-10 md:block"
        aria-hidden="true"
      >
        {t.scroll}
      </div>

      <div className="relative z-[2] flex flex-1 items-start px-6 pb-12 pt-[104px] sm:px-10 md:items-end md:pb-[72px] md:pt-[140px] lg:px-14">
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1520px] 2xl:max-w-[1680px]">
          <a
            href="#proyectos"
            className="hero-rise badge-link mb-4 inline-flex items-center gap-1.5 text-[13px] font-semibold md:mb-5"
            style={{ animationDelay: "0.1s" }}
          >
            {t.badge} <span className="arr">→</span>
          </a>

          <h1
            className="hero-rise m-0 max-w-[14ch] font-heading text-[clamp(40px,6.4vw,104px)] leading-[0.98] tracking-[-0.02em] text-ink"
            style={{ animationDelay: "0.22s" }}
          >
            {t.h1}
          </h1>

          <p
            className="hero-rise m-0 mt-4 max-w-[44ch] text-[17px] leading-[1.55] text-ink-2 md:mt-6 md:text-[19px]"
            style={{ animationDelay: "0.32s" }}
          >
            {t.lead}
          </p>

          <div className="hero-rise mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-8" style={{ animationDelay: "0.4s" }}>
            <WaLink
              context="general"
              lang={lang}
              className="btn-primary inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[15px] font-semibold no-underline"
            >
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
              {t.ctaPrimary}
            </WaLink>
            <a
              href={`${base}/agenda`}
              className="cta-outline inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold no-underline"
            >
              {t.ctaSecondary} <span className="arr">→</span>
            </a>
          </div>

          <div className="hero-rise mt-8 border-t border-line pt-5 md:mt-10" style={{ animationDelay: "0.5s" }}>
            <div className="mb-2.5 text-[11px] uppercase tracking-[0.14em] text-faint">{t.trustLabel}</div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[14px] font-medium text-ink-2">
              {t.companies.map((c, i) => (
                <span key={c} className="flex items-center gap-x-4">
                  {i > 0 && <span className="text-line-2" aria-hidden="true">·</span>}
                  <span>{c}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
