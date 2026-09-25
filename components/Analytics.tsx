"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import MetaPixel from "@/components/MetaPixel";
import { isProductionHost, resolveInternalFlag, warnTrackingOff } from "@/lib/tracking-consent";

/**
 * Puerta de entrada de la medición.
 *
 * Decide en el navegador si se cargan GA4 y el píxel de Meta:
 * - Solo en neuroviasystems.com.mx (o www). En localhost y vistas previas no se
 *   carga nada y se avisa por consola: así las pruebas no ensucian los informes.
 * - Si el dispositivo está marcado como interno (?internal=1), GA4 se configura
 *   con traffic_type "internal" y el píxel de Meta no se carga.
 *
 * Se decide después de montar porque depende del hostname y del navegador; los
 * scripts se inyectan igual con next/script.
 */
export default function Analytics({ gaId }: { gaId: string }) {
  const [state, setState] = useState<{ on: boolean; internal: boolean } | null>(null);

  useEffect(() => {
    if (!isProductionHost()) {
      warnTrackingOff(`host "${window.location.hostname}" no es el sitio de producción`);
      setState({ on: false, internal: false });
      return;
    }
    const internal = resolveInternalFlag();
    if (internal) console.info("[Neurovia] Este dispositivo está marcado como tráfico interno (GA4: traffic_type=internal, sin Meta Pixel).");
    setState({ on: true, internal });
  }, []);

  if (!state?.on) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}'${state.internal ? ", { traffic_type: 'internal' }" : ""});
        `}
      </Script>
      {/* El píxel de Meta nunca se carga para tráfico interno. */}
      {!state.internal && <MetaPixel />}
    </>
  );
}
