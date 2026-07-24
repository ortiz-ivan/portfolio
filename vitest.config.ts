/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

// getViteConfig reutiliza la config de Vite de Astro (alias, plugin de
// astro:assets, etc.) para que los tests vean los mismos módulos que el build real.
export default getViteConfig({
	test: {
		environment: 'node',
		include: ['tests/**/*.test.ts']
	}
});
