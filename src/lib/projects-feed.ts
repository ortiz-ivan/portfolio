import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>['data'];

/**
 * Feed público de proyectos para consumidores externos (p. ej. la pipeline de
 * contenido). Solo expone lo que ya está publicado en el sitio: links
 * disponibles con URL absoluta e imágenes listas, sin paths internos de src/.
 */
export function toFeedProject(slug: string, project: Project, site: URL) {
	return {
		slug,
		url: new URL(`/projects/${slug}`, site).href,
		name: project.name,
		priority: project.priority,
		eyebrow: project.eyebrow,
		isFeatured: project.isFeatured,
		tagline: project.tagline,
		summary: project.summary,
		longDescription: project.longDescription,
		highlight: project.highlight,
		tech: project.tech,
		technicalDecisions: project.technicalDecisions,
		results: project.results,
		caseStudy: project.caseStudy,
		links: project.links
			.filter((link) => link.available)
			.map(({ label, href, kind }) => ({ label, kind, href: new URL(href, site).href })),
		images: project.images
			.filter((image) => image.status === 'ready')
			.map(({ role, alt, caption }) => ({ role, alt, caption }))
	};
}

export function buildProjectsFeed(entries: { id: string; data: Project }[], site: URL) {
	return {
		version: 1,
		site: site.href,
		projects: [...entries]
			.sort((a, b) => a.data.priority - b.data.priority)
			.map((entry) => toFeedProject(entry.id, entry.data, site))
	};
}
