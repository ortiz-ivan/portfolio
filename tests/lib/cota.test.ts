import { describe, expect, it } from 'vitest';
import { compareLengths, layoutSegments, speedup } from '../../src/lib/cota';

describe('layoutSegments', () => {
	it('reparte el ancho en proporción y encadena los segmentos', () => {
		const [a, b] = layoutSegments([
			{ label: 'Backend', count: 75 },
			{ label: 'Frontend', count: 25 }
		]);
		expect(a).toMatchObject({ start: 0, end: 75, mid: 37.5 });
		expect(b).toMatchObject({ start: 75, end: 100, mid: 87.5 });
	});

	it('un solo segmento ocupa todo el ancho', () => {
		expect(layoutSegments([{ label: 'pytest', count: 277 }])[0]).toMatchObject({
			start: 0,
			end: 100,
			mid: 50
		});
	});
});

describe('compareLengths', () => {
	it('escala ambos valores contra el mayor', () => {
		expect(compareLengths(3, 1, 80)).toEqual({ before: 80, after: 26.67 });
	});
});

describe('speedup', () => {
	it('escribe el factor de mejora', () => {
		expect(speedup(3, 1)).toBe('3× más rápido');
		expect(speedup(3, 2)).toBe('1,5× más rápido');
	});
});
