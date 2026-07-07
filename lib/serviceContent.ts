import type { Metadata } from "next";
import { localeBase, type Locale } from "./i18n";

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
  serviceType: string;
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
    waMessage: "Hola Neurovia Systems, me interesa el desarrollo de software a medida en Villahermosa",
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
    waMessage: "Hola Neurovia Systems, me interesa la automatización con inteligencia artificial en Tabasco",
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
    waMessage: "Hola Neurovia Systems, me interesa el sistema de punto de venta en Villahermosa",
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
    waMessage: "Hola Neurovia Systems, me interesa el desarrollo de aplicaciones web a medida en Tabasco",
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
    waMessage: "Hi Neurovia Systems, I'm interested in custom software development in Villahermosa",
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
      { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Custom web app development in Tabasco" },
      { href: "/automatizacion-con-ia-tabasco", label: "AI automation in Tabasco" },
      { href: "/sistema-punto-de-venta-villahermosa", label: "Point of sale system in Villahermosa" },
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
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software development in Villahermosa" },
      { href: "/desarrollo-de-aplicaciones-web-tabasco", label: "Custom web app development in Tabasco" },
      { href: "/sistema-punto-de-venta-villahermosa", label: "Point of sale system in Villahermosa" },
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
    waMessage: "Hi Neurovia Systems, I'm interested in the point of sale system in Villahermosa",
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
    waMessage: "Hi Neurovia Systems, I'm interested in custom web app development in Tabasco",
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
  const url = `${SITE_URL}${localeBase(lang)}/${data.slug}`;
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
        inLanguage: lang === "en" ? "en-US" : "es-MX",
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
