import { readFileSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { collections } from '../src/content.config';

const projectsDir = path.join(process.cwd(), 'src/content/projects');

const { schema } = collections.projects;
if (!schema || typeof schema === 'function') {
	throw new Error('Se esperaba un schema estático para "projects", no una función de contexto.');
}

describe('schema de la colección "projects"', () => {
	it('valida todos los archivos JSON existentes en src/content/projects', async () => {
		const files = (await readdir(projectsDir)).filter((file) => file.endsWith('.json'));
		expect(files.length).toBeGreaterThan(0);

		for (const file of files) {
			const raw = await readFile(path.join(projectsDir, file), 'utf8');
			const result = schema.safeParse(JSON.parse(raw));

			expect(
				result.success,
				result.success
					? ''
					: `${file} no cumple el schema:\n${JSON.stringify(result.error.issues, null, 2)}`
			).toBe(true);
		}
	});

	it('rechaza un proyecto al que le faltan campos requeridos', () => {
		const result = schema.safeParse({ name: 'Proyecto incompleto' });
		expect(result.success).toBe(false);
	});

	it('rechaza un link con un "kind" fuera del enum permitido', () => {
		// cualquier proyecto real sirve de base válida; solo corrompemos "links"
		const base = JSON.parse(readFileSync(path.join(projectsDir, 'kairos.json'), 'utf8'));
		const result = schema.safeParse({
			...base,
			links: [
				{ label: 'Demo', href: 'https://example.com', kind: 'not-a-real-kind', available: true }
			]
		});
		expect(result.success).toBe(false);
	});
});
