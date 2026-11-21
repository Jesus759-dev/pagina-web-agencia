import type { Locale } from "@/lib/i18n";

export interface PrecioItem {
  name: string;
  price: string;
  note?: string;
  /** Precio base numérico en MXN para el schema Offer (omitido si es "cotización"). */
  minPrice?: number;
  /** "monthly" si es mensualidad; de lo contrario precio de proyecto. */
  unit?: "monthly" | "project";
}

export interface PrecioGroup {
  title: string;
  items: PrecioItem[];
}

export interface PreciosData {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  groups: PrecioGroup[];
  note: string;
  ctaLabel: string;
  waMessage: string;
}

const es: PreciosData = {
  metaTitle: "Precios de Neurovia Systems",
  metaDescription:
    "Precios de referencia de Neurovia Systems: software a la medida desde $65,000 MXN, aplicaciones web desde $32,000, automatización y agentes de IA desde $25,000, y productos SaaS por mensualidad. Análisis inicial gratis.",
  h1: "Precios de referencia",
  eyebrow: "Precios",
  intro:
    "Estos son nuestros precios de referencia, en pesos mexicanos. Los proyectos a la medida se construyen por módulos y se cotizan por alcance tras un análisis inicial sin costo, así que un sistema puede empezar pequeño y crecer por etapas.",
  groups: [
    {
      title: "Software y sistemas a la medida",
      items: [
        { name: "Software / sistema de gestión a la medida (ERP, CRM, almacén)", price: "desde $65,000 MXN + IVA", note: "Construido por módulos.", minPrice: 65000, unit: "project" },
        { name: "Aplicación web a la medida", price: "desde $32,000 MXN + IVA", minPrice: 32000, unit: "project" },
        { name: "Página web o landing (diseño y desarrollo)", price: "cotización según alcance", note: "Landing, sitio corporativo o tienda en línea." },
      ],
    },
    {
      title: "Inteligencia artificial",
      items: [
        { name: "Automatización de procesos con IA", price: "desde $25,000 MXN + IVA", minPrice: 25000, unit: "project" },
        { name: "Agente de IA para WhatsApp o correo", price: "desde $25,000 MXN + IVA", note: "Más el costo por uso del modelo.", minPrice: 25000, unit: "project" },
      ],
    },
    {
      title: "Productos SaaS propios (mensualidad)",
      items: [
        { name: "Tomín POS — punto de venta", price: "$500, $1,200 o $2,400 MXN al mes", note: "Planes Inicial, Pro y Empresa. Sin tarjeta al registrarse.", minPrice: 500, unit: "monthly" },
        { name: "Huella — software para veterinarias", price: "desde $399 MXN al mes", minPrice: 399, unit: "monthly" },
        { name: "Neurovia Build / Núcleo SGI", price: "cotización por proyecto" },
      ],
    },
    {
      title: "Sin costo",
      items: [
        { name: "Análisis inicial y estimado", price: "gratis", note: "Revisamos tu proceso y te damos un estimado claro por etapas." },
      ],
    },
  ],
  note:
    "Los precios 'desde' son el punto de partida; el costo final se define por el alcance del proyecto. Los importes están en pesos mexicanos (MXN) y se agrega IVA cuando aplica.",
  ctaLabel: "Pídeme un estimado por WhatsApp",
  waMessage: "Hola, vi la página de precios y quiero un estimado para mi empresa.",
};

const en: PreciosData = {
  metaTitle: "Neurovia Systems Pricing",
  metaDescription:
    "Reference pricing for Neurovia Systems: custom software from MXN $65,000, web apps from $32,000, AI automation and agents from $25,000, and SaaS products billed monthly. Free initial analysis.",
  h1: "Reference pricing",
  eyebrow: "Pricing",
  intro:
    "These are our reference prices, in Mexican pesos. Custom projects are built in modules and quoted by scope after a free initial analysis, so a system can start small and grow in stages.",
  groups: [
    {
      title: "Custom software and systems",
      items: [
        { name: "Custom software / management system (ERP, CRM, warehouse)", price: "from MXN $65,000 + VAT", note: "Built in modules.", minPrice: 65000, unit: "project" },
        { name: "Custom web application", price: "from MXN $32,000 + VAT", minPrice: 32000, unit: "project" },
        { name: "Website or landing page (design and build)", price: "quote by scope", note: "Landing, corporate site or online store." },
      ],
    },
    {
      title: "Artificial intelligence",
      items: [
        { name: "AI process automation", price: "from MXN $25,000 + VAT", minPrice: 25000, unit: "project" },
        { name: "AI agent for WhatsApp or email", price: "from MXN $25,000 + VAT", note: "Plus the model's usage cost.", minPrice: 25000, unit: "project" },
      ],
    },
    {
      title: "Our own SaaS products (monthly)",
      items: [
        { name: "Tomín POS — point of sale", price: "MXN $500, $1,200 or $2,400 per month", note: "Starter, Pro and Business plans. No card to sign up.", minPrice: 500, unit: "monthly" },
        { name: "Huella — veterinary software", price: "from MXN $399 per month", minPrice: 399, unit: "monthly" },
        { name: "Neurovia Build / Núcleo SGI", price: "quote by project" },
      ],
    },
    {
      title: "Free",
      items: [
        { name: "Initial analysis and estimate", price: "free", note: "We review your process and give you a clear estimate by stages." },
      ],
    },
  ],
  note:
    "'From' prices are the starting point; the final cost depends on project scope. Amounts are in Mexican pesos (MXN); VAT is added where applicable.",
  ctaLabel: "Ask me for an estimate on WhatsApp",
  waMessage: "Hi, I saw the pricing page and I'd like an estimate for my company.",
};

export function getPrecios(lang: Locale): PreciosData {
  return lang === "en" ? en : es;
}
