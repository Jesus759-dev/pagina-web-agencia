/* --------------------------------------------------------------------------
 * Guías — /guias y /guias/<slug>. Solo en español: el mercado es México.
 *
 * Por qué existen: las páginas de servicio venden; estas contestan. Cuando
 * alguien le pregunta a un buscador o a una IA "¿cuánto cuesta un software a
 * medida?" o "¿qué es un agente de IA?", lo que se cita es una página que
 * responde en el primer párrafo, con datos concretos. Por eso cada guía abre
 * con la respuesta (`respuesta`) antes de explicar nada.
 *
 * Regla: solo cifras que Neurovia publica. Nada de "el mercado cobra X" sin
 * fuente. Donde no hay número, se explica de qué depende.
 * -------------------------------------------------------------------------- */

export type GuideSection = {
  h2: string;
  body: string[];
  /** Lista opcional debajo de los párrafos. */
  items?: string[];
};

export type Guide = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  h1: string;
  /** La respuesta directa: primer párrafo, lo que un buscador o una IA cita. */
  respuesta: string;
  /** Fecha de publicación y de última revisión (YYYY-MM-DD). */
  publicado: string;
  actualizado: string;
  minutos: number;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  cta: { title: string; body: string; href: string; label: string };
  related: { href: string; label: string }[];
};

export const GUIAS_HUB = {
  metaTitle: "Guías de Software, IA y Sistemas para Empresas",
  metaDescription:
    "Respuestas directas sobre software para empresas en México: cuánto cuesta un sistema a medida, qué es un agente de IA y cómo elegir un punto de venta.",
  eyebrow: "Guías",
  h1: "Guías para decidir antes de comprar software",
  lead:
    "Lo que nos preguntan antes de cotizar, contestado con números reales y sin rodeos. Si después de leerlas decides que no necesitas un desarrollo, también nos sirve: preferimos clientes que llegan sabiendo qué quieren.",
};

const guias: Guide[] = [
  {
    slug: "cuanto-cuesta-un-software-a-medida",
    metaTitle: "Cuánto Cuesta un Software a Medida en 2026",
    metaDescription:
      "Cuánto cuesta desarrollar un software a medida en México: precios reales por tipo de proyecto, qué sube el costo y cuándo conviene más una suscripción.",
    keyword: "cuánto cuesta un software a medida",
    h1: "¿Cuánto cuesta un software a medida en México?",
    respuesta:
      "Depende sobre todo del alcance: cuántos procesos cubre, con qué sistemas se conecta y cuántas personas lo van a usar. Como referencia, en Neurovia Systems una automatización con inteligencia artificial arranca en $25,000 MXN + IVA, una aplicación web a medida en $32,000 MXN + IVA y un sistema de gestión a medida en $65,000 MXN + IVA. Si tu proceso es estándar, un software por suscripción desde $399 MXN al mes puede resolverlo sin desarrollar nada.",
    publicado: "2026-09-29",
    actualizado: "2026-09-29",
    minutos: 7,
    sections: [
      {
        h2: "Los precios de referencia, en una tabla",
        body: [
          "Estos son los puntos de partida que publicamos. No son el precio final de tu proyecto —ese sale de revisar tu proceso—, pero sirven para saber en qué orden de magnitud está lo que necesitas:",
        ],
        items: [
          "**Automatización de un proceso con IA:** desde $25,000 MXN + IVA. Por ejemplo, leer facturas y cargarlas a tu sistema, o generar un reporte que hoy alguien arma a mano.",
          "**Agente de IA para WhatsApp o correo:** desde $25,000 MXN + IVA, más el costo por uso del modelo de IA, que depende del volumen de mensajes.",
          "**Aplicación web a medida:** desde $32,000 MXN + IVA. Un portal, un panel de control o una herramienta interna acotada.",
          "**Sistema de gestión a medida (ERP, CRM, almacén):** desde $65,000 MXN + IVA, construido por módulos.",
          "**Software por suscripción:** desde $399 MXN al mes (sistema para veterinarias) o $500 MXN al mes (punto de venta con facturación), sin desarrollo.",
        ],
      },
      {
        h2: "Qué hace que un software cueste más",
        body: [
          "Dos sistemas que parecen iguales en una junta pueden costar muy distinto. Lo que realmente mueve el precio es esto:",
        ],
        items: [
          "**El número de procesos.** Controlar solo compras no cuesta lo mismo que compras, almacén, mantenimiento y costo por proyecto. Cada proceso es un módulo con sus pantallas, reglas y reportes.",
          "**Las integraciones.** Conectar facturación CFDI 4.0, bancos, una tienda en línea o el ERP que ya tienes suma trabajo, y depende de que esos sistemas permitan conectarse.",
          "**La migración de datos.** Pasar años de información de Excel o de un sistema viejo, limpiarla y cargarla es trabajo real. Mientras más desordenada esté, más cuesta.",
          "**Los roles y autorizaciones.** Un sistema donde todos ven todo es más simple que uno donde cada área ve lo suyo y hay aprobaciones por nivel y por monto.",
          "**Las aplicaciones móviles.** Si el trabajo ocurre en campo —obra, taller, rutas— y hace falta una app, es un desarrollo adicional.",
          "**La inteligencia artificial.** Leer documentos, contestar mensajes o resumir la operación agrega valor, pero también un costo mensual por uso del modelo.",
        ],
      },
      {
        h2: "A medida o por suscripción: cuándo conviene cada uno",
        body: [
          "No todo necesita desarrollo. Si tu proceso es el mismo que el del resto de tu giro —un punto de venta, una agenda de consultorio—, un software por suscripción sale más barato y arranca en días. Lo decimos aunque desarrollemos: es mejor cliente el que no pagó de más.",
          "El desarrollo a medida conviene cuando el proceso es tu ventaja y ningún producto lo cubre sin obligarte a cambiarlo, cuando necesitas conectar varias áreas que hoy no se hablan, o cuando ya pagas licencias por usuario que crecen cada año aunque tu operación siga igual.",
          "Hay una diferencia que casi nadie calcula: con una suscripción rentas el software y la cuenta sube con cada usuario; con un desarrollo a medida el sistema y su código son de tu empresa. A tres o cuatro años, con un equipo que crece, la cuenta cambia.",
        ],
      },
      {
        h2: "Lo que no viene en la cotización (y hay que preguntar)",
        body: [
          "Una cotización barata puede salir cara si deja fuera lo que pasa después de la entrega. Antes de firmar, pide por escrito:",
        ],
        items: [
          "**Servidor y hosting:** dónde va a vivir el sistema, a nombre de quién y cuánto cuesta al mes.",
          "**Mantenimiento:** qué pasa cuando algo falla, en cuánto tiempo responden y si tiene costo.",
          "**Cambios posteriores:** cómo se cobra un ajuste o un módulo nuevo después de entregado.",
          "**Propiedad del código:** si el sistema queda a nombre de tu empresa o si dependes del proveedor para siempre.",
          "**Capacitación:** si está incluida y con quién se hace.",
        ],
      },
      {
        h2: "Cómo bajar el riesgo: construir por etapas",
        body: [
          "La forma más segura de gastar en software es no gastarlo todo de golpe. Un proyecto bien planeado arranca por el proceso que más duele —casi siempre compras, inventario o seguimiento de clientes—, lo pone a funcionar en semanas y tu equipo lo usa mientras se construye lo siguiente.",
          "Así cada etapa tiene su presupuesto y su fecha, ves avance real desde el principio y, si algo no convence, se corrige antes de invertir en lo demás. Es lo contrario al proyecto de un año que se entrega completo y resulta que nadie lo quiere usar.",
        ],
      },
    ],
    faq: [
      { q: "¿Se puede pagar un software a medida por etapas?", a: "Sí, y es lo recomendable. Cada módulo tiene su presupuesto y su entrega, así que pagas conforme recibes algo que ya funciona." },
      { q: "¿El código del sistema queda a mi nombre?", a: "Debería. En Neurovia el sistema y su código son de la empresa cliente, documentados, para que no dependas de un solo proveedor. Si una cotización no lo aclara, pregúntalo antes de firmar." },
      { q: "¿Cuánto tarda desarrollar un software a medida?", a: "Una primera versión útil suele estar lista en semanas. El sistema completo se construye por módulos a lo largo de varios meses, según el alcance." },
      { q: "¿Hay que pagar mantenimiento después?", a: "Casi siempre hay un costo de servidor y, según el acuerdo, de soporte. Lo importante es que venga por escrito desde la cotización y no aparezca después." },
    ],
    cta: {
      title: "¿Quieres el número para tu caso?",
      body: "Cuéntanos qué proceso te está costando tiempo. En 20 minutos te decimos si conviene desarrollar, usar un producto que ya existe o no hacer nada todavía, y cuánto costaría.",
      href: "/agenda",
      label: "Agendar 20 minutos",
    },
    related: [
      { href: "/desarrollo-de-software-a-medida-villahermosa", label: "Desarrollo de software a medida" },
      { href: "/erp-a-medida-villahermosa", label: "ERP a la medida" },
      { href: "/productos", label: "Software por suscripción: nuestros productos" },
    ],
  },

  {
    slug: "que-es-un-agente-de-ia",
    metaTitle: "Qué es un Agente de Inteligencia Artificial",
    metaDescription:
      "Qué es un agente de inteligencia artificial, en qué se diferencia de un chatbot y qué puede hacer en una empresa: WhatsApp, prospectos, documentos.",
    keyword: "qué es un agente de IA",
    h1: "¿Qué es un agente de inteligencia artificial y para qué le sirve a una empresa?",
    respuesta:
      "Un agente de inteligencia artificial es un programa que, además de conversar, puede actuar: consulta información, registra un pedido, agenda una cita o avisa a una persona, siguiendo las reglas que la empresa le define. La diferencia con un chatbot es simple: el chatbot responde; el agente responde y hace algo con esa respuesta.",
    publicado: "2026-09-29",
    actualizado: "2026-09-29",
    minutos: 6,
    sections: [
      {
        h2: "Chatbot contra agente: la diferencia que importa",
        body: [
          "Un chatbot clásico sigue un guion: si el cliente escribe \"precio\", contesta con la lista de precios. Si pregunta algo fuera del guion, se atora o manda a \"un asesor\".",
          "Un agente de IA entiende lo que la persona quiere aunque lo diga con sus palabras, y tiene herramientas para actuar: puede buscar en tu catálogo si hay existencias, guardar los datos de un prospecto en tu CRM, revisar el estado de un pedido o mandarle un aviso al vendedor cuando alguien está listo para comprar.",
          "Por eso la pregunta útil no es \"¿tiene IA?\", sino \"¿qué puede hacer además de contestar?\".",
        ],
      },
      {
        h2: "Qué hace un agente en una empresa real",
        body: [
          "Los usos que más valor dejan son los que hoy se hacen a mano, se repiten todo el día y se pierden fuera de horario:",
        ],
        items: [
          "**Atender WhatsApp y correo las 24 horas.** Contesta las preguntas de siempre —horarios, precios, disponibilidad— y no deja mensajes sin respuesta hasta el lunes.",
          "**Calificar prospectos.** Pregunta lo que necesitas saber para cotizar y te pasa solo los que tienen intención real, con sus datos ya capturados.",
          "**Dar seguimiento.** Recuerda al cliente una cotización pendiente o una cita, en el momento correcto.",
          "**Procesar documentos.** Lee facturas, órdenes de compra o contratos y saca los datos para cargarlos a tu sistema.",
          "**Conectarse con tus sistemas.** Consulta el inventario, registra el pedido en el CRM o crea la tarea para el área que corresponde.",
        ],
      },
      {
        h2: "Lo que un agente no debería hacer solo",
        body: [
          "Un agente bien diseñado sabe cuándo pasar la conversación a una persona. No debería autorizar descuentos, cerrar contratos, mover dinero ni decidir sobre información sensible sin que alguien de tu equipo lo revise.",
          "La regla práctica: el agente se encarga de lo repetitivo y de lo que pasa fuera de horario; las decisiones con consecuencias las toma una persona, con toda la información que el agente ya juntó.",
        ],
      },
      {
        h2: "Qué se necesita para tener uno",
        body: [
          "Menos de lo que parece. Para empezar hace falta definir cuatro cosas:",
        ],
        items: [
          "**El canal:** WhatsApp, correo, el chat de tu sitio web o varios a la vez.",
          "**Lo que debe saber:** tu catálogo, tus precios, tus políticas y las preguntas frecuentes de tus clientes.",
          "**Lo que puede hacer:** qué registra, a quién avisa y en qué casos pasa a una persona.",
          "**Con qué se conecta:** tu CRM, tu inventario, tu agenda o una hoja de cálculo, según lo que ya uses.",
        ],
      },
      {
        h2: "Cuánto cuesta un agente de IA",
        body: [
          "En Neurovia Systems un agente de IA a medida arranca en $25,000 MXN + IVA. A eso se suma el costo por uso del modelo de inteligencia artificial, que se paga según el volumen de conversaciones: un negocio con pocos mensajes al día paga poco; uno que atiende cientos, más.",
          "El asistente que ves en este mismo sitio es un agente: contesta preguntas sobre nuestros servicios y, cuando alguien quiere cotizar, le pide su nombre y su WhatsApp y nos avisa en ese momento. Es un ejemplo pequeño de lo que se puede hacer en tu empresa.",
        ],
      },
    ],
    faq: [
      { q: "¿Un agente de IA sustituye a mi equipo de ventas?", a: "No. Se encarga de lo repetitivo y de lo que llega fuera de horario, y le pasa a tu equipo prospectos ya calificados. Las ventas las sigue cerrando una persona." },
      { q: "¿Funciona en WhatsApp?", a: "Sí, mediante la API oficial de WhatsApp de Meta o de proveedores como Twilio. Es el canal donde más valor deja en México." },
      { q: "¿Qué pasa si el agente no sabe la respuesta?", a: "Un agente bien configurado lo reconoce y pasa la conversación a una persona, en lugar de inventar. Eso se define desde el diseño." },
      { q: "¿Mis datos están seguros?", a: "Depende de cómo se construya. Hay que definir qué información puede consultar, dónde se guardan las conversaciones y quién tiene acceso. Pregúntalo siempre antes de contratar." },
    ],
    cta: {
      title: "¿Quieres ver cómo funcionaría en tu negocio?",
      body: "Dinos por qué canal te llegan los clientes y qué preguntas se repiten. Te decimos qué parte puede atender un agente y cuánto costaría.",
      href: "/agentes-de-inteligencia-artificial",
      label: "Ver agentes de IA",
    },
    related: [
      { href: "/agentes-de-inteligencia-artificial", label: "Agentes de inteligencia artificial" },
      { href: "/automatizacion-con-ia-tabasco", label: "Automatización con IA" },
      { href: "/crm-a-medida-villahermosa", label: "CRM a la medida conectado a WhatsApp" },
    ],
  },

  {
    slug: "como-elegir-software-punto-de-venta",
    metaTitle: "Cómo Elegir un Software de Punto de Venta",
    metaDescription:
      "Qué debe tener un software de punto de venta en México: facturación CFDI 4.0, inventario, cortes de caja y las preguntas sobre precio que hay que hacer.",
    keyword: "software punto de venta",
    h1: "Cómo elegir un software de punto de venta en México",
    respuesta:
      "Un software de punto de venta para un negocio en México tiene que hacer cuatro cosas bien: cobrar rápido, descontar el inventario solo, cuadrar la caja por turno y emitir facturas CFDI 4.0 sin volver a capturar la venta. Todo lo demás —tienda en línea, varias sucursales, modo restaurante— depende de tu giro. Antes de elegir, compara cómo cobra cada sistema: por usuario, por caja, por número de facturas o con comisión por venta.",
    publicado: "2026-09-29",
    actualizado: "2026-09-29",
    minutos: 7,
    sections: [
      {
        h2: "Las cuatro cosas que no son opcionales",
        body: [
          "Si un sistema falla en alguna de estas, no importa qué tan bonito se vea:",
        ],
        items: [
          "**Cobrar rápido.** Con lector de código de barras o búsqueda ágil, y con varias formas de pago en un mismo ticket: efectivo, tarjeta, transferencia.",
          "**Inventario que se descuenta solo.** Cada venta tiene que bajar las existencias sin que nadie lo haga a mano. Si no, el inventario del sistema y el del anaquel nunca van a coincidir.",
          "**Corte de caja por turno y por cajero.** Para saber quién cobró qué y por qué no cuadró, sin sumar tickets al final del día.",
          "**Facturación CFDI 4.0.** En México es obligatoria. Lo ideal es que la factura salga del mismo ticket, sin volver a teclear la venta en otro programa.",
        ],
      },
      {
        h2: "En la nube o instalado en la computadora",
        body: [
          "Un sistema en la nube se usa desde el navegador, se actualiza solo y te deja ver las ventas desde el celular aunque no estés en el negocio. Si tienes más de una sucursal, es casi indispensable.",
          "Un sistema instalado funciona sin internet, pero la información vive en una sola computadora: si esa máquina falla, puedes perder datos, y para ver cómo va el día tienes que estar ahí. Antes de decidir, revisa qué tan estable es tu conexión; si es mala, pregunta cómo se comporta el sistema cuando se cae.",
        ],
      },
      {
        h2: "Las preguntas sobre el precio que casi nadie hace",
        body: [
          "Dos sistemas con la misma mensualidad pueden terminar costando muy distinto. Pregunta:",
        ],
        items: [
          "**¿Cuántos usuarios incluye?** Si cobra por cajero, la cuenta crece cuando contratas gente.",
          "**¿Cuántas facturas al mes incluye?** Muchos planes tienen un límite y cobran aparte lo que se pase.",
          "**¿Cobra comisión por las ventas en línea?** Algunas plataformas se quedan un porcentaje de cada pedido de tu tienda en línea.",
          "**¿Hay plazo forzoso?** Un contrato anual te amarra aunque el sistema no te funcione.",
          "**¿Puedo exportar mis datos si me voy?** Tu catálogo y tu historial de ventas son tuyos; asegúrate de poder sacarlos.",
        ],
      },
      {
        h2: "Lo que cambia según tu giro",
        body: [
          "**Abarrotes y minisúper:** producto a granel, muchas claves y ventas rápidas. Importa la velocidad de cobro y las alertas de producto por agotarse.",
          "**Restaurantes y cafeterías:** mesas, cuentas separadas, propinas y modificadores (sin cebolla, extra queso). Sin eso, el sistema estorba en plena hora pico.",
          "**Farmacias:** lotes y caducidades. Tienes que saber qué está por vencer antes de que se venza.",
          "**Ferreterías y refaccionarias:** catálogos enormes, precios de mayoreo y menudeo, y ventas a crédito a otros negocios.",
          "**Negocios con varias sucursales:** inventario por tienda, traspasos entre ellas y una vista del dueño con todo junto.",
        ],
      },
      {
        h2: "Señales de alerta",
        body: [
          "Desconfía de un sistema que no te deja probarlo antes de pagar, que exige tarjeta o contrato anual desde el primer día, que no te dice cómo exportar tus datos o cuyo soporte es solo un formulario que contestan en días. Un punto de venta es lo que usa tu negocio todo el día: si falla, se nota en la caja.",
        ],
      },
      {
        h2: "Nuestra opción, dicho con transparencia",
        body: [
          "Nosotros desarrollamos Tomín POS, un punto de venta en la nube con facturación CFDI 4.0 incluida, tienda en línea sin comisiones y planes desde $500 MXN al mes, sin tarjeta al registrarte y sin plazos forzosos. Lo mencionamos porque es lo que conocemos a fondo, no porque sea la única opción: usa esta guía para compararlo con cualquier otro.",
        ],
      },
    ],
    faq: [
      { q: "¿Es obligatorio facturar desde el punto de venta?", a: "La factura CFDI 4.0 es obligatoria cuando el cliente la pide. Que el punto de venta la emita directamente te ahorra capturar la venta dos veces y evita diferencias entre lo que vendiste y lo que facturaste." },
      { q: "¿Necesito comprar equipo especial?", a: "Para empezar, no: un sistema en la nube funciona en la computadora o tableta que ya tienes. El lector de código de barras y la impresora de tickets son útiles pero opcionales." },
      { q: "¿Qué pasa con mis datos si cambio de sistema?", a: "Deberías poder exportar tu catálogo y tu historial. Pregúntalo antes de contratar, no cuando ya te quieras ir." },
      { q: "¿Conviene un punto de venta gratuito?", a: "Puede servir para empezar, pero revisa qué limita: facturas, usuarios, sucursales o si cobra comisión por venta. A veces lo gratis sale caro cuando el negocio crece." },
    ],
    cta: {
      title: "¿Quieres ver uno funcionando?",
      body: "Tomín POS se puede probar sin tarjeta. Revisa los planes y las funciones, y si tienes dudas sobre tu giro, escríbenos.",
      href: "/productos/software-punto-de-venta",
      label: "Ver Tomín POS",
    },
    related: [
      { href: "/productos/software-punto-de-venta", label: "Tomín POS: planes y funciones" },
      { href: "/sistema-punto-de-venta-villahermosa", label: "Punto de venta en Villahermosa" },
      { href: "/productos/software-de-inventario", label: "Control de inventario" },
    ],
  },
];

export const GUIDE_SLUGS = guias.map((g) => g.slug);

export function getGuide(slug: string): Guide {
  const g = guias.find((x) => x.slug === slug);
  if (!g) throw new Error(`Guía desconocida: ${slug}`);
  return g;
}

export function getGuides(): Guide[] {
  return guias;
}
