"use client";

import { WA_DEFAULT } from "@/lib/site";
import { getDict, type Locale } from "@/lib/i18n";

export default function Hero({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).hero;

  return (
    <section
      aria-label={t.sectionAria}
      data-hero
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: "#f0f0ee" }}
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-robotic-hand.jpg"
      >
        <source src="/videos/neurovia-robotic-hand.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(120deg, rgba(240,240,238,.78) 0%, rgba(240,240,238,.28) 38%, rgba(240,240,238,0) 62%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 items-end px-7 pb-[72px] sm:px-12 lg:pl-20 lg:pr-7">
          <div className="max-w-[480px]">
            <a
              href="#proyectos"
              className="hero-rise badge-link mb-4 inline-flex items-center gap-1.5 text-[13px] font-semibold"
              style={{ animationDelay: "0.1s" }}
            >
              {t.badge} <span className="arr">→</span>
            </a>

            <h1
              className="hero-rise m-0 mb-3.5 font-heading text-[34px] font-semibold leading-[1.12] tracking-[-0.03em] text-ink sm:text-[40px]"
              style={{ animationDelay: "0.22s" }}
            >
              {t.h1}
            </h1>

            <p
              className="hero-rise m-0 mb-[22px] max-w-[380px] text-sm font-normal leading-[1.55] text-[#6b7280]"
              style={{ animationDelay: "0.36s" }}
            >
              {t.lead}
            </p>

            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.gtag?.("event", "contacto_whatsapp")}
              className="hero-rise cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
              style={{ animationDelay: "0.5s" }}
            >
              {t.cta} <span className="arr">→</span>
            </a>

            <div
              className="hero-rise mt-[30px] border-t border-[rgba(12,18,32,0.1)] pt-[22px]"
              style={{ animationDelay: "0.62s" }}
            >
              <div className="mb-3 font-code text-[11px] uppercase tracking-[0.14em] text-faint">
                {t.trustLabel}
              </div>
              <div className="flex flex-wrap items-center gap-x-[22px] gap-y-2 font-heading text-[15px] font-semibold tracking-[-0.01em] text-[#3a4452]">
                {t.companies.map((c, i) => (
                  <span key={c} className="flex items-center gap-x-[22px]">
                    {i > 0 && <span className="text-[#c7ccd4]">·</span>}
                    <span>{c}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[26px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-[7px] sm:flex">
          <span className="font-code text-[10px] uppercase tracking-[0.18em] text-faint">
            {t.scroll}
          </span>
          <span className="flex h-[34px] w-[22px] justify-center rounded-full border-[1.5px] border-[rgba(12,18,32,0.25)] pt-1.5">
            <span className="scroll-cue-dot h-[7px] w-[3px] rounded-[2px] bg-[rgba(12,18,32,0.45)]" />
          </span>
        </div>
      </div>
    </section>
  );
}
