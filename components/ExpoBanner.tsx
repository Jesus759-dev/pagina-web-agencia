"use client";

import { useEffect, useState } from "react";
import { trackExpo } from "@/lib/analytics";
import { captureAttribution, isGoogleAdsVisitor } from "@/lib/leadTracking";
import { EXPO } from "@/lib/expo";
import { getDict, localeBase, type Locale } from "@/lib/i18n";

/**
 * Aviso flotante para quien nos conoció en la expo.
 *
 * Solo se muestra a quien viene del evento: URL con ?ref=expo o visitante que
 * ya pasó por /expo en esta sesión. Nunca se muestra a quien llega de un
 * anuncio de Google (gclid/utm_source=google): ese tráfico se paga y merece el
 * mensaje de la campaña, no un aviso de un evento al que no fue.
 *
 * Además solo se monta mientras la campaña está vigente (isExpoActive() en la
 * página) y el visitante puede cerrarlo: la decisión se guarda en el navegador.
 *
 * Va arriba de los botones flotantes de WhatsApp y chat (abajo a la derecha),
 * para no taparlos ni tapar los botones del hero.
 */
const KEY = `nv-expo-${EXPO.end.slice(0, 10)}`;
const SEEN_KEY = "nv-expo-visita";

export default function ExpoBanner({ lang = "es" }: { lang?: Locale }) {
  const t = getDict(lang).expo;
  const [show, setShow] = useState(false);

  useEffect(() => {
    captureAttribution();

    let dismissed = false;
    let fromExpo = false;
    try {
      dismissed = window.localStorage.getItem(KEY) === "1";
      const fromUrl = new URL(window.location.href).searchParams.get("ref") === "expo";
      if (fromUrl) window.sessionStorage.setItem(SEEN_KEY, "1");
      fromExpo =
        fromUrl ||
        window.sessionStorage.getItem(SEEN_KEY) === "1" ||
        document.referrer.includes(`${window.location.host}${EXPO.path}`);
    } catch {
      /* navegador sin almacenamiento: nos quedamos con lo que diga la URL */
    }

    if (!dismissed && fromExpo && !isGoogleAdsVisitor()) {
      const id = window.setTimeout(() => setShow(true), 900); // deja ver el hero primero
      return () => window.clearTimeout(id);
    }
  }, []);

  function close() {
    setShow(false);
    try {
      window.localStorage.setItem(KEY, "1");
    } catch {
      /* sin almacenamiento: reaparecerá en la próxima visita */
    }
  }

  return (
    <div
      className={`fixed right-4 bottom-[152px] z-[9996] w-[calc(100vw-32px)] max-w-[400px] transition-all duration-500 sm:right-6 sm:w-auto ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      role="complementary"
      aria-hidden={!show}
    >
      <div
        className="relative overflow-hidden rounded-2xl p-[1.5px]"
        style={{ background: "linear-gradient(135deg, #2f8fe8, #9ad6f7 45%, #2f8fe8)" }}
      >
        <span
          aria-hidden="true"
          className="expo-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3"
          style={{ background: "linear-gradient(100deg, transparent, rgba(255,255,255,.75), transparent)" }}
        />
        <div className="relative rounded-[14px] bg-[#0f2a44] px-4 py-4 text-white sm:px-5">
          <button
            type="button"
            onClick={close}
            aria-label={t.bannerClose}
            className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-2 pr-7 font-code text-[10.5px] uppercase tracking-[0.14em] text-[#9ad6f7]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9ad6f7] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9ad6f7]" />
            </span>
            {t.bannerEyebrow}
          </div>

          <p className="m-0 mt-2 font-heading text-[22px] leading-[1.15] tracking-[-0.02em] sm:text-[25px]">{t.bannerTitle}</p>
          <p className="m-0 mt-1.5 max-w-[42ch] text-[13.5px] leading-[1.5] text-white/70">{t.bannerText}</p>

          <a
            href={`${localeBase(lang)}${EXPO.path}`}
            onClick={() => trackExpo("expo_banner_click")}
            className="mt-3.5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[14px] font-semibold text-[#0f2a44] no-underline transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            {t.bannerCta} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
