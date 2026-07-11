"use client";

import { WA_DEFAULT } from "@/lib/site";
import { getDict, type Locale } from "@/lib/i18n";

export default function Contact({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).contact;

  return (
    <section id="contacto" className="mt-20">
      <div className="mx-auto max-w-[1100px] px-5 pb-[100px] sm:px-10">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-20 text-center sm:px-12"
          style={{ background: "var(--accent)" }}
        >
          <div
            className="absolute left-1/2 top-[-30%] h-[700px] w-[700px] -ml-[350px] rounded-full"
            aria-hidden="true"
            data-parallax
            data-parallax-speed="0.25"
            data-parallax-max="16"
            style={{ background: "rgba(255,255,255,.12)", filter: "blur(60px)" }}
          />
          <div className="relative z-[2] mx-auto max-w-[720px]">
            <div className="mb-6 inline-flex items-center gap-[9px] font-code text-xs uppercase tracking-[0.1em] text-white/85">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-white" />
              {t.badge}
            </div>
            <h2 className="m-0 font-heading text-[40px] font-bold leading-[1.04] tracking-[-0.035em] text-white sm:text-[56px]">
              {t.h2}
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-lg leading-[1.6] text-white/[0.88]">
              {t.lead}
            </p>
            <div className="mt-9">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.gtag?.("event", "contacto_whatsapp")}
                className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-[18px] text-[17px] font-bold no-underline"
                style={{ color: "var(--accent)", boxShadow: "0 14px 30px rgba(0,0,0,.18)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.16c-.24.68-1.42 1.31-1.95 1.36-.5.05-1.13.07-1.83-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.19-1.18-1.57-1.18-2.99s.75-2.12 1.01-2.41c.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.59.83 2.03.9 2.18.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.07.17-.19.69-.81.88-1.09.18-.28.37-.23.62-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.32.07.12.07.66-.17 1.34z" />
                </svg>
                {t.phoneCta}
              </a>
            </div>
            <p className="mt-5 text-[15px] text-white/[0.88]">
              {t.emailPrefix}{" "}
              <a
                href="mailto:soporte@neuroviasystems.com.mx"
                onClick={() => window.gtag?.("event", "clic_correo")}
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
              >
                soporte@neuroviasystems.com.mx
              </a>
            </p>
            <div className="mt-[46px] flex flex-wrap justify-center gap-11">
              {t.figures.map((f) => (
                <div key={f.label} className="text-center">
                  <div className="font-heading text-[34px] font-bold tracking-[-0.03em] text-white">
                    {f.value}
                  </div>
                  <div className="mt-1 text-[13px] text-white/[0.78]">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
