import type { Locale } from "@/lib/i18n";

/**
 * Content for the "Nosotros / About" entity page. This page exists to fix the
 * entity for search + AI answer engines: it states unambiguously WHO Neurovia
 * Systems is (a Mexican software agency based in Villahermosa, Tabasco), so it
 * is not confused with other companies that share the "Neurovia" name.
 */
export type NosotrosContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: { h2: string; body: string[] }[];
  cities: { name: string; role: string }[];
  citiesTitle: string;
  proofTitle: string;
  proof: string[];
  ctaTitle: string;
  ctaLabel: string;
};

export const NOSOTROS_CONTENT: Record<Locale, NosotrosContent> = {
  es: {
    metaTitle: "Nosotros — Quién es Neurovia Systems",
    metaDescription:
      "Neurovia Systems es una agencia mexicana de desarrollo de software y automatización con IA con sede en Villahermosa, Tabasco. Conoce quiénes somos, qué hacemos y dónde operamos.",
    eyebrow: "Nosotros",
    h1: "Quién es Neurovia Systems",
    lead: "Neurovia Systems es una agencia mexicana de desarrollo de software, inteligencia artificial y automatización, con sede en Villahermosa, Tabasco. Construimos software a la medida y productos propios para empresas que quieren dejar atrás las hojas de cálculo y los procesos manuales.",
    sections: [
      {
        h2: "Quiénes somos",
        body: [
          "Somos una empresa de tecnología fundada en Villahermosa, Tabasco. Nuestro trabajo es entender cómo opera un negocio y traducirlo en sistemas que le ahorran tiempo, ordenan su información y le dan control real: plataformas web, dashboards, ERPs a medida, agentes de inteligencia artificial e infraestructura TI.",
          "No somos una agencia de plantillas ni un intermediario. Desarrollamos con estándar de empresa (Laravel, Livewire, Filament, Node.js, React, Next.js) y entregamos con documentación completa, para que cada proyecto quede bien hecho y sea tuyo.",
        ],
      },
      {
        h2: "Qué hacemos",
        body: [
          "Ofrecemos seis líneas de trabajo: desarrollo de software a medida, agentes de IA que atienden WhatsApp y correo 24/7, automatización de procesos, desarrollo de páginas y aplicaciones web, infraestructura TI y redes, y consultoría tecnológica.",
          "Además desarrollamos productos SaaS propios que ya están en producción: Tomín POS (punto de venta con facturación CFDI), Núcleo SGI (gestión HSE para contratistas petroleros), Huella (clínicas veterinarias) y FlotaOps (control de flotas).",
        ],
      },
    ],
    citiesTitle: "Dónde operamos",
    cities: [
      { name: "Villahermosa, Tabasco", role: "Nuestra sede. Donde nació la empresa y donde está la mayoría de nuestros proyectos." },
      { name: "Monterrey, Nuevo León", role: "Atendemos empresas regiomontanas de forma remota, con el mismo estándar técnico." },
      { name: "Guadalajara, Jalisco", role: "Trabajamos con empresas tapatías en remoto, sin que la distancia sea un límite." },
    ],
    proofTitle: "En quién confían",
    proof: [
      "Suite ERP para un cliente del sector petrolero (requisiciones, mantenimiento vehicular e inventario en 23 áreas operativas).",
      "CAPOSA — comercializadora en Villahermosa: CRM a la medida con 24 módulos (inventario multi-almacén, facturación CFDI 4.0 y reportes con IA).",
      "ASC Motores — sistema de taller con 18 módulos, más app móvil (Android) y app para iOS.",
      "Royers — constructora con más de 35 años y 500+ obras.",
      "Provalsa — válvulas y equipo industrial.",
      "Alpha Mobil — mobiliario corporativo.",
      "SOTOP — Secretaría de Ordenamiento Territorial y Obras Públicas de Tabasco.",
    ],
    ctaTitle: "¿Trabajamos juntos?",
    ctaLabel: "Agenda una llamada",
  },
  en: {
    metaTitle: "About — Who Neurovia Systems Is",
    metaDescription:
      "Neurovia Systems is a Mexican software development and AI automation agency based in Villahermosa, Tabasco. Learn who we are, what we do and where we operate.",
    eyebrow: "About",
    h1: "Who Neurovia Systems Is",
    lead: "Neurovia Systems is a Mexican software development, artificial intelligence and automation agency based in Villahermosa, Tabasco. We build custom software and our own products for companies ready to move past spreadsheets and manual work.",
    sections: [
      {
        h2: "Who we are",
        body: [
          "We are a technology company founded in Villahermosa, Tabasco. Our job is to understand how a business runs and turn it into systems that save time, organize information and give real control: web platforms, dashboards, custom ERPs, AI agents and IT infrastructure.",
          "We are not a template shop or a middleman. We build to enterprise standard (Laravel, Livewire, Filament, Node.js, React, Next.js) and deliver full documentation, so every project is done right and is yours.",
        ],
      },
      {
        h2: "What we do",
        body: [
          "We offer six lines of work: custom software development, AI agents that handle WhatsApp and email 24/7, process automation, website and web-app development, IT infrastructure and networks, and technology consulting.",
          "We also build our own SaaS products already in production: Tomín POS (point of sale with CFDI invoicing), Núcleo SGI (HSE management for oil-sector contractors), Huella (veterinary clinics) and FlotaOps (fleet tracking).",
        ],
      },
    ],
    citiesTitle: "Where we operate",
    cities: [
      { name: "Villahermosa, Tabasco", role: "Our home base. Where the company was born and where most of our projects live." },
      { name: "Monterrey, Nuevo León", role: "We serve Monterrey companies remotely, to the same technical standard." },
      { name: "Guadalajara, Jalisco", role: "We work with Guadalajara companies remotely — distance is never a limit." },
    ],
    proofTitle: "Who trusts us",
    proof: [
      "ERP suite for an oil-sector client (requisitions, vehicle maintenance and inventory across 23 operational areas).",
      "CAPOSA — a distributor in Villahermosa: custom 24-module CRM (multi-warehouse inventory, CFDI 4.0 invoicing and AI reports).",
      "ASC Motores — workshop system with 18 modules, plus Android and iOS apps.",
      "Royers — a construction firm with 35+ years and 500+ projects.",
      "Provalsa — industrial valves and equipment.",
      "Alpha Mobil — corporate furniture.",
      "SOTOP — Tabasco's Ministry of Land Planning and Public Works.",
    ],
    ctaTitle: "Shall we work together?",
    ctaLabel: "Book a call",
  },
};

export function getNosotros(lang: Locale): NosotrosContent {
  return NOSOTROS_CONTENT[lang];
}
