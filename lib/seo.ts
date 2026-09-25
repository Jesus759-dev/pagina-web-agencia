import { localeBase, type Locale } from "./i18n";

/* --------------------------------------------------------------------------
 * Datos estructurados por página.
 *
 * El layout raíz declara las entidades del sitio (el negocio, el WebSite, los
 * productos). Lo que NO puede vivir ahí es la WebPage: si el mismo nodo se
 * inyecta en todas las URLs, cada página le dice a Google que es la portada.
 * Cada ruta arma la suya con estos ayudantes, colgándola del mismo grafo por
 * @id para que Google entienda que es el mismo negocio.
 * -------------------------------------------------------------------------- */

export const SITE_URL = "https://neuroviasystems.com.mx";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
const OG_IMAGE = `${SITE_URL}/images/og-robotic-hand.jpg`;

export type Crumb = { name: string; path: string };

export function lang2locale(lang: Locale): string {
  return lang === "en" ? "en-US" : "es-MX";
}

/** Miga de pan: Inicio → … → página actual. */
export function breadcrumbJsonLd(crumbs: Crumb[], lang: Locale = "es") {
  const home = { name: lang === "en" ? "Home" : "Inicio", path: localeBase(lang) || "/" };
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${crumbs[crumbs.length - 1]?.path ?? ""}#breadcrumb`,
    itemListElement: [home, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

/**
 * WebPage de una ruta concreta, ligada al WebSite y al negocio. `crumbs` son
 * los niveles DESPUÉS de Inicio (el último debe ser la página actual).
 */
export function webPageJsonLd({
  path,
  name,
  description,
  lang = "es",
  crumbs,
  primaryImage = OG_IMAGE,
  type = "WebPage",
  extra = [],
}: {
  path: string;
  name: string;
  description: string;
  lang?: Locale;
  crumbs?: Crumb[];
  primaryImage?: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
  extra?: Record<string, unknown>[];
}) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const page: Record<string, unknown> = {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: lang2locale(lang),
    primaryImageOfPage: primaryImage,
  };
  const graph: Record<string, unknown>[] = [page];
  if (crumbs?.length) {
    const bc = breadcrumbJsonLd(crumbs, lang);
    page.breadcrumb = { "@id": bc["@id"] };
    graph.push(bc);
  }
  return { "@context": "https://schema.org", "@graph": [...graph, ...extra] };
}

/** `<script type="application/ld+json">` listo para insertar. */
export function jsonLdProps(data: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
