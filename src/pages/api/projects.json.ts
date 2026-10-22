import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildProjectsFeed } from '../../lib/projects-feed';

// Se genera en el build como dist/api/projects.json. Lo consume la pipeline de
// contenido: si algo no está publicado acá, tampoco se publica en redes.
export const GET: APIRoute = async ({ site }) => {
	if (!site) throw new Error('Falta `site` en astro.config para generar URLs absolutas.');

	const feed = buildProjectsFeed(await getCollection('projects'), site);

	return new Response(JSON.stringify(feed, null, '\t'), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' }
	});
};
