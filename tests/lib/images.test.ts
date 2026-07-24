import { describe, expect, it } from 'vitest';
import { getLocalImage } from '../../src/lib/images';

describe('getLocalImage', () => {
	it('resuelve una imagen existente a metadata de astro:assets', () => {
		const image = getLocalImage('/src/assets/images/kairos/02-ventas.jpg');

		expect(image).toBeDefined();
		expect(image?.src).toBeTypeOf('string');
		expect(image?.width).toBeGreaterThan(0);
		expect(image?.height).toBeGreaterThan(0);
	});

	it('devuelve undefined para un path que no existe en assets/images', () => {
		expect(getLocalImage('/src/assets/images/no-existe.jpg')).toBeUndefined();
	});

	it('devuelve undefined para paths fuera de assets/images (p. ej. public/)', () => {
		expect(getLocalImage('/favicon.png')).toBeUndefined();
	});
});
