const localImages = import.meta.glob<{ default: ImageMetadata }>(
	'/src/assets/images/**/*.{jpg,jpeg,png}',
	{ eager: true }
);

/**
 * Resuelve un `src` del content collection a un asset optimizable por astro:assets.
 * Devuelve undefined para paths fuera de src/assets/images (p. ej. SVGs en public/).
 */
export function getLocalImage(src: string): ImageMetadata | undefined {
	return localImages[src]?.default;
}
