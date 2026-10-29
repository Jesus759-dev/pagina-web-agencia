import type { Metadata } from "next";
import GraciasPage from "@/components/GraciasPage";
import { getDict } from "@/lib/i18n";

const t = getDict("en").gracias;

export const metadata: Metadata = {
  title: "Thank you",
  description: t.lead,
  // Página de confirmación: no debe aparecer en Google ni recibir tráfico directo.
  robots: { index: false, follow: false },
};

export default function Page() {
  return <GraciasPage lang="en" />;
}
