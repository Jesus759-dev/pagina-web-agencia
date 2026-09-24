"use client";

import type { ReactNode } from "react";
import { trackExpo } from "@/lib/analytics";
import { EXPO } from "@/lib/expo";

/**
 * Enlace a la demo abierta de Neurovia Build (control de obra). Se entra con un
 * clic desde su propia pantalla de acceso, sin contraseña. Marca el clic en GA4
 * para saber cuánta gente de la expo entró a probar el sistema.
 */
export default function ExpoDemoLink({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <a
      href={EXPO.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackExpo("expo_demo_click")}
    >
      {children}
    </a>
  );
}
