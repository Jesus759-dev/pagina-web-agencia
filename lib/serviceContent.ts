import type { Metadata } from "next";
import { localeBase, type Locale } from "./i18n";
import { breadcrumbJsonLd } from "./seo";

/* --------------------------------------------------------------------------
 * Service landing pages — local SEO content (single source of truth), ES + EN.
 * Each entry powers app/<slug>/page.tsx (es) and app/en/<slug>/page.tsx (en)
 * via the shared <ServicePage> template, with its own metadata + JSON-LD.
 * -------------------------------------------------------------------------- */

export const SITE_URL = "https://neuroviasystems.com.mx";
export const SITE_NAME = "Neurovia Systems";
export const ORG_ID = `${SITE_URL}/#organization`;
const OG_IMAGE = `${SITE_URL}/images/og-robotic-hand.jpg`;

export type ServiceFaq = { q: string; a: string };

export type ServicePageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  eyebrow: string;
  h1: string;
  heroLead: string;
  ogAlt: string;
  waMessage: string;
  /** Reference price shown next to the hero CTA (e.g. "Desde $25,000 MXN + IVA"). */
  priceNote?: string;
  serviceType: string;
  /** Zona que cubre la página; por defecto Villahermosa / Tabasco / México. */
  areaServed?: { type: "City" | "State" | "Country"; name: string }[];
  sections: { h2: string; body: string[] }[];
  benefitsTitle: string;
  benefits: { title: string; desc: string }[];
  audienceTitle: string;
  audienceLead: string;
  audience: string[];
  faq: ServiceFaq[];
  related: { href: string; label: string }[];
};

/* ============================ SPANISH ==================================== */

const es: Record<string, ServicePageData> = {
  "desarrollo-de-software-a-medida-villahermosa": {
    slug: "desarrollo-de-software-a-medida-villahermosa",
    metaTitle: "Desarrollo de Software a Medida en Villahermosa",
    metaDescription:
      "Desarrollo de software a medida en Villahermosa, Tabasco. Creamos sistemas, plataformas y dashboards que automatizan tu empresa. Agenda tu consulta gratuita.",
    keyword: "desarrollo de software a medida Villahermosa",
    eyebrow: "Software a medida",
    h1: "Desarrollo de Software a Medida en Villahermosa",
    heroLead:
      "En Neurovia Systems hacemos desarrollo de software a medida en Villahermosa para empresas de Tabasco que ya no quieren adaptarse a programas genéricos. Construimos sistemas, plataformas web y dashboards diseñados exactamente para tu operación.",
    ogAlt: "Desarrollo de software a medida en Villahermosa — Neurovia Systems",
    waMessage: "Hola, necesito un sistema a la medida para mi empresa en Villahermosa. ¿Podemos agendar una llamada esta semana?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Desarrollo de software a medida",
    sections: [
      {
        h2: "Software hecho para tu negocio, no al revés",
        body: [
          "Cada empresa en Villahermosa opera distinto: tus procesos, tus reglas y tu forma de atender a tus clientes son tuyos. Por eso un sistema enlatado casi siempre termina obligándote a cambiar tu manera de trabajar para encajar en el programa. El desarrollo de software a medida invierte esa lógica: el sistema se construye alrededor de cómo ya funciona tu negocio.",
          "Desarrollamos plataformas internas, sistemas de gestión, paneles de control y herramientas que conectan las áreas de tu empresa en un solo lugar. Desde el control de requisiciones y el seguimiento de proyectos hasta la facturación interna y los reportes para dirección, todo queda centralizado, ordenado y accesible desde cualquier dispositivo.",
        ],
      },
      {
        h2: "Tecnología moderna y mantenible",
        body: [
          "Trabajamos con tecnologías actuales y bien soportadas —Next.js, React, Node.js y bases de datos robustas— para que tu software sea rápido, seguro y fácil de mantener con el tiempo. Nada de sistemas que solo el programador original entiende: documentamos el proyecto y lo entregamos listo para crecer.",
          "Además, integramos inteligencia artificial donde aporta valor real: procesamiento automático de documentos, asistentes internos, búsqueda inteligente y analítica que te ayuda a tomar mejores decisiones con los datos que tu empresa ya genera.",
        ],
      },
      {
        h2: "Los sectores que más nos buscan en Villahermosa",
        body: [
          "**Petróleo y servicios petroleros.** Es la operación más exigente de la región y la que más papel mueve. Desarrollamos para un cliente del sector una suite con requisiciones y compras, mantenimiento vehicular e inventario sobre 23 áreas operativas, y creamos Núcleo SGI para los contratistas que deben demostrar cumplimiento ante su cliente y ante la autoridad.",
          "**Comercio y distribución.** Almacenes que no cuadran, listas de precios por cliente y pedidos que entran por WhatsApp. Para la comercializadora CAPOSA construimos un sistema de 24 módulos con inventario multi-almacén, facturación CFDI 4.0 y reportes con inteligencia artificial.",
          "**Talleres y servicio técnico.** El trabajo ocurre lejos del escritorio: para ASC Motores desarrollamos un sistema de 18 módulos con app Android e iOS para abrir y cerrar órdenes desde donde está el técnico.",
          "**Construcción y gobierno.** Requisiciones por frente de obra, costo real por proyecto y expedientes que resisten revisión; también desarrollamos el sistema de dictamen de equipos de la SOTOP, del Gobierno de Tabasco.",
        ],
      },
    ],
    benefitsTitle: "Por qué elegir Neurovia para tu software a medida",
    benefits: [
      { title: "Atención local en Tabasco", desc: "Estamos en Villahermosa: reuniones claras, trato directo y entendimiento real del negocio de la región, sin intermediarios." },
      { title: "Sistemas en producción", desc: "No vendemos promesas: ya tenemos sistemas funcionando en empresas reales del sector petrolero, construcción e industrial." },
      { title: "Código propio y documentado", desc: "El software es tuyo. Te entregamos el proyecto documentado para que no quedes amarrado a un solo proveedor." },
      { title: "Escalable y con IA", desc: "Arrancamos con lo esencial y crecemos por etapas, integrando automatización e inteligencia artificial cuando suma." },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audienceLead:
      "El desarrollo de software a medida es ideal para empresas de Villahermosa y Tabasco que ya sienten que las hojas de cálculo o los programas genéricos se les quedaron cortos:",
    audience: [
      "Empresas industriales y del sector petrolero que necesitan controlar requisiciones, mantenimiento o inventario.",
      "Constructoras y despachos que gestionan proyectos, presupuestos y avances de obra.",
      "Negocios en crecimiento que quieren centralizar áreas que hoy viven en Excel y WhatsApp.",
      "Empresas de servicios que requieren portales internos o dashboards para dirección.",
    ],
    faq: [
      { q: "¿Cuánto cuesta desarrollar un software a medida?", a: "Depende del alcance, pero siempre partimos de un análisis gratuito para entender tu proceso y darte un estimado claro por etapas. Puedes empezar con un módulo esencial y crecer poco a poco, sin pagar todo de golpe." },
      { q: "¿Cuánto tarda el desarrollo?", a: "Una primera versión funcional suele estar lista en semanas, no meses. Trabajamos por entregas para que veas avances reales desde el inicio y puedas usar el sistema mientras lo seguimos mejorando." },
      { q: "¿El software queda a mi nombre?", a: "Sí. El sistema y su código son de tu empresa. Te lo entregamos documentado para que tengas control total y libertad de proveedor." },
      { q: "¿Atienden solo en Villahermosa?", a: "Estamos en Villahermosa, Tabasco, y atendemos a toda la región. También trabajamos de forma remota con empresas del resto de México y Latinoamérica." },
    ],
    related: [
      { href: "/erp-a-medida-villahermosa", label: "ERP a la medida en Villahermosa" },
      { href: "/crm-a-medida-villahermosa", label: "CRM a la medida en Villahermosa" },
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con inteligencia artificial en Tabasco" },
      { href: "/casos-de-exito", label: "Casos de éxito: sistemas en producción" },
    ],
  },

  "automatizacion-con-ia-tabasco": {
    slug: "automatizacion-con-ia-tabasco",
    metaTitle: "Automatización con IA para Empresas en Tabasco",
    metaDescription:
      "Automatización con inteligencia artificial en Tabasco: integramos IA y flujos que eliminan tareas repetitivas en tu empresa. Agenda tu consulta gratuita.",
    keyword: "automatización con inteligencia artificial Tabasco",
    eyebrow: "Automatización con IA",
    h1: "Automatización con Inteligencia Artificial en Tabasco",
    heroLead:
      "Ayudamos a empresas de Tabasco a recuperar horas de trabajo con automatización e inteligencia artificial. Identificamos las tareas repetitivas que consumen a tu equipo y las convertimos en flujos automáticos que trabajan solos.",
    ogAlt: "Automatización con inteligencia artificial en Tabasco — Neurovia Systems",
    waMessage: "Hola Neurovia Systems, me interesa la automatización con inteligencia artificial en Tabasco",
    priceNote: "Desde $25,000 MXN + IVA",
    serviceType: "Automatización de procesos con inteligencia artificial",
    sections: [
      {
        h2: "Menos tareas manuales, más resultados",
        body: [
          "En la mayoría de las empresas de Villahermosa y Tabasco hay procesos que se hacen a mano todos los días: capturar datos de un sistema a otro, generar reportes, responder los mismos mensajes, dar seguimiento a cotizaciones o procesar documentos. La automatización con inteligencia artificial elimina ese trabajo repetitivo para que tu equipo se concentre en lo que realmente importa.",
          "Diseñamos flujos automáticos que conectan tus herramientas —correo, hojas de cálculo, WhatsApp, tu sistema de facturación o tu ERP— y dejamos que la información viaje sola, sin errores de captura y sin depender de que alguien se acuerde de hacerlo.",
        ],
      },
      {
        h2: "Inteligencia artificial aplicada a tu operación",
        body: [
          "Vamos más allá de la automatización tradicional integrando modelos de IA como Claude y GPT. Con ellos podemos leer y clasificar documentos, extraer datos de facturas y contratos, responder preguntas frecuentes con asistentes virtuales y generar resúmenes o reportes a partir de tu información.",
          "Construimos los flujos con herramientas como n8n e integraciones por API, de modo que la automatización quede robusta, monitoreada y fácil de ajustar conforme tu negocio cambia.",
        ],
      },
      {
        h2: "Qué automatizamos en las empresas de Villahermosa",
        body: [
          "**Facturas y documentos que alguien captura a mano.** La IA lee el PDF o la foto, saca los datos y los deja en tu sistema o en tu hoja de control. Es la automatización que más rápido se paga sola en áreas administrativas.",
          "**La atención que llega por WhatsApp fuera de horario.** Un agente contesta las preguntas de siempre, pide los datos que necesitas para cotizar y te pasa el prospecto ya calificado, en lugar de que el mensaje se quede sin responder hasta el lunes.",
          "**Reportes que se arman cada semana.** Si los datos ya viven en tu sistema, el reporte puede salir solo, a la hora que quieras y en el formato en que lo lees.",
          "**Doble captura entre sistemas.** Cuando la misma información se teclea en el sistema de ventas y otra vez en el de facturación, una integración la mueve sola y se acaban las diferencias.",
          "**Avisos que hoy dependen de que alguien se acuerde.** Vencimientos de certificados, mínimos de inventario, mantenimientos por kilometraje o cotizaciones sin movimiento.",
        ],
      },
    ],
    benefitsTitle: "Por qué automatizar con Neurovia",
    benefits: [
      { title: "Ahorro de tiempo real", desc: "Liberamos a tu equipo de tareas repetitivas que hoy les roban horas cada semana." },
      { title: "Menos errores", desc: "La información deja de pasar a mano de un lado a otro, así que se reducen los errores de captura." },
      { title: "IA que entiende tu negocio", desc: "Aplicamos inteligencia artificial a casos concretos: documentos, atención y reportes, no humo." },
      { title: "Empezamos por lo que más duele", desc: "Detectamos el proceso que más te cuesta y lo automatizamos primero para que veas resultados rápido." },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audienceLead:
      "La automatización con inteligencia artificial en Tabasco le sirve a cualquier empresa que repita procesos manuales todos los días:",
    audience: [
      "Empresas que capturan los mismos datos en varios sistemas o en Excel.",
      "Negocios que procesan muchas facturas, órdenes de compra o documentos.",
      "Equipos de ventas que dan seguimiento manual a cotizaciones y clientes.",
      "Áreas administrativas que arman reportes repetitivos cada semana o mes.",
    ],
    faq: [
      { q: "¿Qué procesos se pueden automatizar?", a: "Casi cualquier tarea repetitiva y basada en reglas: captura de datos, generación de reportes, seguimiento de clientes, procesamiento de documentos, notificaciones y respuestas frecuentes. En la consulta gratuita detectamos cuáles te conviene automatizar primero." },
      { q: "¿Necesito cambiar los sistemas que ya uso?", a: "No necesariamente. La automatización suele conectarse a las herramientas que ya tienes mediante integraciones, así que aprovechamos tu operación actual en lugar de reemplazarla." },
      { q: "¿La inteligencia artificial es confiable para mi empresa?", a: "Sí, cuando se aplica a casos bien definidos y con controles. Diseñamos los flujos para que la IA asista y valide, manteniendo la supervisión humana donde hace falta." },
      { q: "¿Cómo empezamos?", a: "Con una consulta gratuita por WhatsApp en la que revisamos tus procesos actuales y te proponemos un primer flujo de automatización con un estimado claro." },
    ],
    related: [
      { href: "/agentes-de-inteligencia-artificial", label: "Agentes de IA que atienden WhatsApp y correo" },
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida en Villahermosa" },
      { href: "/sistemas-empresariales-tabasco", label: "Sistemas empresariales: ERP, CRM e inventario" },
    ],
  },

  "sistema-punto-de-venta-villahermosa": {
    slug: "sistema-punto-de-venta-villahermosa",
    metaTitle: "Sistema de Punto de Venta en Villahermosa",
    metaDescription:
      "Sistema de punto de venta en Villahermosa, Tabasco: controla ventas, inventario y reportes en tiempo real para tu negocio local. Agenda tu consulta gratuita.",
    keyword: "sistema punto de venta Villahermosa",
    eyebrow: "Punto de venta",
    h1: "Sistema de Punto de Venta en Villahermosa",
    heroLead:
      "Nuestro sistema de punto de venta en Villahermosa está pensado para los negocios de Tabasco: registra tus ventas, controla el inventario y consulta reportes en tiempo real desde cualquier dispositivo, sin complicaciones.",
    ogAlt: "Sistema de punto de venta en Villahermosa — Neurovia Systems",
    waMessage: "Hola, quiero cotizar Tomín POS para mi negocio. ¿Cuánto cuesta?",
    serviceType: "Sistema de punto de venta (POS)",
    sections: [
      {
        h2: "Vende, controla tu inventario y mide tu negocio",
        body: [
          "Un buen sistema de punto de venta no es solo cobrar: es saber qué se vende, cuánto te queda en inventario y cómo va tu negocio sin tener que cerrar para hacer cuentas. Nuestro punto de venta registra cada venta al instante, descuenta el stock automáticamente y te muestra reportes claros de ventas por día, producto y forma de pago.",
          "Está diseñado para comercios, restaurantes y negocios de servicios de Villahermosa que quieren orden y control sin pelearse con un sistema complicado. La interfaz es rápida e intuitiva, pensada para que tu personal la aprenda en minutos.",
        ],
      },
      {
        h2: "En la nube y accesible desde donde estés",
        body: [
          "Al estar en la nube, puedes revisar las ventas de tu negocio desde tu celular o computadora aunque no estés en el local. Ideal si tienes más de una sucursal o si quieres estar al pendiente sin vivir detrás del mostrador.",
          "Y como lo desarrollamos nosotros, podemos adaptarlo a tu giro: agregar el control de mesas de un restaurante, los servicios de una estética o el catálogo específico de tu tienda. Es un punto de venta que crece contigo.",
        ],
      },
    ],
    benefitsTitle: "Por qué elegir nuestro punto de venta",
    benefits: [
      { title: "Inventario al día", desc: "Cada venta descuenta el stock automáticamente. Sabes qué tienes y qué te falta sin contar a mano." },
      { title: "Reportes en tiempo real", desc: "Consulta ventas por día, producto y forma de pago desde tu celular, estés donde estés." },
      { title: "Fácil de usar", desc: "Interfaz rápida e intuitiva: tu personal la domina en minutos, sin capacitaciones eternas." },
      { title: "Soporte local", desc: "Estamos en Villahermosa. Si necesitas ayuda, hablas con personas que conocen tu negocio." },
    ],
    audienceTitle: "¿Para qué negocios es?",
    audienceLead: "El sistema de punto de venta es ideal para los giros más comunes de Villahermosa y Tabasco:",
    audience: [
      "Tiendas, abarrotes y comercios con manejo de inventario.",
      "Restaurantes, cafeterías y negocios de comida.",
      "Estéticas, barberías y negocios de servicios.",
      "Negocios con una o varias sucursales que quieren control centralizado.",
    ],
    faq: [
      { q: "¿Funciona sin internet?", a: "El sistema está optimizado para trabajar en la nube y mantenerse sincronizado. En la consulta revisamos tu caso para asegurar que la operación de tu local sea fluida según tu conexión." },
      { q: "¿Puedo controlar el inventario?", a: "Sí. Cada venta descuenta el stock automáticamente y puedes ver existencias, productos más vendidos y alertas de inventario bajo." },
      { q: "¿Sirve para más de una sucursal?", a: "Sí. Al estar en la nube puedes consultar y administrar varias sucursales desde un mismo lugar y comparar su desempeño." },
      { q: "¿Lo pueden adaptar a mi tipo de negocio?", a: "Sí. Como nosotros lo desarrollamos, lo ajustamos a tu giro: control de mesas, servicios, catálogos específicos y la forma de cobro que uses." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida en Villahermosa" },
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con inteligencia artificial en Tabasco" },
      { href: "/diseno-de-paginas-web-villahermosa", label: "Diseño de páginas web en Villahermosa" },
    ],
  },

  "diseno-de-paginas-web-villahermosa": {
    slug: "diseno-de-paginas-web-villahermosa",
    metaTitle: "Diseño de Páginas Web en Villahermosa",
    metaDescription:
      "Diseño de páginas web en Villahermosa, Tabasco: sitios rápidos, optimizados para SEO que convierten visitantes en clientes. Agenda tu consulta gratuita.",
    keyword: "diseño de páginas web Villahermosa",
    eyebrow: "Diseño web",
    h1: "Diseño de Páginas Web en Villahermosa",
    heroLead:
      "Hacemos diseño de páginas web en Villahermosa para empresas de Tabasco que quieren verse profesionales y atraer clientes. Sitios rápidos, modernos y optimizados para SEO que convierten visitantes en oportunidades de negocio.",
    ogAlt: "Diseño de páginas web en Villahermosa — Neurovia Systems",
    waMessage: "Hola Neurovia Systems, me interesa el diseño de páginas web en Villahermosa",
    serviceType: "Diseño y desarrollo de páginas web",
    sections: [
      {
        h2: "Tu página web es tu primera impresión",
        body: [
          "Hoy, antes de llamarte o visitarte, tus clientes te buscan en internet. Una página web lenta, anticuada o que no se ve bien en el celular te hace perder negocio frente a la competencia. El diseño de páginas web en Villahermosa que hacemos en Neurovia busca justo lo contrario: que cada visitante entienda en segundos quién eres, qué ofreces y por qué confiar en ti.",
          "Diseñamos sitios a la medida de tu marca, no plantillas genéricas. Cuidamos la velocidad de carga, la experiencia en móvil y la claridad del mensaje para que tu página no solo se vea bien, sino que genere contactos y ventas.",
        ],
      },
      {
        h2: "Optimizadas para aparecer en Google",
        body: [
          "Una página bonita que nadie encuentra no sirve. Por eso construimos cada sitio con buenas prácticas de SEO desde el primer día: estructura correcta, velocidad, etiquetas optimizadas y contenido pensado para las búsquedas locales de Villahermosa y Tabasco.",
          "Ya sea una landing page para una campaña, un sitio corporativo con catálogo o una tienda en línea, lo desarrollamos con tecnología moderna (Next.js y React) para que sea rápido, seguro y fácil de actualizar.",
        ],
      },
    ],
    benefitsTitle: "Por qué elegir Neurovia para tu página web",
    benefits: [
      { title: "Diseño a la medida", desc: "Nada de plantillas repetidas: tu sitio refleja tu marca y se diferencia de la competencia." },
      { title: "Rápida y responsiva", desc: "Carga veloz y se ve perfecta en celular, tablet y computadora, donde están tus clientes." },
      { title: "Optimizada para SEO", desc: "Construida para posicionar en Google con keywords locales de Villahermosa y Tabasco." },
      { title: "Pensada para convertir", desc: "Mensajes claros y llamados a la acción que transforman visitas en contactos reales." },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audienceLead:
      "El diseño de páginas web en Villahermosa es para cualquier negocio de la región que quiera una presencia profesional en internet:",
    audience: [
      "Empresas que aún no tienen sitio o tienen uno antiguo y lento.",
      "Negocios que quieren una landing page para una campaña o producto.",
      "Comercios que necesitan catálogo o tienda en línea.",
      "Profesionales y despachos que buscan transmitir confianza y seriedad.",
    ],
    faq: [
      { q: "¿Cuánto cuesta una página web?", a: "Depende del tipo de sitio (landing, corporativo o tienda en línea). Te damos un presupuesto claro tras una consulta gratuita en la que entendemos tus objetivos." },
      { q: "¿La página va a aparecer en Google?", a: "Construimos cada sitio con buenas prácticas de SEO para que pueda posicionar. El posicionamiento toma tiempo, pero partimos con una base técnica optimizada y contenido local." },
      { q: "¿Se ve bien en celular?", a: "Sí. Todos nuestros sitios son responsivos y se diseñan pensando primero en el móvil, que es donde navega la mayoría de tus clientes." },
      { q: "¿Yo puedo actualizar el contenido después?", a: "Sí. Entregamos sitios fáciles de mantener y te orientamos para que puedas hacer cambios, o nos encargamos nosotros con un plan de soporte." },
    ],
    related: [
      { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Desarrollo de aplicaciones web a medida en Tabasco" },
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida en Villahermosa" },
      { href: "/sistema-punto-de-venta-villahermosa", label: "Sistema de punto de venta en Villahermosa" },
    ],
  },

  "desarrollo-de-aplicaciones-web-tabasco": {
    slug: "desarrollo-de-aplicaciones-web-tabasco",
    metaTitle: "Desarrollo de Aplicaciones Web a Medida en Tabasco",
    metaDescription:
      "Desarrollo de aplicaciones web a medida en Tabasco: plataformas, paneles y sistemas en la nube, escalables para tu empresa. Agenda tu consulta gratuita.",
    keyword: "desarrollo de aplicaciones web a medida Tabasco",
    eyebrow: "Aplicaciones web",
    h1: "Desarrollo de Aplicaciones Web a Medida en Tabasco",
    heroLead:
      "Hacemos desarrollo de aplicaciones web a medida en Tabasco: plataformas y sistemas en la nube a los que tu equipo entra desde el navegador, sin instalar nada. Herramientas creadas para resolver problemas concretos de tu empresa.",
    ogAlt: "Desarrollo de aplicaciones web a medida en Tabasco — Neurovia Systems",
    waMessage: "Hola, necesito una aplicación web a la medida para mi empresa. ¿Podemos agendar una llamada esta semana?",
    priceNote: "Desde $32,000 MXN + IVA",
    serviceType: "Desarrollo de aplicaciones web a medida",
    sections: [
      {
        h2: "Aplicaciones que viven en la nube",
        body: [
          "Una aplicación web es un sistema al que se entra desde el navegador: no hay que instalar programas en cada computadora ni preocuparse por actualizaciones manuales. Tu equipo accede con un usuario y contraseña desde la oficina, desde casa o desde el campo, y siempre trabaja sobre la misma información actualizada.",
          "Desarrollamos aplicaciones web a medida para empresas de Tabasco: portales internos, paneles de control, sistemas de gestión, plataformas para clientes y herramientas que conectan tus procesos. Todo centralizado, seguro y disponible 24/7.",
        ],
      },
      {
        h2: "Construidas para crecer y durar",
        body: [
          "Usamos tecnologías modernas como Next.js, React y Node.js para crear aplicaciones rápidas, seguras y escalables. Eso significa que tu plataforma puede empezar pequeña y crecer en usuarios y funciones sin tener que rehacerse desde cero.",
          "Cuidamos la seguridad, los respaldos y el control de accesos, y dejamos la aplicación documentada para que sea fácil de mantener. Si lo necesitas, integramos inteligencia artificial y automatizaciones para que tu sistema no solo guarde datos, sino que te ayude a trabajar.",
        ],
      },
    ],
    benefitsTitle: "Por qué desarrollar tu aplicación con Neurovia",
    benefits: [
      { title: "Acceso desde cualquier lugar", desc: "Tu equipo entra desde el navegador, sin instalaciones, con la información siempre actualizada." },
      { title: "Hecha a tu medida", desc: "Resolvemos tu proceso específico en vez de obligarte a usar un software genérico." },
      { title: "Segura y escalable", desc: "Control de accesos, respaldos y una base técnica que crece con tu empresa." },
      { title: "Lista para integrar IA", desc: "Sumamos automatización e inteligencia artificial cuando aportan valor real a tu operación." },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audienceLead:
      "El desarrollo de aplicaciones web a medida en Tabasco es ideal para organizaciones que necesitan una herramienta propia:",
    audience: [
      "Empresas que coordinan equipos en oficina, campo y sucursales.",
      "Negocios que necesitan un portal para sus clientes o proveedores.",
      "Áreas que hoy dependen de Excel compartido y quieren un sistema serio.",
      "Proyectos que requieren paneles de control y reportes a la medida.",
    ],
    faq: [
      { q: "¿Qué diferencia hay con una página web?", a: "Una página web informa; una aplicación web hace cosas: gestiona usuarios, datos y procesos. Es una herramienta de trabajo con la que tu equipo opera el día a día, no solo un sitio de presentación." },
      { q: "¿Se puede usar desde el celular?", a: "Sí. Diseñamos las aplicaciones para que funcionen bien en computadora, tablet y celular desde el navegador, sin necesidad de instalar una app." },
      { q: "¿Es segura la información?", a: "Sí. Implementamos control de accesos por usuario, buenas prácticas de seguridad y respaldos para proteger los datos de tu empresa." },
      { q: "¿Puede crecer con el tiempo?", a: "Totalmente. Construimos sobre tecnología escalable, así que puedes empezar con lo esencial y agregar usuarios y funciones por etapas." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida en Villahermosa" },
      { href: "/diseno-de-paginas-web-villahermosa", label: "Diseño de páginas web en Villahermosa" },
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con inteligencia artificial en Tabasco" },
    ],
  },

  "agentes-de-inteligencia-artificial": {
    slug: "agentes-de-inteligencia-artificial",
    metaTitle: "Agentes de Inteligencia Artificial a Medida",
    metaDescription:
      "Creamos agentes de inteligencia artificial a medida: automatizan tareas, atienden clientes y procesan información 24/7. Agenda tu consulta gratuita.",
    keyword: "agentes de inteligencia artificial",
    eyebrow: "Agentes de IA",
    h1: "Creamos Agentes de Inteligencia Artificial a Medida",
    heroLead:
      "En Neurovia Systems desarrollamos agentes de inteligencia artificial que trabajan para tu empresa: responden a tus clientes, automatizan procesos y ejecutan tareas por ti, las 24 horas. No un chatbot genérico — un agente entrenado con tu información y conectado a tus sistemas.",
    ogAlt: "Agentes de inteligencia artificial a medida — Neurovia Systems",
    waMessage: "Hola Neurovia Systems, me interesa un agente de inteligencia artificial a medida",
    priceNote: "Desde $25,000 MXN + IVA",
    serviceType: "Desarrollo de agentes de inteligencia artificial",
    sections: [
      {
        h2: "Un agente de IA no es un chatbot cualquiera",
        body: [
          "Un chatbot responde preguntas frecuentes. Un agente de inteligencia artificial hace cosas: consulta tus sistemas, procesa documentos, agenda, da seguimiento y ejecuta tareas por su cuenta según las reglas que tú defines. Conectamos modelos como Claude y GPT a tus datos y herramientas para que el agente entienda tu negocio y actúe.",
          "Desde un asistente que atiende WhatsApp y filtra prospectos, hasta un agente interno que lee facturas, extrae los datos y los captura en tu sistema — construimos el que resuelve tu problema concreto.",
        ],
      },
      {
        h2: "Entrenado con tu información, conectado a tus herramientas",
        body: [
          "Alimentamos al agente con tus documentos, catálogos y procesos, y lo conectamos por API a lo que ya usas: correo, WhatsApp, tu CRM, hojas de cálculo o tu ERP. Con controles y supervisión humana donde hace falta.",
          "El resultado: menos trabajo repetitivo para tu equipo, respuestas más rápidas para tus clientes y procesos que no dependen de que alguien se acuerde de hacerlos.",
        ],
      },
    ],
    benefitsTitle: "Por qué un agente de IA con Neurovia",
    benefits: [
      { title: "Trabaja 24/7", desc: "Atiende y ejecuta tareas de día y de noche, sin descansos ni olvidos." },
      { title: "Hecho a tu medida", desc: "Entrenado con tu información y conectado a tus sistemas, no una solución genérica." },
      { title: "Con supervisión", desc: "Diseñamos controles para que el agente asista y valide, con un humano en el punto crítico." },
      { title: "Empieza por un caso", desc: "Detectamos el proceso de mayor impacto y construimos ese agente primero." },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audienceLead:
      "Los agentes de inteligencia artificial sirven a empresas que quieren automatizar atención o procesos con criterio, no solo con respuestas fijas:",
    audience: [
      "Negocios que reciben muchos mensajes y quieren filtrar y responder al instante.",
      "Áreas que procesan documentos (facturas, contratos, órdenes) de forma repetitiva.",
      "Equipos de ventas que necesitan seguimiento y calificación automática de prospectos.",
      "Empresas que quieren un asistente interno que consulte sus datos y genere reportes.",
    ],
    faq: [
      { q: "¿Un agente de IA reemplaza a mi personal?", a: "No: lo libera de lo repetitivo. El agente hace el trabajo mecánico y tu equipo se enfoca en lo que requiere criterio humano, con supervisión donde importa." },
      { q: "¿Con qué se puede conectar?", a: "Con WhatsApp, correo, tu CRM, hojas de cálculo, tu ERP y más, mediante integraciones por API. Aprovechamos las herramientas que ya usas." },
      { q: "¿Es seguro para mi empresa?", a: "Sí. Diseñamos accesos, controles y validaciones, y mantenemos supervisión humana en los puntos críticos del proceso." },
      { q: "¿Cómo empezamos?", a: "Con una consulta gratuita donde detectamos el proceso de mayor impacto y te proponemos un primer agente con un estimado claro." },
    ],
    related: [
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con inteligencia artificial en Tabasco" },
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida en Villahermosa" },
      { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Desarrollo de aplicaciones web a medida en Tabasco" },
    ],
  },

  "desarrollo-de-software-tabasco": {
    slug: "desarrollo-de-software-tabasco",
    metaTitle: "Desarrollo de Software en Tabasco",
    metaDescription:
      "Empresa de desarrollo de software en Tabasco: sistemas de gestión, ERP, CRM e inteligencia artificial para empresas de Villahermosa, Cárdenas, Comalcalco y Paraíso.",
    keyword: "desarrollo de software Tabasco",
    eyebrow: "Software en Tabasco",
    h1: "Desarrollo de Software en Tabasco",
    heroLead:
      "Somos una empresa de desarrollo de software con base en Villahermosa que trabaja con empresas de todo Tabasco. Construimos sistemas de gestión, ERP, CRM e integraciones con inteligencia artificial, y los entregamos funcionando por etapas.",
    ogAlt: "Desarrollo de software en Tabasco — Neurovia Systems",
    waMessage: "Hola, soy de Tabasco y necesito desarrollar un sistema para mi empresa. ¿Podemos platicarlo?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Desarrollo de software empresarial",
    areaServed: [
      { type: "City", name: "Villahermosa" },
      { type: "City", name: "Cárdenas" },
      { type: "City", name: "Comalcalco" },
      { type: "City", name: "Paraíso" },
      { type: "State", name: "Tabasco" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Una empresa de software que sí está en el estado",
        body: [
          "Buscar desarrollo de software en Tabasco casi siempre termina en dos caminos: un proveedor de otra ciudad que nunca pisa tu empresa, o alguien que cobra barato, entrega a medias y desaparece. Nosotros operamos desde Villahermosa y trabajamos con empresas de Cárdenas, Comalcalco, Paraíso, Macuspana, Cunduacán, Huimanguillo y el resto del estado.",
          "Eso cambia cosas concretas: podemos sentarnos con tu gente de almacén, ver cómo capturan una requisición, acompañar el arranque en sitio y volver cuando algo no cuadra. Casi todo el trabajo es remoto —así avanza más rápido— pero la visita existe cuando el proyecto la necesita, no como promesa de venta.",
          "También conocemos el contexto: cómo factura una comercializadora aquí, qué le pide Pemex a un contratista, cómo se mueve una obra en temporada de lluvias y por qué la conectividad en campo obliga a diseñar pantallas que funcionen con señal mala.",
        ],
      },
      {
        h2: "Qué desarrollamos para las empresas del estado",
        body: [
          "Sistemas de gestión y ERP a la medida para ordenar la operación: requisiciones y compras, inventario multi-almacén, mantenimiento de equipos y flota, control de obra o de servicio, y los reportes que dirección pide cada semana.",
          "CRM y seguimiento comercial para que las cotizaciones no se queden en el celular de un vendedor; sistemas de almacén; portales para clientes o proveedores; apps móviles cuando el trabajo ocurre fuera de la oficina; e integraciones con lo que ya usas: facturación CFDI 4.0, bancos, tiendas en línea o el sistema contable que ya pagaste.",
          "Y donde ahorra horas de verdad, inteligencia artificial: lectura automática de facturas y documentos, resúmenes de operación, asistentes que contestan WhatsApp fuera de horario y calificación de prospectos.",
        ],
      },
      {
        h2: "Los sectores que mueven Tabasco",
        body: [
          "**Petróleo y servicios petroleros.** Operamos una suite ERP para un cliente del sector con módulos de requisiciones y compras, mantenimiento vehicular e inventario sobre 23 áreas operativas, además de Núcleo SGI, nuestro sistema de gestión integral para contratistas que deben demostrar cumplimiento y evidencia.",
          "**Construcción y obra pública.** Desarrollamos el sistema de dictamen de equipos para la SOTOP, del Gobierno de Tabasco, y el sitio de Royers, constructora con más de 35 años y 500 obras entregadas.",
          "**Comercio y distribución.** Para CAPOSA, comercializadora de Villahermosa, construimos un CRM a la medida de 24 módulos con inventario multi-almacén, facturación CFDI 4.0 y reportes con IA.",
          "**Talleres y servicios.** Para ASC Motores desarrollamos un sistema de taller de 18 módulos con app Android e iOS, para operar desde donde esté el técnico.",
        ],
      },
    ],
    benefitsTitle: "Por qué desarrollar tu software con Neurovia",
    benefits: [
      { title: "Estamos aquí", desc: "Villahermosa, Tabasco. Mismo horario, mismo contexto y visita en sitio cuando el proyecto lo pide." },
      { title: "Sistemas en producción, no demos", desc: "Petróleo, gobierno, construcción, comercio y talleres: hay sistemas nuestros operando hoy en el estado." },
      { title: "Entrega por etapas", desc: "Primera versión útil en semanas; la usas mientras seguimos construyendo el resto." },
      { title: "El código es tuyo", desc: "Documentado y sin licencias por usuario: puedes cambiar de proveedor cuando quieras." },
    ],
    audienceTitle: "¿Para quién es?",
    audienceLead:
      "Para empresas de Tabasco que ya crecieron más de lo que aguanta el Excel compartido:",
    audience: [
      "Contratistas y empresas de servicios petroleros que deben documentar todo lo que hacen.",
      "Constructoras y empresas de obra con requisiciones, avances y costos por proyecto.",
      "Distribuidoras y comercializadoras con varios almacenes y pedidos por WhatsApp.",
      "Talleres y empresas de mantenimiento que necesitan órdenes de trabajo e historial.",
      "Proveedores de gobierno que requieren expedientes ordenados y trazabilidad.",
    ],
    faq: [
      { q: "¿Atienden fuera de Villahermosa?", a: "Sí. Trabajamos con empresas de Cárdenas, Comalcalco, Paraíso, Macuspana y el resto del estado, casi siempre de forma remota, con visitas cuando el proyecto las necesita." },
      { q: "¿Cuánto cuesta desarrollar un sistema?", a: "Los proyectos arrancan en $65,000 MXN + IVA y se construyen por módulos, así que puedes empezar por lo esencial. El análisis inicial y el estimado son gratis." },
      { q: "¿Emiten factura?", a: "Sí, somos empresa formal y facturamos con CFDI 4.0. También integramos facturación dentro de los sistemas que desarrollamos." },
      { q: "¿Qué pasa si ya tengo un sistema a medias?", a: "Lo revisamos antes de proponer nada. A veces conviene retomarlo y a veces rehacer la parte que falla; te decimos cuál de las dos y por qué." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida en Villahermosa" },
      { href: "/sistemas-empresariales-tabasco", label: "Sistemas empresariales: ERP, CRM e inventario" },
      { href: "/casos-de-exito", label: "Casos de éxito: sistemas en producción" },
    ],
  },

  "sistemas-empresariales-tabasco": {
    slug: "sistemas-empresariales-tabasco",
    metaTitle: "Sistemas Empresariales a la Medida en Tabasco",
    metaDescription:
      "Sistemas empresariales a la medida en Tabasco: ERP, CRM, control de inventario y automatización con IA para empresas de Villahermosa. Diagnóstico gratuito.",
    keyword: "sistemas empresariales Tabasco",
    eyebrow: "Sistemas empresariales",
    h1: "Sistemas Empresariales a la Medida en Tabasco",
    heroLead:
      "ERP, CRM, control de inventario y automatización, construidos alrededor de cómo ya trabaja tu empresa. Empezamos por el área que más duele y conectamos el resto por etapas, sin detener la operación.",
    ogAlt: "Sistemas empresariales a la medida en Tabasco — Neurovia Systems",
    waMessage: "Hola, quiero ordenar la operación de mi empresa con un sistema empresarial. ¿Podemos platicarlo?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Sistemas empresariales a la medida",
    areaServed: [
      { type: "City", name: "Villahermosa" },
      { type: "State", name: "Tabasco" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "El problema casi nunca es un solo sistema",
        body: [
          "La escena se repite en las empresas de Villahermosa: ventas lleva su control en un Excel, almacén en otro, compras en un cuaderno, la facturación en un programa aparte y el dueño pidiendo por WhatsApp un reporte que alguien arma a mano cada lunes. Nadie está haciendo mal su trabajo; lo que falta es que la información viaje sola entre las áreas.",
          "Un sistema empresarial a la medida no es comprar un software gigante y obligar a todos a usarlo. Es construir, pieza por pieza, el flujo real de tu empresa: lo que entra, lo que sale, quién autoriza, qué se cobra y qué se quedó parado.",
        ],
      },
      {
        h2: "Los cuatro bloques que solemos construir",
        body: [
          "**Operación (ERP).** Requisiciones y compras con autorizaciones, órdenes de trabajo, costos por proyecto u obra, mantenimiento de equipos y flota. Es la columna vertebral: lo que ordena el día a día.",
          "**Ventas (CRM).** Prospectos, cotizaciones que se convierten en pedido, seguimiento que no depende de la memoria del vendedor y reportes de embudo reales.",
          "**Almacén (inventario o WMS).** Entradas, salidas, traspasos entre almacenes, lotes y caducidades, mínimos con alertas y conteos que sí cuadran contra el kardex.",
          "**Automatización e IA.** Lo que hoy alguien captura dos veces, la lectura de facturas y documentos, los reportes automáticos y los asistentes que contestan WhatsApp fuera de horario.",
        ],
      },
      {
        h2: "Por dónde empezar sin parar la operación",
        body: [
          "Primero un diagnóstico: revisamos los procesos como están hoy, incluyendo los formatos y las mañas que ya funcionan, y detectamos dónde se pierde más tiempo y dinero. De ahí sale un orden de construcción, no una lista de deseos.",
          "Después se construye por etapas. La primera versión útil suele estar lista en semanas y tu equipo la empieza a usar mientras seguimos con el siguiente módulo. Los datos que ya tienes en Excel o en el sistema anterior se migran; no se empieza de cero a capturar todo otra vez.",
          "Al final el sistema queda a nombre de tu empresa, documentado, sin licencias por usuario y listo para crecer con otro módulo cuando haga falta.",
        ],
      },
    ],
    benefitsTitle: "Qué cambia cuando la operación vive en un solo sistema",
    benefits: [
      { title: "Una sola versión de la verdad", desc: "Se acaba el 'según mi Excel': todas las áreas leen y escriben en el mismo lugar." },
      { title: "Autorizaciones con rastro", desc: "Quién pidió, quién autorizó y cuándo. Útil cuando llega la auditoría o el cliente pregunta." },
      { title: "Reportes que ya no se arman a mano", desc: "Lo que hoy toma horas cada semana sale solo, con los datos que tu operación ya genera." },
      { title: "Crece por módulos", desc: "Empiezas por un área y agregas las demás sin rehacer lo anterior." },
    ],
    audienceTitle: "¿Para quién tiene sentido?",
    audienceLead:
      "Para empresas ya establecidas donde el problema no es vender más, sino que la operación deje de depender de personas concretas:",
    audience: [
      "Empresas de 10 o más empleados con varias áreas que no se hablan entre sí.",
      "Negocios con dos o más sucursales o almacenes.",
      "Empresas que facturan CFDI y llevan el control por fuera del sistema de facturación.",
      "Operaciones con obra, proyecto o servicio donde hay que costear cada trabajo.",
      "Empresas que compraron un sistema enlatado y terminaron usando el 20%.",
    ],
    faq: [
      { q: "¿Es mejor un sistema hecho a la medida o uno de suscripción?", a: "Depende del proceso. Si tu operación es estándar, un sistema comercial puede bastar y te lo decimos sin problema. Cuando el proceso es tu ventaja —o cuando ya pagas licencias por usuario que no usas— el desarrollo a la medida sale mejor a mediano plazo." },
      { q: "¿Tengo que cambiar mi sistema de facturación?", a: "No necesariamente. Integramos CFDI 4.0 y los sistemas contables o de facturación que ya usas, siempre que permitan conexión. Revisamos antes de prometer." },
      { q: "¿Cuánto tarda la primera etapa?", a: "Una primera versión funcional suele estar lista en semanas. Preferimos que la uses temprano y la ajustemos contra la operación real." },
      { q: "¿Qué pasa con la información que ya tengo?", a: "Se migra. Sacamos los datos de Excel o del sistema anterior, se limpian y entran al nuevo. Nadie vuelve a capturar el catálogo entero a mano." },
    ],
    related: [
      { href: "/erp-a-medida-villahermosa", label: "ERP a la medida en Villahermosa" },
      { href: "/crm-a-medida-villahermosa", label: "CRM a la medida en Villahermosa" },
      { href: "/wms-villahermosa", label: "WMS y control de inventario en Villahermosa" },
    ],
  },

  "erp-a-medida-villahermosa": {
    slug: "erp-a-medida-villahermosa",
    metaTitle: "ERP a la Medida en Villahermosa",
    metaDescription:
      "Desarrollo de ERP a la medida en Villahermosa: requisiciones, compras, inventario, mantenimiento y costos por proyecto. Se implementa por etapas, sin parar tu operación.",
    keyword: "ERP a medida Villahermosa",
    eyebrow: "ERP a la medida",
    h1: "ERP a la Medida en Villahermosa",
    heroLead:
      "Desarrollamos ERP a la medida para empresas de Villahermosa y Tabasco: requisiciones y compras con autorizaciones, inventario, mantenimiento, costos por proyecto y los reportes que dirección necesita. Módulo por módulo, sin detener la operación.",
    ogAlt: "Desarrollo de ERP a la medida en Villahermosa — Neurovia Systems",
    waMessage: "Hola, me interesa un ERP a la medida para mi empresa en Villahermosa. ¿Podemos agendar una llamada?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Desarrollo de ERP a la medida",
    sections: [
      {
        h2: "Cuando el ERP de caja ya no te queda",
        body: [
          "Los ERP comerciales resuelven bien lo estándar: contabilidad, facturación, nómina. El problema aparece en lo que hace distinta a tu empresa —cómo autorizas una requisición, cómo costeas una obra, qué necesitas demostrarle a tu cliente— porque ahí el sistema te obliga a inventar campos, llevar un Excel paralelo o pagar una personalización que nunca termina.",
          "Un ERP a la medida invierte el orden: primero entendemos cómo trabaja tu operación y después construimos el sistema alrededor. No pagas módulos que no usas ni licencias por cada usuario que se conecta una vez al mes.",
          "No siempre es la mejor opción y te lo decimos de frente: si tu proceso es estándar, a veces conviene más un sistema comercial bien configurado. Cuando el proceso es tu ventaja competitiva, el desarrollo a la medida es lo que la protege.",
        ],
      },
      {
        h2: "Los módulos que más nos piden",
        body: [
          "**Requisiciones y compras.** Solicitud, autorización por nivel, orden de compra, recepción y comparativo de proveedores, con historial de quién pidió qué y cuándo.",
          "**Inventario y almacenes.** Entradas, salidas, traspasos, mínimos con alerta, lotes o series cuando aplica y kardex que cuadra.",
          "**Mantenimiento de equipos y flota.** Órdenes de trabajo, alertas por kilometraje u horas, costos por unidad e historial completo de cada componente.",
          "**Proyectos y obra.** Presupuesto contra gasto real, avances, requisiciones por frente de trabajo y costo por proyecto en tiempo real.",
          "**Dirección.** Tableros con los indicadores que hoy alguien arma a mano cada lunes, con el detalle a un clic de distancia.",
          "Esto no es teoría: operamos una suite ERP para un cliente del sector petrolero con requisiciones y compras, mantenimiento vehicular e inventario sobre 23 áreas operativas, un sistema de 24 módulos para la comercializadora CAPOSA y uno de 18 módulos con app móvil para ASC Motores.",
        ],
      },
      {
        h2: "Cómo se implementa sin parar la empresa",
        body: [
          "Por etapas. Elegimos el módulo que más duele —casi siempre compras o inventario—, lo ponemos a funcionar en semanas y tu equipo lo usa mientras construimos el siguiente. Nunca hay un día de 'apagamos todo y cambiamos de sistema'.",
          "Los datos se migran: catálogos, proveedores, existencias e historial salen de tus Excel o del sistema anterior. Y la capacitación se hace con la gente que va a usarlo, no con un manual de 80 páginas que nadie abre.",
          "El sistema queda a nombre de tu empresa, documentado, y crece cuando tú decidas: otro módulo, otra sucursal o una integración nueva.",
        ],
      },
    ],
    benefitsTitle: "Por qué un ERP a la medida con Neurovia",
    benefits: [
      { title: "Sin licencias por usuario", desc: "Pagas el desarrollo una vez; después puedes dar de alta a toda la empresa sin que suba la cuenta cada mes." },
      { title: "Experiencia en operación pesada", desc: "Requisiciones, mantenimiento e inventario funcionando hoy en un cliente del sector petrolero, sobre 23 áreas." },
      { title: "Integra lo que ya pagaste", desc: "Conectamos facturación CFDI 4.0, bancos y el sistema contable que ya usas, en vez de obligarte a tirarlo." },
      { title: "Entrega por módulos", desc: "Presupuesto y calendario por etapa: sabes qué recibes y cuándo, sin proyectos eternos." },
    ],
    audienceTitle: "¿Para quién es un ERP a la medida?",
    audienceLead:
      "Para empresas de Villahermosa cuya operación ya no cabe en hojas de cálculo:",
    audience: [
      "Empresas industriales y de servicios petroleros con requisiciones, equipos y almacén.",
      "Constructoras que necesitan costo real por obra y control de compras por frente.",
      "Distribuidoras con varios almacenes, precios por cliente y cobranza.",
      "Talleres y empresas de mantenimiento con órdenes de trabajo e historial por unidad.",
      "Empresas que ya tienen un ERP comercial y llevan media operación en Excel paralelos.",
    ],
    faq: [
      { q: "¿Cuánto tarda implementar un ERP a la medida?", a: "La primera etapa útil suele estar lista en semanas y el sistema completo se construye por módulos a lo largo de varios meses, según el alcance. Empiezas a usarlo desde la primera entrega." },
      { q: "¿Migran la información que ya tengo?", a: "Sí. Catálogos, proveedores, existencias e historial se migran desde Excel o desde el sistema anterior, siempre que se pueda exportar." },
      { q: "¿Se conecta con mi facturación CFDI 4.0?", a: "Sí, integramos timbrado CFDI 4.0 y los sistemas de facturación o contabilidad que ya usas, si permiten conexión. Lo validamos antes de comprometerlo." },
      { q: "¿El ERP queda a nombre de mi empresa?", a: "Sí, con su código y documentación. No quedas amarrado a nosotros: puedes llevártelo a otro proveedor o a tu propio equipo." },
    ],
    related: [
      { href: "/wms-villahermosa", label: "WMS y control de inventario en Villahermosa" },
      { href: "/crm-a-medida-villahermosa", label: "CRM a la medida en Villahermosa" },
      { href: "/casos-de-exito", label: "Casos de éxito: sistemas en producción" },
    ],
  },

  "crm-a-medida-villahermosa": {
    slug: "crm-a-medida-villahermosa",
    metaTitle: "CRM a la Medida en Villahermosa",
    metaDescription:
      "Desarrollo de CRM a la medida en Villahermosa: prospectos, cotizaciones, seguimiento y WhatsApp en un solo lugar, conectado a tu inventario y tu facturación.",
    keyword: "CRM a medida Villahermosa",
    eyebrow: "CRM a la medida",
    h1: "CRM a la Medida en Villahermosa",
    heroLead:
      "Un CRM hecho para cómo vende tu empresa: prospectos que entran por WhatsApp, cotizaciones que se vuelven pedido y seguimiento que no depende de la memoria del vendedor. Conectado a tu inventario y a tu facturación.",
    ogAlt: "Desarrollo de CRM a la medida en Villahermosa — Neurovia Systems",
    waMessage: "Hola, quiero un CRM a la medida para mi equipo de ventas en Villahermosa. ¿Podemos platicarlo?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Desarrollo de CRM a la medida",
    sections: [
      {
        h2: "El CRM que sí usa tu equipo",
        body: [
          "Casi todas las empresas que nos buscan ya intentaron un CRM de suscripción. La historia termina igual: se llenó dos semanas, el vendedor siguió cotizando por WhatsApp desde su celular y hoy nadie sabe cuántas cotizaciones están vivas. El problema rara vez es el vendedor; es que el sistema le pide capturar cosas que a él no le sirven.",
          "Un CRM a la medida se diseña al revés: arranca del proceso real —cómo llega el prospecto, quién lo atiende, qué necesita para cotizar y cuándo se cierra— y solo pide los datos que sí mueven la venta. Si tu negocio cotiza por lista de precios con descuento por volumen, el sistema cotiza así; no te obliga a traducir tu operación a un embudo genérico.",
        ],
      },
      {
        h2: "Lo que conectamos alrededor de la venta",
        body: [
          "**WhatsApp.** Es el canal por el que entra la mayoría de los prospectos en Villahermosa. Lo conectamos para que la conversación quede en el expediente del cliente y no se pierda en un celular.",
          "**Cotizaciones y pedidos.** La cotización se arma desde el catálogo con tus precios y condiciones, se envía en PDF y, cuando el cliente acepta, se convierte en pedido sin volver a capturarla.",
          "**Inventario y facturación.** El vendedor ve existencias reales antes de prometer entrega, y el pedido cerrado pasa a facturación CFDI 4.0 sin doble captura.",
          "**Seguimiento y recordatorios.** Tareas, próximos contactos y avisos de cotizaciones que llevan días sin movimiento.",
          "**Reportes de verdad.** Embudo por vendedor, motivos de cierre perdido y qué producto se cotiza mucho pero se vende poco.",
          "Tenemos CRM propio en producción —el de Neurovia— y desarrollamos uno de 24 módulos para la comercializadora CAPOSA, con inventario multi-almacén, facturación CFDI 4.0 y reportes con IA.",
        ],
      },
      {
        h2: "CRM propio contra plataforma por suscripción",
        body: [
          "Una plataforma comercial se paga por usuario y por mes, y cada función seria suele estar en el plan de arriba. Si tienes ocho vendedores, la cuenta crece todos los años aunque tu proceso siga igual.",
          "Un CRM a la medida se paga una vez, corre en tu propia infraestructura, da de alta a todo el equipo sin costo adicional por usuario y guarda la base de clientes bajo tu control, no en una cuenta que puede cancelarse.",
          "Tampoco es para todos: si vendes con un proceso estándar y pocos usuarios, una herramienta comercial puede ser suficiente y te lo diremos. La ventaja del desarrollo a la medida aparece cuando el CRM tiene que hablar con tu inventario, tu facturación o tu operación.",
        ],
      },
    ],
    benefitsTitle: "Qué cambia con un CRM hecho a tu medida",
    benefits: [
      { title: "Nada se queda en un celular", desc: "Prospectos, conversaciones y cotizaciones viven en la empresa, no en el teléfono de quien atendió." },
      { title: "Cotizar deja de ser pesado", desc: "Catálogo, precios y condiciones ya cargados: la cotización se arma en minutos y se convierte en pedido." },
      { title: "Sin costo por usuario", desc: "Das de alta a todo el equipo, incluida el área administrativa, sin que suba la mensualidad." },
      { title: "Conectado a tu operación", desc: "Ve existencias, genera el pedido y pasa a facturación sin capturar lo mismo tres veces." },
    ],
    audienceTitle: "¿Para quién es?",
    audienceLead:
      "Para empresas de Villahermosa donde la venta ya no cabe en una libreta ni en el chat:",
    audience: [
      "Distribuidoras y comercializadoras que cotizan por WhatsApp todo el día.",
      "Empresas industriales con cotizaciones técnicas y varios responsables por cuenta.",
      "Constructoras y proveedores que participan en concursos y licitaciones.",
      "Inmobiliarias con leads de portales que nadie alcanza a contestar a tiempo.",
      "Equipos de ventas de tres o más personas sin visibilidad del embudo real.",
    ],
    faq: [
      { q: "¿Se puede conectar con WhatsApp?", a: "Sí. Integramos WhatsApp mediante la API oficial de Meta o Twilio, para que las conversaciones queden en el expediente del cliente y, si lo quieres, un agente de IA conteste fuera de horario." },
      { q: "¿Cuánto cuesta comparado con una suscripción?", a: "Es una inversión inicial en lugar de una renta por usuario. Conviene cuando el equipo crece o cuando el CRM debe conectarse a tu inventario y facturación; si tu caso es sencillo, te lo decimos." },
      { q: "¿Migran mis contactos actuales?", a: "Sí, desde Excel, Google Contacts o el CRM que uses hoy, siempre que se pueda exportar." },
      { q: "¿Lo puede usar alguien que no es técnico?", a: "Está diseñado para eso. Definimos juntos las pantallas con tus vendedores y capacitamos al equipo en el sistema real, no con un manual." },
    ],
    related: [
      { href: "/agentes-de-inteligencia-artificial", label: "Agentes de IA que atienden WhatsApp" },
      { href: "/erp-a-medida-villahermosa", label: "ERP a la medida en Villahermosa" },
      { href: "/sistemas-empresariales-tabasco", label: "Sistemas empresariales en Tabasco" },
    ],
  },

  "wms-villahermosa": {
    slug: "wms-villahermosa",
    metaTitle: "WMS y Control de Inventario en Villahermosa",
    metaDescription:
      "Sistema WMS y control de inventario a la medida en Villahermosa: multi-almacén, lotes, códigos de barras, conteos y kardex que cuadra. Conectado a tu facturación.",
    keyword: "WMS Villahermosa",
    eyebrow: "WMS e inventario",
    h1: "Sistema WMS y Control de Inventario en Villahermosa",
    heroLead:
      "Un sistema de almacén hecho para tu operación: entradas, salidas, traspasos entre almacenes, lotes y caducidades, conteos cíclicos y códigos de barras. Para que el inventario del sistema y el del piso sean el mismo.",
    ogAlt: "Sistema WMS y control de inventario en Villahermosa — Neurovia Systems",
    waMessage: "Hola, necesito un sistema de inventario o WMS para mi almacén en Villahermosa. ¿Podemos platicarlo?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Sistema de gestión de almacén (WMS) a la medida",
    sections: [
      {
        h2: "El almacén que nunca cuadra",
        body: [
          "La señal es siempre la misma: el sistema dice que hay doce, el piso tiene nueve y nadie sabe en qué momento se fueron tres. Detrás casi nunca hay robo; hay salidas que se anotaron en un cuaderno, un traspaso entre sucursales que no se registró, material entregado a un técnico sin vale y conteos hechos a mano cada seis meses.",
          "Cuando el inventario no cuadra, el costo no es solo la merma: se compra de más por miedo a quedarse corto, se promete entrega de algo que no existe y cada cierre de mes se convierte en una discusión entre almacén, compras y contabilidad.",
          "Un WMS a la medida ataca eso donde ocurre: en el movimiento. Cada entrada, salida y traspaso queda registrado por quién, cuándo y con qué documento de respaldo.",
        ],
      },
      {
        h2: "Qué incluye un WMS hecho a la medida",
        body: [
          "**Multi-almacén y ubicaciones.** Varias bodegas o sucursales, con existencias por ubicación y traspasos con acuse, para que nadie 'mueva' mercancía sin rastro.",
          "**Lotes, caducidades y series.** Indispensable en alimentos, farmacia, químicos y refacciones con número de serie: sabes qué lote entró, a qué cliente salió y qué está por vencer.",
          "**Códigos de barras.** Recepción y surtido escaneando con lector o con la cámara del celular, que es donde se acaban de verdad los errores de captura.",
          "**Conteos cíclicos.** En lugar de parar el almacén dos días al año, cuentas por zonas durante el mes y corriges diferencias con evidencia.",
          "**Mínimos y alertas.** El sistema avisa cuándo reordenar en lugar de enterarte cuando ya no hay.",
          "**Kardex y costos.** Historial completo por artículo y valor real del inventario, listo para contabilidad.",
          "Ya operamos el módulo de inventario de la suite ERP de un cliente del sector petrolero y el inventario multi-almacén de CAPOSA; además desarrollamos nuestro propio Sistema de Inventario como producto.",
        ],
      },
      {
        h2: "Del Excel al WMS sin parar el almacén",
        body: [
          "Arrancamos con un inventario inicial bien hecho: se cuenta, se carga y a partir de ahí el sistema es la fuente. Los catálogos y existencias se migran desde tus Excel o desde el sistema anterior.",
          "Después conectamos lo que ya existe alrededor: compras, para que la recepción descargue la orden; ventas o punto de venta, para que la salida descuente solo; y facturación CFDI 4.0, para no capturar lo mismo dos veces. Si vendes en mostrador, Tomín POS —nuestro punto de venta— se conecta al mismo inventario.",
          "La capacitación es con la gente de almacén y en el piso, no en una sala de juntas: son ellos quienes van a escanear, recibir y surtir todos los días.",
        ],
      },
    ],
    benefitsTitle: "Por qué un WMS a la medida",
    benefits: [
      { title: "El inventario cuadra", desc: "Cada movimiento con responsable, fecha y documento: las diferencias se explican, no se adivinan." },
      { title: "Menos compras de pánico", desc: "Mínimos, alertas y consumo histórico para comprar por dato y no por susto." },
      { title: "Funciona en el piso", desc: "Pantallas pensadas para escanear desde el celular en la bodega, no solo para la computadora de oficina." },
      { title: "Conectado a compras y ventas", desc: "Una sola captura: lo que entra por compras y sale por venta descuenta solo." },
    ],
    audienceTitle: "¿Para quién es?",
    audienceLead:
      "Para empresas de Villahermosa y Tabasco donde el almacén ya es parte del problema:",
    audience: [
      "Distribuidoras y comercializadoras con dos o más almacenes o sucursales.",
      "Ferreterías, refaccionarias y materiales para construcción con miles de claves.",
      "Empresas industriales y de servicios que entregan material a técnicos en campo.",
      "Negocios con productos perecederos o con lote y caducidad obligatoria.",
      "Empresas que hacen inventario físico una vez al año y siempre sale diferencia.",
    ],
    faq: [
      { q: "¿Funciona con lector de código de barras?", a: "Sí, con lector USB o inalámbrico y también con la cámara del celular, que suele ser suficiente para empezar sin comprar equipo." },
      { q: "¿Sirve para varias sucursales?", a: "Sí. Maneja varios almacenes con existencias independientes, traspasos con acuse y una vista consolidada para dirección." },
      { q: "¿Se conecta con mi facturación?", a: "Sí, integramos CFDI 4.0 y los sistemas de facturación o contabilidad que ya uses, siempre que permitan conexión." },
      { q: "¿Cómo empezamos si hoy todo está en Excel?", a: "Con un inventario inicial y la migración de catálogos y existencias. A partir de esa fecha el sistema es la fuente y el Excel deja de usarse." },
    ],
    related: [
      { href: "/sistema-punto-de-venta-villahermosa", label: "Sistema de punto de venta en Villahermosa" },
      { href: "/erp-a-medida-villahermosa", label: "ERP a la medida en Villahermosa" },
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida en Villahermosa" },
    ],
  },

  "desarrollo-de-software-a-medida-monterrey": {
    slug: "desarrollo-de-software-a-medida-monterrey",
    metaTitle: "Desarrollo de Software a Medida en Monterrey",
    metaDescription:
      "Desarrollo de software a medida para empresas en Monterrey, Nuevo León: sistemas, plataformas y automatización con IA. Trabajo remoto. Agenda tu consulta gratuita.",
    keyword: "desarrollo de software a medida Monterrey",
    eyebrow: "Software a medida",
    h1: "Desarrollo de Software a Medida en Monterrey",
    heroLead:
      "Desarrollamos software a medida para empresas de Monterrey y Nuevo León: sistemas de gestión, plataformas web y automatización con inteligencia artificial. Trabajamos de forma remota con el mismo estándar técnico, sin que la distancia sea un problema.",
    ogAlt: "Desarrollo de software a medida en Monterrey — Neurovia Systems",
    waMessage: "Hola, necesito un sistema a la medida para mi empresa en Monterrey. ¿Podemos agendar una llamada esta semana?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Desarrollo de software a medida",
    areaServed: [
      { type: "City", name: "Monterrey" },
      { type: "State", name: "Nuevo León" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Software para el ritmo industrial de Monterrey",
        body: [
          "Monterrey concentra manufactura, logística, comercio y servicios que mueven volúmenes altos y procesos exigentes. Cuando tu operación es específica, un programa genérico se queda corto. Desarrollamos sistemas hechos a tu medida: control de producción y requisiciones, inventario, seguimiento de proyectos, dashboards para dirección y más.",
          "Ya tenemos sistemas en producción en empresas del sector industrial y de servicios, y aplicamos esa experiencia a los retos de las empresas regiomontanas.",
        ],
      },
      {
        h2: "Trabajo remoto, mismo estándar de calidad",
        body: [
          "Construimos con Next.js, React, Node.js e integración de IA, y trabajamos 100% en remoto con reuniones claras y entregas por etapas. Así operan muchas de las mejores empresas de software del mundo: obtienes el sistema que necesitas sin depender de estar en la misma ciudad.",
          "El software es tuyo, documentado, y crece por etapas según tu presupuesto.",
        ],
      },
    ],
    benefitsTitle: "Por qué desarrollar tu software con Neurovia",
    benefits: [
      { title: "Trabajo 100% remoto", desc: "Colaboramos con empresas de Monterrey a distancia, con reuniones claras y avances constantes." },
      { title: "Sistemas en producción", desc: "No vendemos promesas: ya tenemos software funcionando en empresas reales de industria y servicios." },
      { title: "Código propio y documentado", desc: "El sistema es tuyo, sin quedar amarrado a un solo proveedor." },
      { title: "Escalable y con IA", desc: "Arrancamos con lo esencial y sumamos automatización e inteligencia artificial cuando aporta." },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audienceLead:
      "El desarrollo de software a medida es ideal para empresas de Monterrey y Nuevo León que ya superaron las hojas de cálculo y los programas genéricos:",
    audience: [
      "Empresas de manufactura y logística que necesitan controlar producción, inventario o requisiciones.",
      "Distribuidoras y comercios que gestionan pedidos, catálogos y clientes.",
      "Empresas de servicios que quieren centralizar áreas que hoy viven en Excel.",
      "Negocios en crecimiento que requieren dashboards y reportes a la medida.",
    ],
    faq: [
      { q: "¿Trabajan de forma remota con empresas de Monterrey?", a: "Sí, 100% remoto. Coordinamos por videollamada y mensajería, con entregas por etapas para que veas avances reales sin importar la distancia." },
      { q: "¿Cuánto tarda el desarrollo?", a: "Una primera versión funcional suele estar lista en semanas, no meses. Trabajamos por entregas para que uses el sistema mientras lo mejoramos." },
      { q: "¿El software queda a mi nombre?", a: "Sí. El sistema y su código son de tu empresa, y te lo entregamos documentado." },
      { q: "¿Cuánto cuesta?", a: "Depende del alcance. Partimos de un análisis gratuito y un estimado claro por etapas, para que puedas empezar por lo esencial." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-guadalajara", label: "Desarrollo de software a medida en Guadalajara" },
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con inteligencia artificial" },
      { href: "/agentes-de-inteligencia-artificial", label: "Agentes de inteligencia artificial a medida" },
    ],
  },

  "desarrollo-de-software-a-medida-merida": {
    slug: "desarrollo-de-software-a-medida-merida",
    metaTitle: "Desarrollo de Software a Medida en Mérida",
    metaDescription:
      "Desarrollo de software a medida para empresas de Mérida, Yucatán: sistemas de gestión, inventarios, integraciones y automatización con IA. Consulta gratuita.",
    keyword: "desarrollo de software a medida Mérida",
    eyebrow: "Software a medida",
    h1: "Desarrollo de Software a Medida en Mérida",
    heroLead:
      "Desarrollamos sistemas a la medida para empresas de Mérida y la península de Yucatán: control de operación, inventarios, expedientes de clientes y automatización con inteligencia artificial. Trabajamos en remoto, con entregas por etapas y el mismo estándar técnico que usamos en los proyectos del sureste.",
    ogAlt: "Desarrollo de software a medida en Mérida — Neurovia Systems",
    waMessage: "Hola, necesito un sistema a la medida para mi empresa en Mérida. ¿Podemos agendar una llamada esta semana?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Desarrollo de software a medida",
    areaServed: [
      { type: "City", name: "Mérida" },
      { type: "State", name: "Yucatán" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Software para la economía de servicios de Mérida",
        body: [
          "Mérida creció rápido y su economía no se parece a la de una ciudad industrial clásica: pesan el turismo y la hotelería, los servicios médicos privados, el comercio, los despachos profesionales, el desarrollo inmobiliario y una agroindustria fuerte alrededor de la miel, los cítricos y la carne de cerdo. Cada giro tiene una operación distinta, y por eso los programas genéricos terminan usándose a medias: se paga la licencia completa y se aprovecha una fracción.",
          "Nosotros hacemos lo contrario. Partimos de cómo trabaja tu empresa hoy, incluidos los formatos y las costumbres que ya funcionan, y construimos solo lo que hace falta: control de reservaciones y ocupación, expedientes de pacientes, inventarios multi-almacén, seguimiento de obra, cotizaciones que se convierten en órdenes o el tablero que la dirección necesita para decidir sin pedir reportes por WhatsApp.",
          "El crecimiento inmobiliario y de servicios de la ciudad dejó un efecto claro: muchas empresas duplicaron su operación en pocos años y siguen coordinándose con hojas de cálculo compartidas. Ahí un sistema propio deja de ser un lujo y se vuelve la diferencia entre crecer ordenado o crecer a tropezones.",
        ],
      },
      {
        h2: "Cómo trabajamos con empresas yucatecas",
        body: [
          "Trabajamos 100 por ciento en remoto, con videollamadas cortas y entregas por etapas. La primera versión útil suele estar lista en semanas: la usas mientras seguimos construyendo, y cada entrega se prueba con tu gente, no solo con nosotros.",
          "Construimos con Next.js, React, Node.js y PostgreSQL, e integramos inteligencia artificial cuando aporta de verdad: lectura de documentos, resúmenes de operación, asistentes que contestan por WhatsApp o clasificación automática de prospectos. Nada de IA por moda.",
          "El sistema y su código son de tu empresa, documentados. Si mañana decides moverlo a otro proveedor o a tu propio equipo, puedes hacerlo sin pedirnos permiso.",
        ],
      },
      {
        h2: "Qué puedes resolver con un sistema propio",
        body: [
          "Los proyectos que más nos piden en la península son de tres tipos. El primero, ordenar una operación que vive en Excel: inventario, pedidos, clientes y cobranza en un solo lugar, con permisos por usuario y sin versiones distintas del mismo archivo. El segundo, conectar lo que ya usas: punto de venta, facturación CFDI 4.0, tienda en línea y CRM, para no capturar lo mismo tres veces. El tercero, automatizar el trabajo repetitivo: reportes diarios que salen solos, avisos de vencimiento, recordatorios de cobranza o un agente de inteligencia artificial que atiende consultas fuera de horario.",
          "En todos los casos empezamos por el módulo que más duele y crecemos por etapas, para que la inversión se note desde el primer mes.",
        ],
      },
    ],
    benefitsTitle: "Por qué desarrollar tu software con Neurovia",
    benefits: [
      { title: "Entendemos el sureste", desc: "Operamos desde Villahermosa, con clientes en la región: conocemos los tiempos, los proveedores y la forma de trabajar." },
      { title: "Primera versión en semanas", desc: "Entregamos por etapas: usas el sistema mientras lo seguimos construyendo, en vez de esperar meses." },
      { title: "Código propio y documentado", desc: "El sistema es de tu empresa. Sin licencias por usuario ni dependencia de un solo proveedor." },
      { title: "IA donde sí sirve", desc: "Automatizamos documentos, reportes y atención por WhatsApp cuando ahorra horas reales." },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audienceLead: "El desarrollo a la medida rinde cuando la empresa ya superó las hojas de cálculo. En Mérida suele ser el caso de:",
    audience: [
      "Hoteles, restaurantes y operadores turísticos que necesitan control de reservas, insumos y personal.",
      "Clínicas y consultorios que quieren expediente, agenda y seguimiento de pacientes en un solo sistema.",
      "Distribuidoras y comercios con varios almacenes, pedidos por WhatsApp y facturación CFDI.",
      "Constructoras y desarrolladores inmobiliarios que llevan obra, requisiciones y avances en Excel.",
      "Despachos y empresas de servicios que quieren dejar de perseguir información entre correos.",
    ],
    faq: [
      { q: "¿Trabajan con empresas de Mérida estando en Villahermosa?", a: "Sí, 100% en remoto y con clientes en varias ciudades. Coordinamos por videollamada y mensajería, con entregas por etapas para que veas avances reales cada semana." },
      { q: "¿Cuánto cuesta un sistema a la medida?", a: "Depende del alcance. Los proyectos parten de $65,000 MXN + IVA y se construyen por módulos, así que puedes empezar por lo esencial y crecer después. El análisis inicial y el estimado no tienen costo." },
      { q: "¿Se puede conectar con mi facturación o mi punto de venta?", a: "Sí. Integramos CFDI 4.0, pasarelas de pago, tiendas en línea y sistemas que ya uses, siempre que permitan conexión. Si no la permiten, te lo decimos antes de prometer nada." },
      { q: "¿Qué pasa si mi negocio crece o cambia?", a: "El sistema se hizo para eso: se agregan módulos y usuarios sin rehacerlo. Al ser código propio y documentado, también puedes llevarlo con otro equipo si algún día lo decides." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-campeche", label: "Desarrollo de software a medida en Campeche" },
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con inteligencia artificial" },
      { href: "/sistema-punto-de-venta-villahermosa", label: "Sistema de punto de venta" },
    ],
  },
  "desarrollo-de-software-a-medida-veracruz": {
    slug: "desarrollo-de-software-a-medida-veracruz",
    metaTitle: "Desarrollo de Software a Medida en Veracruz",
    metaDescription:
      "Desarrollo de software a medida para empresas de Veracruz: logística portuaria, agroindustria, distribución y servicios. Sistemas, integraciones y automatización con IA.",
    keyword: "desarrollo de software a medida Veracruz",
    eyebrow: "Software a medida",
    h1: "Desarrollo de Software a Medida en Veracruz",
    heroLead:
      "Sistemas hechos para cómo opera una empresa veracruzana: movimiento de mercancía, control de embarques, inventarios, costos por operación y automatización con inteligencia artificial. Trabajo remoto, entregas por etapas y código que se queda contigo.",
    ogAlt: "Desarrollo de software a medida en Veracruz — Neurovia Systems",
    waMessage: "Hola, necesito un sistema a la medida para mi empresa en Veracruz. ¿Podemos agendar una llamada esta semana?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Desarrollo de software a medida",
    areaServed: [
      { type: "City", name: "Veracruz" },
      { type: "State", name: "Veracruz" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Software para una economía que se mueve por el puerto",
        body: [
          "Veracruz vive del movimiento. El puerto marca el ritmo de agencias aduanales, transportistas, almacenes, patios y distribuidoras; alrededor giran la agroindustria del café, la caña y los cítricos, la actividad petroquímica del sur del estado y un comercio que abastece a media región. Todo ese movimiento genera un problema común: la información viaja más lento que la mercancía.",
          "Cuando un embarque se documenta en un Excel, se confirma por WhatsApp y se factura en otro programa, nadie tiene el dato completo en el momento en que se necesita. Un sistema a la medida junta esas piezas: qué salió, con qué chofer, con qué documentos, cuánto costó realmente y qué falta por cobrar, sin capturar lo mismo tres veces.",
          "Lo mismo aplica a la agroindustria y a la distribución: control de lotes, mermas, entradas y salidas por almacén, precios por cliente y márgenes por producto. Son datos que ya existen en tu operación; el sistema solo los pone donde sirven para decidir.",
        ],
      },
      {
        h2: "Integrar antes que reemplazar",
        body: [
          "No siempre hay que tirar lo que ya usas. Muchas empresas veracruzanas tienen un sistema contable o de facturación que funciona bien y un montón de procesos alrededor que no. En esos casos construimos la capa que falta y la conectamos: CFDI 4.0, bancos, tiendas en línea, GPS de flotilla o el ERP que ya pagaste.",
          "Trabajamos con Next.js, React, Node.js y PostgreSQL, y agregamos inteligencia artificial donde ahorra horas: lectura automática de documentos y facturas, reportes que se escriben solos, avisos de vencimiento y agentes que responden por WhatsApp y correo fuera de horario.",
          "Todo en remoto y por etapas. Empiezas a usar el sistema en semanas y lo afinamos con tu equipo en operación real, no en una sala de juntas.",
        ],
      },
      {
        h2: "Qué suele resolverse primero",
        body: [
          "El orden importa. Normalmente arrancamos por el módulo que está costando dinero hoy: el control de embarques y evidencias, el inventario que no cuadra, las requisiciones que se autorizan por mensaje o la cobranza que se persigue a mano. Con eso funcionando y medido, se decide el siguiente paso.",
          "Cada entrega incluye capacitación corta a tu gente y documentación. El sistema es de tu empresa, con su código, y puede crecer con módulos nuevos o mudarse a otro equipo cuando lo decidas.",
        ],
      },
    ],
    benefitsTitle: "Por qué desarrollar tu software con Neurovia",
    benefits: [
      { title: "Pensado para operación pesada", desc: "Ya operamos sistemas de requisiciones, inventario y mantenimiento en empresas del sector energético del Golfo." },
      { title: "Integra lo que ya pagaste", desc: "Conectamos facturación, bancos, GPS y ERPs en vez de obligarte a tirar lo que funciona." },
      { title: "Entregas por etapas", desc: "Primera versión útil en semanas, mejoras continuas y presupuesto por módulos." },
      { title: "Código propio y documentado", desc: "Sin licencias por usuario ni dependencia de un proveedor único." },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audienceLead: "Este servicio es para empresas veracruzanas cuya operación ya no cabe en hojas de cálculo:",
    audience: [
      "Agencias aduanales, transportistas y almacenes que documentan embarques y evidencias a mano.",
      "Distribuidoras y comercializadoras con varios almacenes, listas de precios y cobranza.",
      "Agroindustria que controla lotes, acopio, mermas y liquidaciones a productores.",
      "Empresas de servicios industriales que llevan requisiciones, compras y mantenimiento en Excel.",
      "Negocios con flotilla que necesitan costos, mantenimientos y evidencias por unidad.",
    ],
    faq: [
      { q: "¿Pueden conectar el sistema con mi facturación actual?", a: "Sí. Integramos CFDI 4.0 y los sistemas contables o de facturación que ya uses, siempre que permitan conexión. Lo revisamos antes de comprometer nada." },
      { q: "¿Trabajan con empresas de Veracruz en remoto?", a: "Sí, 100% remoto, con reuniones cortas y entregas por etapas. Es la misma forma en que trabajamos con clientes de Nuevo León y del sureste." },
      { q: "¿Cuánto tarda la primera entrega?", a: "Una primera versión funcional suele estar lista en semanas. Preferimos que uses el sistema pronto y lo ajustemos con tu operación real." },
      { q: "¿Qué pasa con mis datos?", a: "Son tuyos. El sistema se despliega en infraestructura a tu nombre o en la nuestra, según prefieras, y te entregamos respaldos y documentación." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-campeche", label: "Desarrollo de software a medida en Campeche" },
      { href: "/desarrollo-de-software-a-medida-merida", label: "Desarrollo de software a medida en Mérida" },
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con inteligencia artificial" },
    ],
  },
  "desarrollo-de-software-a-medida-campeche": {
    slug: "desarrollo-de-software-a-medida-campeche",
    metaTitle: "Desarrollo de Software a Medida en Campeche",
    metaDescription:
      "Desarrollo de software a medida en Campeche y Ciudad del Carmen: contratistas del sector energético, pesca, comercio y servicios. Sistemas, cumplimiento y automatización con IA.",
    keyword: "desarrollo de software a medida Campeche",
    eyebrow: "Software a medida",
    h1: "Desarrollo de Software a Medida en Campeche",
    heroLead:
      "Sistemas a la medida para empresas de Campeche y Ciudad del Carmen: control de personal y equipo, requisiciones, evidencias de cumplimiento y automatización con inteligencia artificial. Conocemos cómo se trabaja cuando el cliente es del sector energético.",
    ogAlt: "Desarrollo de software a medida en Campeche — Neurovia Systems",
    waMessage: "Hola, necesito un sistema a la medida para mi empresa en Campeche. ¿Podemos agendar una llamada esta semana?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Desarrollo de software a medida",
    areaServed: [
      { type: "City", name: "Campeche" },
      { type: "City", name: "Ciudad del Carmen" },
      { type: "State", name: "Campeche" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Software para contratistas y empresas de la sonda",
        body: [
          "La economía de Campeche tiene un eje que no se parece a ninguna otra: la actividad petrolera de la sonda y todo lo que vive alrededor en Ciudad del Carmen. Empresas de servicios, transporte de personal, alimentación, mantenimiento, buceo, seguridad industrial y suministro trabajan para un cliente exigente que pide documentación, evidencia y cumplimiento en cada etapa.",
          "Ese contexto define el software que hace falta. No basta con registrar ventas: hay que demostrar que el personal está certificado, que el equipo tiene su calibración vigente, que el permiso de trabajo se cerró con evidencia y que cada requisición tuvo su autorización. Eso es justo lo que construimos: suites de requisiciones y compras, mantenimiento de flota y equipo, inventario por almacén y gestión de cumplimiento para auditorías.",
          "Fuera del sector energético, Campeche mueve pesca, comercio, turismo cultural y proveeduría al gobierno estatal y municipal. Ahí los dolores son otros: control de inventario y precios, padrón de clientes, licitaciones y comprobación de gastos. También se resuelven con un sistema propio, pero con otro enfoque.",
        ],
      },
      {
        h2: "Cumplimiento y evidencia, no solo capturas",
        body: [
          "Cuando tu cliente es Pemex o un operador grande, la diferencia entre ganar y perder un contrato suele estar en poder demostrar lo que hiciste. Por eso nuestros sistemas guardan la evidencia con fecha, responsable y respaldo: quién autorizó, qué se entregó, qué constancia estaba vigente y qué se corrigió tras un hallazgo.",
          "Tenemos un producto propio pensado para eso, Núcleo SGI, que concentra documentos, hallazgos, capacitación DC-3 y evidencias de auditoría. Cuando la empresa necesita algo distinto, lo construimos a la medida sobre la misma base técnica.",
          "Trabajamos con Next.js, React, Node.js y PostgreSQL, en remoto y con entregas por etapas. Villahermosa está a unas horas de Ciudad del Carmen, así que también coordinamos visitas cuando el proyecto lo amerita.",
        ],
      },
      {
        h2: "Por dónde empezar",
        body: [
          "Arrancamos con una llamada de 20 minutos para entender la operación y decirte con franqueza si conviene un desarrollo a la medida, una automatización más simple o una herramienta que ya existe. Si no tiene sentido invertir, te lo decimos: preferimos perder un proyecto a vender algo que no vas a usar.",
          "Si sí tiene sentido, te pasamos alcance, precio y tiempos por etapas. Empezamos por el módulo que más duele, lo pones en operación y de ahí crecemos.",
        ],
      },
    ],
    benefitsTitle: "Por qué desarrollar tu software con Neurovia",
    benefits: [
      { title: "Experiencia en el sector energético", desc: "Operamos suites de requisiciones, mantenimiento e inventario para un cliente petrolero, en 23 áreas operativas." },
      { title: "Evidencia lista para auditoría", desc: "Documentos, hallazgos, DC-3 y constancias con fecha y responsable, exportables cuando llega la revisión." },
      { title: "Cerca de Ciudad del Carmen", desc: "Operamos desde Villahermosa: mismos tiempos y visitas cuando el proyecto lo pide." },
      { title: "Código propio y documentado", desc: "El sistema es de tu empresa y crece por módulos según tu presupuesto." },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audienceLead: "Trabajamos sobre todo con empresas campechanas que tienen que demostrar cómo operan:",
    audience: [
      "Contratistas de servicios petroleros que responden ante Pemex o la ASEA.",
      "Empresas de transporte de personal, alimentación y mantenimiento con operación en campo.",
      "Comercializadoras y distribuidoras con inventario en varios almacenes.",
      "Empresas pesqueras y de proceso que controlan lotes, acopio y liquidaciones.",
      "Proveedores de gobierno que necesitan expedientes y comprobación ordenada.",
    ],
    faq: [
      { q: "¿Atienden Ciudad del Carmen?", a: "Sí. Trabajamos en remoto con toda la zona y, cuando el proyecto lo amerita, coordinamos visitas desde Villahermosa." },
      { q: "¿Tienen algo listo para cumplimiento y auditorías?", a: "Sí: Núcleo SGI, nuestro sistema de gestión integral, cubre documentos, hallazgos, capacitación DC-3 y evidencias. Si necesitas algo distinto, lo desarrollamos a la medida." },
      { q: "¿Cuánto cuesta y cuánto tarda?", a: "Los proyectos parten de $65,000 MXN + IVA y se entregan por etapas; la primera versión útil suele estar lista en semanas. El análisis y el estimado son gratuitos." },
      { q: "¿El sistema queda a nombre de mi empresa?", a: "Sí, con su código y su documentación. Puedes moverlo a otro proveedor o a tu propio equipo cuando quieras." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida en Villahermosa" },
      { href: "/desarrollo-de-software-a-medida-merida", label: "Desarrollo de software a medida en Mérida" },
      { href: "/agentes-de-inteligencia-artificial", label: "Agentes de inteligencia artificial a medida" },
    ],
  },
  "desarrollo-de-software-a-medida-guadalajara": {
    slug: "desarrollo-de-software-a-medida-guadalajara",
    metaTitle: "Desarrollo de Software a Medida en Guadalajara",
    metaDescription:
      "Desarrollo de software a medida para empresas en Guadalajara, Jalisco: sistemas, plataformas y automatización con IA. Trabajo remoto. Agenda tu consulta gratuita.",
    keyword: "desarrollo de software a medida Guadalajara",
    eyebrow: "Software a medida",
    h1: "Desarrollo de Software a Medida en Guadalajara",
    heroLead:
      "Desarrollamos software a medida para empresas de Guadalajara y Jalisco: sistemas de gestión, plataformas web y automatización con inteligencia artificial. Trabajamos en remoto con el mismo estándar técnico, sin que la ubicación sea un límite.",
    ogAlt: "Desarrollo de software a medida en Guadalajara — Neurovia Systems",
    waMessage: "Hola, necesito un sistema a la medida para mi empresa en Guadalajara. ¿Podemos agendar una llamada esta semana?",
    priceNote: "Proyectos desde $65,000 MXN + IVA",
    serviceType: "Desarrollo de software a medida",
    areaServed: [
      { type: "City", name: "Guadalajara" },
      { type: "State", name: "Jalisco" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Software para el ecosistema de Guadalajara",
        body: [
          "Guadalajara es uno de los polos de tecnología y comercio más dinámicos de México. En un entorno así, la diferencia la hacen los sistemas que se ajustan a cómo trabaja tu empresa, no los productos genéricos. Desarrollamos plataformas, sistemas de gestión, portales para clientes, dashboards y automatizaciones a tu medida.",
          "Integramos inteligencia artificial donde aporta valor real —procesamiento de documentos, asistentes, analítica— para que tu software no solo guarde datos, sino que te ayude a decidir.",
        ],
      },
      {
        h2: "Trabajo remoto, mismo estándar de calidad",
        body: [
          "Construimos con tecnologías modernas (Next.js, React, Node.js) y trabajamos 100% en remoto con reuniones claras y entregas por etapas. Obtienes el sistema que necesitas sin depender de estar en la misma ciudad.",
          "El código es tuyo, documentado, y la plataforma crece contigo por etapas según tu presupuesto.",
        ],
      },
    ],
    benefitsTitle: "Por qué desarrollar tu software con Neurovia",
    benefits: [
      { title: "Trabajo 100% remoto", desc: "Colaboramos con empresas de Guadalajara a distancia, con comunicación directa y avances constantes." },
      { title: "Sistemas en producción", desc: "Ya tenemos software funcionando en empresas reales de industria, construcción y servicios." },
      { title: "Código propio y documentado", desc: "El sistema es tuyo; te lo entregamos documentado y listo para crecer." },
      { title: "Escalable y con IA", desc: "Empezamos por lo esencial y sumamos automatización e inteligencia artificial cuando suma." },
    ],
    audienceTitle: "¿Para quién es este servicio?",
    audienceLead:
      "El desarrollo de software a medida es ideal para empresas de Guadalajara y Jalisco que necesitan una herramienta propia:",
    audience: [
      "Empresas de comercio y distribución que gestionan pedidos, catálogos e inventario.",
      "Negocios de servicios que quieren portales para clientes o paneles internos.",
      "Áreas que hoy dependen de Excel compartido y quieren un sistema serio.",
      "Proyectos que requieren dashboards y reportes a la medida.",
    ],
    faq: [
      { q: "¿Trabajan de forma remota con empresas de Guadalajara?", a: "Sí, 100% remoto. Coordinamos por videollamada y mensajería, con entregas por etapas para que veas avances reales sin importar la ubicación." },
      { q: "¿Cuánto tarda el desarrollo?", a: "Una primera versión funcional suele estar lista en semanas, no meses. Trabajamos por entregas." },
      { q: "¿El software queda a mi nombre?", a: "Sí. El sistema y su código son de tu empresa, entregados documentados." },
      { q: "¿Cuánto cuesta?", a: "Depende del alcance. Partimos de un análisis gratuito y un estimado claro por etapas." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-monterrey", label: "Desarrollo de software a medida en Monterrey" },
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con inteligencia artificial" },
      { href: "/agentes-de-inteligencia-artificial", label: "Agentes de inteligencia artificial a medida" },
    ],
  },
};

/* ============================ ENGLISH =================================== */

const en: Record<string, ServicePageData> = {
  "desarrollo-de-software-a-medida-villahermosa": {
    slug: "desarrollo-de-software-a-medida-villahermosa",
    metaTitle: "Custom Software Development in Villahermosa",
    metaDescription:
      "Custom software development in Villahermosa, Tabasco. We build systems, platforms and dashboards that automate your company. Book a free consultation.",
    keyword: "custom software development Villahermosa",
    eyebrow: "Custom software",
    h1: "Custom Software Development in Villahermosa",
    heroLead:
      "At Neurovia Systems we build custom software in Villahermosa for companies in Tabasco that are tired of adapting to generic programs. We build systems, web platforms and dashboards designed exactly for how your business runs.",
    ogAlt: "Custom software development in Villahermosa — Neurovia Systems",
    waMessage: "Hi, I need a custom system for my company in Villahermosa. Can we schedule a call this week?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Custom software development",
    sections: [
      {
        h2: "Software built for your business, not the other way around",
        body: [
          "Every company in Villahermosa runs differently: your processes, your rules and the way you serve your customers are your own. That's why off-the-shelf software almost always ends up forcing you to change how you work to fit the program. Custom software flips that logic: the system is built around how your business already works.",
          "We build internal platforms, management systems, control panels and tools that connect your company's areas in one place. From requisitions and project tracking to internal invoicing and management reports, everything stays centralized, organized and accessible from any device.",
        ],
      },
      {
        h2: "Modern, maintainable technology",
        body: [
          "We work with current, well-supported technologies —Next.js, React, Node.js and robust databases— so your software is fast, secure and easy to maintain over time. No systems only the original developer understands: we document the project and hand it over ready to grow.",
          "We also add artificial intelligence where it delivers real value: automatic document processing, internal assistants, smart search and analytics that help you make better decisions with the data your company already generates.",
        ],
      },
      {
        h2: "The sectors that look for us in Villahermosa",
        body: [
          "**Oil and oilfield services.** The most demanding operation in the region and the one that moves the most paperwork. For a client in the sector we built a suite covering purchase requests and buying, vehicle maintenance and inventory across 23 operating areas, and we created Núcleo SGI for contractors who must prove compliance to their client and to the authority.",
          "**Trade and distribution.** Warehouses that never reconcile, price lists per customer and orders arriving over WhatsApp. For the distributor CAPOSA we built a 24-module system with multi-warehouse inventory, CFDI 4.0 invoicing and AI-assisted reports.",
          "**Workshops and field service.** The work happens away from a desk: for ASC Motores we built an 18-module system with Android and iOS apps so orders can be opened and closed wherever the technician is.",
          "**Construction and government.** Purchase requests per work front, real cost per project and records that survive review; we also built the equipment assessment system for SOTOP, Tabasco's public works ministry.",
        ],
      },
    ],
    benefitsTitle: "Why choose Neurovia for your custom software",
    benefits: [
      { title: "Local support in Tabasco", desc: "We're in Villahermosa: clear meetings, direct dealing and a real understanding of the region's business, with no middlemen." },
      { title: "Systems in production", desc: "We don't sell promises: we already have systems running in real companies in oil & gas, construction and industry." },
      { title: "Your own documented code", desc: "The software is yours. We hand over the documented project so you're never locked to a single vendor." },
      { title: "Scalable and AI-ready", desc: "We start with the essentials and grow in stages, adding automation and AI when it adds up." },
    ],
    audienceTitle: "Who is this service for?",
    audienceLead:
      "Custom software development is ideal for companies in Villahermosa and Tabasco that already feel spreadsheets or generic programs have fallen short:",
    audience: [
      "Industrial and oil & gas companies that need to control requisitions, maintenance or inventory.",
      "Construction firms and offices managing projects, budgets and site progress.",
      "Growing businesses that want to centralize areas living today in Excel and WhatsApp.",
      "Service companies that need internal portals or management dashboards.",
    ],
    faq: [
      { q: "How much does custom software cost?", a: "It depends on scope, but we always start from a free analysis to understand your process and give you a clear estimate by stages. You can start with one essential module and grow gradually, without paying it all at once." },
      { q: "How long does development take?", a: "A first working version is usually ready in weeks, not months. We work in deliverables so you see real progress from the start and can use the system while we keep improving it." },
      { q: "Do I own the software?", a: "Yes. The system and its code belong to your company. We hand it over documented so you have full control and vendor freedom." },
      { q: "Do you only serve Villahermosa?", a: "We're in Villahermosa, Tabasco, and serve the whole region. We also work remotely with companies across Mexico and Latin America." },
    ],
    related: [
      { href: "/erp-a-medida-villahermosa", label: "Custom ERP in Villahermosa" },
      { href: "/crm-a-medida-villahermosa", label: "Custom CRM in Villahermosa" },
      { href: "/automatizacion-con-ia-tabasco", label: "AI automation in Tabasco" },
      { href: "/casos-de-exito", label: "Case studies: systems in production" },
    ],
  },

  "automatizacion-con-ia-tabasco": {
    slug: "automatizacion-con-ia-tabasco",
    metaTitle: "AI Automation in Tabasco",
    metaDescription:
      "Automation with artificial intelligence in Tabasco: we integrate AI and flows that remove repetitive tasks at your company. Book a free consultation.",
    keyword: "artificial intelligence automation Tabasco",
    eyebrow: "AI automation",
    h1: "Automation with Artificial Intelligence in Tabasco",
    heroLead:
      "We help companies in Tabasco win back hours with automation and artificial intelligence. We spot the repetitive tasks that drain your team and turn them into automatic flows that run on their own.",
    ogAlt: "Automation with artificial intelligence in Tabasco — Neurovia Systems",
    waMessage: "Hi Neurovia Systems, I'm interested in AI automation in Tabasco",
    priceNote: "From MXN $25,000 + VAT",
    serviceType: "Process automation with artificial intelligence",
    sections: [
      {
        h2: "Fewer manual tasks, more results",
        body: [
          "In most companies in Villahermosa and Tabasco there are processes done by hand every day: copying data from one system to another, generating reports, replying to the same messages, following up on quotes or processing documents. AI automation removes that repetitive work so your team can focus on what really matters.",
          "We design automatic flows that connect your tools —email, spreadsheets, WhatsApp, your invoicing system or your ERP— and let information travel on its own, with no data-entry errors and no depending on someone remembering to do it.",
        ],
      },
      {
        h2: "Artificial intelligence applied to your operation",
        body: [
          "We go beyond traditional automation by integrating AI models like Claude and GPT. With them we can read and classify documents, extract data from invoices and contracts, answer frequent questions with virtual assistants and generate summaries or reports from your information.",
          "We build the flows with tools like n8n and API integrations, so the automation is robust, monitored and easy to adjust as your business changes.",
        ],
      },
      {
        h2: "What we automate for companies in Villahermosa",
        body: [
          "**Invoices and documents somebody types by hand.** AI reads the PDF or the photo, pulls out the data and drops it into your system or your control sheet. It is the automation that pays for itself fastest in admin teams.",
          "**The WhatsApp messages that arrive after hours.** An agent answers the usual questions, collects what you need to quote and hands you a qualified lead, instead of the message sitting unanswered until Monday.",
          "**Reports rebuilt every week.** If the data already lives in your system, the report can write itself, at the hour you want and in the format you actually read.",
          "**Double entry between systems.** When the same information is typed into sales and again into invoicing, an integration moves it and the differences disappear.",
          "**Alerts that depend on someone remembering.** Certificate expiry, stock minimums, maintenance by mileage or quotes that have gone quiet.",
        ],
      },
    ],
    benefitsTitle: "Why automate with Neurovia",
    benefits: [
      { title: "Real time savings", desc: "We free your team from repetitive tasks that steal hours every week today." },
      { title: "Fewer errors", desc: "Information stops moving by hand from place to place, so data-entry errors drop." },
      { title: "AI that understands your business", desc: "We apply AI to concrete cases: documents, support and reports — no hype." },
      { title: "We start where it hurts most", desc: "We find the process that costs you the most and automate it first so you see results fast." },
    ],
    audienceTitle: "Who is this service for?",
    audienceLead:
      "AI automation in Tabasco helps any company that repeats manual processes every day:",
    audience: [
      "Companies entering the same data in several systems or in Excel.",
      "Businesses processing many invoices, purchase orders or documents.",
      "Sales teams that follow up on quotes and clients by hand.",
      "Admin areas that build repetitive reports every week or month.",
    ],
    faq: [
      { q: "What processes can be automated?", a: "Almost any repetitive, rule-based task: data entry, report generation, client follow-up, document processing, notifications and frequent replies. In the free consultation we find which ones you should automate first." },
      { q: "Do I need to change the systems I already use?", a: "Not necessarily. Automation usually connects to the tools you already have through integrations, so we build on your current operation instead of replacing it." },
      { q: "Is artificial intelligence reliable for my company?", a: "Yes, when applied to well-defined cases with controls. We design the flows so AI assists and validates, keeping human oversight where needed." },
      { q: "How do we start?", a: "With a free WhatsApp consultation where we review your current processes and propose a first automation flow with a clear estimate." },
    ],
    related: [
      { href: "/agentes-de-inteligencia-artificial", label: "AI agents for WhatsApp and email" },
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software development in Villahermosa" },
      { href: "/sistemas-empresariales-tabasco", label: "Business systems: ERP, CRM and inventory" },
    ],
  },

  "sistema-punto-de-venta-villahermosa": {
    slug: "sistema-punto-de-venta-villahermosa",
    metaTitle: "Point of Sale System in Villahermosa",
    metaDescription:
      "Point of sale system in Villahermosa, Tabasco: control sales, inventory and real-time reports for your local business. Book a free consultation.",
    keyword: "point of sale system Villahermosa",
    eyebrow: "Point of sale",
    h1: "Point of Sale System in Villahermosa",
    heroLead:
      "Our point of sale system in Villahermosa is built for businesses in Tabasco: record your sales, control inventory and check real-time reports from any device, hassle-free.",
    ogAlt: "Point of sale system in Villahermosa — Neurovia Systems",
    waMessage: "Hi, I'd like a quote for Tomín POS for my business. How much does it cost?",
    serviceType: "Point of sale (POS) system",
    sections: [
      {
        h2: "Sell, control inventory and measure your business",
        body: [
          "A good point of sale isn't just charging: it's knowing what sells, how much stock you have left and how your business is doing without closing to do the math. Our POS records every sale instantly, deducts stock automatically and shows clear reports of sales by day, product and payment method.",
          "It's designed for shops, restaurants and service businesses in Villahermosa that want order and control without fighting a complicated system. The interface is fast and intuitive, made so your staff learns it in minutes.",
        ],
      },
      {
        h2: "In the cloud and reachable from anywhere",
        body: [
          "Because it's in the cloud, you can check your business's sales from your phone or computer even when you're not on site. Ideal if you have more than one location or want to keep an eye out without living behind the counter.",
          "And since we build it, we can adapt it to your type of business: add a restaurant's table control, a salon's services or your store's specific catalog. It's a point of sale that grows with you.",
        ],
      },
    ],
    benefitsTitle: "Why choose our point of sale",
    benefits: [
      { title: "Up-to-date inventory", desc: "Every sale deducts stock automatically. You know what you have and what's missing without counting by hand." },
      { title: "Real-time reports", desc: "Check sales by day, product and payment method from your phone, wherever you are." },
      { title: "Easy to use", desc: "Fast, intuitive interface: your staff masters it in minutes, no endless training." },
      { title: "Local support", desc: "We're in Villahermosa. If you need help, you talk to people who know your business." },
    ],
    audienceTitle: "Which businesses is it for?",
    audienceLead: "The point of sale system is ideal for the most common business types in Villahermosa and Tabasco:",
    audience: [
      "Shops, grocery stores and retailers that manage inventory.",
      "Restaurants, cafés and food businesses.",
      "Salons, barbershops and service businesses.",
      "Businesses with one or several locations that want centralized control.",
    ],
    faq: [
      { q: "Does it work without internet?", a: "The system is optimized to work in the cloud and stay in sync. In the consultation we review your case to make sure your store runs smoothly for your connection." },
      { q: "Can I control inventory?", a: "Yes. Every sale deducts stock automatically and you can see stock levels, best-selling products and low-inventory alerts." },
      { q: "Does it work for more than one location?", a: "Yes. Being in the cloud, you can view and manage several locations from one place and compare their performance." },
      { q: "Can you adapt it to my type of business?", a: "Yes. Since we build it, we tailor it to your business: table control, services, specific catalogs and the checkout method you use." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software development in Villahermosa" },
      { href: "/automatizacion-con-ia-tabasco", label: "AI automation in Tabasco" },
      { href: "/diseno-de-paginas-web-villahermosa", label: "Web design in Villahermosa" },
    ],
  },

  "diseno-de-paginas-web-villahermosa": {
    slug: "diseno-de-paginas-web-villahermosa",
    metaTitle: "Web Design in Villahermosa",
    metaDescription:
      "Professional web design in Villahermosa, Tabasco: fast, modern sites optimized for SEO that turn visitors into customers. Book a free consultation.",
    keyword: "web design Villahermosa",
    eyebrow: "Web design",
    h1: "Web Design in Villahermosa",
    heroLead:
      "We do web design in Villahermosa for companies in Tabasco that want to look professional and attract customers. Fast, modern, SEO-optimized sites that turn visitors into business opportunities.",
    ogAlt: "Web design in Villahermosa — Neurovia Systems",
    waMessage: "Hi Neurovia Systems, I'm interested in web design in Villahermosa",
    serviceType: "Web design and development",
    sections: [
      {
        h2: "Your website is your first impression",
        body: [
          "Today, before calling or visiting you, your customers look you up online. A slow, dated site that doesn't look good on mobile loses you business to the competition. The web design we do at Neurovia aims for the opposite: that every visitor understands in seconds who you are, what you offer and why to trust you.",
          "We design sites tailored to your brand, not generic templates. We care about load speed, the mobile experience and message clarity so your site doesn't just look good, it generates contacts and sales.",
        ],
      },
      {
        h2: "Optimized to show up on Google",
        body: [
          "A pretty site nobody finds is useless. That's why we build every site with SEO best practices from day one: correct structure, speed, optimized tags and content built for local searches in Villahermosa and Tabasco.",
          "Whether it's a landing page for a campaign, a corporate site with a catalog or an online store, we build it with modern technology (Next.js and React) so it's fast, secure and easy to update.",
        ],
      },
    ],
    benefitsTitle: "Why choose Neurovia for your website",
    benefits: [
      { title: "Tailored design", desc: "No repeated templates: your site reflects your brand and stands out from the competition." },
      { title: "Fast and responsive", desc: "Quick load and looks perfect on phone, tablet and computer, where your customers are." },
      { title: "SEO-optimized", desc: "Built to rank on Google with local keywords for Villahermosa and Tabasco." },
      { title: "Built to convert", desc: "Clear messages and calls to action that turn visits into real contacts." },
    ],
    audienceTitle: "Who is this service for?",
    audienceLead:
      "Web design in Villahermosa is for any business in the region that wants a professional online presence:",
    audience: [
      "Companies with no site yet or an old, slow one.",
      "Businesses that want a landing page for a campaign or product.",
      "Retailers that need a catalog or online store.",
      "Professionals and firms looking to convey trust and seriousness.",
    ],
    faq: [
      { q: "How much does a website cost?", a: "It depends on the type of site (landing, corporate or online store). We give you a clear quote after a free consultation where we understand your goals." },
      { q: "Will the site show up on Google?", a: "We build every site with SEO best practices so it can rank. Ranking takes time, but we start with an optimized technical base and local content." },
      { q: "Does it look good on mobile?", a: "Yes. All our sites are responsive and designed mobile-first, which is where most of your customers browse." },
      { q: "Can I update the content myself later?", a: "Yes. We deliver sites that are easy to maintain and guide you to make changes, or we handle it with a support plan." },
    ],
    related: [
      { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Custom web app development in Tabasco" },
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software development in Villahermosa" },
      { href: "/sistema-punto-de-venta-villahermosa", label: "Point of sale system in Villahermosa" },
    ],
  },

  "desarrollo-de-aplicaciones-web-tabasco": {
    slug: "desarrollo-de-aplicaciones-web-tabasco",
    metaTitle: "Custom Web App Development in Tabasco",
    metaDescription:
      "Custom web application development in Tabasco: cloud platforms, panels and systems, scalable for your company. Book a free consultation.",
    keyword: "custom web app development Tabasco",
    eyebrow: "Web apps",
    h1: "Custom Web App Development in Tabasco",
    heroLead:
      "We do custom web app development in Tabasco: cloud platforms and systems your team opens right from the browser, with nothing to install. Tools built to solve concrete problems in your company.",
    ogAlt: "Custom web app development in Tabasco — Neurovia Systems",
    waMessage: "Hi, I need a custom web app for my company. Can we schedule a call this week?",
    priceNote: "From MXN $32,000 + VAT",
    serviceType: "Custom web application development",
    sections: [
      {
        h2: "Applications that live in the cloud",
        body: [
          "A web application is a system you enter from the browser: no installing programs on every computer, no worrying about manual updates. Your team signs in with a username and password from the office, from home or from the field, and always works on the same up-to-date information.",
          "We build custom web apps for companies in Tabasco: internal portals, control panels, management systems, client platforms and tools that connect your processes. All centralized, secure and available 24/7.",
        ],
      },
      {
        h2: "Built to grow and last",
        body: [
          "We use modern technologies like Next.js, React and Node.js to create fast, secure and scalable applications. That means your platform can start small and grow in users and features without being rebuilt from scratch.",
          "We take care of security, backups and access control, and hand the app over documented so it's easy to maintain. If you need it, we integrate AI and automation so your system doesn't just store data, it helps you work.",
        ],
      },
    ],
    benefitsTitle: "Why build your app with Neurovia",
    benefits: [
      { title: "Access from anywhere", desc: "Your team signs in from the browser, no installs, with information always up to date." },
      { title: "Built for you", desc: "We solve your specific process instead of forcing you into generic software." },
      { title: "Secure and scalable", desc: "Access control, backups and a technical base that grows with your company." },
      { title: "Ready to integrate AI", desc: "We add automation and AI when they bring real value to your operation." },
    ],
    audienceTitle: "Who is this service for?",
    audienceLead:
      "Custom web app development in Tabasco is ideal for organizations that need a tool of their own:",
    audience: [
      "Companies coordinating teams across office, field and locations.",
      "Businesses that need a portal for their clients or suppliers.",
      "Teams relying on shared Excel today that want a serious system.",
      "Projects that need control panels and custom reports.",
    ],
    faq: [
      { q: "What's the difference from a website?", a: "A website informs; a web app does things: it manages users, data and processes. It's a working tool your team operates day to day, not just a presentation site." },
      { q: "Can it be used on mobile?", a: "Yes. We design the apps to work well on computer, tablet and phone from the browser, with no app to install." },
      { q: "Is the information secure?", a: "Yes. We implement per-user access control, security best practices and backups to protect your company's data." },
      { q: "Can it grow over time?", a: "Absolutely. We build on scalable technology, so you can start with the essentials and add users and features in stages." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software development in Villahermosa" },
      { href: "/diseno-de-paginas-web-villahermosa", label: "Web design in Villahermosa" },
      { href: "/automatizacion-con-ia-tabasco", label: "AI automation in Tabasco" },
    ],
  },

  "agentes-de-inteligencia-artificial": {
    slug: "agentes-de-inteligencia-artificial",
    metaTitle: "Custom Artificial Intelligence Agents",
    metaDescription:
      "We build custom AI agents: they automate tasks, handle customers and process information 24/7. Trained on your data. Book a free consultation.",
    keyword: "custom AI agents",
    eyebrow: "AI agents",
    h1: "We Build Custom Artificial Intelligence Agents",
    heroLead:
      "At Neurovia Systems we build AI agents that work for your company: they answer your customers, automate processes and run tasks for you, around the clock. Not a generic chatbot — an agent trained on your information and connected to your systems.",
    ogAlt: "Custom artificial intelligence agents — Neurovia Systems",
    waMessage: "Hi Neurovia Systems, I'm interested in a custom AI agent",
    priceNote: "From MXN $25,000 + VAT",
    serviceType: "Artificial intelligence agent development",
    sections: [
      {
        h2: "An AI agent is not just any chatbot",
        body: [
          "A chatbot answers FAQs. An AI agent does things: it queries your systems, processes documents, schedules, follows up and runs tasks on its own by the rules you define. We connect models like Claude and GPT to your data and tools so the agent understands your business and acts.",
          "From an assistant that handles WhatsApp and qualifies leads, to an internal agent that reads invoices, extracts the data and enters it into your system — we build the one that solves your specific problem.",
        ],
      },
      {
        h2: "Trained on your data, connected to your tools",
        body: [
          "We feed the agent your documents, catalogs and processes, and connect it via API to what you already use: email, WhatsApp, your CRM, spreadsheets or your ERP. With controls and human oversight where needed.",
          "The result: less repetitive work for your team, faster answers for your customers, and processes that don't depend on someone remembering to do them.",
        ],
      },
    ],
    benefitsTitle: "Why build an AI agent with Neurovia",
    benefits: [
      { title: "Works 24/7", desc: "Handles and runs tasks day and night, no breaks, no forgetting." },
      { title: "Built for you", desc: "Trained on your information and connected to your systems, not a generic solution." },
      { title: "With oversight", desc: "We design controls so the agent assists and validates, with a human at the critical point." },
      { title: "Start with one case", desc: "We find the highest-impact process and build that agent first." },
    ],
    audienceTitle: "Who is this service for?",
    audienceLead:
      "AI agents help companies that want to automate support or processes with judgment, not just fixed replies:",
    audience: [
      "Businesses that get many messages and want to filter and reply instantly.",
      "Teams that process documents (invoices, contracts, orders) repetitively.",
      "Sales teams that need automatic lead follow-up and qualification.",
      "Companies that want an internal assistant to query their data and generate reports.",
    ],
    faq: [
      { q: "Does an AI agent replace my staff?", a: "No: it frees them from the repetitive work. The agent does the mechanical work and your team focuses on what needs human judgment, with oversight where it matters." },
      { q: "What can it connect to?", a: "WhatsApp, email, your CRM, spreadsheets, your ERP and more, through API integrations. We build on the tools you already use." },
      { q: "Is it secure for my company?", a: "Yes. We design access controls and validations, and keep human oversight at the critical points of the process." },
      { q: "How do we start?", a: "With a free consultation where we find the highest-impact process and propose a first agent with a clear estimate." },
    ],
    related: [
      { href: "/automatizacion-con-ia-tabasco", label: "AI automation in Tabasco" },
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software development in Villahermosa" },
      { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Custom web app development in Tabasco" },
    ],
  },

  "desarrollo-de-software-tabasco": {
    slug: "desarrollo-de-software-tabasco",
    metaTitle: "Software Development in Tabasco, Mexico",
    metaDescription:
      "Software development company in Tabasco: management systems, ERP, CRM and AI for companies in Villahermosa, Cárdenas, Comalcalco and Paraíso.",
    keyword: "software development Tabasco",
    eyebrow: "Software in Tabasco",
    h1: "Software Development in Tabasco",
    heroLead:
      "We are a software company based in Villahermosa working with companies across Tabasco. We build management systems, ERP, CRM and AI integrations, and deliver them working, in stages.",
    ogAlt: "Software development in Tabasco — Neurovia Systems",
    waMessage: "Hi, I'm in Tabasco and need a system built for my company. Can we talk?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Business software development",
    areaServed: [
      { type: "City", name: "Villahermosa" },
      { type: "City", name: "Cárdenas" },
      { type: "City", name: "Comalcalco" },
      { type: "City", name: "Paraíso" },
      { type: "State", name: "Tabasco" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "A software company that is actually in the state",
        body: [
          "Looking for software development in Tabasco usually ends one of two ways: a vendor from another city who never sets foot in your company, or someone cheap who delivers half a system and disappears. We work out of Villahermosa with companies in Cárdenas, Comalcalco, Paraíso, Macuspana, Cunduacán and the rest of the state.",
          "That changes concrete things: we can sit with your warehouse staff, watch how a purchase request is actually filed, be there for go-live and come back when something does not add up. Most of the work is remote because it moves faster, but the site visit is real when the project needs it.",
          "We also know the context: how a distributor here invoices, what an operator demands from a contractor, and why field connectivity forces you to design screens that work on a bad signal.",
        ],
      },
      {
        h2: "What we build for companies in the state",
        body: [
          "Management systems and custom ERP to put the operation in order: purchase requests and buying, multi-warehouse inventory, equipment and fleet maintenance, project or service tracking, and the reports management asks for every week.",
          "CRM and sales follow-up so quotes stop living in one salesperson's phone; warehouse systems; customer or supplier portals; mobile apps when the work happens outside the office; and integrations with what you already run: CFDI 4.0 invoicing, banks, online stores or the accounting system you already paid for.",
          "And where it saves real hours, AI: automatic reading of invoices and documents, operations summaries, assistants that answer WhatsApp after hours and lead qualification.",
        ],
      },
      {
        h2: "The sectors that move Tabasco",
        body: [
          "**Oil and oilfield services.** We run an ERP suite for a client in the sector covering purchase requests, vehicle maintenance and inventory across 23 operating areas, plus Núcleo SGI, our integrated management system for contractors who must prove compliance.",
          "**Construction and public works.** We built the equipment assessment system for SOTOP, Tabasco's public works ministry, and the site for Royers, a builder with 35+ years and 500+ projects delivered.",
          "**Trade and distribution.** For CAPOSA, a Villahermosa distributor, we built a 24-module custom CRM with multi-warehouse inventory, CFDI 4.0 invoicing and AI reports.",
          "**Workshops and services.** For ASC Motores we built an 18-module workshop system with Android and iOS apps.",
        ],
      },
    ],
    benefitsTitle: "Why build your software with Neurovia",
    benefits: [
      { title: "We are here", desc: "Villahermosa, Tabasco. Same time zone, same context, on-site visits when the project calls for it." },
      { title: "Systems in production, not demos", desc: "Oil, government, construction, retail and workshops: our systems run in the state today." },
      { title: "Staged delivery", desc: "First useful version in weeks; you use it while we keep building the rest." },
      { title: "The code is yours", desc: "Documented, with no per-user licences: you can change provider whenever you want." },
    ],
    audienceTitle: "Who is this for?",
    audienceLead: "For companies in Tabasco that have outgrown the shared spreadsheet:",
    audience: [
      "Contractors and oilfield service companies that must document everything they do.",
      "Builders tracking purchase requests, progress and cost per project.",
      "Distributors with several warehouses and orders arriving over WhatsApp.",
      "Workshops and maintenance companies needing work orders and history.",
      "Government suppliers that need orderly records and traceability.",
    ],
    faq: [
      { q: "Do you work outside Villahermosa?", a: "Yes. We work with companies in Cárdenas, Comalcalco, Paraíso, Macuspana and the rest of the state, mostly remotely, with visits when the project needs them." },
      { q: "How much does a system cost?", a: "Projects start at MXN $65,000 + VAT and are built module by module, so you can start with the essentials. The initial analysis and estimate are free." },
      { q: "Do you issue invoices?", a: "Yes, we are a formal company and invoice with CFDI 4.0. We also build invoicing into the systems we develop." },
      { q: "What if I already have a half-finished system?", a: "We review it before proposing anything. Sometimes it is worth continuing and sometimes rebuilding the failing part; we tell you which and why." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software development in Villahermosa" },
      { href: "/sistemas-empresariales-tabasco", label: "Business systems: ERP, CRM and inventory" },
      { href: "/casos-de-exito", label: "Case studies: systems in production" },
    ],
  },

  "sistemas-empresariales-tabasco": {
    slug: "sistemas-empresariales-tabasco",
    metaTitle: "Custom Business Systems in Tabasco",
    metaDescription:
      "Custom business systems in Tabasco: ERP, CRM, inventory control and AI automation for companies in Villahermosa. Free diagnosis.",
    keyword: "business systems Tabasco",
    eyebrow: "Business systems",
    h1: "Custom Business Systems in Tabasco",
    heroLead:
      "ERP, CRM, inventory control and automation, built around how your company already works. We start with the area that hurts most and connect the rest in stages, without stopping the operation.",
    ogAlt: "Custom business systems in Tabasco — Neurovia Systems",
    waMessage: "Hi, I want to put my company's operation in order with a business system. Can we talk?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Custom business systems",
    areaServed: [
      { type: "City", name: "Villahermosa" },
      { type: "State", name: "Tabasco" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "The problem is rarely one single system",
        body: [
          "The scene repeats itself in Villahermosa companies: sales keeps a spreadsheet, the warehouse another, purchasing a notebook, invoicing lives in separate software, and the owner asks over WhatsApp for a report someone assembles by hand every Monday. Nobody is doing their job badly; what is missing is information moving between areas on its own.",
          "A custom business system is not buying one giant piece of software and forcing everyone into it. It is building, piece by piece, your company's real flow: what comes in, what goes out, who authorises, what gets charged and what is stuck.",
        ],
      },
      {
        h2: "The four blocks we usually build",
        body: [
          "**Operations (ERP).** Purchase requests with authorisation levels, work orders, cost per project, equipment and fleet maintenance. The backbone of the day.",
          "**Sales (CRM).** Leads, quotes that become orders, follow-up that does not depend on memory, and a real pipeline report.",
          "**Warehouse (inventory / WMS).** Receipts, issues, transfers, lots and expiry dates, minimums with alerts and counts that reconcile against the ledger.",
          "**Automation and AI.** What someone types twice today, invoice and document reading, automatic reports and assistants that answer WhatsApp after hours.",
        ],
      },
      {
        h2: "Where to start without stopping the company",
        body: [
          "A diagnosis first: we review the processes as they are today, including the formats and habits that already work, and find where time and money leak. That produces a build order, not a wish list.",
          "Then we build in stages. The first useful version is usually ready in weeks and your team starts using it while we move to the next module. Data already in spreadsheets or in the old system is migrated; nobody retypes the catalogue.",
          "The system ends up owned by your company, documented, with no per-user licences and ready to grow with another module when you need it.",
        ],
      },
    ],
    benefitsTitle: "What changes when the operation lives in one system",
    benefits: [
      { title: "One version of the truth", desc: "No more 'according to my spreadsheet': every area reads and writes in the same place." },
      { title: "Authorisations with a trail", desc: "Who asked, who approved and when — useful when an audit or a client question arrives." },
      { title: "Reports that build themselves", desc: "What takes hours every week comes out on its own, from data your operation already produces." },
      { title: "Grows by modules", desc: "Start with one area and add the others without rebuilding what exists." },
    ],
    audienceTitle: "Who is it for?",
    audienceLead: "For established companies where the issue is not selling more, but making the operation independent of specific people:",
    audience: [
      "Companies with 10+ employees and several areas that do not talk to each other.",
      "Businesses with two or more branches or warehouses.",
      "Companies invoicing CFDI while tracking everything outside the invoicing system.",
      "Project or service operations where each job has to be costed.",
      "Companies that bought off-the-shelf software and ended up using 20% of it.",
    ],
    faq: [
      { q: "Custom or subscription software?", a: "It depends on the process. If your operation is standard, commercial software may be enough and we will say so. When the process is your advantage — or you pay per-user licences you do not use — custom development pays off over time." },
      { q: "Do I have to change my invoicing system?", a: "Not necessarily. We integrate CFDI 4.0 and the accounting or invoicing systems you already use, as long as they allow a connection." },
      { q: "How long is the first stage?", a: "A first working version is usually ready in weeks. We would rather you use it early and we adjust it against the real operation." },
      { q: "What happens to the data I already have?", a: "It is migrated from spreadsheets or the previous system, cleaned and loaded into the new one." },
    ],
    related: [
      { href: "/erp-a-medida-villahermosa", label: "Custom ERP in Villahermosa" },
      { href: "/crm-a-medida-villahermosa", label: "Custom CRM in Villahermosa" },
      { href: "/wms-villahermosa", label: "WMS and inventory control in Villahermosa" },
    ],
  },

  "erp-a-medida-villahermosa": {
    slug: "erp-a-medida-villahermosa",
    metaTitle: "Custom ERP Development in Villahermosa",
    metaDescription:
      "Custom ERP development in Villahermosa: purchase requests, buying, inventory, maintenance and cost per project. Implemented in stages, without stopping your operation.",
    keyword: "custom ERP Villahermosa",
    eyebrow: "Custom ERP",
    h1: "Custom ERP Development in Villahermosa",
    heroLead:
      "We build custom ERP systems for companies in Villahermosa and Tabasco: purchase requests and buying with approvals, inventory, maintenance, cost per project and the reports management needs. Module by module, without stopping the operation.",
    ogAlt: "Custom ERP development in Villahermosa — Neurovia Systems",
    waMessage: "Hi, I'm interested in a custom ERP for my company in Villahermosa. Can we set up a call?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Custom ERP development",
    sections: [
      {
        h2: "When the off-the-shelf ERP stops fitting",
        body: [
          "Commercial ERPs handle the standard well: accounting, invoicing, payroll. The trouble starts with whatever makes your company different — how you authorise a purchase request, how you cost a project, what you must prove to your client — because there the system forces you to invent fields, keep a parallel spreadsheet or pay for a customisation that never ends.",
          "A custom ERP reverses the order: we understand how your operation works and build the system around it. You do not pay for modules you never open or per-user licences for people who log in once a month.",
          "It is not always the right call, and we say so: if your process is standard, well-configured commercial software can be the better buy. When the process is your competitive edge, custom development is what protects it.",
        ],
      },
      {
        h2: "The modules companies ask us for most",
        body: [
          "**Purchase requests and buying.** Request, approval by level, purchase order, goods receipt and supplier comparison, with a history of who asked for what and when.",
          "**Inventory and warehouses.** Receipts, issues, transfers, minimums with alerts, lots or serial numbers where they apply, and a ledger that reconciles.",
          "**Equipment and fleet maintenance.** Work orders, alerts by mileage or hours, cost per unit and full history of every component.",
          "**Projects and site work.** Budget against real spend, progress, purchase requests per work front and live cost per project.",
          "**Management.** Dashboards with the indicators someone assembles by hand every Monday, with the detail one click away.",
          "This is not theory: we run an ERP suite for an oil & gas client covering purchase requests, vehicle maintenance and inventory across 23 operating areas, a 24-module system for the distributor CAPOSA and an 18-module system with a mobile app for ASC Motores.",
        ],
      },
      {
        h2: "How it goes live without stopping the company",
        body: [
          "In stages. We pick the module that hurts most — usually buying or inventory — put it to work in weeks, and your team uses it while we build the next one. There is never a day when everything switches over at once.",
          "Data is migrated: catalogues, suppliers, stock and history come out of your spreadsheets or the old system. Training happens with the people who will actually use it, not with an 80-page manual.",
          "The system is owned by your company, documented, and grows when you decide: another module, another branch or a new integration.",
        ],
      },
    ],
    benefitsTitle: "Why build your ERP with Neurovia",
    benefits: [
      { title: "No per-user licences", desc: "You pay for the build once; adding the whole company afterwards does not raise a monthly bill." },
      { title: "Experience in heavy operations", desc: "Purchase requests, maintenance and inventory running today for an oil & gas client across 23 areas." },
      { title: "Integrates what you already pay for", desc: "We connect CFDI 4.0 invoicing, banks and your accounting system instead of forcing you to drop them." },
      { title: "Delivered by modules", desc: "Budget and calendar per stage: you know what you get and when, with no endless projects." },
    ],
    audienceTitle: "Who is a custom ERP for?",
    audienceLead: "For companies in Villahermosa whose operation no longer fits in spreadsheets:",
    audience: [
      "Industrial and oilfield service companies with purchase requests, equipment and warehouses.",
      "Builders that need real cost per project and purchasing control per work front.",
      "Distributors with several warehouses, customer pricing and collections.",
      "Workshops and maintenance companies with work orders and history per unit.",
      "Companies that already own a commercial ERP and run half the operation in parallel spreadsheets.",
    ],
    faq: [
      { q: "How long does a custom ERP take?", a: "The first useful stage is usually ready in weeks, and the full system is built module by module over several months depending on scope. You start using it from the first delivery." },
      { q: "Do you migrate my existing data?", a: "Yes. Catalogues, suppliers, stock and history are migrated from spreadsheets or from the previous system, as long as it can be exported." },
      { q: "Does it connect to CFDI 4.0 invoicing?", a: "Yes, we integrate CFDI 4.0 stamping and the invoicing or accounting systems you already use, when they allow a connection. We validate it before committing." },
      { q: "Is the ERP owned by my company?", a: "Yes, with its code and documentation. You are not tied to us: you can take it to another provider or your own team." },
    ],
    related: [
      { href: "/wms-villahermosa", label: "WMS and inventory control in Villahermosa" },
      { href: "/crm-a-medida-villahermosa", label: "Custom CRM in Villahermosa" },
      { href: "/casos-de-exito", label: "Case studies: systems in production" },
    ],
  },

  "crm-a-medida-villahermosa": {
    slug: "crm-a-medida-villahermosa",
    metaTitle: "Custom CRM Development in Villahermosa",
    metaDescription:
      "Custom CRM development in Villahermosa: leads, quotes, follow-up and WhatsApp in one place, connected to your inventory and invoicing.",
    keyword: "custom CRM Villahermosa",
    eyebrow: "Custom CRM",
    h1: "Custom CRM Development in Villahermosa",
    heroLead:
      "A CRM built for how your company actually sells: leads arriving over WhatsApp, quotes that turn into orders and follow-up that does not depend on a salesperson's memory. Connected to your inventory and invoicing.",
    ogAlt: "Custom CRM development in Villahermosa — Neurovia Systems",
    waMessage: "Hi, I want a custom CRM for my sales team in Villahermosa. Can we talk?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Custom CRM development",
    sections: [
      {
        h2: "The CRM your team actually uses",
        body: [
          "Almost every company that calls us has already tried a subscription CRM. It ends the same way: filled in for two weeks, the salesperson kept quoting over WhatsApp from their phone, and today nobody knows how many quotes are still alive. The problem is rarely the salesperson; the system asks them to type things that do not help them sell.",
          "A custom CRM is designed the other way round: it starts from the real process — how the lead arrives, who handles it, what they need to quote and when it closes — and only asks for data that moves the sale. If your business quotes from a price list with volume discounts, the system quotes that way instead of forcing your operation into a generic pipeline.",
        ],
      },
      {
        h2: "What we connect around the sale",
        body: [
          "**WhatsApp.** It is how most leads arrive in Villahermosa. We connect it so the conversation lands in the customer's record instead of getting lost in a phone.",
          "**Quotes and orders.** The quote is built from your catalogue with your prices and terms, sent as a PDF and, once accepted, becomes an order without retyping it.",
          "**Inventory and invoicing.** The salesperson sees real stock before promising delivery, and the closed order moves to CFDI 4.0 invoicing without double entry.",
          "**Follow-up and reminders.** Tasks, next contacts and alerts for quotes that have gone quiet.",
          "**Reports that mean something.** Pipeline per salesperson, lost-deal reasons and which products get quoted a lot but rarely sell.",
          "We run our own CRM in production and built a 24-module one for the distributor CAPOSA, with multi-warehouse inventory, CFDI 4.0 invoicing and AI reports.",
        ],
      },
      {
        h2: "Custom CRM versus a subscription platform",
        body: [
          "A commercial platform is paid per user per month, and the serious features tend to sit in the higher tier. With eight salespeople the bill grows every year even if your process stays the same.",
          "A custom CRM is paid once, runs on your own infrastructure, adds the whole team at no extra cost per user and keeps the customer base under your control rather than in an account that can be cancelled.",
          "It is not for everyone: if you sell with a standard process and few users, a commercial tool may be enough, and we will tell you. The advantage of custom shows up when the CRM has to talk to your inventory, invoicing or operations.",
        ],
      },
    ],
    benefitsTitle: "What changes with a CRM built for you",
    benefits: [
      { title: "Nothing stays in a phone", desc: "Leads, conversations and quotes live in the company, not on the handset of whoever answered." },
      { title: "Quoting stops being a chore", desc: "Catalogue, prices and terms already loaded: a quote takes minutes and becomes an order." },
      { title: "No cost per user", desc: "Add the whole team, admin included, without raising a monthly bill." },
      { title: "Connected to operations", desc: "See stock, raise the order and move to invoicing without typing the same thing three times." },
    ],
    audienceTitle: "Who is it for?",
    audienceLead: "For companies in Villahermosa where sales no longer fit in a notebook or a chat:",
    audience: [
      "Distributors quoting over WhatsApp all day long.",
      "Industrial companies with technical quotes and several people per account.",
      "Builders and suppliers taking part in tenders.",
      "Real-estate agencies with portal leads nobody answers in time.",
      "Sales teams of three or more with no view of the real pipeline.",
    ],
    faq: [
      { q: "Can it connect to WhatsApp?", a: "Yes. We integrate WhatsApp through Meta's official API or Twilio, so conversations land in the customer record and, if you want, an AI agent answers after hours." },
      { q: "How does the cost compare to a subscription?", a: "It is an upfront investment instead of rent per user. It pays off as the team grows or when the CRM must connect to your inventory and invoicing; if your case is simple, we will say so." },
      { q: "Do you migrate my current contacts?", a: "Yes, from spreadsheets, Google Contacts or whichever CRM you use today, as long as it can be exported." },
      { q: "Can non-technical people use it?", a: "That is the point. We define the screens with your salespeople and train the team on the real system, not with a manual." },
    ],
    related: [
      { href: "/agentes-de-inteligencia-artificial", label: "AI agents that answer WhatsApp" },
      { href: "/erp-a-medida-villahermosa", label: "Custom ERP in Villahermosa" },
      { href: "/sistemas-empresariales-tabasco", label: "Business systems in Tabasco" },
    ],
  },

  "wms-villahermosa": {
    slug: "wms-villahermosa",
    metaTitle: "WMS and Inventory Control in Villahermosa",
    metaDescription:
      "Custom WMS and inventory control in Villahermosa: multi-warehouse, lots, barcodes, cycle counts and a ledger that reconciles. Connected to your invoicing.",
    keyword: "WMS Villahermosa",
    eyebrow: "WMS and inventory",
    h1: "WMS and Inventory Control in Villahermosa",
    heroLead:
      "A warehouse system built for your operation: receipts, issues, transfers between warehouses, lots and expiry dates, cycle counts and barcodes. So the stock in the system and the stock on the floor are the same.",
    ogAlt: "WMS and inventory control in Villahermosa — Neurovia Systems",
    waMessage: "Hi, I need an inventory or WMS system for my warehouse in Villahermosa. Can we talk?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Custom warehouse management system (WMS)",
    sections: [
      {
        h2: "The warehouse that never reconciles",
        body: [
          "The signal is always the same: the system says twelve, the floor has nine, and nobody knows when three walked off. There is rarely theft behind it; there are issues written in a notebook, a branch transfer nobody recorded, material handed to a technician without a slip and counts done by hand twice a year.",
          "When stock does not reconcile, the cost is not only shrinkage: you overbuy out of fear, you promise delivery of something that does not exist, and every month-end turns into an argument between the warehouse, purchasing and accounting.",
          "A custom WMS attacks that where it happens: at the movement. Every receipt, issue and transfer is recorded with who, when and against which document.",
        ],
      },
      {
        h2: "What a custom WMS includes",
        body: [
          "**Multi-warehouse and locations.** Several warehouses or branches, stock by location and transfers with acknowledgement, so nothing moves without a trail.",
          "**Lots, expiry dates and serial numbers.** Essential in food, pharmacy, chemicals and serialised parts: which lot came in, which customer it went to and what is about to expire.",
          "**Barcodes.** Receiving and picking with a scanner or the phone camera, which is where entry errors really disappear.",
          "**Cycle counts.** Instead of shutting the warehouse for two days a year, you count by zone through the month and fix differences with evidence.",
          "**Minimums and alerts.** The system tells you when to reorder instead of you finding out when it is gone.",
          "**Ledger and costs.** Full history per item and real inventory value, ready for accounting.",
          "We already run the inventory module of an oil & gas client's ERP suite and CAPOSA's multi-warehouse inventory, and we are building our own Inventory System as a product.",
        ],
      },
      {
        h2: "From spreadsheets to a WMS without stopping the warehouse",
        body: [
          "We start with a proper opening count: count it, load it, and from then on the system is the source of truth. Catalogues and stock are migrated from your spreadsheets or the previous system.",
          "Then we connect what already exists around it: purchasing, so receiving draws down the order; sales or point of sale, so an issue deducts stock automatically; and CFDI 4.0 invoicing, to avoid double entry. If you sell over a counter, Tomín POS — our point of sale — connects to the same inventory.",
          "Training happens with the warehouse crew on the floor, not in a meeting room: they are the ones scanning, receiving and picking every day.",
        ],
      },
    ],
    benefitsTitle: "Why a custom WMS",
    benefits: [
      { title: "Stock reconciles", desc: "Every movement with an owner, a date and a document: differences get explained, not guessed." },
      { title: "Fewer panic purchases", desc: "Minimums, alerts and consumption history, so you buy on data instead of fear." },
      { title: "Works on the floor", desc: "Screens meant for scanning from a phone in the warehouse, not only for the office computer." },
      { title: "Connected to buying and selling", desc: "One entry: what comes in through purchasing and out through sales deducts itself." },
    ],
    audienceTitle: "Who is it for?",
    audienceLead: "For companies in Villahermosa and Tabasco where the warehouse has become part of the problem:",
    audience: [
      "Distributors with two or more warehouses or branches.",
      "Hardware stores, parts dealers and building-material suppliers with thousands of SKUs.",
      "Industrial and service companies issuing material to field technicians.",
      "Businesses with perishable goods or mandatory lot and expiry tracking.",
      "Companies that count stock once a year and always find a difference.",
    ],
    faq: [
      { q: "Does it work with a barcode scanner?", a: "Yes, with a USB or wireless scanner and also with a phone camera, which is usually enough to start without buying hardware." },
      { q: "Does it handle several branches?", a: "Yes. Several warehouses with independent stock, transfers with acknowledgement and a consolidated view for management." },
      { q: "Does it connect to my invoicing?", a: "Yes, we integrate CFDI 4.0 and the invoicing or accounting systems you already use, when they allow a connection." },
      { q: "How do we start if everything is in spreadsheets today?", a: "With an opening count and the migration of catalogues and stock. From that date the system is the source and the spreadsheet is retired." },
    ],
    related: [
      { href: "/sistema-punto-de-venta-villahermosa", label: "Point of sale system in Villahermosa" },
      { href: "/erp-a-medida-villahermosa", label: "Custom ERP in Villahermosa" },
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software development in Villahermosa" },
    ],
  },

  "desarrollo-de-software-a-medida-monterrey": {
    slug: "desarrollo-de-software-a-medida-monterrey",
    metaTitle: "Custom Software Development in Monterrey",
    metaDescription:
      "Custom software development for companies in Monterrey, Nuevo León: systems, platforms and AI automation. Fully remote. Book a free consultation.",
    keyword: "custom software development Monterrey",
    eyebrow: "Custom software",
    h1: "Custom Software Development in Monterrey",
    heroLead:
      "We build custom software for companies in Monterrey and Nuevo León: management systems, web platforms and AI automation. We work remotely to the same technical standard — distance is not a problem.",
    ogAlt: "Custom software development in Monterrey — Neurovia Systems",
    waMessage: "Hi, I need a custom system for my company in Monterrey. Can we schedule a call this week?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Custom software development",
    areaServed: [
      { type: "City", name: "Monterrey" },
      { type: "State", name: "Nuevo León" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Software for Monterrey's industrial pace",
        body: [
          "Monterrey concentrates manufacturing, logistics, commerce and services that move high volumes and demanding processes. When your operation is specific, a generic program falls short. We build systems tailored to how you work: production and requisition control, inventory, project tracking, management dashboards and more.",
          "We already have systems running in industrial and services companies, and we bring that experience to the challenges of Monterrey businesses.",
        ],
      },
      {
        h2: "Remote work, same quality standard",
        body: [
          "We build with Next.js, React, Node.js and AI integration, and work fully remote with clear meetings and staged deliveries. This is how many of the world's best software companies operate: you get the system you need without depending on being in the same city.",
          "The software is yours, documented, and grows in stages according to your budget.",
        ],
      },
    ],
    benefitsTitle: "Why build your software with Neurovia",
    benefits: [
      { title: "Fully remote", desc: "We work with Monterrey companies at a distance, with clear meetings and steady progress." },
      { title: "Systems in production", desc: "No promises: we already have software running in real industrial and services companies." },
      { title: "Your own documented code", desc: "The system is yours, with no lock-in to a single vendor." },
      { title: "Scalable and AI-ready", desc: "We start with the essentials and add automation and AI when it adds value." },
    ],
    audienceTitle: "Who is this service for?",
    audienceLead:
      "Custom software development is ideal for companies in Monterrey and Nuevo León that have outgrown spreadsheets and generic programs:",
    audience: [
      "Manufacturing and logistics companies that need to control production, inventory or requisitions.",
      "Distributors and retailers managing orders, catalogs and customers.",
      "Services companies that want to centralize areas living today in Excel.",
      "Growing businesses that need custom dashboards and reports.",
    ],
    faq: [
      { q: "Do you work remotely with companies in Monterrey?", a: "Yes, fully remote. We coordinate via video calls and messaging, with staged deliveries so you see real progress regardless of distance." },
      { q: "How long does development take?", a: "A first working version is usually ready in weeks, not months. We work in deliverables so you can use the system while we improve it." },
      { q: "Do I own the software?", a: "Yes. The system and its code belong to your company, handed over documented." },
      { q: "How much does it cost?", a: "It depends on scope. We start from a free analysis and a clear staged estimate, so you can begin with the essentials." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-guadalajara", label: "Custom software development in Guadalajara" },
      { href: "/automatizacion-con-ia-tabasco", label: "AI automation" },
      { href: "/agentes-de-inteligencia-artificial", label: "Custom AI agents" },
    ],
  },

  "desarrollo-de-software-a-medida-merida": {
    slug: "desarrollo-de-software-a-medida-merida",
    metaTitle: "Custom Software Development in Mérida",
    metaDescription:
      "Custom software for companies in Mérida, Yucatán: management systems, inventory, integrations and AI automation. Free consultation.",
    keyword: "custom software development Mérida",
    eyebrow: "Custom software",
    h1: "Custom Software Development in Mérida",
    heroLead:
      "We build custom systems for companies in Mérida and the Yucatán peninsula: operations control, inventory, customer records and AI automation. We work remotely, ship in stages and apply the same engineering standard we use across southeast Mexico.",
    ogAlt: "Custom software development in Mérida — Neurovia Systems",
    waMessage: "Hi, I need a custom system for my company in Mérida. Can we set up a call this week?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Custom software development",
    areaServed: [
      { type: "City", name: "Mérida" },
      { type: "State", name: "Yucatán" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Software for a service-driven city",
        body: [
          "Mérida's economy is not the classic industrial one: tourism and hospitality, private healthcare, retail, professional firms, real estate development and an agro-industry built around honey, citrus and pork. Each of those runs differently, which is why off-the-shelf software ends up half-used: you pay for the whole licence and use a fraction of it.",
          "We start from how your company actually works — including the formats and habits that already do their job — and build only what is missing: bookings and occupancy, patient records, multi-warehouse inventory, project tracking, quotes that turn into orders, or the dashboard management needs so it stops asking for reports over WhatsApp.",
          "The city's growth left a visible mark: many companies doubled their operation in a few years and still coordinate through shared spreadsheets. That is where a system of your own stops being a luxury.",
        ],
      },
      {
        h2: "How we work with Yucatán companies",
        body: [
          "Fully remote, with short video calls and staged delivery. The first useful version is usually ready in weeks: you use it while we keep building, and every release is tested with your team.",
          "We build with Next.js, React, Node.js and PostgreSQL, and add AI only where it saves real hours: document reading, operations summaries, assistants that answer on WhatsApp, automatic lead qualification.",
          "The system and its code belong to your company, documented. If you ever move it to another provider or your own team, you can.",
        ],
      },
    ],
    benefitsTitle: "Why build your software with Neurovia",
    benefits: [
      { title: "We know the southeast", desc: "We work from Villahermosa with clients across the region: same timelines, same way of working." },
      { title: "First version in weeks", desc: "Staged delivery: you use the system while we keep building it." },
      { title: "Your code, documented", desc: "No per-user licences, no lock-in to a single provider." },
      { title: "AI where it pays off", desc: "Documents, reports and WhatsApp support automated only when it saves real hours." },
    ],
    audienceTitle: "Who is this for?",
    audienceLead: "Custom development pays off once spreadsheets stop being enough. In Mérida that usually means:",
    audience: [
      "Hotels, restaurants and tour operators tracking bookings, supplies and staff.",
      "Clinics that want records, scheduling and follow-up in one system.",
      "Distributors and retailers with several warehouses, WhatsApp orders and CFDI invoicing.",
      "Builders and real-estate developers running projects and purchase requests in Excel.",
      "Professional firms tired of chasing information across email threads.",
    ],
    faq: [
      { q: "Do you work with companies in Mérida from Villahermosa?", a: "Yes, fully remote and with clients in several cities. We coordinate by video call and messaging, with staged delivery so you see real progress every week." },
      { q: "How much does a custom system cost?", a: "It depends on scope. Projects start at MXN $65,000 + VAT and are built module by module, so you can start with the essentials. The initial analysis and estimate are free." },
      { q: "Can it connect to my invoicing or point of sale?", a: "Yes. We integrate CFDI 4.0, payment gateways, online stores and the systems you already use, as long as they allow a connection." },
      { q: "What if my business grows or changes?", a: "That is the point: modules and users are added without rebuilding. The code is yours and documented." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-campeche", label: "Custom software development in Campeche" },
      { href: "/automatizacion-con-ia-tabasco", label: "AI automation" },
      { href: "/sistema-punto-de-venta-villahermosa", label: "Point of sale system" },
    ],
  },
  "desarrollo-de-software-a-medida-veracruz": {
    slug: "desarrollo-de-software-a-medida-veracruz",
    metaTitle: "Custom Software Development in Veracruz",
    metaDescription:
      "Custom software for companies in Veracruz: port logistics, agro-industry, distribution and services. Systems, integrations and AI automation.",
    keyword: "custom software development Veracruz",
    eyebrow: "Custom software",
    h1: "Custom Software Development in Veracruz",
    heroLead:
      "Systems built for how a Veracruz company actually operates: goods on the move, shipment control, inventory, real cost per operation and AI automation. Remote work, staged delivery and code that stays with you.",
    ogAlt: "Custom software development in Veracruz — Neurovia Systems",
    waMessage: "Hi, I need a custom system for my company in Veracruz. Can we set up a call this week?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Custom software development",
    areaServed: [
      { type: "City", name: "Veracruz" },
      { type: "State", name: "Veracruz" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Software for an economy that moves through the port",
        body: [
          "Veracruz runs on movement. The port sets the pace for customs agencies, carriers, warehouses, yards and distributors, with coffee, sugarcane and citrus agro-industry and the petrochemical activity of the south around it. All that movement creates one shared problem: information travels slower than the cargo.",
          "When a shipment is logged in a spreadsheet, confirmed over WhatsApp and invoiced somewhere else, nobody has the full picture when it matters. A custom system puts those pieces together: what left, with which driver and documents, what it really cost and what is still to be collected.",
          "The same applies to agro-industry and distribution: lots, shrinkage, warehouse movements, customer-specific pricing and margin per product.",
        ],
      },
      {
        h2: "Integrate before replacing",
        body: [
          "You do not always have to throw away what works. Many companies here have solid accounting or invoicing software and a mess of processes around it. In those cases we build the missing layer and connect it: CFDI 4.0, banks, online stores, fleet GPS or the ERP you already paid for.",
          "We build with Next.js, React, Node.js and PostgreSQL, and add AI where it saves hours: automatic document and invoice reading, reports that write themselves, expiry alerts and assistants that answer after hours.",
          "All remote and staged. You start using the system in weeks and we refine it against real operations.",
        ],
      },
    ],
    benefitsTitle: "Why build your software with Neurovia",
    benefits: [
      { title: "Built for heavy operations", desc: "We already run purchase-request, inventory and maintenance systems for energy-sector companies on the Gulf." },
      { title: "Integrates what you own", desc: "We connect invoicing, banks, GPS and ERPs instead of forcing a rebuild." },
      { title: "Staged delivery", desc: "First useful version in weeks, then continuous improvement, budgeted by module." },
      { title: "Your code, documented", desc: "No per-user licences, no single-provider lock-in." },
    ],
    audienceTitle: "Who is this for?",
    audienceLead: "For Veracruz companies whose operation no longer fits in spreadsheets:",
    audience: [
      "Customs agencies, carriers and warehouses documenting shipments by hand.",
      "Distributors with several warehouses, price lists and collections.",
      "Agro-industry tracking lots, intake, shrinkage and producer settlements.",
      "Industrial service companies running purchase requests and maintenance in Excel.",
      "Fleet operators that need cost, maintenance and evidence per unit.",
    ],
    faq: [
      { q: "Can it connect to my current invoicing?", a: "Yes. We integrate CFDI 4.0 and the accounting or invoicing systems you already use, as long as they allow a connection. We check before promising anything." },
      { q: "Do you work remotely with Veracruz companies?", a: "Yes, fully remote, with short meetings and staged delivery — the same way we work with clients in Nuevo León and the southeast." },
      { q: "How long until the first delivery?", a: "A first working version is usually ready in weeks. We would rather have you using it early and adjust against real operations." },
      { q: "What happens with my data?", a: "It is yours. We deploy on infrastructure in your name or ours, as you prefer, and hand over backups and documentation." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-campeche", label: "Custom software development in Campeche" },
      { href: "/desarrollo-de-software-a-medida-merida", label: "Custom software development in Mérida" },
      { href: "/automatizacion-con-ia-tabasco", label: "AI automation" },
    ],
  },
  "desarrollo-de-software-a-medida-campeche": {
    slug: "desarrollo-de-software-a-medida-campeche",
    metaTitle: "Custom Software Development in Campeche",
    metaDescription:
      "Custom software in Campeche and Ciudad del Carmen: energy-sector contractors, fishing, retail and services. Systems, compliance and AI automation.",
    keyword: "custom software development Campeche",
    eyebrow: "Custom software",
    h1: "Custom Software Development in Campeche",
    heroLead:
      "Custom systems for companies in Campeche and Ciudad del Carmen: crew and equipment control, purchase requests, compliance evidence and AI automation. We know how the work looks when your client is in the energy sector.",
    ogAlt: "Custom software development in Campeche — Neurovia Systems",
    waMessage: "Hi, I need a custom system for my company in Campeche. Can we set up a call this week?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Custom software development",
    areaServed: [
      { type: "City", name: "Campeche" },
      { type: "City", name: "Ciudad del Carmen" },
      { type: "State", name: "Campeche" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Software for contractors working the sound",
        body: [
          "Campeche's economy has an axis no other state shares: offshore oil activity and everything that lives around it in Ciudad del Carmen. Service companies, crew transport, catering, maintenance, diving, industrial safety and supply all work for a demanding client that asks for documentation, evidence and compliance at every step.",
          "That context defines the software. Recording sales is not enough: you have to prove crews are certified, equipment calibration is current, the work permit was closed with evidence and every purchase request was authorised. That is exactly what we build.",
          "Outside the energy sector, Campeche moves fishing, retail, cultural tourism and public-sector supply, where the pain is different: inventory and pricing, customer records, tenders and expense reporting.",
        ],
      },
      {
        h2: "Compliance and evidence, not just data entry",
        body: [
          "When your client is Pemex or a large operator, winning or losing a contract often comes down to proving what you did. Our systems store evidence with date, owner and backup: who authorised, what was delivered, which certificate was valid and what was fixed after a finding.",
          "We have a product built for that, Núcleo SGI, covering documents, findings, DC-3 training records and audit evidence. When a company needs something different, we build it on the same technical base.",
          "We work with Next.js, React, Node.js and PostgreSQL, remotely and in stages. Villahermosa is a few hours from Ciudad del Carmen, so on-site visits are possible when the project calls for it.",
        ],
      },
    ],
    benefitsTitle: "Why build your software with Neurovia",
    benefits: [
      { title: "Energy-sector experience", desc: "We run purchase-request, maintenance and inventory suites for an oil & gas client across 23 operating areas." },
      { title: "Audit-ready evidence", desc: "Documents, findings, DC-3 records and certificates with date and owner, exportable when the audit arrives." },
      { title: "Close to Ciudad del Carmen", desc: "We operate from Villahermosa: same schedule, visits when needed." },
      { title: "Your code, documented", desc: "The system belongs to your company and grows module by module." },
    ],
    audienceTitle: "Who is this for?",
    audienceLead: "Mostly Campeche companies that have to prove how they operate:",
    audience: [
      "Oil-service contractors answering to Pemex or ASEA.",
      "Crew transport, catering and maintenance companies working in the field.",
      "Distributors with inventory across several warehouses.",
      "Fishing and processing companies tracking lots, intake and settlements.",
      "Public-sector suppliers that need orderly records and expense reporting.",
    ],
    faq: [
      { q: "Do you serve Ciudad del Carmen?", a: "Yes. We work remotely across the area and coordinate visits from Villahermosa when the project calls for it." },
      { q: "Do you have something ready for compliance and audits?", a: "Yes: Núcleo SGI, our integrated management system, covers documents, findings, DC-3 training and evidence. Anything different, we build custom." },
      { q: "How much and how long?", a: "Projects start at MXN $65,000 + VAT and ship in stages; the first useful version is usually ready in weeks. Analysis and estimate are free." },
      { q: "Is the system owned by my company?", a: "Yes, with its code and documentation. You can move it to another provider or your own team whenever you want." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software development in Villahermosa" },
      { href: "/desarrollo-de-software-a-medida-merida", label: "Custom software development in Mérida" },
      { href: "/agentes-de-inteligencia-artificial", label: "Custom AI agents" },
    ],
  },
  "desarrollo-de-software-a-medida-guadalajara": {
    slug: "desarrollo-de-software-a-medida-guadalajara",
    metaTitle: "Custom Software Development in Guadalajara",
    metaDescription:
      "Custom software development for companies in Guadalajara, Jalisco: systems, platforms and AI automation. Fully remote. Book a free consultation.",
    keyword: "custom software development Guadalajara",
    eyebrow: "Custom software",
    h1: "Custom Software Development in Guadalajara",
    heroLead:
      "We build custom software for companies in Guadalajara and Jalisco: management systems, web platforms and AI automation. We work remotely to the same technical standard — location is not a limit.",
    ogAlt: "Custom software development in Guadalajara — Neurovia Systems",
    waMessage: "Hi, I need a custom system for my company in Guadalajara. Can we schedule a call this week?",
    priceNote: "Projects from MXN $65,000 + VAT",
    serviceType: "Custom software development",
    areaServed: [
      { type: "City", name: "Guadalajara" },
      { type: "State", name: "Jalisco" },
      { type: "Country", name: "México" },
    ],
    sections: [
      {
        h2: "Software for the Guadalajara ecosystem",
        body: [
          "Guadalajara is one of Mexico's most dynamic technology and commerce hubs. In an environment like that, the difference comes from systems that fit how your company works, not generic products. We build platforms, management systems, client portals, dashboards and automation tailored to you.",
          "We integrate artificial intelligence where it brings real value —document processing, assistants, analytics— so your software doesn't just store data, it helps you decide.",
        ],
      },
      {
        h2: "Remote work, same quality standard",
        body: [
          "We build with modern technologies (Next.js, React, Node.js) and work fully remote with clear meetings and staged deliveries. You get the system you need without depending on being in the same city.",
          "The code is yours, documented, and the platform grows with you in stages according to your budget.",
        ],
      },
    ],
    benefitsTitle: "Why build your software with Neurovia",
    benefits: [
      { title: "Fully remote", desc: "We work with Guadalajara companies at a distance, with direct communication and steady progress." },
      { title: "Systems in production", desc: "We already have software running in real industrial, construction and services companies." },
      { title: "Your own documented code", desc: "The system is yours; handed over documented and ready to grow." },
      { title: "Scalable and AI-ready", desc: "We start with the essentials and add automation and AI when it adds up." },
    ],
    audienceTitle: "Who is this service for?",
    audienceLead:
      "Custom software development is ideal for companies in Guadalajara and Jalisco that need a tool of their own:",
    audience: [
      "Commerce and distribution companies managing orders, catalogs and inventory.",
      "Services businesses that want client portals or internal panels.",
      "Teams relying on shared Excel today that want a serious system.",
      "Projects that need custom dashboards and reports.",
    ],
    faq: [
      { q: "Do you work remotely with companies in Guadalajara?", a: "Yes, fully remote. We coordinate via video calls and messaging, with staged deliveries so you see real progress regardless of location." },
      { q: "How long does development take?", a: "A first working version is usually ready in weeks, not months. We work in deliverables." },
      { q: "Do I own the software?", a: "Yes. The system and its code belong to your company, handed over documented." },
      { q: "How much does it cost?", a: "It depends on scope. We start from a free analysis and a clear staged estimate." },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-monterrey", label: "Custom software development in Monterrey" },
      { href: "/automatizacion-con-ia-tabasco", label: "AI automation" },
      { href: "/agentes-de-inteligencia-artificial", label: "Custom AI agents" },
    ],
  },
};

/* -------------------------------------------------------------------------- */

export const SERVICE_CONTENT: Record<Locale, Record<string, ServicePageData>> = { es, en };

/** Back-compat: Spanish content keyed by slug. */
export const SERVICE_PAGES = es;

/** All slugs (same for both locales). */
export const SERVICE_SLUGS = Object.keys(es);

export function getServicePage(lang: Locale, slug: string): ServicePageData {
  return SERVICE_CONTENT[lang][slug];
}

/* --------------------------------------------------------------------------
 * Metadata + JSON-LD builders (locale-aware).
 * -------------------------------------------------------------------------- */

export function buildServiceMetadata(data: ServicePageData, lang: Locale = "es"): Metadata {
  const path = `${localeBase(lang)}/${data.slug}`;
  const url = `${SITE_URL}${path}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: [data.keyword],
    alternates: {
      canonical: path,
      languages: {
        "es-MX": `${SITE_URL}/${data.slug}`,
        "en-US": `${SITE_URL}/en/${data.slug}`,
        "x-default": `${SITE_URL}/${data.slug}`,
      },
    },
    openGraph: {
      title: `${data.metaTitle} | ${SITE_NAME}`,
      description: data.metaDescription,
      url,
      siteName: SITE_NAME,
      locale: lang === "en" ? "en_US" : "es_MX",
      type: "website",
      images: [
        { url: OG_IMAGE, width: 1200, height: 630, alt: data.ogAlt, type: "image/jpeg" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.metaTitle} | ${SITE_NAME}`,
      description: data.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

/** Service + FAQPage JSON-LD as a single @graph for one service page. */
export function buildServiceJsonLd(data: ServicePageData, lang: Locale = "es") {
  const path = `${localeBase(lang)}/${data.slug}`;
  const url = `${SITE_URL}${path}`;
  const inLanguage = lang === "en" ? "en-US" : "es-MX";
  const bc = breadcrumbJsonLd([{ name: data.eyebrow, path }], lang);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // La página en sí: colgada del WebSite y del negocio por @id, para que
        // Google no tenga que adivinar de quién es esta URL.
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: data.metaTitle,
        description: data.metaDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": ORG_ID },
        mainEntity: { "@id": `${url}#service` },
        breadcrumb: { "@id": bc["@id"] },
        primaryImageOfPage: OG_IMAGE,
        inLanguage,
      },
      bc,
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: data.metaTitle,
        serviceType: data.serviceType,
        url,
        description: data.metaDescription,
        provider: { "@id": ORG_ID },
        areaServed: (data.areaServed ?? [
          { type: "City", name: "Villahermosa" },
          { type: "State", name: "Tabasco" },
          { type: "Country", name: "México" },
        ]).map((a) => ({ "@type": a.type, name: a.name })),
        inLanguage,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: data.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
