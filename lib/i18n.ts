/* --------------------------------------------------------------------------
 * Internationalization (i18n) — Spanish (default, at "/") + English (at "/en").
 *
 * Shared UI components read their copy from getDict(lang); the Spanish route
 * tree renders them with lang="es" and the English tree with lang="en", so a
 * redesign of a component benefits both languages at once.
 * -------------------------------------------------------------------------- */

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

/** Path prefix for a locale: "" for Spanish (root), "/en" for English. */
export function localeBase(lang: Locale): string {
  return lang === "en" ? "/en" : "";
}

/* -------------------------------------------------------------------------- */

const es = {
  langName: "ES",
  otherLangName: "EN",
  nav: {
    servicios: "Servicios",
    puntoDeVenta: "Punto de Venta",
    proyectos: "Proyectos",
    proceso: "Proceso",
    nosotros: "Nosotros",
    contacto: "Contacto",
    cta: "Consulta gratuita",
    homeAria: "Neurovia Systems — inicio",
    switchLabel: "English",
    newBadge: "Nuevo",
  },
  hero: {
    sectionAria: "Sección principal",
    badge: "Sistemas en producción en México",
    h1: "Construimos el futuro digital de tu empresa.",
    lead: "Software que te devuelve tiempo: plataformas, automatización con IA y sistemas a la medida de tu negocio.",
    cta: "Agenda una consulta gratuita",
    trustLabel: "Empresas que ya confían",
    companies: ["Cliente petrolero", "Royers", "Alpha Mobil", "Provalsa"],
    scroll: "Scroll",
  },
  stats: [
    { value: "3x", label: ["más rápido que el", "desarrollo tradicional"] },
    { value: "80%", label: ["reducción en", "tareas manuales"] },
    { value: "100%", label: ["proyectos con", "documentación completa"] },
    { value: "+15", label: ["tecnologías de", "IA dominadas"] },
  ],
  tech: {
    heading: "Trabajamos con las mejores herramientas y stack de IA disponible hoy",
  },
  services: {
    eyebrow: "Servicios",
    h2: "Cuatro maneras de transformar tu negocio.",
    lead: "Software con IA, sitios web, automatizaciones e infraestructura IT. Un solo equipo para todo tu stack tecnológico.",
    cards: [
      {
        title: "Desarrollo de páginas web",
        desc: "Sitios rápidos, optimizados para aparecer en Google y convertir visitantes en clientes.",
        items: [
          "Landing pages de alta conversión",
          "E-commerce optimizado con IA",
          "Aplicaciones web progresivas (PWA)",
          "Optimización SEO avanzada",
        ],
        linkLabel: "Diseño de páginas web en Villahermosa",
      },
      {
        title: "Automatizaciones de procesos con IA",
        desc: "Recupera horas cada semana: automatizamos las tareas repetitivas de tu equipo. Menos errores, más productividad.",
        items: [
          "Automatización de procesos con n8n",
          "Integración de APIs y servicios",
          "Workflows inteligentes con IA",
          "Reportes automáticos personalizados",
        ],
        linkLabel: "Automatización con IA en Tabasco",
      },
      {
        title: "Desarrollo de sistemas web y software",
        desc: "Un sistema a tu medida en semanas, no meses. Resuelve problemas reales de tu negocio y el código es tuyo.",
        items: [
          "Plataformas y dashboards a medida",
          "Procesamiento de documentos con IA",
          "Asistentes y chatbots personalizados",
          "Integración con tus sistemas existentes",
        ],
        linkLabel: "Desarrollo de software a medida en Villahermosa",
      },
      {
        title: "Infraestructura IT, redes y hardware",
        desc: "Armamos, desplegamos y mantenemos tu infraestructura de cómputo y conectividad. De una workstation a medida a un despliegue Ubiquiti empresarial.",
        items: [
          "Armado de PCs a medida",
          "Routers, APs y redes Ubiquiti",
          "Mantenimiento preventivo y correctivo",
          "Soporte técnico y consultoría IT",
        ],
        linkLabel: "",
      },
    ],
    morePages: [
      "Desarrollo de aplicaciones web a medida en Tabasco",
      "Sistema de punto de venta en Villahermosa",
    ],
  },
  pos: {
    eyebrow: "Punto de Venta",
    h2: "Vende más rápido con nuestro Punto de Venta.",
    lead: "Controla ventas e inventario en tiempo real, desde tu celular. Cierra tu caja en segundos, no en horas.",
    features: [
      "Cobro rápido con lector de código de barras",
      "Control de inventario en tiempo real",
      "Reportes de ventas y cortes de caja",
      "Multi-sucursal y multi-usuario",
    ],
    cta: "Ver Punto de Venta",
    cloudLink: "Punto de venta en Villahermosa",
    imgAlt: "Sistema de Punto de Venta para negocios en Villahermosa, Tabasco",
  },
  portfolio: {
    eyebrow: "Proyectos en producción · Capturas reales",
    h2: "Evidencia real de sistemas en vivo.",
    lead: "Estas no son maquetas. Son plataformas y sitios que hoy operan en petróleo, construcción, mobiliario corporativo e ingeniería.",
    ctaSystems: "Ver los sistemas en vivo",
    crmBadge: "Nuevo producto",
    crmDesc: "Gestión de clientes, contactos, oportunidades y seguimiento de ventas en un solo lugar.",
    crmCta: "Abrir el CRM",
    inProduction: "En producción",
    confidential: "Confidencial",
    tapToVisit: "toca para visitar el sitio",
    featured: {
      cat: "Suite ERP · Petróleo & Gas",
      title: "Cliente petrolero — Suite ERP",
      desc: "Plataforma operativa multisistema para la industria petrolera: portal único de acceso con módulos de Requisiciones y Compras, Mantenimiento Vehicular e Inventario. Control financiero con KPIs en tiempo real, trazabilidad completa y auditoría sobre 23 áreas operativas.",
    },
    mantenimiento: {
      cat: "Sistema · Gestión de flota",
      title: "Mantenimiento Vehicular",
      desc: "Órdenes de trabajo, alertas por kilometraje, control de costos e historial completo de la flota — cada componente bajo control.",
    },
    hidraulica: {
      cat: "Software técnico",
      title: "Cliente petrolero — Hidráulica v1.3",
      desc: "11 módulos técnicos y simulador 3D offshore para fluidos de perforación.",
    },
    royers: {
      cat: "Sitio web · Construcción",
      title: "Royers S.A. de C.V.",
      descPrefix: "35+ años, 500+ obras y 98% de satisfacción. Renders 3D y obras entregadas — ",
    },
    alphamobil: {
      cat: "Sitio web · Mobiliario",
      title: "Alpha Mobil",
      desc: "Showroom corporativo con catálogo, galería de proyectos y cotización directa por WhatsApp.",
    },
    provalsa: {
      cat: "Sitio web · Válvulas industriales",
      title: "Provalsa",
      desc: "Catálogo de válvulas y equipo industrial con presentación de productos y contacto directo para cotización.",
    },
    tacef: {
      cat: "Sitio web · Acero",
      title: "TACEF Aceros",
      descPrefix: "Sitio web corporativo para TACEF, del sector del acero: presentación de la empresa, productos y contacto — ",
    },
    sotop: {
      cat: "Sistema web · Gobierno",
      title: "SOTOP — Gobierno de Tabasco",
      descPrefix: "Sistema web de dictamen de equipos de soporte para la Unidad de Apoyo Técnico e Informático — ",
    },
    comingSoon: {
      badge: "En desarrollo · Próximamente",
      title: "Sistema de Inventario",
      descA: "Control de existencias, almacén y administración de inventario. Estamos construyendo un producto propio que estará disponible por ",
      once: "pago único",
      or: " o ",
      membership: "membresía",
      cta: "Quiero saber más",
    },
    lightbox: {
      galleryAria: "Galería Royers",
      title: "Royers S.A. de C.V. — Galería",
      subtitle: "Renders 3D y obras entregadas",
      close: "Cerrar galería",
      prev: "Imagen anterior",
      next: "Imagen siguiente",
      imgAlt: "Captura del proyecto Royers",
      hint: "Toca fuera de la imagen o × para cerrar · ‹ › para navegar",
    },
    alts: {
      portal: "Cliente petrolero — Portal de Sistemas ERP",
      mantenimiento: "Cliente petrolero — Sistema de Mantenimiento Vehicular",
      hidraulica: "Cliente petrolero — Hidráulica v1.3",
      royers: "Royers S.A. de C.V. — Construcción en Tabasco",
      alphamobil: "Alpha Mobil — Showroom de mobiliario corporativo",
      provalsa: "Provalsa — Válvulas y equipo industrial",
      tacef: "TACEF Aceros — Sitio web corporativo",
      sotop: "SOTOP — Secretaría de Ordenamiento Territorial y Obras Públicas de Tabasco",
    },
  },
  whyus: {
    eyebrow: "Por qué Neurovia",
    h2: "Por qué las empresas nos eligen sobre otras agencias.",
    reasons: [
      {
        title: "Velocidad sin sacrificar calidad",
        desc: "Usamos las herramientas más avanzadas para entregar resultados en semanas, no meses.",
      },
      {
        title: "Hablas con quien construye",
        desc: "Comunicación directa con el equipo técnico. Sin capas innecesarias de gestión ni intermediarios.",
      },
      {
        title: "Tecnología del nivel Big Tech",
        desc: "Usamos los mismos frameworks y herramientas que las empresas tecnológicas más avanzadas.",
      },
      {
        title: "Soporte real post-entrega",
        desc: "No desaparecemos después de entregar. Te acompañamos con soporte, mejoras y escalabilidad.",
      },
    ],
  },
  process: {
    eyebrow: "Proceso",
    h2: "De la idea al resultado en 4 pasos.",
    steps: [
      { title: "Descubrimiento", desc: "Entendemos tu negocio y tus objetivos." },
      { title: "Estrategia y diseño", desc: "Diseñamos la solución ideal para tu caso." },
      { title: "Desarrollo", desc: "Construimos con agilidad y transparencia total." },
      { title: "Entrega y crecimiento", desc: "Lanzamos, medimos y mejoramos continuamente." },
    ],
  },
  testimonials: {
    eyebrow: "Clientes",
    h2: "Resultados que hablan por sí solos.",
    items: [
      {
        quote: "Desarrollaron nuestro sitio corporativo con catálogo industrial y tienda online integrada. El resultado superó nuestras expectativas: profesional, rápido y fácil de administrar.",
        role: "Suministros industriales · Cliente desde 2024",
      },
      {
        quote: "Entregaron un sitio premium que refleja la calidad de nuestro trabajo. Galería de proyectos, renders 3D y cotización integrada. Cada detalle cuidado al milímetro, como nuestras obras.",
        role: "Constructora · 35+ años en Tabasco",
      },
      {
        quote: "Profesionales en cada etapa. Desde la primera reunión hasta la entrega final mostraron compromiso, rapidez y conocimiento técnico. Recomendados al 100%.",
        role: "Empresa de servicios · Cliente desde 2024",
      },
    ],
  },
  contact: {
    badge: "Respuesta en menos de 24h",
    h2: "Hablemos de tu proyecto.",
    lead: "Una conversación de 45 minutos puede cambiar el rumbo de tu negocio. Sin compromisos, sin tecnicismos. Análisis gratuito, propuesta personalizada y estimado claro.",
    phoneCta: "+52 993 722 6350 · WhatsApp",
    emailPrefix: "O escríbenos a",
    figures: [
      { value: "< 24h", label: "respuesta" },
      { value: "100%", label: "gratuito" },
      { value: "45 min", label: "sesión" },
    ],
  },
  footer: {
    tagline: "Software con IA, sitios web e infraestructura IT. Un solo equipo para todo tu stack tecnológico.",
    copyright: "© 2026 Neurovia Systems — Software, IA e Infraestructura IT",
  },
  service: {
    benefitsEyebrow: "Beneficios",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Resolvemos tus dudas",
    relatedEyebrow: "Otros servicios",
    relatedTitle: "Más soluciones para tu empresa en Villahermosa y Tabasco",
    backHome: "Volver al inicio",
    ctaConsulta: "Agenda una consulta gratuita",
  },
  sistemas: {
    eyebrow: "Plataforma de sistemas",
    h1: "Catálogo de sistemas Neurovia",
    lead: "Portal centralizado de los sistemas que desarrollamos y mantenemos en producción: CRM, adquisiciones, mantenimiento vehicular, inventario y punto de venta. Elige un sistema para acceder.",
    note: "Algunos sistemas requieren credenciales de acceso proporcionadas por Neurovia Systems. ¿Necesitas acceso o quieres un sistema a la medida de tu empresa? Escríbenos.",
    enter: "Entrar al sistema",
    newBadge: "Nuevo",
    systems: [
      { name: "CRM", desc: "Gestión de clientes, contactos, oportunidades y seguimiento de ventas en un solo lugar." },
      { name: "Sistema de Requisiciones", desc: "Órdenes de compra, cuentas por pagar, proveedores y reporte dinámico." },
      { name: "Mantenimiento Vehicular", desc: "Control de flota, órdenes de servicio, unidades y bitácora de mantenimiento." },
      { name: "Inventario", desc: "Gestión de almacén, entradas y salidas, existencias y movimientos." },
      { name: "Punto de Venta", desc: "Terminal de ventas, tickets, cajas y control de operaciones diarias." },
    ],
  },
  crm: {
    eyebrow: "CRM",
    badge: "Nuevo",
    h2: "Gestiona tus clientes con nuestro CRM.",
    lead: "Centraliza contactos, oportunidades y seguimiento de ventas en un solo lugar. Menos hojas de cálculo, más cierres.",
    features: [
      "Contactos y empresas organizados",
      "Embudo de ventas visual",
      "Seguimiento de oportunidades y tareas",
      "Reportes de ventas en tiempo real",
    ],
    cta: "Abrir el CRM",
    allSystems: "Ver todos los sistemas",
    imgAlt: "Pantalla de acceso del CRM de Neurovia Systems",
    mockTitle: "Pipeline de ventas",
    stages: { prospect: "Prospecto", proposal: "Propuesta", won: "Ganado" },
  },
};

/* -------------------------------------------------------------------------- */

const en: typeof es = {
  langName: "EN",
  otherLangName: "ES",
  nav: {
    servicios: "Services",
    puntoDeVenta: "Point of Sale",
    proyectos: "Projects",
    proceso: "Process",
    nosotros: "About",
    contacto: "Contact",
    cta: "Free consultation",
    homeAria: "Neurovia Systems — home",
    switchLabel: "Español",
    newBadge: "New",
  },
  hero: {
    sectionAria: "Main section",
    badge: "Systems live in production in Mexico",
    h1: "We build your company's digital future.",
    lead: "Software that gives you time back: platforms, AI automation and systems built for your business.",
    cta: "Book a free consultation",
    trustLabel: "Companies that already trust us",
    companies: ["Oil & gas client", "Royers", "Alpha Mobil", "Provalsa"],
    scroll: "Scroll",
  },
  stats: [
    { value: "3x", label: ["faster than", "traditional development"] },
    { value: "80%", label: ["reduction in", "manual tasks"] },
    { value: "100%", label: ["projects with", "complete documentation"] },
    { value: "+15", label: ["AI technologies", "mastered"] },
  ],
  tech: {
    heading: "We work with the best tools and AI stack available today",
  },
  services: {
    eyebrow: "Services",
    h2: "Four ways to transform your business.",
    lead: "AI software, websites, automation and IT infrastructure. One team for your entire tech stack.",
    cards: [
      {
        title: "Website development",
        desc: "Fast sites, optimized to show up on Google and turn visitors into customers.",
        items: [
          "High-conversion landing pages",
          "AI-optimized e-commerce",
          "Progressive web apps (PWA)",
          "Advanced SEO optimization",
        ],
        linkLabel: "Web design in Villahermosa",
      },
      {
        title: "AI process automation",
        desc: "Win back hours every week: we automate your team's repetitive tasks. Fewer errors, more productivity.",
        items: [
          "Process automation with n8n",
          "API and service integration",
          "Intelligent AI workflows",
          "Custom automated reports",
        ],
        linkLabel: "AI automation in Tabasco",
      },
      {
        title: "Web systems & software development",
        desc: "A system built for you in weeks, not months. It solves your real problems and the code is yours.",
        items: [
          "Custom platforms and dashboards",
          "AI document processing",
          "Custom assistants and chatbots",
          "Integration with your existing systems",
        ],
        linkLabel: "Custom software development in Villahermosa",
      },
      {
        title: "IT infrastructure, networking & hardware",
        desc: "We build, deploy and maintain your computing and connectivity infrastructure. From a custom workstation to an enterprise Ubiquiti rollout.",
        items: [
          "Custom-built PCs",
          "Routers, APs and Ubiquiti networks",
          "Preventive and corrective maintenance",
          "Technical support and IT consulting",
        ],
        linkLabel: "",
      },
    ],
    morePages: [
      "Custom web app development in Tabasco",
      "Point of sale system in Villahermosa",
    ],
  },
  pos: {
    eyebrow: "Point of Sale",
    h2: "Sell faster with our Point of Sale.",
    lead: "Track sales and inventory in real time, from your phone. Close your register in seconds, not hours.",
    features: [
      "Fast checkout with barcode scanner",
      "Real-time inventory control",
      "Sales reports and cash-register closeouts",
      "Multi-store and multi-user",
    ],
    cta: "See the Point of Sale",
    cloudLink: "Point of sale in Villahermosa",
    imgAlt: "Point of Sale system for businesses in Villahermosa, Tabasco",
  },
  portfolio: {
    eyebrow: "Projects in production · Real screenshots",
    h2: "Real evidence of live systems.",
    lead: "These aren't mockups. They're platforms and sites running today in oil & gas, construction, corporate furniture and engineering.",
    ctaSystems: "See the systems live",
    crmBadge: "New product",
    crmDesc: "Customer management, contacts, opportunities and sales tracking in one place.",
    crmCta: "Open the CRM",
    inProduction: "In production",
    confidential: "Confidential",
    tapToVisit: "tap to visit the site",
    featured: {
      cat: "ERP Suite · Oil & Gas",
      title: "Oil & gas client — ERP Suite",
      desc: "A multi-system operational platform for the oil & gas industry: a single access portal with Purchasing & Requisitions, Fleet Maintenance and Inventory modules. Financial control with real-time KPIs, full traceability and auditing across 23 operational areas.",
    },
    mantenimiento: {
      cat: "System · Fleet management",
      title: "Fleet Maintenance",
      desc: "Work orders, mileage alerts, cost control and a complete fleet history — every component under control.",
    },
    hidraulica: {
      cat: "Technical software",
      title: "Oil & gas client — Hydraulics v1.3",
      desc: "11 technical modules and a 3D offshore simulator for drilling fluids.",
    },
    royers: {
      cat: "Website · Construction",
      title: "Royers S.A. de C.V.",
      descPrefix: "35+ years, 500+ projects and 98% satisfaction. 3D renders and delivered works — ",
    },
    alphamobil: {
      cat: "Website · Furniture",
      title: "Alpha Mobil",
      desc: "Corporate showroom with catalog, project gallery and direct quotes via WhatsApp.",
    },
    provalsa: {
      cat: "Website · Industrial valves",
      title: "Provalsa",
      desc: "Catalog of valves and industrial equipment with product showcase and direct contact for quotes.",
    },
    tacef: {
      cat: "Website · Steel",
      title: "TACEF Aceros",
      descPrefix: "Corporate website for TACEF, in the steel sector: company overview, products and contact — ",
    },
    sotop: {
      cat: "Web system · Government",
      title: "SOTOP — Government of Tabasco",
      descPrefix: "Equipment assessment web system for the IT & Technical Support Unit — ",
    },
    comingSoon: {
      badge: "In development · Coming soon",
      title: "Inventory System",
      descA: "Stock control, warehouse and inventory management. We're building our own product that will be available as a ",
      once: "one-time purchase",
      or: " or ",
      membership: "subscription",
      cta: "I want to know more",
    },
    lightbox: {
      galleryAria: "Royers gallery",
      title: "Royers S.A. de C.V. — Gallery",
      subtitle: "3D renders and delivered works",
      close: "Close gallery",
      prev: "Previous image",
      next: "Next image",
      imgAlt: "Royers project screenshot",
      hint: "Tap outside the image or × to close · ‹ › to navigate",
    },
    alts: {
      portal: "Oil & gas client — ERP Systems Portal",
      mantenimiento: "Oil & gas client — Fleet Maintenance System",
      hidraulica: "Oil & gas client — Hydraulics v1.3",
      royers: "Royers S.A. de C.V. — Construction in Tabasco",
      alphamobil: "Alpha Mobil — Corporate furniture showroom",
      provalsa: "Provalsa — Valves and industrial equipment",
      tacef: "TACEF Aceros — Corporate website",
      sotop: "SOTOP — Tabasco Ministry of Territorial Planning and Public Works",
    },
  },
  whyus: {
    eyebrow: "Why Neurovia",
    h2: "Why companies choose us over other agencies.",
    reasons: [
      {
        title: "Speed without sacrificing quality",
        desc: "We use the most advanced tools to deliver results in weeks, not months.",
      },
      {
        title: "You talk to the people who build it",
        desc: "Direct communication with the technical team. No unnecessary management layers or middlemen.",
      },
      {
        title: "Big Tech-grade technology",
        desc: "We use the same frameworks and tools as the most advanced tech companies.",
      },
      {
        title: "Real post-launch support",
        desc: "We don't disappear after delivery. We stay with you through support, improvements and scaling.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    h2: "From idea to result in 4 steps.",
    steps: [
      { title: "Discovery", desc: "We understand your business and your goals." },
      { title: "Strategy & design", desc: "We design the ideal solution for your case." },
      { title: "Development", desc: "We build with agility and full transparency." },
      { title: "Launch & growth", desc: "We ship, measure and keep improving." },
    ],
  },
  testimonials: {
    eyebrow: "Clients",
    h2: "Results that speak for themselves.",
    items: [
      {
        quote: "They built our corporate site with an industrial catalog and integrated online store. The result exceeded our expectations: professional, fast and easy to manage.",
        role: "Industrial supplies · Client since 2024",
      },
      {
        quote: "They delivered a premium site that reflects the quality of our work. Project gallery, 3D renders and built-in quoting. Every detail cared for to the millimeter, like our builds.",
        role: "Construction · 35+ years in Tabasco",
      },
      {
        quote: "Professional at every stage. From the first meeting to final delivery they showed commitment, speed and technical expertise. Recommended 100%.",
        role: "Services company · Client since 2024",
      },
    ],
  },
  contact: {
    badge: "Reply in under 24h",
    h2: "Let's talk about your project.",
    lead: "A 45-minute conversation can change the course of your business. No strings, no jargon. Free analysis, a tailored proposal and a clear estimate.",
    phoneCta: "+52 993 722 6350 · WhatsApp",
    emailPrefix: "Or email us at",
    figures: [
      { value: "< 24h", label: "reply" },
      { value: "100%", label: "free" },
      { value: "45 min", label: "session" },
    ],
  },
  footer: {
    tagline: "AI software, websites and IT infrastructure. One team for your entire tech stack.",
    copyright: "© 2026 Neurovia Systems — Software, AI & IT Infrastructure",
  },
  service: {
    benefitsEyebrow: "Benefits",
    faqEyebrow: "FAQ",
    faqTitle: "We answer your questions",
    relatedEyebrow: "Other services",
    relatedTitle: "More solutions for your business in Villahermosa & Tabasco",
    backHome: "Back to home",
    ctaConsulta: "Book a free consultation",
  },
  sistemas: {
    eyebrow: "Systems platform",
    h1: "Neurovia systems catalog",
    lead: "A central portal for the systems we build and keep in production: CRM, purchasing, fleet maintenance, inventory and point of sale. Choose a system to sign in.",
    note: "Some systems require access credentials provided by Neurovia Systems. Need access or a system tailored to your business? Get in touch.",
    enter: "Enter system",
    newBadge: "New",
    systems: [
      { name: "CRM", desc: "Customer management, contacts, opportunities and sales tracking in one place." },
      { name: "Requisitions System", desc: "Purchase orders, accounts payable, suppliers and dynamic reporting." },
      { name: "Fleet Maintenance", desc: "Fleet control, service orders, units and maintenance logs." },
      { name: "Inventory", desc: "Warehouse management, inbound and outbound, stock and movements." },
      { name: "Point of Sale", desc: "Sales terminal, receipts, cash registers and daily operations control." },
    ],
  },
  crm: {
    eyebrow: "CRM",
    badge: "New",
    h2: "Manage your customers with our CRM.",
    lead: "Centralize contacts, opportunities and sales follow-up in one place. Fewer spreadsheets, more closed deals.",
    features: [
      "Organized contacts and companies",
      "Visual sales pipeline",
      "Opportunity and task tracking",
      "Real-time sales reports",
    ],
    cta: "Open the CRM",
    allSystems: "See all systems",
    imgAlt: "Neurovia Systems CRM sign-in screen",
    mockTitle: "Sales pipeline",
    stages: { prospect: "Prospect", proposal: "Proposal", won: "Won" },
  },
};

/* -------------------------------------------------------------------------- */

export const dictionaries = { es, en };
export type Dict = typeof es;

export function getDict(lang: Locale): Dict {
  return dictionaries[lang];
}
