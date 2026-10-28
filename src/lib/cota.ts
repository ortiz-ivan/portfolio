// Geometría de las cotas de métricas. Todo se expresa en porcentajes del
// ancho disponible: el SVG ocupa el 100% y el texto mantiene su tamaño en
// cualquier pantalla, sin necesidad de atributos style (bloqueados por la CSP).

export interface Segment {
	label: string;
	count: number;
}

export interface SegmentLayout extends Segment {
	start: number;
	end: number;
	mid: number;
}

const round = (n: number) => Math.round(n * 100) / 100;

/** Reparte el ancho entre los segmentos en proporción a su valor. */
export function layoutSegments(segments: Segment[]): SegmentLayout[] {
	const total = segments.reduce((sum, s) => sum + s.count, 0);
	let start = 0;
	return segments.map((segment) => {
		const width = total > 0 ? (segment.count / total) * 100 : 0;
		const layout = {
			...segment,
			start: round(start),
			end: round(start + width),
			mid: round(start + width / 2)
		};
		start += width;
		return layout;
	});
}

/**
 * Largo de cada barra de una comparación sobre una escala común. La mayor
 * ocupa `max` por ciento, para dejar lugar al valor escrito al final.
 */
export function compareLengths(before: number, after: number, max = 80) {
	const top = Math.max(before, after);
	return {
		before: round((before / top) * max),
		after: round((after / top) * max)
	};
}

/** «3× más rápido» a partir de dos duraciones. */
export function speedup(before: number, after: number): string {
	const factor = before / after;
	const text = Number.isInteger(factor) ? String(factor) : factor.toFixed(1).replace('.', ',');
	return `${text}× más rápido`;
}
