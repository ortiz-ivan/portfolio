import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectLink = z.object({
	label: z.string(),
	href: z.string(),
	kind: z.enum(['demo', 'github', 'github-private', 'case-study']),
	available: z.boolean()
});

const projectImage = z.object({
	role: z.enum(['cover', 'dashboard', 'detail']),
	alt: z.string(),
	src: z.string().optional(),
	caption: z.string(),
	status: z.enum(['planned', 'ready'])
});

const projects = defineCollection({
	loader: glob({ pattern: '*.json', base: './src/content/projects' }),
	schema: z.object({
		name: z.string(),
		priority: z.union([z.literal(1), z.literal(2), z.literal(3)]),
		eyebrow: z.string(),
		isFeatured: z.boolean(),
		summary: z.string(),
		longDescription: z.string(),
		highlight: z.string(),
		tech: z.array(z.string()),
		features: z.array(z.string()),
		technicalDecisions: z.array(z.string()),
		results: z.array(z.string()),
		caseStudy: z.object({
			problem: z.object({
				title: z.string(),
				description: z.string(),
				points: z.array(z.string())
			}),
			solution: z.object({
				title: z.string(),
				description: z.string(),
				points: z.array(z.string())
			}),
			architecture: z.object({
				title: z.string(),
				description: z.string(),
				layers: z.array(z.object({ name: z.string(), description: z.string() }))
			}),
			technologiesNote: z.string()
		}),
		links: z.array(projectLink),
		images: z.array(projectImage)
	})
});

export const collections = { projects };
