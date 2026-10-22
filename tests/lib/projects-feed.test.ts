import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildProjectsFeed, toFeedProject } from '../../src/lib/projects-feed';

const site = new URL('https://ivanortiz.dev');
const projectsDir = path.join(process.cwd(), 'src/content/projects');
const load = (slug: string) =>
	JSON.parse(readFileSync(path.join(projectsDir, `${slug}.json`), 'utf8'));

describe('toFeedProject', () => {
	it('arma la URL canónica del caso de estudio', () => {
		const project = toFeedProject('domus', load('domus'), site);
		expect(project.url).toBe('https://ivanortiz.dev/projects/domus');
	});

	it('convierte los links relativos en absolutos y descarta los no disponibles', () => {
		const base = load('domus');
		const project = toFeedProject(
			'domus',
			{
				...base,
				links: [
					{ label: 'Caso de estudio', href: '/projects/domus', kind: 'case-study', available: true },
					{ label: 'GitHub', href: 'https://github.com/x/y', kind: 'github-private', available: false }
				]
			},
			site
		);

		expect(project.links).toEqual([
			{ label: 'Caso de estudio', kind: 'case-study', href: 'https://ivanortiz.dev/projects/domus' }
		]);
	});

	it('expone solo imágenes listas y sin paths internos de src/', () => {
		const base = load('domus');
		const project = toFeedProject(
			'domus',
			{
				...base,
				images: [
					{ ...base.images[0], status: 'ready' },
					{ ...base.images[1], status: 'planned' }
				]
			},
			site
		);

		expect(project.images).toHaveLength(1);
		expect(project.images[0]).not.toHaveProperty('src');
	});
});

describe('buildProjectsFeed', () => {
	it('ordena los proyectos por prioridad', () => {
		const feed = buildProjectsFeed(
			[
				{ id: 'b', data: { ...load('domus'), priority: 2 } },
				{ id: 'a', data: { ...load('domus'), priority: 1 } }
			],
			site
		);

		expect(feed.version).toBe(1);
		expect(feed.projects.map((p) => p.slug)).toEqual(['a', 'b']);
	});
});
