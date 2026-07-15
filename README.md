# Portfolio — Iván Ortiz

Sitio personal construido con [Astro](https://astro.build), enfocado en mostrar experiencia como desarrollador fullstack a través de proyectos con case studies detallados (problema → solución → arquitectura).

🔗 **Live:** [ivanortiz.dev](https://ivanortiz.dev)

## Stack

- **[Astro 6](https://astro.build)** — sitio estático, sin runtime de framework en el cliente
- **TypeScript** — tipado estricto en componentes, datos y content collections
- **Content Collections** (`astro:content`) — los proyectos se definen como JSON validados contra un schema Zod en `src/content.config.ts`
- **CSS puro** por sección (`src/styles/editorial/`), sin framework de utilidades
- **`astro:assets`** — optimización automática de imágenes (WebP, srcset responsive) en build time
- **[Web3Forms](https://web3forms.com)** — envío del formulario de contacto sin backend propio
- Deploy en **Netlify**, con cabeceras de seguridad (CSP con hashes, HSTS, X-Frame-Options, etc.) generadas en `dist/_headers` por `scripts/generate-headers.mjs` tras cada build

## Estructura

```
src/
├── components/       # Secciones y piezas de UI (.astro)
├── content/
│   └── projects/     # Un .json por proyecto, validado por content.config.ts
├── data/
│   └── site.ts        # Contenido editable: hero, experiencia, contacto
├── layouts/
│   └── Layout.astro   # <head>, SEO, JSON-LD, animaciones globales
├── pages/
│   ├── index.astro
│   └── projects/[slug].astro
└── styles/
```

Cada proyecto (`src/content/projects/*.json`) define su propio case study: problema, solución, capas de arquitectura, decisiones técnicas y resultados. El schema Zod en `src/content.config.ts` valida esa estructura en build time.

## Comandos

Este proyecto usa **pnpm**.

| Comando             | Acción                                        |
| :------------------ | :-------------------------------------------- |
| `pnpm install`      | Instala dependencias                          |
| `pnpm dev`          | Levanta el servidor local en `localhost:4321` |
| `pnpm build`        | Genera el sitio estático en `./dist/`         |
| `pnpm preview`      | Sirve el build de producción localmente       |
| `pnpm lint`         | Corre ESLint sobre `.astro`, `.ts` y `.mjs`   |
| `pnpm format`       | Formatea el proyecto con Prettier             |
| `pnpm format:check` | Verifica formato sin escribir (usado en CI)   |

## Variables de entorno

```
PUBLIC_WEB3FORMS_KEY=   # access key pública de Web3Forms para el formulario de contacto
```

Ver `.env.example` si existe, o crear `.env` con la variable de arriba antes de correr `pnpm dev`.
