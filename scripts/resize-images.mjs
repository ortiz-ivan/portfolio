// @ts-check
import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

/** @type {string} */
const IMAGES_DIR = './public/images';

/** @type {number[]} */
const WIDTHS = [640];

/** @type {Set<string>} */
const EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

/**
 * @param {string} dir
 * @returns {Promise<void>}
 */
async function processDir(dir) {
	/** @type {import('fs').Dirent[]} */
	let entries;
	try {
		entries = readdirSync(dir, { withFileTypes: true });
	} catch {
		return;
	}

	for (const entry of entries) {
		const fullPath = join(dir, entry.name);
		if (entry.isDirectory()) {
			await processDir(fullPath);
			continue;
		}
		const ext = extname(entry.name).toLowerCase();
		if (!EXTS.has(ext)) continue;

		const base = basename(entry.name, ext);
		// Skip already-generated variants (name ends in -NNN)
		if (/-\d+$/.test(base)) continue;

		for (const w of WIDTHS) {
			const outName = `${base}-${w}${ext}`;
			const outPath = join(dir, outName);
			if (existsSync(outPath)) continue;
			await sharp(fullPath).resize(w).toFile(outPath);
			console.log(`  generated ${outPath}`);
		}
	}
}

console.log('Generating responsive image variants…');
await processDir(IMAGES_DIR);
console.log('Done.');
