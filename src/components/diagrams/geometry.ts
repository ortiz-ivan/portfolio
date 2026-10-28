// Primitivas de dibujo compartidas por los diagramas de los casos de estudio.
// Las puntas de flecha son polígonos sueltos (no <marker>) para poder
// colorearlas con currentColor y animarlas igual que el resto del trazo.

export type Dir = 'up' | 'down' | 'left' | 'right';

const UNIT: Record<Dir, [number, number]> = {
	up: [0, -1],
	down: [0, 1],
	left: [-1, 0],
	right: [1, 0]
};

/** Puntos de una punta de flecha con el vértice en (x, y) apuntando hacia `dir`. */
export function arrowHead(x: number, y: number, dir: Dir, size = 4): string {
	const [dx, dy] = UNIT[dir];
	const back = size * 1.75;
	const bx = x - dx * back;
	const by = y - dy * back;
	// Perpendicular a la dirección
	const px = -dy * size;
	const py = dx * size;
	return `${x},${y} ${bx + px},${by + py} ${bx - px},${by - py}`;
}

/** Ancho aproximado de un texto en JetBrains Mono, en unidades del viewBox. */
export function monoWidth(text: string, fontSize = 10, tracking = 0.04): number {
	return text.length * fontSize * (0.6 + tracking);
}

export interface Chip {
	text: string;
	x: number;
	width: number;
}

/** Reparte textos en una fila de chips de ancho ajustado, empezando en `x0`. */
export function layoutChips(texts: string[], x0: number, gap = 8, pad = 14): Chip[] {
	let x = x0;
	return texts.map((text) => {
		const width = Math.round(monoWidth(text) + pad * 2);
		const chip = { text, x, width };
		x += width + gap;
		return chip;
	});
}

/** Clase de retardo de entrada: cada unidad de `step` equivale a dos pasos de 55 ms. */
export function d(step: number): string {
	return `dg-d${Math.min(24, Math.max(0, Math.round(step * 2)))}`;
}
