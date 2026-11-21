import type { Metadata } from "next";
import PreciosPage from "@/components/PreciosPage";
import { getPrecios } from "@/lib/preciosContent";

const SITE_URL = "https://neuroviasystems.com.mx";
const c = getPrecios("es");

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/precios`,
    languages: {
      "es-MX": `${SITE_URL}/precios`,
      "en-US": `${SITE_URL}/en/precios`,
      "x-default": `${SITE_URL}/precios`,
    },
  },
  openGraph: {
    title: `${c.metaTitle} | Neurovia Systems`,
    description: c.metaDescription,
    url: `${SITE_URL}/precios`,
    type: "website",
  },
};

export default function Page() {
  return <PreciosPage lang="es" />;
}
