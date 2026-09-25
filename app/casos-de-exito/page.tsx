import type { Metadata } from "next";
import CasosPage from "@/components/CasosPage";
import { getCasos } from "@/lib/casosContent";
import { SITE_URL } from "@/lib/seo";

const c = getCasos("es");

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: {
    canonical: "/casos-de-exito",
    languages: {
      "es-MX": `${SITE_URL}/casos-de-exito`,
      "en-US": `${SITE_URL}/en/casos-de-exito`,
      "x-default": `${SITE_URL}/casos-de-exito`,
    },
  },
  openGraph: {
    title: `${c.metaTitle} | Neurovia Systems`,
    description: c.metaDescription,
    url: `${SITE_URL}/casos-de-exito`,
    locale: "es_MX",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: c.metaTitle, description: c.metaDescription },
};

export default function Page() {
  return <CasosPage lang="es" />;
}
