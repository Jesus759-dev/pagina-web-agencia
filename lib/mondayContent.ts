import type { Locale } from "@/lib/i18n";

/**
 * Contenido bilingüe de la landing "Alternativa a monday.com en México".
 * Sigue el patrón de lib/serviceContent.ts / lib/preciosContent.ts: todo el
 * texto visible vive aquí en `es` y `en`, nunca hardcodeado en el componente.
 *
 * Nota legal: "monday.com" se nombra solo en texto; no se usa su logo ni sus
 * colores. Las cifras de la calculadora son editables por el visitante y no se
 * afirman precios de monday.com (solo hechos públicos: cobro por usuario,
 * mínimo de 3 usuarios en planes de pago).
 */

export interface MondayCard {
  title: string;
  desc: string;
}

export interface MondayCompareRow {
  label: string;
  monday: string;
  neurovia: string;
}

export interface MondayPlan {
  tag: string;
  title: string;
  price: string;
  features: string[];
  note?: string;
}

export interface MondayReplaceItem {
  label: string;
  href: string;
}

export interface MondayFaq {
  q: string;
  a: string;
}

export interface MondayCalc {
  title: string;
  intro: string;
  usersLabel: string;
  priceLabel: string;
  fxLabel: string;
  mondayCostLabel: string;
  neuroviaCostLabel: string;
  perYear: string;
  saveLabel: string;
  minUsersNote: string;
  cheaperMondayNote: string;
  cta: string;
  disclaimer: string;
  /** Referencia de la suscripción mensual de Neurovia (MXN/mes) para comparar. */
  neuroviaMonthlyMXN: number;
  defaultPriceUSD: number;
  defaultFx: number;
  defaultUsers: number;
}

export interface MondayData {
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  eyebrow: string;
  h1: string;
  heroLead: string;
  ctaCalc: string;
  ctaWa: string;
  heroTrust: string[];
  problemsTitle: string;
  problems: MondayCard[];
  problemsNote: string;
  compareTitle: string;
  compareHead: { feature: string; monday: string; neurovia: string };
  compareRows: MondayCompareRow[];
  compareNote: string;
  calc: MondayCalc;
  stepsTitle: string;
  steps: MondayCard[];
  plansTitle: string;
  plans: MondayPlan[];
  plansNote: string;
  replaceTitle: string;
  replace: MondayReplaceItem[];
  faqTitle: string;
  faq: MondayFaq[];
  finalTitle: string;
  finalLead: string;
  ctaAgenda: string;
  diagnosisCta: string;
}

const es: MondayData = {
  metaTitle: "Alternativa a monday.com en México | Sin pago por usuario | Neurovia Systems",
  metaDescription:
    "¿Cansado de pagar monday.com por usuario? Te migramos a un sistema propio en español, con usuarios ilimitados, soporte por WhatsApp y facturación CFDI. Diagnóstico gratis.",
  keyword: "alternativa a monday.com México",
  eyebrow: "Alternativa a monday.com",
  h1: "Alternativa a monday.com en México: tu sistema, sin pagar por usuario",
  heroLead:
    "Si monday.com ya es donde opera tu empresa, ten tu propio sistema: hecho a tu proceso, en español, con usuarios ilimitados y sin aumentos por cada persona que contratas.",
  ctaCalc: "Calcula cuánto ahorras",
  ctaWa: "Pregúntanos por WhatsApp",
  heroTrust: [
    "Migración de tus tableros sin costo",
    "Implementación en 4 a 6 semanas",
    "Soporte directo con quien programa tu sistema",
  ],
  problemsTitle: "Por qué las empresas dejan monday.com",
  problems: [
    {
      title: "Pagas por cada usuario",
      desc: "Los planes de pago de monday.com cobran por persona y tienen un mínimo de 3 usuarios. Cada vez que crece tu equipo, crece tu factura.",
    },
    {
      title: "Pagas en dólares, con precios que cambian",
      desc: "Tu costo depende del tipo de cambio y de los ajustes de precio del proveedor.",
    },
    {
      title: "Tableros genéricos, no tu proceso",
      desc: "Terminas adaptando tu operación a la herramienta, con automatizaciones limitadas por plan.",
    },
  ],
  problemsNote:
    "No afirmamos precios de monday.com en esta página: su costo por usuario y su mínimo de 3 usuarios en planes de pago son información pública; para tarifas exactas consulta su página oficial.",
  compareTitle: "monday.com vs. un sistema propio con Neurovia",
  compareHead: { feature: "", monday: "monday.com", neurovia: "Neurovia Systems" },
  compareRows: [
    { label: "Cobro", monday: "Por usuario, mínimo 3 en planes de pago", neurovia: "Precio fijo, usuarios ilimitados" },
    { label: "Moneda", monday: "Dólares", neurovia: "Pesos mexicanos, con factura CFDI" },
    { label: "Hecho a tu proceso", monday: "Plantillas genéricas", neurovia: "Módulos diseñados para tu operación" },
    { label: "Soporte", monday: "Centro de ayuda y tickets", neurovia: "WhatsApp directo con el equipo" },
    { label: "Facturación CFDI 4.0", monday: "Requiere integraciones externas", neurovia: "Puede venir integrada" },
    { label: "Tus datos", monday: "En la plataforma del proveedor", neurovia: "Tu sistema, tu base de datos, exportable" },
  ],
  compareNote:
    "monday.com es una marca registrada de su propietario. Neurovia Systems no está afiliada a monday.com. Comparativa con información pública, sujeta a cambios.",
  calc: {
    title: "Calcula cuánto ahorras al año",
    intro:
      "Ajusta los datos a tu caso. El costo de monday.com es un estimado con los valores que tú pongas; no es una cotización oficial de monday.com.",
    usersLabel: "Número de usuarios",
    priceLabel: "Precio por usuario al mes (USD)",
    fxLabel: "Tipo de cambio (MXN por USD)",
    mondayCostLabel: "Costo anual estimado en monday.com",
    neuroviaCostLabel: "Costo anual con Neurovia (suscripción)",
    perYear: "al año",
    saveLabel: "Ahorras",
    minUsersNote: "monday.com cobra un mínimo de 3 usuarios en planes de pago, así que calculamos al menos 3.",
    cheaperMondayNote:
      "Con tu equipo actual monday te sale más barato; te convenimos cuando crece tu equipo o necesitas tu propio proceso.",
    cta: "Quiero mi diagnóstico gratis",
    disclaimer: "Estimado con los valores que ingresaste. Los precios reales de monday.com están en su página oficial.",
    neuroviaMonthlyMXN: 1200,
    defaultPriceUSD: 12,
    defaultFx: 18,
    defaultUsers: 10,
  },
  stepsTitle: "Cómo funciona la migración",
  steps: [
    { title: "Diagnóstico gratis (20 min)", desc: "Revisamos tus tableros y cómo trabaja tu equipo." },
    { title: "Exportas tus tableros", desc: "monday.com permite exportar a Excel; con eso basta." },
    { title: "Construimos y migramos (4 a 6 semanas)", desc: "Tu sistema con tus datos históricos ya cargados." },
    { title: "Capacitación y arranque", desc: "Tu equipo trabaja desde el día uno y te damos soporte por WhatsApp." },
  ],
  plansTitle: "Dos formas de contratarlo",
  plans: [
    {
      tag: "Opción A",
      title: "Suscripción mensual",
      price: "desde $1,200 MXN/mes + IVA",
      features: ["Usuarios ilimitados", "Hospedaje, respaldos y mejoras", "Soporte por WhatsApp", "Migración incluida"],
      note: "Precio sugerido; se confirma en el diagnóstico.",
    },
    {
      tag: "Opción B",
      title: "Pago único",
      price: "desde $65,000 MXN + IVA",
      features: ["El sistema es tuyo", "Mantenimiento opcional", "Migración incluida", "Tu base de datos, exportable"],
      note: "Mismo precio base publicado en /precios para sistemas de gestión.",
    },
  ],
  plansNote: "El precio final depende de los módulos; el diagnóstico es gratis.",
  replaceTitle: "Qué podemos reemplazar de monday.com",
  replace: [
    { label: "CRM y embudo de ventas", href: "/crm-a-medida-villahermosa" },
    { label: "Proyectos y tareas por cliente", href: "/desarrollo-de-software-a-medida-villahermosa" },
    { label: "Compras y requisiciones", href: "/erp-a-medida-villahermosa" },
    { label: "Almacén e inventarios", href: "/wms-villahermosa" },
    { label: "Servicio y tickets", href: "/desarrollo-de-software-a-medida-villahermosa" },
    { label: "Reportes y tableros de dirección", href: "/sistemas-empresariales-tabasco" },
  ],
  faqTitle: "Preguntas frecuentes",
  faq: [
    { q: "¿Pierdo mi información de monday.com?", a: "No. Exportas tus tableros a Excel y los cargamos en tu nuevo sistema con todo el historial." },
    { q: "¿Cuánto tarda la migración?", a: "Normalmente de 4 a 6 semanas, según el número de módulos." },
    { q: "¿Puedo seguir usando monday mientras tanto?", a: "Sí. Lo usas hasta que el sistema nuevo esté listo y probado." },
    { q: "¿Está en la nube?", a: "Sí. Entras desde cualquier navegador y desde el celular." },
    { q: "¿Puede facturar CFDI 4.0?", a: "Sí, se puede integrar facturación electrónica." },
    { q: "¿Y si solo uso monday para una lista de pendientes?", a: "Entonces probablemente no te convenga un sistema propio. Somos la opción cuando monday ya es donde opera tu empresa." },
  ],
  finalTitle: "Deja de pagar por cada persona que contratas.",
  finalLead: "Te decimos con números si te conviene migrar. El diagnóstico es gratis y sin compromiso.",
  ctaAgenda: "Agenda tu diagnóstico gratis",
  diagnosisCta: "Quiero mi diagnóstico gratis",
};

const en: MondayData = {
  metaTitle: "monday.com Alternative in Mexico | No Per-User Fees | Neurovia Systems",
  metaDescription:
    "Tired of paying monday.com per user? We migrate you to your own system in Spanish, with unlimited users, WhatsApp support and CFDI invoicing. Free assessment.",
  keyword: "monday.com alternative Mexico",
  eyebrow: "monday.com alternative",
  h1: "monday.com alternative in Mexico: your own system, without paying per user",
  heroLead:
    "If monday.com is already where your company operates, get your own system: built for your process, in Spanish, with unlimited users and no increases for every person you hire.",
  ctaCalc: "Calculate your savings",
  ctaWa: "Ask us on WhatsApp",
  heroTrust: [
    "Board migration at no cost",
    "Live in 4 to 6 weeks",
    "Direct support with whoever builds your system",
  ],
  problemsTitle: "Why companies leave monday.com",
  problems: [
    {
      title: "You pay for every user",
      desc: "monday.com's paid plans charge per person and have a 3-user minimum. Every time your team grows, your bill grows.",
    },
    {
      title: "You pay in dollars, with changing prices",
      desc: "Your cost depends on the exchange rate and the vendor's price adjustments.",
    },
    {
      title: "Generic boards, not your process",
      desc: "You end up adapting your operation to the tool, with automations limited by plan.",
    },
  ],
  problemsNote:
    "We don't state monday.com prices on this page: charging per user and the 3-user minimum on paid plans are public facts; for exact rates see their official site.",
  compareTitle: "monday.com vs. your own system with Neurovia",
  compareHead: { feature: "", monday: "monday.com", neurovia: "Neurovia Systems" },
  compareRows: [
    { label: "Billing", monday: "Per user, 3 minimum on paid plans", neurovia: "Fixed price, unlimited users" },
    { label: "Currency", monday: "Dollars", neurovia: "Mexican pesos, with CFDI invoice" },
    { label: "Built for your process", monday: "Generic templates", neurovia: "Modules designed for your operation" },
    { label: "Support", monday: "Help center and tickets", neurovia: "Direct WhatsApp with the team" },
    { label: "CFDI 4.0 invoicing", monday: "Needs external integrations", neurovia: "Can come built in" },
    { label: "Your data", monday: "On the vendor's platform", neurovia: "Your system, your database, exportable" },
  ],
  compareNote:
    "monday.com is a trademark of its owner. Neurovia Systems is not affiliated with monday.com. Comparison based on public information, subject to change.",
  calc: {
    title: "Calculate your yearly savings",
    intro:
      "Adjust the figures to your case. The monday.com cost is an estimate from the values you enter; it is not an official monday.com quote.",
    usersLabel: "Number of users",
    priceLabel: "Price per user per month (USD)",
    fxLabel: "Exchange rate (MXN per USD)",
    mondayCostLabel: "Estimated yearly cost on monday.com",
    neuroviaCostLabel: "Yearly cost with Neurovia (subscription)",
    perYear: "per year",
    saveLabel: "You save",
    minUsersNote: "monday.com charges a 3-user minimum on paid plans, so we compute at least 3.",
    cheaperMondayNote:
      "With your current team monday is cheaper; we become the better option as your team grows or when you need your own process.",
    cta: "I want my free assessment",
    disclaimer: "Estimate from the values you entered. monday.com's real prices are on their official site.",
    neuroviaMonthlyMXN: 1200,
    defaultPriceUSD: 12,
    defaultFx: 18,
    defaultUsers: 10,
  },
  stepsTitle: "How the migration works",
  steps: [
    { title: "Free assessment (20 min)", desc: "We review your boards and how your team works." },
    { title: "You export your boards", desc: "monday.com exports to Excel; that's all we need." },
    { title: "We build and migrate (4 to 6 weeks)", desc: "Your system with your historical data already loaded." },
    { title: "Training and go-live", desc: "Your team works from day one and we support you over WhatsApp." },
  ],
  plansTitle: "Two ways to get it",
  plans: [
    {
      tag: "Option A",
      title: "Monthly subscription",
      price: "from MXN $1,200/mo + VAT",
      features: ["Unlimited users", "Hosting, backups and improvements", "WhatsApp support", "Migration included"],
      note: "Suggested price; confirmed in the assessment.",
    },
    {
      tag: "Option B",
      title: "One-time payment",
      price: "from MXN $65,000 + VAT",
      features: ["The system is yours", "Optional maintenance", "Migration included", "Your database, exportable"],
      note: "Same base price published on /precios for management systems.",
    },
  ],
  plansNote: "The final price depends on the modules; the assessment is free.",
  replaceTitle: "What we can replace from monday.com",
  replace: [
    { label: "CRM and sales pipeline", href: "/crm-a-medida-villahermosa" },
    { label: "Projects and tasks per client", href: "/desarrollo-de-software-a-medida-villahermosa" },
    { label: "Purchasing and requisitions", href: "/erp-a-medida-villahermosa" },
    { label: "Warehouse and inventory", href: "/wms-villahermosa" },
    { label: "Service and tickets", href: "/desarrollo-de-software-a-medida-villahermosa" },
    { label: "Reports and management dashboards", href: "/sistemas-empresariales-tabasco" },
  ],
  faqTitle: "Frequently asked questions",
  faq: [
    { q: "Do I lose my monday.com data?", a: "No. You export your boards to Excel and we load them into your new system with the full history." },
    { q: "How long does the migration take?", a: "Usually 4 to 6 weeks, depending on the number of modules." },
    { q: "Can I keep using monday meanwhile?", a: "Yes. You use it until the new system is ready and tested." },
    { q: "Is it in the cloud?", a: "Yes. You log in from any browser and from your phone." },
    { q: "Can it issue CFDI 4.0 invoices?", a: "Yes, electronic invoicing can be integrated." },
    { q: "What if I only use monday for a to-do list?", a: "Then a custom system probably isn't worth it for you. We're the option when monday is already where your company operates." },
  ],
  finalTitle: "Stop paying for every person you hire.",
  finalLead: "We'll tell you in numbers whether migrating is worth it. The assessment is free and with no commitment.",
  ctaAgenda: "Book your free assessment",
  diagnosisCta: "I want my free assessment",
};

export function getMonday(lang: Locale): MondayData {
  return lang === "en" ? en : es;
}

const SITE_URL = "https://neuroviasystems.com.mx";

export function buildMondayMetadata(lang: Locale) {
  const d = getMonday(lang);
  const path = `${lang === "en" ? "/en" : ""}/alternativa-a-monday`;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: [d.keyword],
    alternates: {
      canonical: path,
      languages: {
        "es-MX": `${SITE_URL}/alternativa-a-monday`,
        "en-US": `${SITE_URL}/en/alternativa-a-monday`,
        "x-default": `${SITE_URL}/alternativa-a-monday`,
      },
    },
    openGraph: {
      title: `${d.metaTitle}`,
      description: d.metaDescription,
      url: `${SITE_URL}${path}`,
      siteName: "Neurovia Systems",
      locale: lang === "en" ? "en_US" : "es_MX",
      type: "website",
    },
    twitter: { card: "summary_large_image" as const, title: d.metaTitle, description: d.metaDescription },
  };
}

/** Service + FAQPage JSON-LD como un solo @graph. */
export function buildMondayJsonLd(lang: Locale) {
  const d = getMonday(lang);
  const path = `${lang === "en" ? "/en" : ""}/alternativa-a-monday`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}${path}#service`,
        name: lang === "en" ? "monday.com to custom system migration" : "Migración de monday.com a sistema propio",
        serviceType: lang === "en" ? "Custom software migration" : "Migración a software a la medida",
        areaServed: { "@type": "Country", name: lang === "en" ? "Mexico" : "México" },
        provider: { "@type": "Organization", name: "Neurovia Systems", url: SITE_URL },
        url: `${SITE_URL}${path}`,
        description: d.metaDescription,
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${path}#faq`,
        mainEntity: d.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
