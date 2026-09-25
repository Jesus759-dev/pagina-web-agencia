# Neurovia Systems — sitio web

Sitio de [neuroviasystems.com.mx](https://neuroviasystems.com.mx) hecho con Next.js
(App Router) y Tailwind. Bilingüe: español en `/` e inglés en `/en`, con todos los
textos en `lib/i18n.ts`.

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build de producción

El hosting corre una versión vieja de GLIBC, así que **el build tiene que ser con
webpack**, no con Turbopack:

```bash
npx next build --webpack
```

La configuración vive en `next.config.mjs` (tiene que seguir siendo `.mjs`).
Un push a `master` dispara el build en el hosting; el sitio responde 503 entre uno
y tres minutos mientras termina.

## Medición (GA4 y Meta Pixel)

La decisión de medir o no está centralizada en dos archivos:

- `lib/tracking-consent.ts` — las reglas.
- `components/Analytics.tsx` — carga (o no) los scripts.
- `lib/analytics.ts` — único lugar desde donde se dispara un evento.

Reglas:

1. **Solo se mide en el dominio real.** GA4 y el píxel solo se cargan si el
   hostname es `neuroviasystems.com.mx` o `www.neuroviasystems.com.mx`. En
   `localhost`, en vistas previas (`*.vercel.app`, `*.netlify.app`) o en cualquier
   otro dominio no se carga nada y se avisa una vez por consola:

   ```
   [Neurovia] Medición desactivada: host "localhost" no es el sitio de producción.
   ```

2. **Tráfico interno.** Para que tus propias visitas no ensucien los informes:

   | Acción | URL a abrir |
   |---|---|
   | Marcar este navegador como interno | `https://neuroviasystems.com.mx/?internal=1` |
   | Quitar la marca | `https://neuroviasystems.com.mx/?internal=0` |

   La marca se guarda en `localStorage` (`neurovia_internal`) y **no caduca**: hay
   que repetirlo en cada navegador y dispositivo que uses para probar (y de nuevo
   si borras datos del sitio). Mientras está puesta:

   - GA4 sigue midiendo, pero con `traffic_type: 'internal'`, que es lo que GA4
     usa para excluir tráfico interno (Administrar → Configuración de datos →
     Filtros de datos).
   - El píxel de Meta **no se carga**.

3. **Qué cuenta como conversión.** Solo `generate_lead` (formulario o chatbot con
   nombre y WhatsApp). Los clics a WhatsApp, al correo y al boletín son eventos
   secundarios: `whatsapp_click`, `email_click`, `newsletter_signup`.

## Captura de prospectos

- Formulario: `components/LeadForm.tsx` → `app/api/lead/route.ts`.
- Entrega: `lib/leadDelivery.ts`. Cada lead sale por **dos canales
  independientes** (si uno falla, el otro y la página `/gracias` siguen):
  Telegram y correo (Resend si hay `RESEND_API_KEY`, si no SMTP de Hostinger).
- Atribución de anuncios (`gclid`, `gbraid`, `wbraid`, `utm_*`):
  `lib/leadTracking.ts`; se guarda en `sessionStorage` y viaja con el lead.

### Variables de entorno

Los valores **no van en el repo** (es público). En el hosting viven en
`~/.config/neurovia/chat.env` (permisos 600), que `lib/chat/serverEnv.ts` carga al
arrancar. Nombres en `.env.example`:

```
ANTHROPIC_API_KEY=        # chatbot
TELEGRAM_BOT_TOKEN=       # avisos de lead
TELEGRAM_CHAT_ID=
LEADS_EMAIL_TO=           # ventas@neuroviasystems.com.mx
RESEND_API_KEY=           # opcional; si existe, tiene prioridad sobre SMTP
SMTP_HOST=                # smtp.hostinger.com
SMTP_PORT=                # 465
SMTP_USER=                # ventas@neuroviasystems.com.mx
SMTP_PASS=
LEAD_TEST_TOKEN=          # para /api/lead/test en producción
NEXT_PUBLIC_META_PIXEL_ID=
```

Prueba de entrega (no crea un lead real en tus reportes de conversión):

```
https://neuroviasystems.com.mx/api/lead/test?token=$LEAD_TEST_TOKEN
```

## Páginas por ciudad (SEO local)

Una plantilla compartida: `components/ServicePage.tsx` + el contenido en
`lib/serviceContent.ts` (diccionarios `es` y `en`, una entrada por slug). Para
agregar una ciudad:

1. Agrega el registro en `es` y en `en` de `lib/serviceContent.ts`.
2. Crea `app/<slug>/page.tsx` y `app/en/<slug>/page.tsx` copiando cualquiera de
   las existentes.
3. Ya está: el sitemap (`app/sitemap.ts`) las toma de `SERVICE_SLUGS`, y el
   footer lista las ciudades en `components/Footer.tsx`.

Ciudades con página propia: Villahermosa, Campeche, Mérida, Veracruz, Monterrey y
Guadalajara.
