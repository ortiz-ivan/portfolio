// Genera public/ivan-ortiz-cv.pdf a partir de cv/cv.html con un navegador Chromium en modo headless.
// Ruta del navegador: variable CHROME_PATH, o el primero que se encuentre entre las rutas conocidas.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const source = path.join(root, 'cv', 'cv.html');
const output = path.join(root, 'public', 'ivan-ortiz-cv.pdf');

const localAppData = process.env.LOCALAPPDATA ?? path.join(os.homedir(), 'AppData', 'Local');
const candidates = [
	process.env.CHROME_PATH,
	path.join(localAppData, 'BraveSoftware', 'Brave-Browser', 'Application', 'brave.exe'),
	'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
	'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	'/usr/bin/google-chrome',
	'/usr/bin/chromium'
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
	console.error(
		'No se encontró un navegador Chromium. Definí CHROME_PATH con la ruta al ejecutable.'
	);
	process.exit(1);
}

execFileSync(
	browser,
	[
		'--headless=new',
		'--disable-gpu',
		'--no-pdf-header-footer',
		`--print-to-pdf=${output}`,
		pathToFileURL(source).href
	],
	{ stdio: 'ignore' }
);

console.log(`CV generado en ${path.relative(root, output)}`);
