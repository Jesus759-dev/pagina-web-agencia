import type { Locale } from "./i18n";

/* --------------------------------------------------------------------------
 * Casos de éxito — contenido de /casos-de-exito (ES) y /en/casos-de-exito.
 *
 * Regla de la página: nada de métricas inventadas. Cuando no hay un número
 * verificable, el resultado se describe en términos cualitativos ("centralizó
 * el flujo", "dejó de depender de Excel"). Los datos duros que sí aparecen
 * —23 áreas operativas, 24 módulos, 18 módulos, 35 años, 500 obras— son los
 * que el propio sitio y el cliente ya publican.
 * -------------------------------------------------------------------------- */

export type Caso = {
  /** Ancla de la sección; también el @id del CreativeWork en el JSON-LD. */
  id: string;
  cliente: string;
  sector: string;
  /** Etiqueta corta: "Confidencial", "En producción"… */
  badge?: string;
  problema: string;
  solucion: string;
  construido: string[];
  tecnologias: string[];
  resultado: string;
  servicios: { href: string; label: string }[];
};

export type CasosContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  labels: {
    problema: string;
    solucion: string;
    construido: string;
    tecnologias: string;
    resultado: string;
    servicios: string;
    breadcrumbAria: string;
    home: string;
  };
  casos: Caso[];
  waMessage: string;
  ctaTitle: string;
  ctaLead: string;
};

const es: CasosContent = {
  metaTitle: "Casos de Éxito: Sistemas en Producción",
  metaDescription:
    "Casos reales: suite ERP para el sector petrolero, CRM de 24 módulos para una comercializadora y sistema de taller con app móvil, en Villahermosa y Tabasco.",
  eyebrow: "Casos de éxito",
  h1: "Casos de Éxito: Sistemas que Operan Todos los Días",
  lead:
    "Estos no son conceptos ni maquetas. Son sistemas y sitios que hoy usan empresas del sector petrolero, la construcción, el comercio, los talleres y el gobierno de Tabasco.",
  intro: [
    "Cada caso sigue la misma estructura: cuál era el problema, qué construimos, con qué tecnología y qué cambió en la operación. Donde no tenemos una cifra verificable del cliente, lo decimos en palabras en lugar de inventar un porcentaje.",
    "Varios de estos proyectos son de empresas de Villahermosa y del resto de Tabasco; en algunos el nombre no aparece porque el contrato lo impide, no porque no exista.",
  ],
  labels: {
    problema: "El problema",
    solucion: "Lo que hicimos",
    construido: "Qué se construyó",
    tecnologias: "Tecnologías",
    resultado: "Qué cambió",
    servicios: "Servicios que intervienen",
    breadcrumbAria: "Ruta de navegación",
    home: "Inicio",
  },
  casos: [
    {
      id: "suite-erp-petrolera",
      cliente: "Cliente del sector petrolero",
      sector: "Petróleo y gas · Suite ERP",
      badge: "Confidencial",
      problema:
        "Una empresa de servicios petroleros con 23 áreas operativas llevaba requisiciones, mantenimiento de flota e inventario en sistemas y formatos separados. Autorizar una compra dependía de correos y llamadas, y nadie tenía una vista única de lo que estaba pedido, recibido o pendiente de pagar.",
      solucion:
        "Construimos una plataforma operativa multisistema con un portal único de acceso: cada área entra con su perfil y ve solo lo suyo, pero la información vive en un mismo lugar. Se desarrolló módulo por módulo, empezando por Requisiciones y Compras, que era el proceso que más fricción generaba.",
      construido: [
        "Requisiciones y compras con autorización por nivel y comparativo de proveedores",
        "Mantenimiento vehicular: órdenes de trabajo, alertas por kilometraje e historial por unidad",
        "Inventario con entradas, salidas y control por almacén",
        "Tablero de indicadores con seguimiento financiero y trazabilidad por área",
      ],
      tecnologias: ["Aplicación web a la medida", "Base de datos relacional", "Control de accesos por área", "Reportes en tiempo real"],
      resultado:
        "La operación de 23 áreas quedó centralizada en una sola plataforma con trazabilidad completa: quién pidió, quién autorizó y cuándo se recibió. Las autorizaciones dejaron de vivir en correos y el historial de cada unidad y de cada compra quedó disponible para auditoría.",
      servicios: [
        { href: "/erp-a-medida-villahermosa", label: "ERP a la medida" },
        { href: "/wms-villahermosa", label: "WMS e inventario" },
      ],
    },
    {
      id: "caposa",
      cliente: "CAPOSA",
      sector: "Comercialización y distribución · CRM a la medida",
      badge: "Villahermosa, Tabasco",
      problema:
        "Una comercializadora de Villahermosa con varios almacenes manejaba clientes, precios, existencias y facturación en herramientas distintas. El equipo de ventas cotizaba sin ver el inventario real y la información para reportar se armaba a mano.",
      solucion:
        "Desarrollamos un sistema de gestión a la medida de 24 módulos que junta la parte comercial con la operativa: el mismo sistema donde se atiende al cliente es el que descuenta del almacén y genera la factura.",
      construido: [
        "CRM con clientes, seguimiento y cotizaciones conectadas al catálogo",
        "Inventario multi-almacén con traspasos y existencias por sucursal",
        "Facturación CFDI 4.0 integrada al flujo de venta",
        "Reportes asistidos con inteligencia artificial para dirección",
        "Tres propuestas de sitio web, presentadas funcionando para que el cliente eligiera sobre algo real y no sobre un PDF",
      ],
      tecnologias: ["Sistema web a la medida", "Inventario multi-almacén", "CFDI 4.0", "Reportes con IA"],
      resultado:
        "Ventas, almacén y facturación dejaron de ser tres mundos separados: la cotización nace del catálogo con existencias reales y termina en una factura sin volver a capturar los datos.",
      servicios: [
        { href: "/crm-a-medida-villahermosa", label: "CRM a la medida" },
        { href: "/wms-villahermosa", label: "WMS e inventario" },
        { href: "/diseno-de-paginas-web-villahermosa", label: "Diseño de páginas web" },
      ],
    },
    {
      id: "asc-motores",
      cliente: "ASC Motores",
      sector: "Taller y servicio técnico · Sistema + apps móviles",
      badge: "Villahermosa, Tabasco",
      problema:
        "El trabajo de un taller ocurre en el piso, no frente a una computadora. Las órdenes de trabajo, los avances y las refacciones usadas se anotaban en papel y se capturaban después —cuando se capturaban—, así que el historial de cada equipo quedaba incompleto.",
      solucion:
        "Construimos un sistema de taller de 18 módulos y, encima, aplicaciones móviles para Android e iOS, para que la orden se abra, se actualice y se cierre desde donde está el técnico.",
      construido: [
        "Órdenes de trabajo con estatus, responsable y evidencia",
        "Control de refacciones y consumos por servicio",
        "Historial por equipo y por cliente",
        "App Android y app iOS conectadas al mismo sistema",
      ],
      tecnologias: ["Sistema web a la medida", "App Android", "App iOS", "18 módulos operativos"],
      resultado:
        "La captura pasó del papel al momento en que ocurre el trabajo, y el historial de cada equipo dejó de depender de que alguien se acordara de transcribir la hoja al final del día.",
      servicios: [
        { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Software a medida" },
        { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Aplicaciones web y móviles" },
      ],
    },
    {
      id: "sotop",
      cliente: "SOTOP — Gobierno de Tabasco",
      sector: "Gobierno · Sistema web interno",
      problema:
        "La Unidad de Apoyo Técnico e Informático de la Secretaría de Ordenamiento Territorial y Obras Públicas necesitaba dictaminar equipos de cómputo con un procedimiento uniforme y un expediente que resistiera revisión.",
      solucion:
        "Desarrollamos un sistema web de dictamen de equipos de soporte: captura estandarizada, resguardo del historial y documento final consistente para cada caso.",
      construido: [
        "Registro de equipos y sus características",
        "Dictamen con criterios uniformes",
        "Historial y respaldo documental por caso",
      ],
      tecnologias: ["Sistema web a la medida", "Expediente digital", "Formatos estandarizados"],
      resultado:
        "El área pasó de formatos sueltos a un procedimiento único con expediente digital, que es lo que se necesita cuando el proceso puede ser revisado.",
      servicios: [
        { href: "/desarrollo-de-software-tabasco", label: "Desarrollo de software en Tabasco" },
        { href: "/sistemas-empresariales-tabasco", label: "Sistemas empresariales" },
      ],
    },
    {
      id: "royers",
      cliente: "Royers S.A. de C.V.",
      sector: "Construcción · Sitio web corporativo",
      problema:
        "Una constructora con más de 35 años y más de 500 obras entregadas llegaba a clientes y concursos sin una presencia digital que reflejara ese peso. El trabajo existía, pero no había dónde verlo.",
      solucion:
        "Construimos un sitio corporativo que pone la obra al frente: renders 3D, proyectos entregados y una lectura clara de la experiencia de la empresa, pensado para que un cliente potencial confíe antes de la primera llamada.",
      construido: [
        "Sitio corporativo con galería de obra y renders 3D",
        "Estructura orientada a que la trayectoria se entienda en segundos",
        "Contacto directo desde cada sección",
      ],
      tecnologias: ["Sitio web corporativo", "Optimización para buscadores", "Galería de proyectos"],
      resultado:
        "La trayectoria de la constructora quedó documentada y visible en un solo lugar: hoy el sitio es la primera prueba de capacidad que ve un cliente o un convocante.",
      servicios: [
        { href: "/diseno-de-paginas-web-villahermosa", label: "Diseño de páginas web" },
        { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Desarrollo web en Tabasco" },
      ],
    },
    {
      id: "sitios-industriales",
      cliente: "Alpha Mobil, Provalsa y TACEF Aceros",
      sector: "Industria y comercio · Sitios corporativos",
      problema:
        "Tres empresas industriales —mobiliario corporativo, válvulas y equipo industrial, y acero— vendían con catálogo, referencias y trato directo, pero en internet no aparecían o aparecían con una página que no decía nada.",
      solucion:
        "Desarrollamos un sitio para cada una, con la misma lógica: mostrar el producto con claridad y dejar el contacto a un clic, porque en estos giros la venta sigue siendo por conversación.",
      construido: [
        "Alpha Mobil: showroom con catálogo, galería de proyectos y cotización por WhatsApp",
        "Provalsa: catálogo de válvulas y equipo industrial con contacto para cotización",
        "TACEF Aceros: sitio corporativo con presentación de empresa, productos y contacto",
      ],
      tecnologias: ["Sitios web corporativos", "Catálogo de productos", "Contacto por WhatsApp", "SEO técnico"],
      resultado:
        "Las tres pasaron de no tener presencia útil a un sitio que funciona como catálogo y como primer filtro comercial, con el contacto siempre a la vista.",
      servicios: [
        { href: "/diseno-de-paginas-web-villahermosa", label: "Diseño de páginas web" },
        { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Software a medida" },
      ],
    },
    {
      id: "productos-propios",
      cliente: "Productos propios: Núcleo SGI, Tomín POS y Huella",
      sector: "Producto · Software en producción",
      problema:
        "Hay necesidades que se repiten en muchas empresas del sureste: un contratista petrolero que debe demostrar cumplimiento, un negocio de mostrador que necesita vender y facturar, una clínica veterinaria que lleva expedientes en papel.",
      solucion:
        "En vez de desarrollar lo mismo desde cero cada vez, construimos productos propios que ya están en producción y que se adaptan al cliente: es software probado, con precio de producto y no de proyecto.",
      construido: [
        "Núcleo SGI: sistema de gestión integral para contratistas, con documentos, hallazgos y evidencia de auditoría",
        "Tomín POS: punto de venta multi-sucursal con facturación para negocios locales",
        "Huella: gestión para clínicas veterinarias con expediente, consultas y vacunas",
      ],
      tecnologias: ["SaaS multi-tenant", "CFDI 4.0", "Infraestructura propia", "Actualizaciones continuas"],
      resultado:
        "Una empresa que necesita algo estándar arranca en días con un producto probado; y cuando su proceso es distinto, ese mismo producto sirve de base para el desarrollo a la medida.",
      servicios: [
        { href: "/sistema-punto-de-venta-villahermosa", label: "Punto de venta" },
        { href: "/sistemas-empresariales-tabasco", label: "Sistemas empresariales" },
      ],
    },
  ],
  waMessage: "Hola, vi los casos de éxito en su sitio y quiero platicar de un sistema para mi empresa.",
  ctaTitle: "¿Tu operación se parece a alguno de estos casos?",
  ctaLead:
    "Cuéntanos el proceso que hoy te está costando tiempo. En una llamada de 20 minutos te decimos si tiene solución con software, cuál sería y qué implica; y si no la tiene, también te lo decimos.",
};

const en: CasosContent = {
  metaTitle: "Case Studies: Systems in Production",
  metaDescription:
    "Real projects: an ERP suite for the oil sector, a 24-module CRM for a distributor and a workshop system with mobile apps, in Villahermosa and Tabasco.",
  eyebrow: "Case studies",
  h1: "Case Studies: Systems That Run Every Day",
  lead:
    "These are not concepts or mockups. They are systems and sites used today by companies in oil and gas, construction, distribution, workshops and the government of Tabasco.",
  intro: [
    "Every case follows the same structure: what the problem was, what we built, with which technology and what changed in the operation. Where we do not have a verifiable figure from the client, we say it in words instead of inventing a percentage.",
    "Several of these projects belong to companies in Villahermosa and the rest of Tabasco; in some the name is missing because the contract says so, not because the project does not exist.",
  ],
  labels: {
    problema: "The problem",
    solucion: "What we did",
    construido: "What was built",
    tecnologias: "Technologies",
    resultado: "What changed",
    servicios: "Services involved",
    breadcrumbAria: "Breadcrumb",
    home: "Home",
  },
  casos: [
    {
      id: "suite-erp-petrolera",
      cliente: "Oil & gas client",
      sector: "Oil and gas · ERP suite",
      badge: "Confidential",
      problema:
        "An oilfield services company with 23 operating areas ran purchase requests, fleet maintenance and inventory in separate systems and formats. Approving a purchase depended on emails and phone calls, and nobody had a single view of what was ordered, received or still to be paid.",
      solucion:
        "We built a multi-system operations platform with a single access portal: each area logs in with its own profile and sees only its part, while the information lives in one place. It was built module by module, starting with purchase requests and buying, the process causing the most friction.",
      construido: [
        "Purchase requests and buying with approval levels and supplier comparison",
        "Vehicle maintenance: work orders, mileage alerts and history per unit",
        "Inventory with receipts, issues and control per warehouse",
        "Indicator dashboard with financial tracking and traceability per area",
      ],
      tecnologias: ["Custom web application", "Relational database", "Access control per area", "Real-time reporting"],
      resultado:
        "The operation of 23 areas ended up centralised in one platform with full traceability: who requested, who approved and when it was received. Approvals left the inbox, and the history of every unit and purchase became available for audit.",
      servicios: [
        { href: "/erp-a-medida-villahermosa", label: "Custom ERP" },
        { href: "/wms-villahermosa", label: "WMS and inventory" },
      ],
    },
    {
      id: "caposa",
      cliente: "CAPOSA",
      sector: "Distribution · Custom CRM",
      badge: "Villahermosa, Tabasco",
      problema:
        "A Villahermosa distributor with several warehouses handled customers, prices, stock and invoicing in different tools. Sales quoted without seeing real inventory, and reporting data was assembled by hand.",
      solucion:
        "We built a 24-module custom management system that joins the commercial side with operations: the same system where the customer is served is the one that deducts stock and issues the invoice.",
      construido: [
        "CRM with customers, follow-up and quotes connected to the catalogue",
        "Multi-warehouse inventory with transfers and stock per branch",
        "CFDI 4.0 invoicing built into the sales flow",
        "AI-assisted reports for management",
        "Three website proposals, presented live so the client could choose on something real instead of a PDF",
      ],
      tecnologias: ["Custom web system", "Multi-warehouse inventory", "CFDI 4.0", "AI reporting"],
      resultado:
        "Sales, warehouse and invoicing stopped being three separate worlds: a quote starts from the catalogue with real stock and ends as an invoice without retyping the data.",
      servicios: [
        { href: "/crm-a-medida-villahermosa", label: "Custom CRM" },
        { href: "/wms-villahermosa", label: "WMS and inventory" },
        { href: "/diseno-de-paginas-web-villahermosa", label: "Web design" },
      ],
    },
    {
      id: "asc-motores",
      cliente: "ASC Motores",
      sector: "Workshop and field service · System + mobile apps",
      badge: "Villahermosa, Tabasco",
      problema:
        "A workshop's work happens on the floor, not in front of a computer. Work orders, progress and parts used were written on paper and typed up later — when they were typed at all — so each unit's history stayed incomplete.",
      solucion:
        "We built an 18-module workshop system and, on top of it, Android and iOS apps, so an order can be opened, updated and closed wherever the technician is.",
      construido: [
        "Work orders with status, owner and evidence",
        "Parts and consumption control per service",
        "History per unit and per customer",
        "Android and iOS apps connected to the same system",
      ],
      tecnologias: ["Custom web system", "Android app", "iOS app", "18 operating modules"],
      resultado:
        "Data entry moved from paper to the moment the work happens, and each unit's history stopped depending on someone remembering to transcribe a sheet at the end of the day.",
      servicios: [
        { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software" },
        { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Web and mobile apps" },
      ],
    },
    {
      id: "sotop",
      cliente: "SOTOP — Government of Tabasco",
      sector: "Government · Internal web system",
      problema:
        "The technical and IT support unit of Tabasco's ministry of territorial planning and public works needed to assess computer equipment with a uniform procedure and a record that would survive review.",
      solucion:
        "We built a web system for equipment assessment: standardised capture, history kept on file and a consistent final document for every case.",
      construido: [
        "Equipment registry with specifications",
        "Assessment with uniform criteria",
        "History and supporting documents per case",
      ],
      tecnologias: ["Custom web system", "Digital records", "Standardised formats"],
      resultado:
        "The unit moved from loose forms to a single procedure with a digital record, which is what you need when the process can be reviewed.",
      servicios: [
        { href: "/desarrollo-de-software-tabasco", label: "Software development in Tabasco" },
        { href: "/sistemas-empresariales-tabasco", label: "Business systems" },
      ],
    },
    {
      id: "royers",
      cliente: "Royers S.A. de C.V.",
      sector: "Construction · Corporate website",
      problema:
        "A builder with 35+ years and 500+ delivered projects reached clients and tenders without a digital presence that reflected that weight. The work existed, but there was nowhere to see it.",
      solucion:
        "We built a corporate site that puts the work first: 3D renders, delivered projects and a clear read of the company's experience, so a prospective client trusts it before the first call.",
      construido: [
        "Corporate site with project gallery and 3D renders",
        "Structure built so the track record lands in seconds",
        "Direct contact from every section",
      ],
      tecnologias: ["Corporate website", "Search engine optimisation", "Project gallery"],
      resultado:
        "The builder's track record is documented and visible in one place: the site is now the first proof of capability a client or tender board sees.",
      servicios: [
        { href: "/diseno-de-paginas-web-villahermosa", label: "Web design" },
        { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Web development in Tabasco" },
      ],
    },
    {
      id: "sitios-industriales",
      cliente: "Alpha Mobil, Provalsa and TACEF Aceros",
      sector: "Industry and trade · Corporate websites",
      problema:
        "Three industrial companies — corporate furniture, industrial valves and steel — sold through catalogues, referrals and direct contact, but online they were either absent or had a page that said nothing.",
      solucion:
        "We built a site for each, with the same logic: show the product clearly and keep contact one click away, because in these industries the sale still happens in conversation.",
      construido: [
        "Alpha Mobil: showroom with catalogue, project gallery and WhatsApp quotes",
        "Provalsa: catalogue of valves and industrial equipment with a quote contact",
        "TACEF Aceros: corporate site with company presentation, products and contact",
      ],
      tecnologias: ["Corporate websites", "Product catalogue", "WhatsApp contact", "Technical SEO"],
      resultado:
        "All three went from having no useful presence to a site that works as a catalogue and as a first commercial filter, with contact always in sight.",
      servicios: [
        { href: "/diseno-de-paginas-web-villahermosa", label: "Web design" },
        { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software" },
      ],
    },
    {
      id: "productos-propios",
      cliente: "Our own products: Núcleo SGI, Tomín POS and Huella",
      sector: "Product · Software in production",
      problema:
        "Some needs repeat across companies in southeast Mexico: an oil contractor that must prove compliance, a counter business that needs to sell and invoice, a veterinary clinic keeping records on paper.",
      solucion:
        "Instead of building the same thing from scratch every time, we built our own products, already in production and adaptable to each client: proven software at a product price rather than a project price.",
      construido: [
        "Núcleo SGI: integrated management system for contractors, with documents, findings and audit evidence",
        "Tomín POS: multi-branch point of sale with invoicing for local businesses",
        "Huella: management for veterinary clinics with records, consultations and vaccines",
      ],
      tecnologias: ["Multi-tenant SaaS", "CFDI 4.0", "Own infrastructure", "Continuous updates"],
      resultado:
        "A company that needs something standard starts in days with proven software; and when its process is different, that same product becomes the base for custom development.",
      servicios: [
        { href: "/sistema-punto-de-venta-villahermosa", label: "Point of sale" },
        { href: "/sistemas-empresariales-tabasco", label: "Business systems" },
      ],
    },
  ],
  waMessage: "Hi, I saw your case studies and I'd like to talk about a system for my company.",
  ctaTitle: "Does your operation look like any of these?",
  ctaLead:
    "Tell us which process is costing you time. In a 20-minute call we will tell you whether software solves it, what it would look like and what it takes — and if it does not, we will say that too.",
};

export function getCasos(lang: Locale = "es"): CasosContent {
  return lang === "en" ? en : es;
}
