<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Neurovia Systems — project constraints

Read this before changing anything. This site is **live, bilingual and already ranking #1**
for "desarrollo de software a medida Villahermosa". Breaking these invariants costs real traffic.

## Build & deploy (critical)

- **Always build with `npx next build --webpack`.** Turbopack aborts on the deploy host:
  it has an old GLIBC, so the native SWC binary won't load and only the **wasm** SWC is
  available — and Turbopack requires native bindings.
- The config **must stay `next.config.mjs`** (plain JS). A TypeScript `next.config.ts`
  fails to load under the wasm SWC (`ERR_MODULE_NOT_FOUND`).
- Next is pinned to **`16.3.0-canary.69`**. Stable `16.2.9` fails the build while
  prerendering the internal `/_global-error` page (a Next bug). Revisit when 16.3 ships stable.
- Push to `master` triggers the Hostinger build. The live site returns **503 for 1–3 minutes**
  during the rebuild, then recovers. That is expected.
- **Verify with a green build before committing.**

## Bilingual architecture (do not fork components)

- Spanish lives at `/`, English at `/en`. **Both render the same shared components.**
- Every component takes `lang?: Locale` (default `"es"`) and reads its copy from
  `getDict(lang)` in `lib/i18n.ts`. **Never hardcode visible copy in a component** —
  add it to the dictionary, in **both** `es` and `en`.
- `en` is typed `typeof es`, so a missing key is a **TypeScript build failure**. That is intentional.
- Internal links must be locale-aware: `` `${localeBase(lang)}/slug` ``.
- Shared page templates: `components/ServicePage.tsx` (the 5 service pages) and
  `components/SistemasPage.tsx` (`/sistemas`). Their content lives in `lib/serviceContent.ts`
  (ES + EN records, plus locale-aware metadata / JSON-LD builders).

## SEO (do not regress)

- Exactly **one `<h1>` per page**, containing that page's local keyword. The root layout's
  `<noscript>` block deliberately uses a `<div>`, not an `<h1>`.
- Preserve metadata, canonicals, `hreflang` (es-MX / en-US / x-default), the JSON-LD
  (Organization + ProfessionalService in `app/layout.tsx`; Service + FAQPage on service pages)
  and `app/sitemap.ts`.

## Analytics (do not drop)

- GA4 is loaded in `app/layout.tsx` via `next/script`.
- **Every WhatsApp link** carries `onClick={() => window.gtag?.("event", "contacto_whatsapp")}`,
  and the `mailto:` carries `clic_correo`. These are the Google Ads conversions.
- `global.d.ts` types `window.gtag`. Components that need `onClick` are `"use client"`.

## Design system

- Colors, fonts and surfaces are **design tokens** in `app/globals.css`
  (`@theme` block + `:root { --accent … }`). **Recoloring the whole site = change those tokens**,
  not each component.
- The heading font is loaded in `app/layout.tsx` with `next/font/google`.

## Sections that must survive a redesign

`PuntoDeVenta`, `Crm` (section `id="crm"`, uses `public/projects/crm-login.png`),
the 5 service pages, and `/sistemas` — each in **both** languages.
