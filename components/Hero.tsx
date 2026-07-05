"use client";

import { WA_DEFAULT } from "@/lib/site";

export default function Hero() {
  return (
    <section
      aria-label="Sección principal"
      data-hero
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: "#f0f0ee" }}
    >
      {/* Background video — robotic hand (from the Neurovia Landing Pro design),
          muted + autoplay + loop so it plays without interaction. The still
          frame is the poster for instant first paint / no-JS fallback. */}
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

      {/* Left-to-right legibility wash */}
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
              Sistemas en producción en México <span className="arr">→</span>
            </a>

            <h1
              className="hero-rise m-0 mb-3.5 font-heading text-[34px] font-semibold leading-[1.12] tracking-[-0.03em] text-ink sm:text-[40px]"
              style={{ animationDelay: "0.22s" }}
            >
              Construimos el futuro digital de tu empresa.
            </h1>

            <p
              className="hero-rise m-0 mb-[22px] max-w-[380px] text-sm font-normal leading-[1.55] text-[#6b7280]"
              style={{ animationDelay: "0.36s" }}
            >
              Plataformas, software a medida y automatizaciones con inteligencia artificial.
            </p>

            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.gtag?.("event", "contacto_whatsapp")}
              className="hero-rise cta-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline"
              style={{ animationDelay: "0.5s" }}
            >
              Agenda una consulta gratuita <span className="arr">→</span>
            </a>

            {/* Trust strip — companies already onboard */}
            <div
              className="hero-rise mt-[30px] border-t border-[rgba(12,18,32,0.1)] pt-[22px]"
              style={{ animationDelay: "0.62s" }}
            >
              <div className="mb-3 font-code text-[11px] uppercase tracking-[0.14em] text-faint">
                Empresas que ya confían
              </div>
              <div className="flex flex-wrap items-center gap-x-[22px] gap-y-2 font-heading text-[15px] font-semibold tracking-[-0.01em] text-[#3a4452]">
                <span>Cliente petrolero</span>
                <span className="text-[#c7ccd4]">·</span>
                <span>Royers</span>
                <span className="text-[#c7ccd4]">·</span>
                <span>Alpha Mobil</span>
                <span className="text-[#c7ccd4]">·</span>
                <span>Provalsa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-[26px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-[7px] sm:flex">
          <span className="font-code text-[10px] uppercase tracking-[0.18em] text-faint">
            Scroll
          </span>
          <span className="flex h-[34px] w-[22px] justify-center rounded-full border-[1.5px] border-[rgba(12,18,32,0.25)] pt-1.5">
            <span className="scroll-cue-dot h-[7px] w-[3px] rounded-[2px] bg-[rgba(12,18,32,0.45)]" />
          </span>
        </div>
      </div>
    </section>
  );
}
