/**
 * Markdown representations of key pages, served when an agent requests
 * `Accept: text/markdown` (see middleware.ts). Browsers always get HTML.
 * Keep the map keys in sync with the middleware `matcher`.
 */
export const MARKDOWN_PAGES: Record<string, string> = {
  "/": `# Neurovia Systems

Agencia de desarrollo de software y automatización con inteligencia artificial
en Villahermosa, Tabasco, México. Construimos software a la medida, agentes de
IA e infraestructura TI para empresas, y desarrollamos productos SaaS propios.
Presencia en Villahermosa, Monterrey y Guadalajara.

## Servicios

- **Software a la medida** — plataformas, dashboards y sistemas de gestión (Laravel/Livewire/Filament, Node.js/React).
- **Agentes de IA** — asistentes que atienden WhatsApp y correo 24/7, procesan documentos y califican prospectos.
- **Automatización con IA** — integración de APIs, workflows y reportes automáticos.
- **Infraestructura TI, redes y hardware** — redes Ubiquiti, armado de equipos, mantenimiento y soporte.
- **Consultoría TI** — diagnóstico, recomendación de stack y acompañamiento técnico.

## Productos SaaS propios

- **Tomín POS** — punto de venta con facturación CFDI para negocios locales.
- **Núcleo SGI** — gestión HSE y cumplimiento para contratistas del sector petrolero.
- **Huella** — sistema de gestión para clínicas veterinarias.
- **FlotaOps** — control y rastreo de flotas vehiculares.

## Precios de referencia

- Software / sistema de gestión a la medida (ERP, CRM, almacén): desde $65,000 MXN + IVA, por módulos.
- Aplicación web a la medida: desde $32,000 MXN + IVA.
- Automatización de procesos con IA: desde $25,000 MXN + IVA.
- Agente de IA para WhatsApp o correo: desde $25,000 MXN + IVA, más el costo por uso del modelo.
- Tomín POS: $500, $1,200 o $2,400 MXN al mes.
- Huella: desde $399 MXN al mes.
- Análisis inicial y estimado: sin costo.
- Detalle: https://neuroviasystems.com.mx/precios

## Empresa

- Quiénes somos (About): https://neuroviasystems.com.mx/nosotros
- Aviso de privacidad (legal): https://neuroviasystems.com.mx/aviso-de-privacidad

## Contacto

- Web: https://neuroviasystems.com.mx
- Agenda una llamada: https://neuroviasystems.com.mx/agenda
- WhatsApp: +52 993 722 6350
- Correo: ventas@neuroviasystems.com.mx
- Dirección: C. Privada B, Mza. E, Lt. 5, Medellín y Madero 2ª Sección, 86270 Villahermosa, Tabasco, México

Descripción completa para modelos: https://neuroviasystems.com.mx/llms.txt
`,

  "/agenda": `# Agenda una llamada de 20 minutos — Neurovia Systems

¿Traes un proceso atorado? Cuéntamelo en 20 minutos. Si tiene solución con
software, te digo cuál y cuánto cuesta. Si no la tiene, también te lo digo.

- Agenda: https://neuroviasystems.com.mx/agenda
- WhatsApp: +52 993 722 6350
- Correo: soporte@neuroviasystems.com.mx
`,

  "/aviso-de-privacidad": `# Aviso de Privacidad — Neurovia Systems

Borrador conforme a la Ley Federal de Protección de Datos Personales en Posesión
de los Particulares (LFPDPPP), México. Última actualización: 25 de agosto de 2026.

- **Responsable:** Neurovia Systems, Villahermosa, Tabasco, México. Contacto: soporte@neuroviasystems.com.mx
- **Datos recabados:** nombre, correo electrónico, teléfono y empresa.
- **Finalidades primarias:** atención de solicitudes, agendado y prestación de servicios.
- **Finalidades secundarias:** envío de comunicaciones de marketing (puede negarse escribiendo a soporte@neuroviasystems.com.mx).
- **Derechos ARCO:** acceso, rectificación, cancelación y oposición vía soporte@neuroviasystems.com.mx.
- **Cookies:** el sitio usa Google Analytics 4 con fines estadísticos.

Versión completa: https://neuroviasystems.com.mx/aviso-de-privacidad
`,
};
