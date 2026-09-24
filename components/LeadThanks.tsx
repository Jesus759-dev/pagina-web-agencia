"use client";

import { useEffect } from "react";
import { trackFormLead } from "@/lib/analytics";

/**
 * Dispara la conversión al abrir /gracias, UNA sola vez por sesión: si el
 * visitante recarga o vuelve con el botón atrás, no se cuenta otra vez.
 */
const KEY = "nv-lead-fired";

export default function LeadThanks() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(KEY)) return;
      window.sessionStorage.setItem(KEY, "1");
    } catch {
      /* sin sessionStorage: se dispara igual, es preferible a perder la conversión */
    }
    trackFormLead("form");
  }, []);

  return null;
}
