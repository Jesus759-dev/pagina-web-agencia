# Auditoría GEO / SEO — Neurovia Systems

**Fecha:** 2026-07-22
**Dominio:** https://neuroviasystems.com.mx
**Objetivo:** presencia legítima y verificable para buscadores tradicionales y motores con IA (ChatGPT Search / OAI-SearchBot, Google AI Overviews, Bing/Copilot).
**Alcance de este documento:** SOLO auditoría. No se modificó ningún archivo estructural para generarlo.

> **Regla base respetada:** nada de contenido falso, reseñas falsas, clientes/ubicaciones inventadas, keyword stuffing, doorway ni backlinks artificiales. Este reporte solo describe el estado actual y prioriza mejoras legítimas.

---

## 0. Resumen ejecutivo

El sitio **ya tiene una base técnica de SEO fuerte** (Next.js App Router, bilingüe ES/EN, metadata/canonicals/hreflang, JSON-LD con `@graph`, sitemap, robots, GA4 + conversión Ads, un solo H1 por página). **Crawlers legítimos entran sin bloqueo (200), incluido OAI-SearchBot.** Y ya rankea **#1** en Google para "desarrollo de software a medida Villahermosa".

Lo que **falta** para cumplir la misión completa son piezas de **contenido y entidad**, no de infraestructura:
- Página de **ERP a medida** (no existe).
- Páginas **por industria** (transporte, petróleo, comercializadoras, construcción) — no existen.
- **Casos de éxito** como páginas propias (hoy solo son tarjetas en Proyectos).
- Página **"Nosotros/Empresa"** y **"Contacto"** dedicadas (hoy solo secciones ancla del home).
- **BreadcrumbList** schema y regla **explícita de OAI-SearchBot** en robots.
- Documentación GEO (`geo-target-queries.md`, `geo-visibility.md`, `geo-roadmap.md`).
- Ajuste de **entidad**: reforzar "desarrollo de software" como categoría principal (no reducir a "diseño web").

**Riesgo mayor detectado:** ninguno bloqueante. El sitio es indexable. El reto real es **construir contenido/autoridad**, y que las páginas de **Monterrey/Guadalajara** (ya creadas) se mantengan honestas (servicio remoto) y no deriven en doorway.

---

## 1. Arquitectura actual

| Aspecto | Estado |
|---|---|
| Framework | **Next.js 16 (App Router)** + **Tailwind v4** + **TypeScript** |
| Render | Componentes servidor (SSR/prerender estático). Todas las páginas salen como HTML estático (`○`). |
| Bilingüe | **ES en `/`**, **EN en `/en`**. Diccionario único en `lib/i18n.ts` (componentes compartidos). |
| Build/deploy | **Hostinger** (GLIBC viejo → `next build --webpack`, config `.mjs`, Next `16.3.0-canary.69`). Push a `master` → rebuild (503 ~1–3 min → vuelve). |
| Analítica | **GA4** (`G-PBY374Y0E3`) + **Google Ads** conversión `ads_conversion_Contacto_1` en los CTA de contacto. |
| Verificación Google | `public/googlef2c757601493899c.html` presente. |

**Componentes reutilizables clave:** `ServicePage` (plantilla de las páginas de servicio), `SistemasPage`, `Navbar/Footer/Contact/Process/Testimonials` (compartidos ES/EN), `Portfolio` (galería de proyectos), `ServiceReel` (reels de video con lightbox).

---

## 2. Inventario de rutas (20 páginas)

**Español (`/`):**
1. `/` (home)
2. `/desarrollo-de-software-a-medida-villahermosa`
3. `/automatizacion-con-ia-tabasco`
4. `/sistema-punto-de-venta-villahermosa`
5. `/diseno-de-paginas-web-villahermosa`
6. `/desarrollo-de-aplicaciones-web-tabasco`
7. `/agentes-de-inteligencia-artificial`
8. `/desarrollo-de-software-a-medida-monterrey`
9. `/desarrollo-de-software-a-medida-guadalajara`
10. `/sistemas` (catálogo de productos — NO en sitemap por diseño; es portal, no landing SEO)

**Inglés (`/en/...`):** las mismas 10 (incluye `/en/sistemas`).

> Los slugs de las páginas EN se mantienen en español (ej. `/en/desarrollo-de-software-a-medida-villahermosa`). Funciona; matiz menor de SEO en inglés.

---

## 3. SEO técnico — estado por punto

| # | Punto auditado | Estado | Nota |
|---|---|---|---|
| 6 | Canonical URLs | ✅ | Cada página su canonical absoluto; `/path/` con slash hace **308** a `/path` (consistente). |
| 7 | hreflang | ✅ | `es-MX / en-US / x-default` en home y páginas de servicio (metadata + sitemap alternates). |
| 8 | robots.txt | ⚠️ | `allow: /`, `disallow: /api/`, sitemap y host correctos. **Falta regla explícita `OAI-SearchBot`** (hoy permitido solo por `*`). |
| 9 | sitemap.xml | ✅ | Home + `/en` + 8 páginas de servicio ES + 8 EN, con `lastModified`, `changeFrequency`, `priority`, `alternates` y `images/videos` en el home. Genera desde `SERVICE_SLUGS`. |
| 10 | JSON-LD / Schema | 🟡 | `@graph` en `app/layout.tsx`: **Organization + WebSite + WebPage + VideoObject + ProfessionalService** (con `@id .../#organization`, `areaServed` Villahermosa/Tabasco/México/LATAM, `OfferCatalog`). Páginas de servicio: **Service + FAQPage**. **Falta: BreadcrumbList**; evaluar `LocalBusiness` y `CaseStudy` cuando haya páginas. |
| 11 | Open Graph / Twitter | ✅ | OG (con video) + Twitter `summary_large_image` en home y páginas de servicio. |
| 12–13 | Títulos y meta descriptions | ✅ | Únicos por página, template `%s \| Neurovia Systems`, descriptions 150–160 con ubicación + CTA. Sin keyword stuffing. |
| 14 | H1/H2/H3 | ✅ | **Un solo `<h1>` por página** con la keyword; el `<noscript>` del layout usa `<div>` a propósito. Jerarquía H2/H3 correcta. |
| 15 | Enlaces internos | 🟡 | Existen (Services→páginas, Portfolio→sistemas/productos, ServicePage→related). **Falta enlazado temático** tipo hub (software↔ERP↔automatización↔IA↔casos). |
| 16–18 | Duplicadas / similares / thin | ⚠️ | Las 5 páginas de servicio originales están bien y diferenciadas. **Riesgo:** Monterrey y Guadalajara comparten estructura con Villahermosa — verificar que el cuerpo sea **realmente distinto** (contexto de cada ciudad + servicio remoto) para no ser doorway. |
| 19 | Indexación | ✅ | Todo prerenderizado y en sitemap; `#1` ya logrado en una keyword. Las páginas nuevas requieren solicitar indexación en Search Console. |
| 20–21 | 404 / redirects | ✅ | Sin 404 conocidos; único redirect es el 308 de trailing-slash (correcto). |
| 22 | Páginas en inglés | ✅ | `/en` completo y con hreflang. |
| 23 | Imágenes sin ALT | ✅ | Todas las `<img>` tienen ALT descriptivo (proyectos, POS, CRM, SOTOP, etc.). |
| 24 | Videos | 🟡 | Hero (esfera) + 5 reels de servicio + `neurovia-showcase.mp4`. **Los reels y el hero comunican con texto en la página** (títulos/descripciones), pero conviene verificar que ningún dato clave viva **solo** en video. |
| 25 | Contenido solo visual | 🟡 | El grueso del contenido es texto HTML (bien). Revisar que claims de los videos tengan respaldo textual. |
| 26–28 | Rendimiento / accesibilidad / CWV | 🟡 | Videos comprimidos (~115 KB los reels), `next/image` no se usa (se usan `<img>` con lazy nativo); foco de teclado accesible añadido. **Pendiente medir CWV** (LCP del hero-video, JS de framer-motion/Spline). |

---

## 4. Crawlability (verificado en vivo)

| User-Agent | Respuesta |
|---|---|
| Googlebot | **200 OK** |
| Bingbot | **200 OK** |
| **OAI-SearchBot** | **200 OK** |
| GPTBot | **200 OK** |

✅ **No hay bloqueo 403 de WAF/hosting a crawlers legítimos.** `robots.txt` en vivo permite `/` y solo bloquea `/api/`.

---

## 5. Entidad y consistencia (crítico para GEO)

**Objetivo de entidad:** `Neurovia Systems → empresa de tecnología → desarrollo de software a medida → Villahermosa/Tabasco → ERP → automatización → IA`.

Estado:
- ✅ El `ProfessionalService`/`Organization` schema y el copy de Servicios ya lideran con **software + IA**.
- ⚠️ Existe una página y una tarjeta de **"Diseño de páginas web"**. No hay que eliminarla, pero **el brief advierte no reducir la empresa a "agencia de diseño web"**. La jerarquía visible y el schema deben dejar claro que la categoría principal es **desarrollo de software empresarial**, y el diseño web es un servicio secundario.
- 🟡 Falta una **página "Empresa/Nosotros"** con texto suficiente para que un buscador fije la entidad (hoy solo la sección `#nosotros` = "Por qué Neurovia").

---

## 6. Gaps / oportunidades priorizadas

| Prioridad | Falta | Fase (brief §30) |
|---|---|---|
| 🔴 Alta | Regla explícita **OAI-SearchBot** en robots | Fase 2 |
| 🔴 Alta | **BreadcrumbList** JSON-LD en páginas internas | Fase 5 |
| 🔴 Alta | Página **ERP a medida en Villahermosa** (no existe) | Fase 8 |
| 🔴 Alta | Página **Empresa/Nosotros** dedicada | Fase 6 |
| 🔴 Alta | Página **Contacto** dedicada (con datos reales: WhatsApp +52 993 722 6350, soporte@neuroviasystems.com.mx, Villahermosa) | Fase 6 |
| 🟡 Media | Páginas **por industria** (transporte, petróleo, comercializadoras, construcción) — solo con contenido real y diferenciado | Fase 10 |
| 🟡 Media | **Casos de éxito** como páginas (hoy tarjetas): petrolero/requisiciones, Chemiservis, mantenimiento vehicular, Royers, Provalsa, Alpha Mobil, SOTOP — sin inventar métricas ni clientes no autorizados | Fase 11 |
| 🟡 Media | **Enlazado interno temático** (hubs software↔ERP↔IA↔casos) | Fase 12 |
| 🟡 Media | Reforzar **entidad "software"** sobre "diseño web" en jerarquía y schema | Fase 4 |
| 🟢 Baja | Docs GEO: `geo-target-queries.md`, `geo-visibility.md`, `geo-roadmap.md`, `geo-seo-report.md` | Fase 14 |
| 🟢 Baja | Medir **CWV** y optimizar LCP del hero | Fase 13 |
| 🟢 Baja | Recomendaciones **Google Business Profile** y menciones externas (sin acciones automáticas) | Fase 22–23 |

---

## 7. Lo que YA está hecho (NO rehacer)

Para no duplicar trabajo, esto ya cumple y solo se **mejora si aporta**, no se reconstruye:
- robots.ts, sitemap.ts (con alternates + images/videos), metadata/canonical/hreflang global.
- JSON-LD Organization/ProfessionalService/WebSite/WebPage/VideoObject + Service/FAQPage por página.
- 5 páginas de servicio locales sólidas (software, automatización, POS, diseño web, aplicaciones) + agentes de IA — todas ES/EN, con FAQ y ~700 palabras.
- Home bilingüe con secciones ricas en texto (Servicios, Punto de Venta, CRM, Proyectos, Por qué Neurovia, Proceso, Testimonios, Contacto).
- Galería de proyectos reales (SOTOP, Chemiservis/petrolero, Mantenimiento, Royers, Provalsa, Alpha Mobil, TACEF) + productos propios enlazados (CRM, POS, Huella, SGI, catálogo `/sistemas`).
- ALT en imágenes, reels de servicio con texto de apoyo, GA4 + conversión Ads.

---

## 8. Riesgos a vigilar

1. **Monterrey/Guadalajara (doorway):** ya existen. Son legítimas SOLO si el cuerpo es genuinamente distinto y honesto ("trabajamos en remoto desde Villahermosa"). Si se vuelven copias con find-replace, Google/IA las pueden tratar como thin/doorway. **Mantener Villahermosa como centro de marca.**
2. **Dispersión de entidad:** demasiadas ciudades/servicios sin refuerzo textual pueden diluir la señal "software Villahermosa". Priorizar profundidad sobre cantidad de URLs.
3. **CWV/hero-video:** el video del hero puede afectar LCP en móvil; medir.
4. **Sin acceso a Search Console/GBP:** la indexación y las reseñas dependen de acciones manuales del cliente (documentar, no automatizar).

---

## 9. Orden de ejecución propuesto (tras aprobación)

Siguiendo §30 del brief, y **empezando por lo seguro**:
- **Fase 2** — robots (regla OAI-SearchBot explícita) + revisar sitemap. *(cambio pequeño y seguro)*
- **Fase 4–5** — reforzar entidad "software" + añadir BreadcrumbList. *(seguro)*
- **Fase 6** — páginas **Nosotros** y **Contacto** (contenido real). *(estructural → confirmación)*
- **Fase 8** — página **ERP a medida**. *(estructural → confirmación)*
- **Fase 10–11** — industrias + casos de éxito, solo con contenido real. *(estructural → confirmación)*
- **Fase 12–14** — enlazado interno, performance, docs GEO.
- **Fase 15** — `/docs/geo-seo-report.md` + `/docs/geo-roadmap.md` (30/60/90 días).

> Cada fase estructural se presenta antes de aplicar (archivo, qué, por qué, riesgo) y se verifica con build verde antes de commit/push.

---

**FIN DE LA AUDITORÍA.** No se hicieron cambios estructurales. Esperando confirmación para iniciar la Fase 2.
