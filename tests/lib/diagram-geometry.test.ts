import { describe, expect, it } from 'vitest';
import { arrowHead, d, layoutChips } from '../../src/components/diagrams/geometry';

describe('arrowHead', () => {
	it('pone el vértice en el punto dado y la base detrás según la dirección', () => {
		expect(arrowHead(100, 50, 'right', 4)).toBe('100,50 93,54 93,46');
		expect(arrowHead(100, 50, 'down', 4)).toBe('100,50 96,43 104,43');
	});
});

describe('layoutChips', () => {
	it('encadena los chips con el espacio indicado', () => {
		const [a, b] = layoutChips(['abc', 'abcdef'], 10, 8);
		expect(a.x).toBe(10);
		expect(b.x).toBe(a.x + a.width + 8);
		expect(b.width).toBeGreaterThan(a.width);
	});
});

describe('d', () => {
	it('convierte el paso en una clase de retardo acotada', () => {
		expect(d(0)).toBe('dg-d0');
		expect(d(2.4)).toBe('dg-d5');
		expect(d(99)).toBe('dg-d24');
	});
});
