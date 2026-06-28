import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/serviceContent";

const BASE = "https://neuroviasystems.com.mx";

/**
 * Sitemap: the homepage plus one dedicated local-SEO landing page per
 * service (app/<slug>/page.tsx). The `images`/`videos` extensions on the
 * homepage help Google index the project screenshots and showcase video.
 *
 * Hash-fragment anchors (#servicios, #proyectos, …) are NOT added — Google
 * treats them as the same URL as "/", so listing them would only pollute
 * Search Console reports. The real service routes below, however, ARE
 * distinct URLs and must be listed so Google discovers and ranks them.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${BASE}/projects/requisiciones-dashboard.png`,
        `${BASE}/projects/chemiservis-offshore.png`,
        `${BASE}/projects/chemiservis-hidraulica.png`,
        `${BASE}/projects/chemiservis-login.jpg`,
        `${BASE}/projects/royers-construction.jpg`,
        `${BASE}/projects/provalsa.jpg`,
      ],
      videos: [
        {
          title: "Neurovia Systems — Presentación institucional",
          thumbnail_loc: `${BASE}/projects/requisiciones-dashboard.png`,
          description:
            "Conoce cómo Neurovia Systems desarrolla software con inteligencia artificial, automatización empresarial y plataformas web para empresas en Latinoamérica.",
          content_loc: `${BASE}/videos/neurovia-showcase.mp4`,
          family_friendly: "yes",
          live: "no",
        },
      ],
    },
    ...servicePages,
  ];
}
