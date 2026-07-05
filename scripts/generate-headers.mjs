// Postbuild: computes CSP hashes for Astro's inline <script>/<style> tags
// and writes a Netlify `_headers` file into dist/.
import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/, '$1');

async function findHtmlFiles(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map((entry) => {
			const res = path.join(dir, entry.name);
			return entry.isDirectory() ? findHtmlFiles(res) : res.endsWith('.html') ? [res] : [];
		})
	);
	return files.flat();
}

function sha256(content) {
	return `'sha256-${createHash('sha256').update(content, 'utf8').digest('base64')}'`;
}

async function collectHashes(files) {
	const scriptHashes = new Set();
	const styleHashes = new Set();

	for (const file of files) {
		const html = await readFile(file, 'utf8');

		for (const match of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
			const [, attrs, content] = match;
			if (/\bsrc=/.test(attrs) || /type=["']application\/ld\+json["']/.test(attrs)) continue;
			if (content.trim() === '') continue;
			scriptHashes.add(sha256(content));
		}

		for (const match of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
			const content = match[1];
			if (content.trim() === '') continue;
			styleHashes.add(sha256(content));
		}
	}

	return { scriptHashes, styleHashes };
}

function buildCsp(scriptHashes, styleHashes) {
	const directives = {
		'default-src': ["'self'"],
		'script-src': ["'self'", ...scriptHashes],
		'style-src': ["'self'", 'https://fonts.googleapis.com', ...styleHashes],
		'font-src': ["'self'", 'https://fonts.gstatic.com'],
		'img-src': ["'self'", 'data:'],
		'connect-src': ["'self'", 'https://api.web3forms.com'],
		'form-action': ["'self'", 'https://api.web3forms.com'],
		'frame-ancestors': ["'none'"],
		'base-uri': ["'self'"],
		'object-src': ["'none'"]
	};

	return Object.entries(directives)
		.map(([key, values]) => `${key} ${values.join(' ')}`)
		.join('; ');
}

const files = await findHtmlFiles(DIST);
const { scriptHashes, styleHashes } = await collectHashes(files);
const csp = buildCsp(scriptHashes, styleHashes);

const headers = `/*
  Content-Security-Policy: ${csp}
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=()
  Strict-Transport-Security: max-age=63072000; includeSubDomains
`;

await writeFile(new URL('../dist/_headers', import.meta.url), headers);
console.log(`_headers written with ${scriptHashes.size} script hash(es) and ${styleHashes.size} style hash(es).`);
