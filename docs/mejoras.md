Auditoría técnica — Portfolio

1. Arquitectura y organización

Lightbox.astro es dead code completo — El componente existe (134 líneas) pero el evento open-lightbox nunca se dispara en ningún archivo. No está importado en ningún lado. La clase .lb-trigger en projects.css también es CSS muerto.

ProjectDetail.astro hace demasiado — 362 líneas con hero, carrusel, 5 secciones de contenido, footer y script de carrusel. Debería dividirse en CaseStudyHero, CaseStudyCarousel y CaseStudyContent.

data-screen-label attributes sin lector — Todas las secciones tienen data-screen-label="..." pero ningún JS lo lee. Son residuos de debug que nunca se limpiaron.

Breakpoints dispersos en tres archivos — responsive.css (920px, 600px), editorial-project.css (860px) y contact.css (760px) sin un punto de control único.

---
2. TypeScript / tipado

Astro.params.slug puede ser undefined — En pages/projects/[slug].astro:20, slug es string | undefined pero se pasa a <ProjectDetail slug={slug} /> que espera string. El compilador lo tolera por la garantía de rutas estáticas, pero el tipo no lo refleja.

ContactSection.title es un campo muerto — Existe en la interface site.ts:39 pero nunca se usa en el componente ni hay dato en el objeto. Dead field acumulado.

OFFSET_Y = 101 desacoplado de las constantes — ProjectsSection.astro:129 tiene el valor hardcodeado con comentario // half of 360 * 9/16. Si W cambia, OFFSET_Y queda desactualizado sin warning. Debería derivarse: const OFFSET_Y = Math.round(W * 9 / 16 / 2).

resize-images.mjs sin tipos — El resto del proyecto usa TypeScript strict pero este script es .mjs puro. Debería ser .mts o tener JSDoc types mínimos.

---
3. Accesibilidad (a11y)

Nav activo sin aria-current — NavBar.astro:27 aplica clase active por JS pero sin aria-current="page". Un screen reader no puede detectar el ítem activo. (WCAG 2.4.3 — nivel AA)

aria-controls faltante en el toggle — El <button class="nav-toggle"> tiene aria-expanded pero no aria-controls. Sin eso, el screen reader no asocia el botón con el menú.

Sin skip navigation link — No existe en ningún archivo. (WCAG 2.4.1 — nivel A, el más básico)

El formulario no comunica "enviando" a AT — Al enviar, solo cambia submitBtn.innerHTML. Sin aria-busy="true" ni aria-disabled semántico, un usuario de screen reader no sabe que hay una operación en curso.

---
4. Performance@font-face.

No se usa <Image> de Astro — Todas las imágenes del carrusel usan <img> HTML manual con srcset hardcodeado. astro:assets daría WebP/AVIF automático, optimización de calidad y prevención de CLS sin el script resize-images.mjs.

will-change: transform en todos los .btn siempre — tokens.css:221 lo aplica permanentemente, no solo en hover. Crea capas de compositing GPU para cada botón en la página aunque no estén siendo animados.

favicon-round.png pesa 60 KB — Un favicon no debería pesar más de 5-10 KB.

buildSrcset() asume archivos -640 que pueden no existir — ProjectDetail.astro:7 construye image-640.jpg 640w automáticamente. Si el script resize-images.mjs no fue corrido para esa imagen, el srcset apunta a un 404.

---
5. SEO

Ivan Ortiz sin acento en títulos de proyectos — pages/projects/[slug].astro:23: title={`${project.name} | Ivan Ortiz`}. El resto del sitio usa Iván Ortiz. Inconsistencia de marca personal en indexación.

Sin og:image:alt — Twitter/X lo considera requerido para accesibilidad y puede penalizar previsualizaciones sin este tag.

Sin datos estructurados JSON-LD — No hay application/ld+json en ningún archivo. El schema Person con sameAs a LinkedIn y GitHub mejora la presencia en Knowledge Graph y rich results de Google para búsquedas de tu nombre.

canonicalURL puede tener inconsistencias de trailing slash — Layout.astro:17 construye la URL con Astro.url.pathname. Si el hosting sirve URLs con y sin trailing slash sin redirigir, hay contenido duplicado potencial.

---
6. Consistencia de código

Inline styles duplicados en dos branches — ProjectDetail.astro:78 y :166 tienen exactamente style="opacity:0.4;cursor:default". Debería ser una clase .btn--unavailable.

~65 líneas de CSS muerto en projects.css — Clases como .proj-featured, .proj-index, .proj-eyebrow, .proj-visual, .proj-cover-img no existen en ningún template actual. Son remanentes de un diseño previo de tarjetas.

.form-honeypot definida en CSS pero nunca aplicada — contact.css:139 tiene .form-honeypot { display: none; } pero el honeypot en ContactSection.astro:38 usa style="display:none" inline. Dead CSS.

Colores hardcodeados fuera del sistema de tokens — contact.css:205 tiene color: #c87070 (rojo de error) sin variable. nav.css y responsive.css usan rgba(16, 15, 13, 0.72) y rgba(16, 15, 13, 0.96) hardcodeados en lugar de derivarlos de --bg.

Indentación rota en site.ts:94 — El segundo ítem del array items en contactSection no tiene el tab de indentación. Menor pero visible.

---
7. Seguridad

PUBLIC_HCAPTCHA_SITE_KEY muerta en .env — La clave existe por un commit de integración que fue abandonada. Expone información del stack de seguridad sin propósito.

rel="noopener" sin noreferrer — Todos los links externos usan solo noopener. Sin noreferrer, el header Referer se envía a LinkedIn, GitHub, etc., filtrando la URL del visitante.

submitBtn.innerHTML para insertar HTML — ContactSection.astro:151 usa innerHTML para actualizar el botón. El contenido es un literal controlado (no hay XSS real), pero textContent + manipulación DOM sería la práctica correcta.

---
8. Escalabilidad del content schema

El schema limita a exactamente 3 proyectos — content.config.ts:23 usa z.union([z.literal(1), z.literal(2), z.literal(3)]). Agregar un 4to proyecto requiere modificar el schema. z.number().int().positive() lo resuelve.

features nunca se renderiza — Los tres JSONs tienen el campo con contenido real pero ProjectDetail.astro nunca lo accede. O se elimina del schema o se muestra.

isFeatured y priority son redunda
---
9. Buenas prácticas de Astro

IntersectionObserver acumulados sin disconnect — Layout.astro:73 y index.astro:48 crean nuevos observers en cada astro:page-load con View Transitions sin desconectar el anterior. Memory leak progresivo en navegaciones sucesivas.

cycleTimer no cancelado en navegación — ProjectsSection.astro: el setInterval del ciclo de imágenes solo se cancela en mouseleave. Si el usuario navega durante el hover, el interval sigue ejecutando código sobre DOM que ya no existe. Debería cancelarse en astro:before-swap.

output: 'static' no declarado explícitamente — astro.config.mjs no declara el output mode. Aunque es el default, declararlo documenta la intención y previene cambios accidentales.

---
Tabla de prioridades

┌───────────┬───────────────────────────────────────────────────┬───────────────────────┐
│ Prioridad │                     Hallazgo                      │        Impacto        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ ALTA      │ logo_final.png 465KB + dimensiones OG incorrectas │ Performance + SEO     │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ ALTA      │ IntersectionObserver acumulados sin disconnect    │ Memory leak real      │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ ALTA      │ Nav activo sin aria-current                       │ Accesibilidad WCAG A  │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ ALTA      │ Sin skip navigation link                          │ Accesibilidad WCAG A  │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ ALTA      │ Ivan Ortiz sin acento en títulos de proyecto      │ SEO de marca personal │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ MEDIA     │ Lightbox.astro dead code completo                 │ 134 líneas de deuda   │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ MEDIA     │ ~65 líneas CSS muerto en projects.css             │ Mantenibilidad        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ MEDIA     │ Schema limita a exactamente 3 proyectos           │ Escalabilidad         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ MEDIA     │ features en schema nunca renderizado              │ Inconsistencia        │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ MEDIA     │ rel="noopener" sin noreferrer                     │ Seguridad             │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ MEDIA     │ cycleTimer no cancelado en navegación             │ Bug potencial         │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ BAJA      │ will-change: transform permanente en botones      │ GPU memory            │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ BAJA      │ PUBLIC_HCAPTCHA_SITE_KEY muerta en .env           │ Limpieza              │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ BAJA      │ Colores hardcodeados fuera del sistema de tokens  │ Consistencia          │
├───────────┼───────────────────────────────────────────────────┼───────────────────────┤
│ BAJA      │ OFFSET_Y no derivado de constantes                │ Mantenibilidad        │