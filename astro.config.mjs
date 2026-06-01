// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://ortizivandev.netlify.app';

export default defineConfig({
	site: SITE_URL,
	integrations: [sitemap()]
});
