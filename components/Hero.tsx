"use client";

import { WA_DEFAULT } from "@/lib/site";
import { getDict, type Locale } from "@/lib/i18n";
import { trackContact } from "@/lib/analytics";

/**
 * Hero over the global particle canvas (components/ParticleField.tsx).
 * No background of its own: the canvas shows through at full intensity here
 * and a soft bottom gradient fades it into the page ground. Copy, H1 and
 * CTAs are unchanged; layout follows the reference (bottom-aligned, headline
 * left, aside right).
 */
export default function Hero({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).hero;

  return (
    <section
      aria-label={t.sectionAria}
      data-hero
      className="relative flex min-h-[max(640px,100svh)] flex-col overflow-hidden"
    >
      {/* Fade the canvas into the page ground */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[45%]"
        aria-hidden="true"
        style={{ background: "linear-gradient(to top, #fdfbf7 15%, transparent)" }}
      />

      {/* Rotated scroll hint (reference) */}
      <div
        className="absolute right-6 top-1/2 z-[2] hidden origin-right -translate-y-1/2 rotate-90 text-[11px] uppercase tracking-[0.2em] text-faint sm:right-10 md:block"
        aria-hidden="true"
      >
        {t.scroll}
      </div>

      <div className="relative z-[2] flex flex-1 items-end px-6 pb-14 sm:px-10 sm:pb-[72px] lg:px-14">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-end gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <a
              href="#proyectos"
              className="hero-rise badge-link mb-5 inline-flex items-center gap-1.5 text-[13px] font-semibold"
              style={{ animationDelay: "0.1s" }}
            >
              {t.badge} <span className="arr">→</span>
            </a>

            <h1
              className="hero-rise m-0 max-w-[12ch] font-heading text-[clamp(46px,7.2vw,112px)] leading-[0.98] tracking-[-0.02em] text-ink"
              style={{ animationDelay: "0.22s" }}
            >
              {t.h1}
            </h1>
          </div>

          <div className="hero-rise max-w-[34ch] pb-1 md:pb-3" style={{ animationDelay: "0.36s" }}>
            <strong className="mb-1.5 block text-[15px] font-medium text-ink">Neurovia Systems</strong>
            <p className="m-0 text-[15px] leading-[1.6] text-muted">{t.lead}</p>

            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackContact}
              className="btn-primary mt-6 inline-flex items-center gap-3 rounded-full px-7 py-4 text-[15px] font-semibold no-underline"
            >
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
              {t.cta}
            </a>

            <div className="mt-7 border-t border-line pt-5">
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
      </div>
    </section>
  );
}
