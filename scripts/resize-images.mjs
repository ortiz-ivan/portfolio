import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const IMAGES_DIR = './public/images';
const WIDTHS = [640];
const EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function processDir(dir) {
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
		// Skip already-generated files (name ends in -NNN)
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
