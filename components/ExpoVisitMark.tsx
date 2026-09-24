"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/leadTracking";

/**
 * Deja marcado que el visitante pasó por /expo, para que el aviso del inicio
 * aparezca cuando siga navegando. Dura solo esta sesión.
 */
export default function ExpoVisitMark() {
  useEffect(() => {
    captureAttribution();
    try {
      window.sessionStorage.setItem("nv-expo-visita", "1");
    } catch {
      /* sin sessionStorage: el aviso simplemente no reaparecerá */
    }
  }, []);
  return null;
}
