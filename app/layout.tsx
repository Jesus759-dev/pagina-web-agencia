import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import ScrollChoreography from "@/components/ScrollChoreography";
import WebMcpTools from "@/components/WebMcpTools";
import ParticleFieldLoader from "@/components/ParticleFieldLoader";
import Analytics from "@/components/Analytics";

// Editorial serif for headings (single weight 400, tight tracking) and a
// clean geometric sans for everything else — the reference design pairing.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  preload: false, // titulares: no compite con la fuente de texto en la carga
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true, // la fuente principal del texto: se precarga
});

/* --------------------------------------------------------------------------
 * SEO constants — single source of truth for metadata and JSON-LD.
 * -------------------------------------------------------------------------- */
const SITE_URL = "https://neuroviasystems.com.mx";
const SITE_NAME = "Neurovia Systems";
// Orden a propósito: servicio + ciudad primero, marca al final. Y por debajo
// de ~65 caracteres, que es lo que Google alcanza a mostrar.
const SITE_TITLE = "Desarrollo de Software e IA en Villahermosa | Neurovia Systems";
const SITE_DESCRIPTION =
  "Desarrollo de software a medida, sistemas empresariales, IA y automatización en Villahermosa, Tabasco. Consulta gratuita con quien construye.";
const OG_IMAGE = `${SITE_URL}/images/og-robotic-hand.jpg`;

/**
 * Revalidate the HTML every 5 minutes (ISR) instead of leaving pages fully
 * static. A fully static page ships `Cache-Control: s-maxage=31536000` (one
 * year), which made the Hostinger CDN serve stale HTML pointing at hashed
 * `/_next/static` chunks from an older build (→ 404 → unstyled/broken pages
 * on mobile). With ISR, Next emits `s-maxage=300, stale-while-revalidate=...`,
 * so the CDN refreshes the HTML within minutes of a redeploy. Hashed assets
 * under /_next/static keep their own immutable 1-year cache (unaffected).
 * Applies site-wide as the default for every route under this root layout.
 */
export const revalidate = 300;

/** Google Analytics 4 — measurement ID (público, viaja en el HTML). */
const GA_MEASUREMENT_ID = "G-PBY374Y0E3";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Neurovia Systems",
    "desarrollo de software",
    "inteligencia artificial empresas",
    "automatización empresarial",
    "plataformas web corporativas",
    "dashboards corporativos",
    "sistemas corporativos a medida",
    "soluciones digitales empresariales",
    "software a medida México",
    "desarrollo web México",
    "desarrollo web Latinoamérica",
    "desarrollo web Villahermosa",
    "desarrollo web Tabasco",
    "agencia de software Villahermosa",
    "agencia de software Tabasco",
    "páginas web Villahermosa",
    "automatización empresarial Tabasco",
    "inteligencia artificial Villahermosa",
    "soporte IT Villahermosa Tabasco",
    "agencia de software",
    "aplicaciones IA a medida",
    "infraestructura IT empresarial",
    "redes Ubiquiti instalación",
    "ERP a medida",
    "e-commerce profesional",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Technology",
  classification: "Business · Technology · Software Development",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-MX": SITE_URL,
      "en-US": `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Neurovia Systems — Desarrollo de Software, IA y Automatización Empresarial",
        type: "image/jpeg",
      },
    ],
    videos: [
      {
        url: `${SITE_URL}/videos/neurovia-showcase.mp4`,
        width: 1280,
        height: 720,
        type: "video/mp4",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Desarrollo de software, IA y automatización empresarial. Plataformas, dashboards y soluciones digitales de nivel empresa.",
    images: [OG_IMAGE],
    creator: "@neuroviasystems",
    site: "@neuroviasystems",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  verification: {
    // TODO: Pega aquí el código que te dé Google Search Console al verificar
    // google: "TU-CODIGO-DE-VERIFICACION-AQUI",
  },
  // Favicon: app/icon.svg (logo Neurovia) is picked up automatically via the
  // Next.js file convention — no explicit config needed.
};

/**
 * Structured data (JSON-LD) for rich results on Google.
 * A single @graph lets Google link all entities together.
 * Covers: Organization, WebSite, WebPage, VideoObject, and
 * ProfessionalService with a full itemListed OfferCatalog.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // Un solo nodo para el negocio: Organization (la entidad) y
      // ProfessionalService (el negocio local que presta servicios). Antes
      // eran dos nodos con los mismos datos y dos @id distintos.
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "Neurovia Systems",
      alternateName: ["Neurovia", "Neurovia Systems Villahermosa"],
      // Entity disambiguation: several unrelated companies share the "Neurovia"
      // name. This pins THIS entity to the Mexican software agency.
      disambiguatingDescription:
        "Agencia mexicana de desarrollo de software y automatización con inteligencia artificial con sede en Villahermosa, Tabasco. No relacionada con otras empresas que comparten el nombre Neurovia.",
      slogan: "Un solo equipo para todo tu stack tecnológico.",
      knowsAbout: [
        "Desarrollo de software a medida",
        "Inteligencia artificial para empresas",
        "Automatización de procesos",
        "Agentes de inteligencia artificial",
        "ERP a medida",
        "Sistemas de punto de venta",
        "Infraestructura IT y redes",
      ],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/web-app-manifest-512x512.png`,
        width: 512,
        height: 512,
      },
      image: OG_IMAGE,
      description: SITE_DESCRIPTION,
      foundingDate: "2024",
      foundingLocation: {
        "@type": "Place",
        name: "Villahermosa, Tabasco, México",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villahermosa",
        addressRegion: "Tabasco",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.9892,
        longitude: -92.9281,
      },
      areaServed: [
        { "@type": "City", name: "Villahermosa" },
        { "@type": "City", name: "Monterrey" },
        { "@type": "City", name: "Santa Catarina" },
        { "@type": "City", name: "Guadalajara" },
        { "@type": "State", name: "Tabasco" },
        { "@type": "Country", name: "México" },
        { "@type": "Place", name: "Latinoamérica" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/neuroviasystems",
        "https://twitter.com/neuroviasystems",
        "https://github.com/neuroviasystems",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-993-722-6350",
          contactType: "Ventas",
          areaServed: ["MX", "LATAM"],
          availableLanguage: ["Spanish", "English"],
        },
      ],
      telephone: "+52-993-722-6350",
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Neurovia Systems",
        // Cada servicio apunta a su propia página: así Google (y los motores de
        // respuesta) enlazan la entidad del servicio con la URL que lo explica.
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desarrollo de software a medida",
              url: `${SITE_URL}/desarrollo-de-software-a-medida-villahermosa`,
              description:
                "Sistemas, plataformas web y dashboards construidos alrededor de la operación de cada empresa.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ERP a la medida",
              url: `${SITE_URL}/erp-a-medida-villahermosa`,
              description:
                "Requisiciones y compras, inventario, mantenimiento y costo por proyecto, implementados por etapas.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "CRM a la medida",
              url: `${SITE_URL}/crm-a-medida-villahermosa`,
              description:
                "Prospectos, cotizaciones y seguimiento conectados a WhatsApp, al inventario y a la facturación.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sistema de almacén (WMS) y control de inventario",
              url: `${SITE_URL}/wms-villahermosa`,
              description:
                "Multi-almacén, lotes y caducidades, códigos de barras, conteos cíclicos y kardex que cuadra.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automatización de procesos con inteligencia artificial",
              url: `${SITE_URL}/automatizacion-con-ia-tabasco`,
              description:
                "Lectura automática de documentos, integraciones entre sistemas y reportes que se generan solos.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Agentes de inteligencia artificial",
              url: `${SITE_URL}/agentes-de-inteligencia-artificial`,
              description:
                "Asistentes que atienden WhatsApp y correo, califican prospectos y se conectan al CRM del cliente.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desarrollo de páginas web",
              url: `${SITE_URL}/diseno-de-paginas-web-villahermosa`,
              description:
                "Sitios corporativos y landing pages rápidas, optimizadas para buscadores y para convertir.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sistema de punto de venta",
              url: `${SITE_URL}/sistema-punto-de-venta-villahermosa`,
              description:
                "Punto de venta con inventario y facturación CFDI para negocios de mostrador y varias sucursales.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Infraestructura IT, redes y hardware",
              description:
                "Armado de equipos, redes Ubiquiti, mantenimiento preventivo y correctivo, y soporte técnico.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consultoría IT",
              description:
                "Diagnóstico de infraestructura y procesos, elección de stack y acompañamiento a decisiones técnicas.",
            },
          },
        ],
      },
      owns: [
        { "@id": `${SITE_URL}/#tomin-pos` },
        { "@id": `${SITE_URL}/#nucleo-sgi` },
        { "@id": `${SITE_URL}/#huella` },
        { "@id": `${SITE_URL}/#flotaops` },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-MX",
    },
    {
      "@type": "VideoObject",
      "@id": `${SITE_URL}/#hero-video`,
      name: "Neurovia Systems — Presentación institucional",
      description:
        "Conoce cómo Neurovia Systems transforma negocios con desarrollo de software a medida, inteligencia artificial, automatización empresarial, plataformas web y dashboards corporativos.",
      thumbnailUrl: [OG_IMAGE],
      uploadDate: "2026-04-15",
      contentUrl: `${SITE_URL}/videos/neurovia-showcase.mp4`,
      embedUrl: `${SITE_URL}/#video-showcase`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#tomin-pos`,
      name: "Tomín POS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://puntodeventa.neuroviasystems.cloud",
      description:
        "Punto de venta con facturación CFDI para negocios locales (abarrotes, restaurantes, farmacias).",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#nucleo-sgi`,
      name: "Núcleo SGI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://sgi.neuroviasystems.cloud",
      description:
        "Sistema de gestión integral (HSE y cumplimiento) para contratistas del sector petrolero.",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#huella`,
      name: "Huella",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://huellapp.neuroviasystems.cloud",
      description:
        "Sistema de gestión para clínicas veterinarias: expedientes, citas, vacunas e inventario.",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#flotaops`,
      name: "FlotaOps",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Control y rastreo de flotas vehiculares para empresas de transporte.",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${instrumentSerif.variable} ${manrope.variable} antialiased`}
    >
      <head>
        {/* next/font self-hosts Instrument Serif and Manrope, so there is no
            Google Fonts origin left to preconnect to — the hints only cost
            two idle connections on mobile. */}

        {/* Theme color for mobile browser chrome */}
        <meta name="theme-color" content="#fdfbf7" />
        <meta name="color-scheme" content="light" />

        {/* Geo targeting — Villahermosa, Tabasco (México) */}
        <meta name="geo.region" content="MX-TAB" />
        <meta name="geo.placename" content="Villahermosa, Tabasco, México" />
        <meta name="geo.position" content="17.9892;-92.9281" />
        <meta name="ICBM" content="17.9892, -92.9281" />
        <meta name="language" content="es-MX" />

        {/* JSON-LD structured data — the single @graph covers all entities */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-ink">
        {/* Global WebGL particle field — fixed, z-0, behind every page */}
        <ParticleFieldLoader />
        <div className="relative z-[1]">
        {/* Crawler-friendly fallback. Renders only when JS is disabled
            (search-engine crawlers already execute JS, but this provides
            a readable sentence on first byte for simpler bots). */}
        <noscript>
          <div
            style={{
              padding: "2rem 1rem",
              textAlign: "center",
              background: "#ffffff",
              color: "#0F2A44",
            }}
          >
            {/* Not an <h1>: the real <h1> lives in each page (Hero / service
                pages) and must stay unique per page for SEO. */}
            <div style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700 }}>
              Neurovia Systems — Desarrollo de Software, IA y Automatización Empresarial
            </div>
            <p style={{ maxWidth: 640, margin: "1rem auto", lineHeight: 1.5 }}>
              Empresa tecnológica especializada en desarrollo de software, inteligencia
              artificial, automatización empresarial, plataformas web, dashboards
              corporativos y soluciones digitales. Para la mejor experiencia,
              habilita JavaScript en tu navegador.
            </p>
          </div>
        </noscript>
        {children}
        </div>
        {/* Reversible scroll reveal/parallax choreography (design parity) */}
        <ScrollChoreography />
        {/* WebMCP tools for in-browser AI agents (experimental, feature-detected) */}
        <WebMcpTools />
        {/* Floating WhatsApp CTA — kept from the previous build */}
        <WhatsAppButton />
        <ChatWidgetLoader />

        {/* Medición: solo en el dominio real y respetando el modo interno.
            components/Analytics.tsx decide si carga GA4 y el píxel de Meta. */}
        <Analytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
