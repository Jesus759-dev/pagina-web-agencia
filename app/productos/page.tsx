import type { Metadata } from "next";
import ProductosPage from "@/components/ProductosPage";
import { getProductosHub } from "@/lib/productContent";
import { SITE_URL } from "@/lib/seo";

const hub = getProductosHub("es");

export const metadata: Metadata = {
  title: hub.metaTitle,
  description: hub.metaDescription,
  alternates: {
    canonical: "/productos",
    languages: {
      "es-MX": `${SITE_URL}/productos`,
      "en-US": `${SITE_URL}/en/productos`,
      "x-default": `${SITE_URL}/productos`,
    },
  },
  openGraph: {
    title: `${hub.metaTitle} | Neurovia Systems`,
    description: hub.metaDescription,
    url: `${SITE_URL}/productos`,
    locale: "es_MX",
    type: "website",
  },
};

export default function Page() {
  return <ProductosPage lang="es" />;
}
