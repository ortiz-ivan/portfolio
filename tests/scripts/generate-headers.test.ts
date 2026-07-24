import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { buildCsp, collectHashes, findHtmlFiles, sha256 } from '../../scripts/generate-headers.mjs';

describe('sha256', () => {
	it('produce un source-hash CSP con el formato sha256-<base64>', () => {
		const expected = createHash('sha256').update('console.log(1)', 'utf8').digest('base64');
		expect(sha256('console.log(1)')).toBe(`'sha256-${expected}'`);
	});

	it('es determinístico para el mismo contenido', () => {
		expect(sha256('a')).toBe(sha256('a'));
	});

	it('difiere para contenidos distintos', () => {
		expect(sha256('a')).not.toBe(sha256('b'));
	});
});

describe('buildCsp', () => {
	it('incluye las directivas base incluso sin hashes', () => {
		const csp = buildCsp(new Set(), new Set());

		expect(csp).toContain("default-src 'self'");
		expect(csp).toContain("frame-ancestors 'none'");
		expect(csp).toContain("object-src 'none'");
		expect(csp).toContain("connect-src 'self' https://api.web3forms.com");
		expect(csp).toContain("form-action 'self' https://api.web3forms.com");
	});

	it('agrega los hashes de script y style provistos a sus directivas', () => {
		const csp = buildCsp(new Set(["'sha256-script'"]), new Set(["'sha256-style'"]));

		expect(csp).toContain("script-src 'self' 'unsafe-inline' 'sha256-script'");
		expect(csp).toContain("style-src 'self' 'unsafe-inline' 'sha256-style'");
	});
});

describe('findHtmlFiles + collectHashes', () => {
	let dir: string;

	beforeEach(async () => {
		dir = await mkdtemp(path.join(tmpdir(), 'generate-headers-test-'));
	});

	afterEach(async () => {
		await rm(dir, { recursive: true, force: true });
	});

	it('recorre subdirectorios y solo devuelve archivos .html', async () => {
		await mkdir(path.join(dir, 'projects'));
		await writeFile(path.join(dir, 'index.html'), '<html></html>');
		await writeFile(path.join(dir, 'projects', 'kairos.html'), '<html></html>');
		await writeFile(path.join(dir, 'notes.txt'), 'no es html');

		const files = await findHtmlFiles(dir);

		expect(files.sort()).toEqual(
			[path.join(dir, 'index.html'), path.join(dir, 'projects', 'kairos.html')].sort()
		);
	});

	it('hashea scripts y estilos inline mientras ignora scripts externos, ld+json y bloques vacíos', async () => {
		const html = `<!doctype html><html><head>
			<script>const a = 1;</script>
			<script src="/app.js"></script>
			<script type="application/ld+json">{"a":1}</script>
			<script></script>
			<style>.a{color:red}</style>
			<style></style>
		</head><body></body></html>`;
		await writeFile(path.join(dir, 'index.html'), html);

		const files = await findHtmlFiles(dir);
		const { scriptHashes, styleHashes } = await collectHashes(files);

		expect(scriptHashes).toEqual(new Set([sha256('const a = 1;')]));
		expect(styleHashes).toEqual(new Set([sha256('.a{color:red}')]));
	});

	it('deduplica hashes iguales entre varios archivos', async () => {
		const html = '<html><script>const a = 1;</script></html>';
		await writeFile(path.join(dir, 'a.html'), html);
		await writeFile(path.join(dir, 'b.html'), html);

		const files = await findHtmlFiles(dir);
		const { scriptHashes } = await collectHashes(files);

		expect(scriptHashes.size).toBe(1);
	});
});
