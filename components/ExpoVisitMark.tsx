"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/leadTracking";
import { markExpoVisit } from "@/lib/expo";

/**
 * Deja marcado que el visitante pasó por /expo, para que el aviso del inicio
 * aparezca cuando siga navegando. Caduca a las 12 h (en el celular una pestaña
 * puede quedarse abierta días, y el aviso no debe perseguir a nadie).
 */
export default function ExpoVisitMark() {
  useEffect(() => {
    captureAttribution();
    markExpoVisit();
  }, []);
  return null;
}
