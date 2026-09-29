import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { GUIDE_SLUGS, getGuide } from "@/lib/guidesContent";
import { SITE_URL } from "@/lib/seo";

/** Solo las guías que existen; cualquier otro slug da 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  const url = `${SITE_URL}/guias/${g.slug}`;
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    keywords: [g.keyword],
    alternates: { canonical: `/guias/${g.slug}` },
    openGraph: {
      title: `${g.metaTitle} | Neurovia Systems`,
      description: g.metaDescription,
      url,
      locale: "es_MX",
      type: "article",
      publishedTime: g.publicado,
      modifiedTime: g.actualizado,
    },
    twitter: { card: "summary_large_image", title: g.metaTitle, description: g.metaDescription },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <GuidePage guide={getGuide(slug)} />;
}
