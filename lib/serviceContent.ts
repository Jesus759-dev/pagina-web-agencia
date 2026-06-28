import type { Metadata } from "next";

/* --------------------------------------------------------------------------
 * Service landing pages — local SEO content (single source of truth).
 *
 * Each entry powers one route under app/<slug>/page.tsx via the shared
 * <ServicePage> template, and its own metadata + JSON-LD (Service + FAQPage).
 * Keep prose natural for humans: keyword in H1/title/description/first
 * paragraph and a couple more times in the body — no stuffing.
 * -------------------------------------------------------------------------- */

export const SITE_URL = "https://neuroviasystems.com.mx";
export const SITE_NAME = "Neurovia Systems";
export const ORG_ID = `${SITE_URL}/#organization`;
const OG_IMAGE = `${SITE_URL}/images/og-robotic-hand.jpg`;

export type ServiceFaq = { q: string; a: string };

export type ServicePageData = {
  /** URL path segment, e.g. "desarrollo-de-software-a-medida-villahermosa" */
  slug: string;
  /** Title phrase — the root template appends " | Neurovia Systems". */
  metaTitle: string;
  /** 150–160 chars, keyword + ubicación + CTA. */
  metaDescription: string;
  /** Primary local keyword. */
  keyword: string;
  /** Small uppercase eyebrow above the H1. */
  eyebrow: string;
  /** The single <h1>. */
  h1: string;
  /** Lead paragraph under the H1 (contains the keyword naturally). */
  heroLead: string;
  /** alt for the OG image. */
  ogAlt: string;
  /** Prefilled WhatsApp message for this service. */
  waMessage: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  /** Body sections (H2 + paragraphs). */
  sections: { h2: string; body: string[] }[];
  /** "Por qué elegir Neurovia" cards. */
  benefitsTitle: string;
  benefits: { title: string; desc: string }[];
  /** "Para quién es" block. */
  audienceTitle: string;
  audienceLead: string;
  audience: string[];
  /** FAQ (also emitted as FAQPage JSON-LD). */
  faq: ServiceFaq[];
  /** Internal links to sibling service pages. */
  related: { href: string; label: string }[];
};

/* -------------------------------------------------------------------------- */

export const SERVICE_PAGES: Record<string, ServicePageData> = {
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
    waMessage:
      "Hola Neurovia Systems, me interesa el desarrollo de software a medida en Villahermosa",
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
    ],
    benefitsTitle: "Por qué elegir Neurovia para tu software a medida",
    benefits: [
      {
        title: "Atención local en Tabasco",
        desc: "Estamos en Villahermosa: reuniones claras, trato directo y entendimiento real del negocio de la región, sin intermediarios.",
      },
      {
        title: "Sistemas en producción",
        desc: "No vendemos promesas: ya tenemos sistemas funcionando en empresas reales del sector petrolero, construcción e industrial.",
      },
      {
        title: "Código propio y documentado",
        desc: "El software es tuyo. Te entregamos el proyecto documentado para que no quedes amarrado a un solo proveedor.",
      },
      {
        title: "Escalable y con IA",
        desc: "Arrancamos con lo esencial y crecemos por etapas, integrando automatización e inteligencia artificial cuando suma.",
      },
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
      {
        q: "¿Cuánto cuesta desarrollar un software a medida?",
        a: "Depende del alcance, pero siempre partimos de un análisis gratuito para entender tu proceso y darte un estimado claro por etapas. Puedes empezar con un módulo esencial y crecer poco a poco, sin pagar todo de golpe.",
      },
      {
        q: "¿Cuánto tarda el desarrollo?",
        a: "Una primera versión funcional suele estar lista en semanas, no meses. Trabajamos por entregas para que veas avances reales desde el inicio y puedas usar el sistema mientras lo seguimos mejorando.",
      },
      {
        q: "¿El software queda a mi nombre?",
        a: "Sí. El sistema y su código son de tu empresa. Te lo entregamos documentado para que tengas control total y libertad de proveedor.",
      },
      {
        q: "¿Atienden solo en Villahermosa?",
        a: "Estamos en Villahermosa, Tabasco, y atendemos a toda la región. También trabajamos de forma remota con empresas del resto de México y Latinoamérica.",
      },
    ],
    related: [
      { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Desarrollo de aplicaciones web a medida en Tabasco" },
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con inteligencia artificial en Tabasco" },
      { href: "/sistema-punto-de-venta-villahermosa", label: "Sistema de punto de venta en Villahermosa" },
    ],
  },

  "automatizacion-con-ia-tabasco": {
    slug: "automatizacion-con-ia-tabasco",
    metaTitle: "Automatización con Inteligencia Artificial en Tabasco",
    metaDescription:
      "Automatización con inteligencia artificial en Tabasco: integramos IA y flujos que eliminan tareas repetitivas en tu empresa. Agenda tu consulta gratuita.",
    keyword: "automatización con inteligencia artificial Tabasco",
    eyebrow: "Automatización con IA",
    h1: "Automatización con Inteligencia Artificial en Tabasco",
    heroLead:
      "Ayudamos a empresas de Tabasco a recuperar horas de trabajo con automatización e inteligencia artificial. Identificamos las tareas repetitivas que consumen a tu equipo y las convertimos en flujos automáticos que trabajan solos.",
    ogAlt: "Automatización con inteligencia artificial en Tabasco — Neurovia Systems",
    waMessage:
      "Hola Neurovia Systems, me interesa la automatización con inteligencia artificial en Tabasco",
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
    ],
    benefitsTitle: "Por qué automatizar con Neurovia",
    benefits: [
      {
        title: "Ahorro de tiempo real",
        desc: "Liberamos a tu equipo de tareas repetitivas que hoy les roban horas cada semana.",
      },
      {
        title: "Menos errores",
        desc: "La información deja de pasar a mano de un lado a otro, así que se reducen los errores de captura.",
      },
      {
        title: "IA que entiende tu negocio",
        desc: "Aplicamos inteligencia artificial a casos concretos: documentos, atención y reportes, no humo.",
      },
      {
        title: "Empezamos por lo que más duele",
        desc: "Detectamos el proceso que más te cuesta y lo automatizamos primero para que veas resultados rápido.",
      },
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
      {
        q: "¿Qué procesos se pueden automatizar?",
        a: "Casi cualquier tarea repetitiva y basada en reglas: captura de datos, generación de reportes, seguimiento de clientes, procesamiento de documentos, notificaciones y respuestas frecuentes. En la consulta gratuita detectamos cuáles te conviene automatizar primero.",
      },
      {
        q: "¿Necesito cambiar los sistemas que ya uso?",
        a: "No necesariamente. La automatización suele conectarse a las herramientas que ya tienes mediante integraciones, así que aprovechamos tu operación actual en lugar de reemplazarla.",
      },
      {
        q: "¿La inteligencia artificial es confiable para mi empresa?",
        a: "Sí, cuando se aplica a casos bien definidos y con controles. Diseñamos los flujos para que la IA asista y valide, manteniendo la supervisión humana donde hace falta.",
      },
      {
        q: "¿Cómo empezamos?",
        a: "Con una consulta gratuita por WhatsApp en la que revisamos tus procesos actuales y te proponemos un primer flujo de automatización con un estimado claro.",
      },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida en Villahermosa" },
      { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Desarrollo de aplicaciones web a medida en Tabasco" },
      { href: "/sistema-punto-de-venta-villahermosa", label: "Sistema de punto de venta en Villahermosa" },
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
    waMessage:
      "Hola Neurovia Systems, me interesa el sistema de punto de venta en Villahermosa",
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
      {
        title: "Inventario al día",
        desc: "Cada venta descuenta el stock automáticamente. Sabes qué tienes y qué te falta sin contar a mano.",
      },
      {
        title: "Reportes en tiempo real",
        desc: "Consulta ventas por día, producto y forma de pago desde tu celular, estés donde estés.",
      },
      {
        title: "Fácil de usar",
        desc: "Interfaz rápida e intuitiva: tu personal la domina en minutos, sin capacitaciones eternas.",
      },
      {
        title: "Soporte local",
        desc: "Estamos en Villahermosa. Si necesitas ayuda, hablas con personas que conocen tu negocio.",
      },
    ],
    audienceTitle: "¿Para qué negocios es?",
    audienceLead:
      "El sistema de punto de venta es ideal para los giros más comunes de Villahermosa y Tabasco:",
    audience: [
      "Tiendas, abarrotes y comercios con manejo de inventario.",
      "Restaurantes, cafeterías y negocios de comida.",
      "Estéticas, barberías y negocios de servicios.",
      "Negocios con una o varias sucursales que quieren control centralizado.",
    ],
    faq: [
      {
        q: "¿Funciona sin internet?",
        a: "El sistema está optimizado para trabajar en la nube y mantenerse sincronizado. En la consulta revisamos tu caso para asegurar que la operación de tu local sea fluida según tu conexión.",
      },
      {
        q: "¿Puedo controlar el inventario?",
        a: "Sí. Cada venta descuenta el stock automáticamente y puedes ver existencias, productos más vendidos y alertas de inventario bajo.",
      },
      {
        q: "¿Sirve para más de una sucursal?",
        a: "Sí. Al estar en la nube puedes consultar y administrar varias sucursales desde un mismo lugar y comparar su desempeño.",
      },
      {
        q: "¿Lo pueden adaptar a mi tipo de negocio?",
        a: "Sí. Como nosotros lo desarrollamos, lo ajustamos a tu giro: control de mesas, servicios, catálogos específicos y la forma de cobro que uses.",
      },
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
    waMessage:
      "Hola Neurovia Systems, me interesa el diseño de páginas web en Villahermosa",
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
      {
        title: "Diseño a la medida",
        desc: "Nada de plantillas repetidas: tu sitio refleja tu marca y se diferencia de la competencia.",
      },
      {
        title: "Rápida y responsiva",
        desc: "Carga veloz y se ve perfecta en celular, tablet y computadora, donde están tus clientes.",
      },
      {
        title: "Optimizada para SEO",
        desc: "Construida para posicionar en Google con keywords locales de Villahermosa y Tabasco.",
      },
      {
        title: "Pensada para convertir",
        desc: "Mensajes claros y llamados a la acción que transforman visitas en contactos reales.",
      },
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
      {
        q: "¿Cuánto cuesta una página web?",
        a: "Depende del tipo de sitio (landing, corporativo o tienda en línea). Te damos un presupuesto claro tras una consulta gratuita en la que entendemos tus objetivos.",
      },
      {
        q: "¿La página va a aparecer en Google?",
        a: "Construimos cada sitio con buenas prácticas de SEO para que pueda posicionar. El posicionamiento toma tiempo, pero partimos con una base técnica optimizada y contenido local.",
      },
      {
        q: "¿Se ve bien en celular?",
        a: "Sí. Todos nuestros sitios son responsivos y se diseñan pensando primero en el móvil, que es donde navega la mayoría de tus clientes.",
      },
      {
        q: "¿Yo puedo actualizar el contenido después?",
        a: "Sí. Entregamos sitios fáciles de mantener y te orientamos para que puedas hacer cambios, o nos encargamos nosotros con un plan de soporte.",
      },
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
    waMessage:
      "Hola Neurovia Systems, me interesa el desarrollo de aplicaciones web a medida en Tabasco",
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
      {
        title: "Acceso desde cualquier lugar",
        desc: "Tu equipo entra desde el navegador, sin instalaciones, con la información siempre actualizada.",
      },
      {
        title: "Hecha a tu medida",
        desc: "Resolvemos tu proceso específico en vez de obligarte a usar un software genérico.",
      },
      {
        title: "Segura y escalable",
        desc: "Control de accesos, respaldos y una base técnica que crece con tu empresa.",
      },
      {
        title: "Lista para integrar IA",
        desc: "Sumamos automatización e inteligencia artificial cuando aportan valor real a tu operación.",
      },
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
      {
        q: "¿Qué diferencia hay con una página web?",
        a: "Una página web informa; una aplicación web hace cosas: gestiona usuarios, datos y procesos. Es una herramienta de trabajo con la que tu equipo opera el día a día, no solo un sitio de presentación.",
      },
      {
        q: "¿Se puede usar desde el celular?",
        a: "Sí. Diseñamos las aplicaciones para que funcionen bien en computadora, tablet y celular desde el navegador, sin necesidad de instalar una app.",
      },
      {
        q: "¿Es segura la información?",
        a: "Sí. Implementamos control de accesos por usuario, buenas prácticas de seguridad y respaldos para proteger los datos de tu empresa.",
      },
      {
        q: "¿Puede crecer con el tiempo?",
        a: "Totalmente. Construimos sobre tecnología escalable, así que puedes empezar con lo esencial y agregar usuarios y funciones por etapas.",
      },
    ],
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida en Villahermosa" },
      { href: "/diseno-de-paginas-web-villahermosa", label: "Diseño de páginas web en Villahermosa" },
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con inteligencia artificial en Tabasco" },
    ],
  },
};

/** All slugs, handy for the sitemap. */
export const SERVICE_SLUGS = Object.keys(SERVICE_PAGES);

/* --------------------------------------------------------------------------
 * Metadata + JSON-LD builders (shared by every service page).
 * -------------------------------------------------------------------------- */

export function buildServiceMetadata(data: ServicePageData): Metadata {
  const url = `${SITE_URL}/${data.slug}`;
  return {
    title: data.metaTitle, // root template appends " | Neurovia Systems"
    description: data.metaDescription,
    keywords: [data.keyword],
    alternates: { canonical: `/${data.slug}` },
    openGraph: {
      title: `${data.metaTitle} | ${SITE_NAME}`,
      description: data.metaDescription,
      url,
      siteName: SITE_NAME,
      locale: "es_MX",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: data.ogAlt,
          type: "image/jpeg",
        },
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
export function buildServiceJsonLd(data: ServicePageData) {
  const url = `${SITE_URL}/${data.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}/#service`,
        name: data.metaTitle,
        serviceType: data.serviceType,
        url,
        description: data.metaDescription,
        provider: { "@id": ORG_ID },
        areaServed: [
          { "@type": "City", name: "Villahermosa" },
          { "@type": "State", name: "Tabasco" },
          { "@type": "Country", name: "México" },
        ],
        inLanguage: "es-MX",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: data.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
