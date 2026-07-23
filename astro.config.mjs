// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://ivanortiz.dev';

export default defineConfig({
	site: SITE_URL,
	output: 'static',
	trailingSlash: 'never',
	integrations: [sitemap()],
	build: {
		// El CSS total del sitio es chico (~16KB): inlinearlo elimina el último
		// stylesheet externo render-blocking (ArrowIcon.css) de la ruta crítica.
		inlineStylesheets: 'always'
	}
});
