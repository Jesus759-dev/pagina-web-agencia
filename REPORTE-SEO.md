# Reporte de Auditoría SEO — Neurovia Systems

**Proyecto:** Next.js 16 (App Router) · **Dominio:** https://neuroviasystems.com.mx
**Fecha:** 2026-06-28
**Alcance:** Auditoría técnica de SEO + correcciones aplicadas

---

## Resumen ejecutivo

El proyecto **ya tenía una base de SEO muy sólida** (Metadata API completa, Open Graph, Twitter Cards, JSON-LD con `@graph`, robots, sitemap, favicons e iconos por convención de App Router, manifest PWA). La auditoría no encontró errores estructurales graves, pero sí **3 bugs/omisiones de impacto real** que ya fueron corregidos, más algunas mejoras recomendadas.

> **Sobre "el sitio casi no se indexa":** la causa **no** es el renderizado. El contenido principal (hero, servicios, textos, encabezados) **sí se renderiza en el servidor** (ver punto 6). Las causas más probables de baja indexación son: dominio nuevo sin antigüedad, falta de backlinks, y el logo roto del JSON-LD (ya corregido). Recomendación: forzar el rastreo en Google Search Console tras desplegar estos cambios.

---

## Cambios aplicados (archivos modificados)

| Archivo | Cambio |
|---|---|
| `app/layout.tsx` | **Título raíz** ahora incluye "Villahermosa" (SEO local) |
| `app/layout.tsx` | **Description** reescrita: 157 caracteres, con ubicación (Villahermosa/Tabasco) + llamado a la acción |
| `app/layout.tsx` | **JSON-LD `Organization.logo`** corregido: apuntaba a `/logo.png` (404) → ahora `/web-app-manifest-512x512.png` (existe) |
| `components/PuntoDeVenta.tsx` | `alt` genérico → keyword local ("...para negocios en Villahermosa, Tabasco") |

---

## Hallazgos por categoría

### 1. Metadata API — ✅ Correcto (con 2 correcciones)

| Requisito | Estado |
|---|---|
| `metadataBase` | ✅ Ya presente (`new URL('https://neuroviasystems.com.mx')`) |
| `title.template` (`%s \| Neurovia Systems`) | ✅ Ya presente |
| `title.default` con ubicación | 🔧 **Corregido** — antes decía "...Automatización Empresarial"; ahora "...Automatización **en Villahermosa**" |
| `description` 150–160 car. + keyword + ubicación + CTA | 🔧 **Corregido** — antes ~185 car., sin ubicación ni CTA. Ahora 157 car. con ambos |
| `alternates.canonical` | ✅ Ya presente |
| `keywords`, `authors`, `creator`, `publisher` | ✅ Ya presentes (lista de keywords amplia y local) |

**Description anterior (mala):**
> "Empresa tecnológica especializada en desarrollo de software, inteligencia artificial, automatización empresarial, plataformas web, dashboards corporativos y soluciones digitales a medida." *(185 car., sin ubicación ni CTA)*

**Description nueva (aplicada):**
> "Desarrollo de software a medida, IA y automatización empresarial en Villahermosa, Tabasco. Creamos plataformas web y dashboards. Agenda tu consulta gratuita." *(157 car.)*

**Rutas:** el sitio es una **landing de una sola página** (`app/page.tsx` compone todas las secciones). No hay rutas adicionales en `app/**/page.tsx`, por lo que un único `metadata` raíz es lo correcto. *(Ver recomendación de páginas por servicio en el punto 8.)*

---

### 2. Open Graph y Twitter Cards — ✅ Correcto

- `openGraph` completo: `title`, `description`, `url`, `siteName`, `locale: es_MX`, `type: website`, `images` 1200×630, y además `videos`. ✅
- `twitter.card: summary_large_image` con título, descripción e imagen. ✅
- Imagen OG: `public/images/og-robotic-hand.jpg` **existe** y se referencia con URL absoluta (gracias a `metadataBase`, los previews de WhatsApp/Facebook funcionarán). ✅

> No fue necesario crear `opengraph-image.tsx`: ya hay un OG estático válido.
> **Verificar manualmente** que `og-robotic-hand.jpg` mida exactamente 1200×630 px (declarado así en el metadata).

---

### 3. Favicon e iconos — ✅ Correcto

Por convención de App Router, ya existen y Next los inyecta solos (sin `<link>` manuales):
- `app/favicon.ico` ✅
- `app/icon.png` + `app/icon.svg` ✅
- `app/apple-icon.png` ✅

---

### 4. `robots.ts` y `sitemap.ts` — ✅ Correcto

**`robots.ts`:** `allow: '/'`, `disallow: ['/api/']` (correcto, no bloquea `/_next/`), referencia el sitemap con URL absoluta. **No hay** un `disallow: '/'` accidental. ✅

**`sitemap.ts`:** lista la home con URL absoluta, `lastModified`, `changeFrequency`, `priority`, e incluye extensiones de `images` y `videos`. Correcto para un sitio de una página. ✅

> **Verificación post-deploy:** abrir `https://neuroviasystems.com.mx/sitemap.xml` y `/robots.txt` en el navegador y confirmar que cargan (Next los genera en runtime desde estos archivos).

---

### 5. Datos estructurados (JSON-LD) — ✅ Correcto (1 corrección)

`app/layout.tsx` inyecta un `<script type="application/ld+json">` con un `@graph` que enlaza: **Organization**, **WebSite**, **WebPage**, **VideoObject** y **ProfessionalService** (con dirección Villahermosa/Tabasco, geo-coordenadas, `areaServed`, teléfono, `sameAs` de redes y `OfferCatalog` de servicios). Muy completo. ✅

🔧 **Bug corregido:** `Organization.logo` apuntaba a `https://neuroviasystems.com.mx/logo.png`, **que no existe** en `public/` → daba 404 e invalidaba el logo ante Google. Ahora apunta a `/web-app-manifest-512x512.png` (512×512, ya existe).

> **Pendiente del cliente:** las URLs de `sameAs` (LinkedIn, Twitter, GitHub) y el teléfono `+52-993-722-6350` deben confirmarse como reales; URLs de redes inexistentes pueden restar credibilidad al schema.
> **Validar** tras deploy en https://search.google.com/test/rich-results

---

### 6. Renderizado / SSR — ✅ Correcto (no es el problema)

Análisis estático de los componentes:

- **Solo 3 componentes** usan `'use client'`: `Portfolio`, `ScrollChoreography`, `WhatsAppButton`.
- **Hero, Stats, TechStack, Services, PuntoDeVenta, WhyUs, Process, Testimonials, Contact, Footer, Navbar son Server Components** → su texto va en el HTML inicial. ✅
- El `<h1>` y los textos del hero están en `Hero` (server component), no ocultos tras hidratación. ✅
- `Portfolio` es `'use client'` **solo por el lightbox** (`useState` para el índice de imagen); sus encabezados `<h2>/<h3>` y `alt` se renderizan directamente en JSX → **sí salen en el SSR**. ✅
- Framer Motion y `cobe` (globo WebGL) se usan para animación, **no esconden texto** del crawler.
- Hay un `<noscript>` de respaldo con `<h1>` + párrafo descriptivo para bots simples.

**Conclusión:** el texto clave aparece en el HTML del servidor. El renderizado **no** está bloqueando la indexación.

> *Opcional:* puedo correr `npm run build && npm start` y volcar el HTML de `curl localhost:3000` para confirmarlo empíricamente si lo deseas.

---

### 7. Imágenes y rendimiento — ⚠️ Mejora recomendada (media)

**Encabezados:** ✅ correcto. **Un solo `<h1>`** (en `Hero`, con keyword "futuro digital de tu empresa"), y jerarquía `<h2>` por sección + `<h3>` en subitems. Bien estructurado.

**Imágenes:** ⚠️ Todas usan `<img>` nativo (con `eslint-disable @next/next/no-img-element` explícito), **no `next/image`**. Todas tienen `alt` descriptivo. ✅

- **Impacto:** es una optimización de **rendimiento/LCP** (WebP/AVIF automático, lazy-loading, `srcset` responsive), **no** un bloqueo de indexación — un `<img>` con `alt` se indexa igual.
- **No se convirtió automáticamente** porque la galería `Portfolio` tiene un lightbox y layouts con sizing manual; migrar a `next/image` requiere definir `width/height` o `fill` con contenedor dimensionado y probar el diseño. Es un cambio de diseño con riesgo de regresión visual.
- **Recomendación:** migrar gradualmente a `next/image` (empezando por la imagen del hero del POS y las del portafolio). `next.config.ts` ya tiene `formats: ['avif','webp']` y `deviceSizes` listos para aprovecharlo.

---

### 8. Contenido local — ⚠️ Mejora recomendada (media)

La landing **ya menciona** Villahermosa/Tabasco en metadata, JSON-LD, geo-tags y keywords, pero el **texto visible** del cuerpo es mayormente genérico ("Construimos el futuro digital de tu empresa", "Sistemas en producción en México"). Para keywords locales conviene reforzar el contenido on-page:

- Insertar frases naturales con keywords locales en el cuerpo visible: *"desarrollo de software en Villahermosa"*, *"automatización con IA en Tabasco"*, *"sistema de punto de venta para negocios en Villahermosa"*.
- **Recomendación de mayor impacto:** crear **páginas por servicio** (rutas reales, no anclas `#`), p. ej.:
  - `/desarrollo-de-software-villahermosa`
  - `/automatizacion-ia-tabasco`
  - `/punto-de-venta-villahermosa`

  Cada una con su `metadata` propio (`title`/`description` únicos), su `<h1>` con la keyword, contenido extenso y entrada en `sitemap.ts`. Esto multiplica las páginas indexables y la cobertura de long-tail local, algo que una sola landing no puede lograr.
- Considerar una sección de **testimonios/casos con ubicación** ("Royers — construcción en Tabasco", que ya aparece en el portafolio) para señales E-E-A-T locales.

---

## Pendientes del cliente (no son código)

| Prioridad | Acción |
|---|---|
| Alta | Verificar el sitio en **Google Search Console** y enviar el sitemap. Ya existe `public/googlef2c757601493899c.html` (método de verificación por archivo) — confirmar que sigue activo, o pegar el meta-token en `metadata.verification.google` (actualmente comentado en `layout.tsx`). |
| Media | Confirmar que `sameAs` (LinkedIn/Twitter/GitHub) apuntan a perfiles **reales**. |
| Media | Confirmar que `og-robotic-hand.jpg` mide **1200×630**. |
| Baja | Inconsistencia menor de `theme-color`: `#ffffff` en `<head>` vs `#0a1126` en `manifest.ts`. Unificar si se desea. |

---

## Tabla de prioridades

| Prioridad | Hallazgo | Estado |
|---|---|---|
| 🔴 Alta | Description fuera de rango, sin ubicación ni CTA | ✅ **Corregido** |
| 🔴 Alta | Título raíz sin keyword local (Villahermosa) | ✅ **Corregido** |
| 🔴 Alta | Logo de JSON-LD roto (404) | ✅ **Corregido** |
| 🟡 Media | Imágenes con `<img>` en vez de `next/image` (LCP) | 📋 Recomendado |
| 🟡 Media | Poco contenido local visible / sin páginas por servicio | 📋 Recomendado |
| 🟡 Media | Verificación en Search Console + envío de sitemap | 📋 Acción del cliente |
| 🟢 Baja | `alt` genérico en POS | ✅ **Corregido** |
| 🟢 Baja | Inconsistencia de `theme-color` | 📋 Opcional |

---

## Lo que ya estaba bien (no requirió cambios)

✅ `metadataBase` · ✅ `title.template` · ✅ `alternates.canonical` + `languages` · ✅ Open Graph completo (con video) · ✅ Twitter Cards · ✅ Favicons/iconos por convención · ✅ `robots.ts` (sin disallow accidental) · ✅ `sitemap.ts` con URLs absolutas e imágenes/videos · ✅ JSON-LD `@graph` multi-entidad · ✅ Manifest PWA · ✅ SSR del contenido principal · ✅ Un solo `<h1>` y jerarquía de encabezados · ✅ `next.config.ts` con compresión, headers de seguridad, formatos AVIF/WebP y caché de assets.
