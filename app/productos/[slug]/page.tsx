import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { PRODUCT_SLUGS, getProduct, buildProductMetadata } from "@/lib/productContent";

/** Solo los slugs conocidos: cualquier otro da 404 en vez de una página vacía. */
export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildProductMetadata(getProduct("es", slug), "es");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductPage data={getProduct("es", slug)} lang="es" />;
}
