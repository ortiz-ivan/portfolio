import DomusStates from './DomusStates.astro';
import HabitaPropagation from './HabitaPropagation.astro';
import KairosSale from './KairosSale.astro';
import MatlogDefense from './MatlogDefense.astro';

// Figura propia de cada caso de estudio, por slug del proyecto.
// Un proyecto sin entrada simplemente no muestra figura.
export const caseStudyDiagrams: Partial<Record<string, typeof DomusStates>> = {
	domus: DomusStates,
	habita: HabitaPropagation,
	kairos: KairosSale,
	matlog: MatlogDefense
};
