import type { Metadata } from "next";
import { localeBase, type Locale } from "./i18n";
import { SITE_URL, ORG_ID } from "./seo";

/* --------------------------------------------------------------------------
 * Páginas de producto — /productos/<slug> (ES) y /en/productos/<slug>.
 *
 * Los productos viven en subdominios .cloud (la app), pero ahí no hay
 * contenido que Google pueda posicionar: toda su autoridad se quedaba fuera
 * del dominio principal. Estas páginas son la parte comercial, en el dominio
 * que sí tiene autoridad; el subdominio queda para entrar al sistema.
 *
 * Estas páginas apuntan a intención NACIONAL de producto ("software para
 * veterinarias", "software punto de venta con facturación"), no a la local
 * de servicio, que ya tienen las páginas de /sistema-punto-de-venta-
 * villahermosa y /wms-villahermosa. Por eso se enlazan entre sí en vez de
 * competir.
 * -------------------------------------------------------------------------- */

const OG_IMAGE = `${SITE_URL}/images/og-robotic-hand.jpg`;

export type ProductFaq = { q: string; a: string };

export type ProductPageData = {
  slug: string;
  /** Nombre comercial del producto ("Huella", "Tomín POS"…). */
  producto: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  eyebrow: string;
  h1: string;
  heroLead: string;
  ogAlt: string;
  waMessage: string;
  /** Subdominio donde vive la app. Ausente si el producto aún no está en línea. */
  demoUrl?: string;
  demoLabel?: string;
  /** Distintivo del hero: "En producción" / "En desarrollo". */
  estado: string;
  /** Línea de precio. Se omite cuando el precio se cotiza. */
  precio?: string;
  precioNota?: string;
  /** Para el schema SoftwareApplication. */
  appCategory: string;
  /** Precio numérico para la oferta del schema; solo si es público y fijo. */
  offer?: { price: string; currency: string; unit: string };
  sections: { h2: string; body: string[] }[];
  modulosTitle: string;
  modulos: { title: string; desc: string }[];
  audienceTitle: string;
  audienceLead: string;
  audience: string[];
  faq: ProductFaq[];
  related: { href: string; label: string }[];
};

export type ProductosHub = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  cardCta: string;
  customTitle: string;
  customLead: string;
  customCta: string;
  labels: { home: string; breadcrumbAria: string; productos: string; verDemo: string; estado: string };
};

/* ============================ ESPAÑOL ==================================== */

const hubEs: ProductosHub = {
  metaTitle: "Productos de Software de Neurovia Systems",
  metaDescription:
    "Software propio en producción: Huella para veterinarias, Tomín POS para punto de venta, Núcleo SGI para contratistas y control de inventario. Probado, no prototipos.",
  eyebrow: "Productos propios",
  h1: "Software Propio de Neurovia Systems",
  lead:
    "Además de desarrollar a la medida, construimos nuestros propios sistemas. Son productos que ya operan en empresas reales: arrancas en días, con precio de producto y no de proyecto.",
  intro: [
    "Cada uno nació de un desarrollo a la medida que se repetía. En lugar de cobrar cinco veces por construir lo mismo, lo convertimos en producto: lo mantenemos, lo actualizamos y lo adaptamos a tu operación cuando hace falta.",
    "Si tu proceso es distinto al del resto de tu giro, el producto sirve de base y encima construimos lo tuyo. Esa es la diferencia con comprar un sistema enlatado: aquí el fabricante del software es quien te contesta el teléfono.",
  ],
  cardCta: "Ver el producto",
  customTitle: "¿Y si lo que necesito no está aquí?",
  customLead:
    "Entonces se construye. La mitad de nuestros proyectos son sistemas a la medida para operaciones que ningún producto cubría: suites ERP, sistemas de taller, plataformas de cumplimiento. Cuéntanos qué proceso te está costando tiempo.",
  customCta: "Ver desarrollo a la medida",
  labels: {
    home: "Inicio",
    breadcrumbAria: "Ruta de navegación",
    productos: "Productos",
    verDemo: "Ver el sistema en vivo",
    estado: "Estado",
  },
};

const es: Record<string, ProductPageData> = {
  "software-para-veterinarias": {
    slug: "software-para-veterinarias",
    producto: "Huella",
    metaTitle: "Huella: Software para Clínicas Veterinarias",
    metaDescription:
      "Software para clínicas veterinarias en México: expediente clínico, mascotas, consultas, vacunas con recordatorio e inventario. Desde $399 MXN al mes.",
    keyword: "software para clínicas veterinarias",
    eyebrow: "Huella",
    h1: "Huella: Software para Clínicas Veterinarias",
    heroLead:
      "El expediente de cada mascota, las consultas, las vacunas y el inventario de tu clínica en un solo sistema. Hecho en México, para veterinarias independientes que hoy llevan todo en libreta o en un Excel que solo entiende una persona.",
    ogAlt: "Huella — software de gestión para clínicas veterinarias",
    waMessage: "Hola, me interesa Huella para mi clínica veterinaria. ¿Me pueden dar una demo?",
    demoUrl: "https://huellapp.neuroviasystems.cloud",
    demoLabel: "Entrar a Huella",
    estado: "En producción",
    precio: "Desde $399 MXN al mes",
    precioNota: "Según el tamaño de la clínica. Sin contrato forzoso.",
    appCategory: "BusinessApplication",
    offer: { price: "399", currency: "MXN", unit: "MONTH" },
    sections: [
      {
        h2: "El expediente deja de vivir en una libreta",
        body: [
          "En la mayoría de las clínicas veterinarias independientes la información está partida: el historial de la mascota en una libreta o en hojas sueltas, las vacunas en un cuaderno aparte, el inventario de medicamento en la cabeza de alguien y las citas en el WhatsApp del consultorio. Funciona hasta el día que el dueño pregunta cuándo toca el refuerzo y nadie encuentra la hoja.",
          "Huella junta todo en un mismo lugar: cada mascota con su dueño, su historial de consultas, su peso, sus tratamientos y su esquema de vacunación. Cuando el paciente vuelve —aunque hayan pasado dos años— abres su expediente y ahí está completo, con quién lo atendió y qué se le aplicó.",
          "Y funciona en la computadora del mostrador y en el celular, porque en una clínica chica muchas veces quien cobra es quien consulta.",
        ],
      },
      {
        h2: "Las vacunas y las citas dejan de depender de la memoria",
        body: [
          "El refuerzo que nadie avisó es dinero que se va. Huella lleva el esquema de vacunación de cada paciente y te dice a quién le toca, para que el seguimiento sea una acción del día y no una casualidad.",
          "Lo mismo con las citas: la agenda vive en el sistema, no en el chat, así que cualquiera del equipo puede ver qué hay hoy sin preguntar. Y el inventario de medicamento y alimento se descuenta con el uso, para que enterarte de que se acabó algo no sea en plena consulta.",
        ],
      },
      {
        h2: "Qué nos diferencia de los demás sistemas veterinarios",
        body: [
          "Hay opciones buenas en el mercado mexicano y no te vamos a decir que todas son malas. La diferencia real es quién está del otro lado: Huella lo desarrollamos nosotros, así que cuando pides un cambio hablas con quien programa el sistema, no con un centro de soporte que levanta un ticket.",
          "Eso importa porque ninguna clínica trabaja igual. Si manejas estética, hotel, convenios o tu propia forma de cobrar, el sistema se ajusta en vez de obligarte a cambiar tu operación.",
          "Y si tu clínica crece a dos sucursales o necesitas conectar facturación CFDI 4.0, tenemos de dónde: es la misma casa que construye sistemas empresariales completos.",
        ],
      },
    ],
    modulosTitle: "Qué incluye Huella",
    modulos: [
      { title: "Expediente por mascota", desc: "Historial completo: consultas, peso, tratamientos, notas y quién atendió cada visita." },
      { title: "Dueños y contacto", desc: "Cada mascota ligada a su dueño, con su teléfono y sus demás mascotas a la vista." },
      { title: "Consultas", desc: "Registro de la visita con diagnóstico, indicaciones y seguimiento para la siguiente." },
      { title: "Vacunas y refuerzos", desc: "Esquema de vacunación por paciente y aviso de a quién le toca el refuerzo." },
      { title: "Inventario", desc: "Medicamento, alimento y accesorios con existencias que se descuentan al usarse." },
      { title: "En la nube", desc: "Se entra desde la computadora del mostrador o desde el celular, sin instalar nada." },
    ],
    audienceTitle: "¿Para quién es Huella?",
    audienceLead: "Para la clínica que ya no cabe en el papel pero tampoco necesita un sistema hospitalario:",
    audience: [
      "Clínicas veterinarias independientes de uno a cinco médicos.",
      "Consultorios que además venden alimento, accesorios o medicamento de mostrador.",
      "Veterinarias con estética o guardería que quieren un solo expediente del paciente.",
      "Clínicas que hoy llevan las vacunas en cuaderno y pierden refuerzos.",
      "Médicos que atienden a domicilio y necesitan el historial desde el celular.",
    ],
    faq: [
      { q: "¿Cuánto cuesta Huella al mes?", a: "Desde $399 MXN al mes según el tamaño de la clínica y el número de usuarios. Sin contrato forzoso y con la migración de tu información incluida en el arranque." },
      { q: "¿Puedo pasar mi información actual al sistema?", a: "Sí. Si tienes tus pacientes en Excel o en otro programa que permita exportar, migramos el catálogo de dueños y mascotas para que no empieces de cero." },
      { q: "¿Necesito instalar algo o comprar equipo?", a: "No. Huella vive en la nube: entras desde el navegador de la computadora que ya tienes o desde el celular. Solo necesitas internet." },
      { q: "¿Emite facturas CFDI?", a: "La facturación CFDI 4.0 se integra según lo que necesite tu clínica; cuéntanos cómo facturas hoy y te decimos qué implica en tu caso." },
      { q: "¿Y si mi clínica trabaja distinto?", a: "Se ajusta. Nosotros desarrollamos Huella, así que los cambios los hace el mismo equipo que construyó el sistema, no un proveedor externo." },
    ],
    related: [
      { href: "/productos/software-punto-de-venta", label: "Tomín POS: punto de venta con facturación" },
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a la medida" },
      { href: "/casos-de-exito", label: "Casos de éxito: sistemas en producción" },
    ],
  },

  "software-punto-de-venta": {
    slug: "software-punto-de-venta",
    producto: "Tomín POS",
    metaTitle: "Tomín POS: Punto de Venta con Facturación",
    metaDescription:
      "Software de punto de venta en la nube para abarrotes, restaurantes y farmacias: ventas, inventario, cortes de caja, varias sucursales y facturación CFDI 4.0.",
    keyword: "software punto de venta con facturación",
    eyebrow: "Tomín POS",
    h1: "Tomín POS: Software de Punto de Venta con Facturación",
    heroLead:
      "Cobra rápido, descuenta el inventario solo y cierra la caja cuadrada. Punto de venta en la nube para abarrotes, restaurantes, farmacias y negocios de mostrador, con facturación CFDI 4.0 y varias sucursales desde el mismo panel.",
    ogAlt: "Tomín POS — software de punto de venta con facturación CFDI",
    waMessage: "Hola, quiero información de Tomín POS para mi negocio. ¿Me pueden dar una demo y el precio?",
    demoUrl: "https://puntodeventa.neuroviasystems.cloud",
    demoLabel: "Ver Tomín POS en vivo",
    estado: "En producción",
    precioNota: "Planes según sucursales y catálogo. Pide tu cotización, la demo es sin costo.",
    appCategory: "BusinessApplication",
    sections: [
      {
        h2: "Cobrar es lo de menos: el problema es saber qué pasó",
        body: [
          "Cualquier caja registradora cobra. Lo que no hace es decirte qué producto te está dejando dinero, cuánto se fue en el turno de la tarde, por qué la caja no cuadró el jueves o cuánto inventario tienes realmente en la bodega de atrás.",
          "Tomín POS registra cada venta al momento, descuenta el inventario solo y guarda el corte de caja por turno y por cajero. Al final del día no estás sumando tickets: estás leyendo un reporte.",
          "Y como vive en la nube, no tienes que estar en el negocio para verlo. Si traes dos sucursales, las ves juntas o por separado desde el mismo panel, desde el celular.",
        ],
      },
      {
        h2: "Facturación CFDI 4.0 sin capturar dos veces",
        body: [
          "Cuando el cliente pide factura, el ticket ya tiene todo lo que se necesita: no vuelves a teclear productos ni importes en otro programa. Tomín POS emite CFDI 4.0 desde la misma venta.",
          "Eso elimina la escena de siempre —la carpeta de tickets pendientes de facturar a fin de mes— y de paso evita las diferencias entre lo que vendiste y lo que declaraste.",
        ],
      },
      {
        h2: "Hecho para el negocio local mexicano",
        body: [
          "Tomín POS no es un sistema traducido: está pensado para cómo se vende aquí. Producto a granel, precios por mayoreo y menudeo, fiado y apartados, propinas, varias formas de pago en un mismo ticket y el corte que el dueño revisa a las once de la noche.",
          "El personal lo aprende en minutos, que es lo que realmente decide si un punto de venta se usa o se abandona a la semana. Y si tu negocio tiene una vuelta que ningún sistema cubre, nosotros desarrollamos el producto: se puede ajustar.",
          "Si además necesitas control de almacén serio —lotes, caducidades, traspasos entre bodegas—, se conecta con el mismo inventario del sistema de almacén que construimos a la medida.",
        ],
      },
    ],
    modulosTitle: "Qué incluye Tomín POS",
    modulos: [
      { title: "Terminal de ventas", desc: "Cobro rápido con lector de código de barras o búsqueda, varias formas de pago por ticket." },
      { title: "Inventario en vivo", desc: "Cada venta descuenta existencias; alertas de mínimos para reordenar a tiempo." },
      { title: "Cortes de caja", desc: "Apertura y cierre por turno y por cajero, con diferencias a la vista." },
      { title: "Facturación CFDI 4.0", desc: "La factura sale del mismo ticket, sin volver a capturar la venta." },
      { title: "Varias sucursales", desc: "Cada punto con su caja e inventario, y una vista consolidada para el dueño." },
      { title: "Reportes", desc: "Ventas por día, producto, categoría, cajero y forma de pago, desde el celular." },
    ],
    audienceTitle: "¿Para qué negocios es?",
    audienceLead: "Para el negocio de mostrador que ya vende bien pero no tiene control:",
    audience: [
      "Abarrotes, minisúper y tiendas de conveniencia.",
      "Restaurantes, cafeterías y negocios de comida con mostrador.",
      "Farmacias y tiendas con productos de lote y caducidad.",
      "Ferreterías, refaccionarias y papelerías con catálogos grandes.",
      "Negocios con una a tres sucursales que hoy comparan ventas a mano.",
    ],
    faq: [
      { q: "¿Cuánto cuesta Tomín POS?", a: "El plan depende del número de sucursales, cajas y del tamaño de tu catálogo. Escríbenos por WhatsApp y te damos el precio exacto para tu caso; la demo del sistema no tiene costo." },
      { q: "¿Sirve si no tengo internet estable?", a: "Cuéntanos cómo está tu conexión antes de contratar: revisamos tu caso y te decimos con honestidad si te conviene o si primero hay que resolver la red, que también lo hacemos." },
      { q: "¿Necesito comprar equipo especial?", a: "Funciona en la computadora o tableta que ya tengas con un navegador. El lector de código de barras y la impresora de tickets son opcionales y se conectan al equipo." },
      { q: "¿Puedo empezar con una sucursal y crecer después?", a: "Sí. Se agregan sucursales y cajas sin volver a cargar el catálogo ni rehacer la configuración." },
      { q: "¿Migran mi catálogo de productos?", a: "Sí, desde Excel o desde el sistema que uses hoy, siempre que permita exportarlo." },
    ],
    related: [
      { href: "/sistema-punto-de-venta-villahermosa", label: "Punto de venta en Villahermosa (instalación local)" },
      { href: "/productos/software-de-inventario", label: "Control de inventario y almacén" },
      { href: "/wms-villahermosa", label: "WMS a la medida para almacenes" },
    ],
  },

  "sistema-de-gestion-integral": {
    slug: "sistema-de-gestion-integral",
    producto: "Núcleo SGI",
    metaTitle: "Núcleo SGI: Gestión Integral para Contratistas",
    metaDescription:
      "Software de gestión integral para contratistas del sector energético: documentos vigentes, hallazgos, capacitación DC-3 y evidencia lista para auditoría.",
    keyword: "sistema de gestión integral contratistas",
    eyebrow: "Núcleo SGI",
    h1: "Núcleo SGI: Sistema de Gestión Integral para Contratistas",
    heroLead:
      "Cuando tu cliente es una operadora, ganar el contrato es la mitad: la otra mitad es demostrar cómo trabajas. Núcleo SGI concentra documentos, hallazgos, capacitación y evidencia para que la auditoría sea un reporte y no una semana de buscar papeles.",
    ogAlt: "Núcleo SGI — sistema de gestión integral para contratistas",
    waMessage: "Hola, me interesa Núcleo SGI para mi empresa contratista. ¿Podemos agendar una demo?",
    demoUrl: "https://sgi.neuroviasystems.cloud",
    demoLabel: "Ver Núcleo SGI",
    estado: "En producción",
    precioNota: "Cotización por proyecto, según áreas y número de usuarios.",
    appCategory: "BusinessApplication",
    sections: [
      {
        h2: "El problema no es cumplir: es poder demostrarlo",
        body: [
          "Las empresas de servicios que trabajan para el sector energético casi siempre sí cumplen. El problema aparece cuando hay que probarlo: el certificado está en el correo de alguien, el acta de la capacitación en una carpeta física, la evidencia del hallazgo anterior en el celular de un supervisor y el documento vigente… nadie sabe si es el vigente.",
          "Entonces llega la auditoría, o el cliente pide el expediente para una licitación, y la empresa entra en modo emergencia una semana. No por incumplida: por desordenada.",
          "Núcleo SGI existe para eso. Cada documento, cada hallazgo y cada capacitación queda registrada con su fecha, su responsable y su respaldo, en un solo lugar donde se consulta en minutos.",
        ],
      },
      {
        h2: "Vigencias que avisan antes, no después",
        body: [
          "La mayoría de los problemas de cumplimiento son de calendario: un certificado que venció, una capacitación que caducó, un equipo con la calibración vencida. Todo eso el sistema lo sabe y lo avisa antes, no cuando ya te lo observaron.",
          "Los hallazgos se registran con su acción correctiva, su responsable y su fecha de cierre, con la evidencia adjunta. Así el seguimiento deja de ser una minuta en Word que nadie vuelve a abrir.",
          "Y la capacitación —incluidos los registros DC-3— queda ligada a cada persona, para que saber quién está habilitado para qué sea una consulta y no una búsqueda.",
        ],
      },
      {
        h2: "Construido desde el sureste, con clientes del sector",
        body: [
          "Núcleo SGI no salió de una idea de escritorio: salió de trabajar con empresas de servicios petroleros en Tabasco y Campeche, donde la exigencia documental es diaria. Es la misma casa que opera una suite ERP con requisiciones, mantenimiento e inventario sobre 23 áreas operativas para un cliente del sector.",
          "Por eso el sistema habla el idioma del negocio y no el de un manual genérico de calidad. Y si tu operación necesita algo que el producto no cubre —un módulo, un reporte para tu cliente, una integración—, lo construimos sobre la misma base.",
        ],
      },
    ],
    modulosTitle: "Qué incluye Núcleo SGI",
    modulos: [
      { title: "Documentos con vigencia", desc: "Versión vigente, historial y aviso antes de que algo caduque." },
      { title: "Hallazgos y acciones", desc: "Registro con responsable, fecha de cierre y evidencia adjunta." },
      { title: "Capacitación y DC-3", desc: "Quién está capacitado en qué, con su constancia y su vigencia." },
      { title: "Evidencia de auditoría", desc: "Expediente exportable cuando el cliente o la autoridad lo pide." },
      { title: "Perfiles por área", desc: "Cada área ve y captura lo suyo, con rastro de quién hizo qué." },
      { title: "Tablero de cumplimiento", desc: "Qué está vigente, qué está por vencer y qué está abierto, de un vistazo." },
    ],
    audienceTitle: "¿Para quién es?",
    audienceLead: "Para la empresa que le responde a un cliente exigente y a la autoridad:",
    audience: [
      "Contratistas de servicios petroleros en Tabasco, Campeche y el Golfo.",
      "Empresas de mantenimiento industrial con personal certificado en campo.",
      "Transporte de personal, catering y servicios que operan dentro de instalaciones del cliente.",
      "Proveedores que participan en licitaciones y deben entregar expediente completo.",
      "Áreas de seguridad, calidad y cumplimiento que hoy viven en carpetas y Excel.",
    ],
    faq: [
      { q: "¿Cuánto cuesta Núcleo SGI?", a: "Se cotiza por proyecto según las áreas que entren y el número de usuarios. Hacemos primero una demo con tu caso real para que veas el sistema con tu tipo de documentos." },
      { q: "¿Sirve si ya tengo un sistema de calidad?", a: "Sí. Núcleo SGI ordena la evidencia y las vigencias; si ya tienes procedimientos, se cargan tal cual. No te obliga a rehacer tu sistema de gestión." },
      { q: "¿Se puede adaptar a lo que pide mi cliente?", a: "Sí, y es lo normal: cada operadora pide su formato. Nosotros desarrollamos el producto, así que los formatos y reportes se ajustan a lo que te exigen." },
      { q: "¿Quién puede ver la información?", a: "Se define por perfiles: cada área entra a lo suyo y queda el rastro de quién cargó o cerró cada cosa." },
    ],
    related: [
      { href: "/erp-a-medida-villahermosa", label: "ERP a la medida: requisiciones, compras y mantenimiento" },
      { href: "/desarrollo-de-software-tabasco", label: "Desarrollo de software en Tabasco" },
      { href: "/casos-de-exito", label: "Casos de éxito: sistemas en producción" },
    ],
  },

  "software-de-inventario": {
    slug: "software-de-inventario",
    producto: "Sistema de Inventario",
    metaTitle: "Software de Inventario y Control de Almacén",
    metaDescription:
      "Software de inventario para pymes: entradas, salidas, traspasos entre almacenes, mínimos con alerta y kardex. En desarrollo: apúntate a la lista de espera.",
    keyword: "software de inventario para empresas",
    eyebrow: "Sistema de Inventario",
    h1: "Software de Inventario y Control de Almacén",
    heroLead:
      "Estamos construyendo nuestro propio sistema de inventario: entradas, salidas, traspasos entre almacenes, mínimos con alerta y un kardex que cuadra. Apúntate a la lista de espera y entérate primero, con precio de lanzamiento.",
    ogAlt: "Software de inventario y control de almacén — Neurovia Systems",
    waMessage: "Hola, me interesa el sistema de inventario de Neurovia. ¿Cuándo sale y cuánto costará?",
    estado: "En desarrollo · Próximamente",
    precioNota: "Pago único o membresía: el modelo se define antes del lanzamiento. Quien esté en la lista lo sabe primero.",
    appCategory: "BusinessApplication",
    sections: [
      {
        h2: "Por qué el inventario nunca cuadra",
        body: [
          "La diferencia entre lo que dice el sistema y lo que hay en el piso casi nunca viene de un robo. Viene de salidas anotadas en un cuaderno, traspasos entre sucursales que nadie registró, material entregado sin vale y conteos completos que se hacen una vez al año, de mala gana y con prisa.",
          "El costo no es solo la merma: es comprar de más por miedo a quedarse corto, prometer entrega de algo que no existe y discutir cada cierre de mes entre almacén, compras y contabilidad.",
          "Por eso el sistema que estamos construyendo se concentra en el movimiento: cada entrada, salida y traspaso con su responsable, su fecha y su documento de respaldo.",
        ],
      },
      {
        h2: "Qué va a incluir",
        body: [
          "Multi-almacén con existencias por ubicación y traspasos con acuse. Lotes y caducidades para quien los necesita, y número de serie para refacciones y equipo. Recepción y surtido escaneando con lector o con la cámara del celular.",
          "Mínimos con alerta para reordenar por dato y no por susto, conteos cíclicos por zona en lugar de parar el almacén dos días al año, y kardex con el valor real del inventario, listo para contabilidad.",
          "El modelo comercial todavía se está definiendo entre pago único y membresía. Quien esté en la lista de espera lo sabrá primero y con precio de lanzamiento.",
        ],
      },
      {
        h2: "¿Y si lo necesito ya?",
        body: [
          "Entonces no esperes el producto. Hoy mismo construimos sistemas de almacén a la medida y ya operamos el módulo de inventario de la suite ERP de un cliente del sector petrolero y el inventario multi-almacén de la comercializadora CAPOSA.",
          "Si lo tuyo es mostrador, Tomín POS ya descuenta el inventario con cada venta y está en producción. Y si tu operación necesita lotes, ubicaciones y conteos serios, el WMS a la medida es el camino corto.",
          "Dinos qué necesitas y te decimos con honestidad cuál de las tres te conviene, incluso si la respuesta es esperar.",
        ],
      },
    ],
    modulosTitle: "Lo que traerá el sistema",
    modulos: [
      { title: "Multi-almacén", desc: "Varias bodegas o sucursales con existencias propias y traspasos con acuse." },
      { title: "Lotes y caducidades", desc: "Qué lote entró, a qué cliente salió y qué está por vencer." },
      { title: "Códigos de barras", desc: "Recepción y surtido escaneando con lector o con la cámara del celular." },
      { title: "Mínimos y alertas", desc: "Aviso de cuándo reordenar, con el consumo histórico de respaldo." },
      { title: "Conteos cíclicos", desc: "Contar por zonas durante el mes en vez de parar el almacén." },
      { title: "Kardex y costos", desc: "Historial por artículo y valor real del inventario para contabilidad." },
    ],
    audienceTitle: "¿Para quién lo estamos haciendo?",
    audienceLead: "Para la empresa donde el almacén ya es parte del problema:",
    audience: [
      "Distribuidoras y comercializadoras con dos o más almacenes.",
      "Ferreterías, refaccionarias y materiales de construcción con miles de claves.",
      "Empresas de servicio que entregan material a técnicos en campo.",
      "Negocios con productos de lote y caducidad obligatoria.",
      "Empresas que hacen inventario físico una vez al año y siempre sale diferencia.",
    ],
    faq: [
      { q: "¿Cuándo sale?", a: "Está en desarrollo. No damos una fecha que no podamos sostener: quien esté en la lista de espera recibe el aviso en cuanto haya versión para probar." },
      { q: "¿Cuánto va a costar?", a: "El modelo se define entre pago único y membresía antes del lanzamiento. La lista de espera tendrá precio de lanzamiento." },
      { q: "Necesito inventario ahora, ¿qué hago?", a: "Te construimos el sistema de almacén a la medida, que es lo que ya hacemos hoy para empresas industriales y comercializadoras. Si tu caso es mostrador, Tomín POS ya lo resuelve." },
      { q: "¿Se va a conectar con facturación?", a: "Sí, la integración con CFDI 4.0 está contemplada, igual que en los demás sistemas que desarrollamos." },
    ],
    related: [
      { href: "/wms-villahermosa", label: "WMS a la medida (disponible hoy)" },
      { href: "/productos/software-punto-de-venta", label: "Tomín POS: punto de venta con inventario" },
      { href: "/erp-a-medida-villahermosa", label: "ERP a la medida" },
    ],
  },
};

/* ============================ ENGLISH ==================================== */

const hubEn: ProductosHub = {
  metaTitle: "Neurovia Systems Software Products",
  metaDescription:
    "Our own software in production: Huella for veterinary clinics, Tomín POS for point of sale, Núcleo SGI for contractors and inventory control. Proven, not prototypes.",
  eyebrow: "Our products",
  h1: "Software Built by Neurovia Systems",
  lead:
    "Besides custom development, we build our own systems. These are products already running in real companies: you start in days, at a product price rather than a project price.",
  intro: [
    "Each one started as a custom build that kept repeating. Instead of charging five times to build the same thing, we turned it into a product we maintain, update and adapt to your operation when needed.",
    "If your process differs from the rest of your industry, the product becomes the base and we build your part on top. That is the difference from off-the-shelf software: here the company that built it is the one answering the phone.",
  ],
  cardCta: "See the product",
  customTitle: "What if what I need isn't here?",
  customLead:
    "Then we build it. Half our projects are custom systems for operations no product covered: ERP suites, workshop systems, compliance platforms. Tell us which process is costing you time.",
  customCta: "See custom development",
  labels: {
    home: "Home",
    breadcrumbAria: "Breadcrumb",
    productos: "Products",
    verDemo: "See the live system",
    estado: "Status",
  },
};

const en: Record<string, ProductPageData> = {
  "software-para-veterinarias": {
    slug: "software-para-veterinarias",
    producto: "Huella",
    metaTitle: "Huella: Software for Veterinary Clinics",
    metaDescription:
      "Software for veterinary clinics in Mexico: patient records, pets, consultations, vaccines with reminders and inventory. From MXN $399 per month.",
    keyword: "software for veterinary clinics",
    eyebrow: "Huella",
    h1: "Huella: Software for Veterinary Clinics",
    heroLead:
      "Every pet's record, consultations, vaccines and your clinic's inventory in one system. Built in Mexico for independent practices still running on a notebook or a spreadsheet only one person understands.",
    ogAlt: "Huella — management software for veterinary clinics",
    waMessage: "Hi, I'm interested in Huella for my veterinary clinic. Can I get a demo?",
    demoUrl: "https://huellapp.neuroviasystems.cloud",
    demoLabel: "Open Huella",
    estado: "In production",
    precio: "From MXN $399 per month",
    precioNota: "Depending on clinic size. No lock-in contract.",
    appCategory: "BusinessApplication",
    offer: { price: "399", currency: "MXN", unit: "MONTH" },
    sections: [
      {
        h2: "The record leaves the notebook",
        body: [
          "In most independent veterinary clinics the information is split: the pet's history in a notebook, vaccines in a separate book, drug stock in someone's head and appointments in the clinic's WhatsApp. It works until an owner asks when the booster is due and nobody can find the sheet.",
          "Huella brings it together: every pet with its owner, consultation history, weight, treatments and vaccination schedule. When the patient comes back — even two years later — you open the record and it is all there, including who treated them and what was administered.",
          "And it works on the front-desk computer and on a phone, because in a small clinic the person taking payment is often the one in the consulting room.",
        ],
      },
      {
        h2: "Vaccines and appointments stop depending on memory",
        body: [
          "A booster nobody reminded anyone about is money walking out. Huella keeps each patient's vaccination schedule and tells you who is due, so follow-up becomes a task rather than a coincidence.",
          "Same with appointments: the calendar lives in the system, not in a chat, so anyone on the team can see today's list. And drug and food stock is deducted as it is used, so you don't discover something ran out mid-consultation.",
        ],
      },
      {
        h2: "What makes it different from other veterinary systems",
        body: [
          "There are good options in the Mexican market and we won't pretend otherwise. The real difference is who is on the other end: we build Huella, so when you ask for a change you talk to the people who write the software, not a support desk raising a ticket.",
          "That matters because no two clinics work the same. If you run grooming, boarding, corporate accounts or your own way of charging, the system adapts instead of forcing you to change your operation.",
          "And if the clinic grows to two locations or needs CFDI 4.0 invoicing, we have somewhere to take it: the same company builds full business systems.",
        ],
      },
    ],
    modulosTitle: "What Huella includes",
    modulos: [
      { title: "Record per pet", desc: "Full history: consultations, weight, treatments, notes and who saw them each visit." },
      { title: "Owners and contact", desc: "Each pet linked to its owner, with phone number and their other pets in view." },
      { title: "Consultations", desc: "Visit log with diagnosis, instructions and follow-up for the next appointment." },
      { title: "Vaccines and boosters", desc: "Vaccination schedule per patient and alerts for who is due." },
      { title: "Inventory", desc: "Medicines, food and accessories with stock deducted as it is used." },
      { title: "In the cloud", desc: "Open it from the front-desk computer or a phone, nothing to install." },
    ],
    audienceTitle: "Who is Huella for?",
    audienceLead: "For the clinic that has outgrown paper but does not need a hospital system:",
    audience: [
      "Independent veterinary clinics with one to five vets.",
      "Practices that also sell food, accessories or over-the-counter medicine.",
      "Clinics with grooming or boarding that want one single patient record.",
      "Clinics tracking vaccines in a notebook and losing boosters.",
      "Vets doing home visits who need the history on their phone.",
    ],
    faq: [
      { q: "How much does Huella cost per month?", a: "From MXN $399 per month depending on the size of the clinic and number of users. No lock-in contract, and migrating your data is part of the setup." },
      { q: "Can I move my current data into it?", a: "Yes. If your patients are in a spreadsheet or in software that exports, we migrate the owner and pet catalogue so you don't start from zero." },
      { q: "Do I need to install anything or buy hardware?", a: "No. Huella runs in the cloud: you use the browser on the computer you already have, or your phone. You only need internet." },
      { q: "Does it issue CFDI invoices?", a: "CFDI 4.0 invoicing is integrated according to what your clinic needs; tell us how you invoice today and we'll tell you what it takes in your case." },
      { q: "What if my clinic works differently?", a: "It adapts. We build Huella, so changes are made by the same team that built the system." },
    ],
    related: [
      { href: "/productos/software-punto-de-venta", label: "Tomín POS: point of sale with invoicing" },
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Custom software development" },
      { href: "/casos-de-exito", label: "Case studies: systems in production" },
    ],
  },

  "software-punto-de-venta": {
    slug: "software-punto-de-venta",
    producto: "Tomín POS",
    metaTitle: "Tomín POS: Point of Sale with Invoicing",
    metaDescription:
      "Cloud point of sale software for grocery stores, restaurants and pharmacies: sales, inventory, cash closing, multiple branches and CFDI 4.0 invoicing.",
    keyword: "point of sale software with invoicing",
    eyebrow: "Tomín POS",
    h1: "Tomín POS: Point of Sale Software with Invoicing",
    heroLead:
      "Charge fast, deduct stock automatically and close the till balanced. Cloud point of sale for grocery stores, restaurants, pharmacies and counter businesses, with CFDI 4.0 invoicing and several branches in one panel.",
    ogAlt: "Tomín POS — point of sale software with CFDI invoicing",
    waMessage: "Hi, I'd like information about Tomín POS for my business. Can I get a demo and pricing?",
    demoUrl: "https://puntodeventa.neuroviasystems.cloud",
    demoLabel: "See Tomín POS live",
    estado: "In production",
    precioNota: "Plans by branch and catalogue size. Ask for your quote; the demo is free.",
    appCategory: "BusinessApplication",
    sections: [
      {
        h2: "Charging is the easy part; knowing what happened is not",
        body: [
          "Any till can take payment. What it won't tell you is which product actually makes money, how much went through on the afternoon shift, why the till was short on Thursday or how much stock is really in the back room.",
          "Tomín POS records every sale as it happens, deducts stock on its own and keeps the cash close per shift and per cashier. At the end of the day you are reading a report, not adding up tickets.",
          "And because it lives in the cloud you don't have to be there to see it. With two branches you see them together or separately from the same panel, on your phone.",
        ],
      },
      {
        h2: "CFDI 4.0 invoicing without typing everything twice",
        body: [
          "When a customer asks for an invoice, the ticket already holds everything needed: no retyping products or amounts into another program. Tomín POS issues CFDI 4.0 straight from the sale.",
          "That removes the usual month-end folder of tickets waiting to be invoiced, and the gaps between what you sold and what you declared.",
        ],
      },
      {
        h2: "Built for the Mexican local business",
        body: [
          "Tomín POS is not a translated system: it is built for how things are sold here. Loose weight products, wholesale and retail pricing, credit and layaway, tips, several payment methods on one ticket, and the close the owner reviews at eleven at night.",
          "Staff learn it in minutes, which is what really decides whether a POS gets used or abandoned within a week. And if your business has a twist no system covers, we build the product — it can be adjusted.",
          "If you also need serious warehouse control — lots, expiry dates, transfers between warehouses — it connects to the same inventory as the custom warehouse system we build.",
        ],
      },
    ],
    modulosTitle: "What Tomín POS includes",
    modulos: [
      { title: "Sales terminal", desc: "Fast checkout with a barcode scanner or search, several payment methods per ticket." },
      { title: "Live inventory", desc: "Every sale deducts stock; minimum alerts so you reorder in time." },
      { title: "Cash closing", desc: "Open and close per shift and per cashier, with differences in plain sight." },
      { title: "CFDI 4.0 invoicing", desc: "The invoice comes from the same ticket, with no re-entry." },
      { title: "Multiple branches", desc: "Each location with its own till and stock, plus a consolidated view." },
      { title: "Reports", desc: "Sales by day, product, category, cashier and payment method, from your phone." },
    ],
    audienceTitle: "Which businesses is it for?",
    audienceLead: "For the counter business that sells well but has no control:",
    audience: [
      "Grocery stores, minimarkets and convenience stores.",
      "Restaurants, cafés and counter food businesses.",
      "Pharmacies and shops with lot and expiry tracking.",
      "Hardware stores, parts dealers and stationers with large catalogues.",
      "Businesses with one to three branches comparing sales by hand today.",
    ],
    faq: [
      { q: "How much does Tomín POS cost?", a: "The plan depends on the number of branches, tills and the size of your catalogue. Message us on WhatsApp for exact pricing; the demo is free." },
      { q: "Does it work if my internet is unstable?", a: "Tell us about your connection before signing up: we review your case and say honestly whether it suits you or whether the network should be fixed first — which we also do." },
      { q: "Do I need special hardware?", a: "It runs on the computer or tablet you already have with a browser. A barcode scanner and ticket printer are optional add-ons." },
      { q: "Can I start with one branch and grow later?", a: "Yes. Branches and tills are added without reloading the catalogue or redoing the setup." },
      { q: "Do you migrate my product catalogue?", a: "Yes, from a spreadsheet or from the system you use today, as long as it can be exported." },
    ],
    related: [
      { href: "/sistema-punto-de-venta-villahermosa", label: "Point of sale in Villahermosa (local setup)" },
      { href: "/productos/software-de-inventario", label: "Inventory and warehouse control" },
      { href: "/wms-villahermosa", label: "Custom WMS for warehouses" },
    ],
  },

  "sistema-de-gestion-integral": {
    slug: "sistema-de-gestion-integral",
    producto: "Núcleo SGI",
    metaTitle: "Núcleo SGI: Management System for Contractors",
    metaDescription:
      "Compliance management software for energy-sector contractors: current documents, findings, DC-3 training records and audit-ready evidence.",
    keyword: "integrated management system contractors",
    eyebrow: "Núcleo SGI",
    h1: "Núcleo SGI: Integrated Management System for Contractors",
    heroLead:
      "When your client is an operator, winning the contract is half the job: the other half is proving how you work. Núcleo SGI holds documents, findings, training and evidence so an audit is a report instead of a week of hunting for paperwork.",
    ogAlt: "Núcleo SGI — integrated management system for contractors",
    waMessage: "Hi, I'm interested in Núcleo SGI for my contracting company. Can we schedule a demo?",
    demoUrl: "https://sgi.neuroviasystems.cloud",
    demoLabel: "See Núcleo SGI",
    estado: "In production",
    precioNota: "Quoted per project, based on areas covered and number of users.",
    appCategory: "BusinessApplication",
    sections: [
      {
        h2: "The problem isn't complying — it's proving it",
        body: [
          "Service companies working for the energy sector usually do comply. The trouble starts when they have to prove it: the certificate sits in someone's inbox, the training record in a physical folder, the evidence from the last finding on a supervisor's phone, and nobody is sure which document is the current one.",
          "Then an audit lands, or the client asks for the file for a tender, and the company spends a week in emergency mode. Not because it failed, but because it was disorganised.",
          "Núcleo SGI exists for that. Every document, finding and training record is stored with its date, its owner and its backup, in one place you can search in minutes.",
        ],
      },
      {
        h2: "Expiry dates that warn you beforehand",
        body: [
          "Most compliance problems are calendar problems: a certificate that expired, training that lapsed, equipment whose calibration ran out. The system knows and tells you beforehand, not once it has been flagged.",
          "Findings are logged with their corrective action, owner and closing date, with evidence attached. Follow-up stops being a Word document nobody opens again.",
          "And training — including DC-3 records — is tied to each person, so knowing who is qualified for what is a lookup, not a search.",
        ],
      },
      {
        h2: "Built in southeast Mexico, with clients in the sector",
        body: [
          "Núcleo SGI did not come from a whiteboard: it came from working with oilfield service companies in Tabasco and Campeche, where documentation pressure is daily. It is the same company that runs an ERP suite with purchase requests, maintenance and inventory across 23 operating areas for a client in the sector.",
          "That is why the system speaks the business's language rather than a generic quality manual. And if your operation needs something the product does not cover — a module, a report for your client, an integration — we build it on the same base.",
        ],
      },
    ],
    modulosTitle: "What Núcleo SGI includes",
    modulos: [
      { title: "Documents with expiry", desc: "Current version, history and a warning before anything lapses." },
      { title: "Findings and actions", desc: "Logged with owner, closing date and attached evidence." },
      { title: "Training and DC-3", desc: "Who is trained in what, with the certificate and its validity." },
      { title: "Audit evidence", desc: "An exportable file when the client or the authority asks for it." },
      { title: "Profiles per area", desc: "Each area sees and enters its own part, with a trail of who did what." },
      { title: "Compliance dashboard", desc: "What is current, what is about to expire and what is open, at a glance." },
    ],
    audienceTitle: "Who is it for?",
    audienceLead: "For the company answering to a demanding client and to the authority:",
    audience: [
      "Oilfield service contractors in Tabasco, Campeche and the Gulf.",
      "Industrial maintenance companies with certified field staff.",
      "Crew transport, catering and services operating inside client facilities.",
      "Suppliers bidding for tenders that must submit a complete file.",
      "Safety, quality and compliance teams living in folders and spreadsheets.",
    ],
    faq: [
      { q: "How much does Núcleo SGI cost?", a: "It is quoted per project based on the areas included and the number of users. We start with a demo using your real case so you see the system with your kind of documents." },
      { q: "Does it work if I already have a quality system?", a: "Yes. Núcleo SGI organises evidence and expiry dates; if you already have procedures, they are loaded as they are. It does not force you to rebuild your management system." },
      { q: "Can it match what my client requires?", a: "Yes, and that is normal: every operator asks for its own format. We build the product, so formats and reports are adjusted to what you are asked for." },
      { q: "Who can see the information?", a: "It is set by profile: each area enters its own part, and there is a trail of who uploaded or closed each item." },
    ],
    related: [
      { href: "/erp-a-medida-villahermosa", label: "Custom ERP: purchase requests, buying and maintenance" },
      { href: "/desarrollo-de-software-tabasco", label: "Software development in Tabasco" },
      { href: "/casos-de-exito", label: "Case studies: systems in production" },
    ],
  },

  "software-de-inventario": {
    slug: "software-de-inventario",
    producto: "Inventory System",
    metaTitle: "Inventory and Warehouse Control Software",
    metaDescription:
      "Inventory software for small and mid-size companies: receipts, issues, transfers, minimum alerts and a ledger that reconciles. In development — join the waiting list.",
    keyword: "inventory software for companies",
    eyebrow: "Inventory System",
    h1: "Inventory and Warehouse Control Software",
    heroLead:
      "We are building our own inventory system: receipts, issues, transfers between warehouses, minimum alerts and a ledger that reconciles. Join the waiting list to hear first, at launch pricing.",
    ogAlt: "Inventory and warehouse control software — Neurovia Systems",
    waMessage: "Hi, I'm interested in Neurovia's inventory system. When is it out and how much will it cost?",
    estado: "In development · Coming soon",
    precioNota: "One-off payment or subscription: the model is being defined before launch. The waiting list hears first.",
    appCategory: "BusinessApplication",
    sections: [
      {
        h2: "Why stock never reconciles",
        body: [
          "The gap between what the system says and what is on the floor almost never comes from theft. It comes from issues written in a notebook, branch transfers nobody recorded, material handed over without a slip and full counts done once a year in a hurry.",
          "The cost is not only shrinkage: it is overbuying out of fear, promising delivery of something that does not exist, and arguing every month-end between the warehouse, purchasing and accounting.",
          "That is why the system we are building focuses on movement: every receipt, issue and transfer with its owner, date and supporting document.",
        ],
      },
      {
        h2: "What it will include",
        body: [
          "Multi-warehouse with stock by location and transfers with acknowledgement. Lots and expiry dates for those who need them, and serial numbers for parts and equipment. Receiving and picking by scanning with a reader or a phone camera.",
          "Minimum alerts so you reorder on data instead of fear, cycle counts by zone instead of shutting the warehouse for two days a year, and a ledger with the real inventory value, ready for accounting.",
          "The commercial model is still being decided between a one-off payment and a subscription. Whoever is on the waiting list will hear first, at launch pricing.",
        ],
      },
      {
        h2: "What if I need it now?",
        body: [
          "Then don't wait for the product. We already build custom warehouse systems today, and we run the inventory module of an oil & gas client's ERP suite as well as the multi-warehouse inventory of the distributor CAPOSA.",
          "If yours is a counter business, Tomín POS already deducts stock with every sale and is in production. And if your operation needs lots, locations and serious counts, a custom WMS is the short path.",
          "Tell us what you need and we will say honestly which of the three suits you — even if the answer is to wait.",
        ],
      },
    ],
    modulosTitle: "What the system will bring",
    modulos: [
      { title: "Multi-warehouse", desc: "Several warehouses or branches with their own stock and acknowledged transfers." },
      { title: "Lots and expiry dates", desc: "Which lot came in, which customer it went to and what is about to expire." },
      { title: "Barcodes", desc: "Receiving and picking by scanning with a reader or a phone camera." },
      { title: "Minimums and alerts", desc: "When to reorder, backed by consumption history." },
      { title: "Cycle counts", desc: "Count by zone through the month instead of stopping the warehouse." },
      { title: "Ledger and costs", desc: "History per item and real inventory value for accounting." },
    ],
    audienceTitle: "Who are we building it for?",
    audienceLead: "For the company where the warehouse has become part of the problem:",
    audience: [
      "Distributors with two or more warehouses.",
      "Hardware stores, parts dealers and building-material suppliers with thousands of SKUs.",
      "Service companies issuing material to field technicians.",
      "Businesses with mandatory lot and expiry tracking.",
      "Companies that count stock once a year and always find a difference.",
    ],
    faq: [
      { q: "When is it out?", a: "It is in development. We won't give a date we can't hold: whoever is on the waiting list gets the notice as soon as there is a version to try." },
      { q: "How much will it cost?", a: "The model is being decided between a one-off payment and a subscription before launch. The waiting list gets launch pricing." },
      { q: "I need inventory now — what do I do?", a: "We build the custom warehouse system, which is what we already do for industrial companies and distributors. If yours is a counter business, Tomín POS already solves it." },
      { q: "Will it connect to invoicing?", a: "Yes, CFDI 4.0 integration is planned, as in the rest of the systems we build." },
    ],
    related: [
      { href: "/wms-villahermosa", label: "Custom WMS (available today)" },
      { href: "/productos/software-punto-de-venta", label: "Tomín POS: point of sale with inventory" },
      { href: "/erp-a-medida-villahermosa", label: "Custom ERP" },
    ],
  },
};

/* ============================ HELPERS ==================================== */

/** Orden en el que se muestran: primero el de mercado más amplio. */
export const PRODUCT_SLUGS = [
  "software-punto-de-venta",
  "software-para-veterinarias",
  "sistema-de-gestion-integral",
  "software-de-inventario",
];

export function getProduct(lang: Locale, slug: string): ProductPageData {
  const dict = lang === "en" ? en : es;
  const data = dict[slug];
  if (!data) throw new Error(`Producto desconocido: ${slug} (${lang})`);
  return data;
}

export function getProducts(lang: Locale): ProductPageData[] {
  return PRODUCT_SLUGS.map((slug) => getProduct(lang, slug));
}

export function getProductosHub(lang: Locale): ProductosHub {
  return lang === "en" ? hubEn : hubEs;
}

export function buildProductMetadata(data: ProductPageData, lang: Locale = "es"): Metadata {
  const path = `${localeBase(lang)}/productos/${data.slug}`;
  const url = `${SITE_URL}${path}`;
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: [data.keyword, data.producto],
    alternates: {
      canonical: path,
      languages: {
        "es-MX": `${SITE_URL}/productos/${data.slug}`,
        "en-US": `${SITE_URL}/en/productos/${data.slug}`,
        "x-default": `${SITE_URL}/productos/${data.slug}`,
      },
    },
    openGraph: {
      title: `${data.metaTitle} | Neurovia Systems`,
      description: data.metaDescription,
      url,
      siteName: "Neurovia Systems",
      locale: lang === "en" ? "en_US" : "es_MX",
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: data.ogAlt, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.metaTitle} | Neurovia Systems`,
      description: data.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

/** SoftwareApplication del producto, ligado al negocio por @id. */
export function buildProductJsonLd(data: ProductPageData, lang: Locale = "es") {
  const path = `${localeBase(lang)}/productos/${data.slug}`;
  const url = `${SITE_URL}${path}`;
  const app: Record<string, unknown> = {
    "@type": "SoftwareApplication",
    "@id": `${url}#app`,
    name: data.producto,
    alternateName: data.metaTitle,
    applicationCategory: data.appCategory,
    operatingSystem: "Web",
    url,
    description: data.metaDescription,
    featureList: data.modulos.map((m) => m.title),
    publisher: { "@id": ORG_ID },
    provider: { "@id": ORG_ID },
    inLanguage: lang === "en" ? "en-US" : "es-MX",
  };
  if (data.demoUrl) app.installUrl = data.demoUrl;
  // Solo se declara precio cuando es público y fijo: nada de cifras inventadas.
  if (data.offer) {
    app.offers = {
      "@type": "Offer",
      price: data.offer.price,
      priceCurrency: data.offer.currency,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: data.offer.price,
        priceCurrency: data.offer.currency,
        unitCode: data.offer.unit,
      },
      availability: "https://schema.org/InStock",
      url,
      seller: { "@id": ORG_ID },
    };
  }
  return app;
}
