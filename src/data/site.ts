export interface HeroContent {
	name: string;
	role: string;
	subtitle: string;
	narrative: string;
	panelSummary: string;
	primaryCta: {
		label: string;
		href: string;
	};
	secondaryCta: {
		label: string;
		href: string;
		download?: boolean;
	};
}

export interface ContactItem {
	label: string;
	value: string;
	href?: string;
	description: string;
	protected?: {
		scheme: 'mailto' | 'tel';
		parts: string[];
		displayParts: string[];
		actionLabel: string;
	};
}

export interface ExperienceItem {
	company: string;
	role: string;
	period: string;
	description: string;
	responsibilities: string[];
	tech: string[];
}

export interface ExperienceSection {
	items: ExperienceItem[];
}

export interface ContactSection {
	title: string;
	items: ContactItem[];
}

export interface FooterContent {
	copy: string;
}

export const heroContent: HeroContent = {
	name: 'Iván Ortiz',
	role: 'Fullstack Developer',
	subtitle:
		'Soy desarrollador fullstack y disfruto construir software útil, claro y mantenible para problemas reales.',
	narrative:
		'Actualmente trabajo en sistemas empresariales donde backend, integraciones, datos y producto se cruzan todos los días. Me interesa entender primero cómo funciona la operación antes de decidir la forma del sistema.',
	panelSummary:
		'Trabajo con foco en productos internos, automatización e integraciones que impactan el día a día de una operación.',
	primaryCta: {
		label: 'Ver proyectos',
		href: '#projects'
	},
	secondaryCta: {
		label: 'Descargar CV',
		href: '/ivanortiz_cv_2026.pdf',
		download: true
	}
};

export const experienceSection: ExperienceSection = {
	items: [
		{
			company: 'Airam',
			role: 'Desarrollador Fullstack',
			period: 'Febrero 2026 – Actualidad',
			description:
				'Desarrollo y mantengo sistemas empresariales con foco en backend, integraciones y rendimiento.',
			responsibilities: [
				'Desarrollo de APIs REST con Java y Spring, separadas por capas y DTOs.',
				'Optimización de consultas SQL en vistas críticas, bajando respuestas de ~3s a ~1s.',
				'Integración y mantenimiento de endpoints clave, incluyendo SIFEN para facturación electrónica.',
				'Evolución de modelos en PostgreSQL y apoyo en frontend sobre React y Angular.'
			],
			tech: ['Java', 'Spring', 'PostgreSQL', 'React', 'Angular', 'Django', 'Docker']
		}
	]
};

export const contactSection: ContactSection = {
	title: 'Abierto a oportunidades en productos reales y sistemas escalables.',
	items: [
		{
			label: 'LinkedIn',
			value: 'Ivan Ortiz',
			href: 'https://www.linkedin.com/in/ortiz-ivan08/',
			description: 'Perfil profesional y recorrido técnico.'
		},
		{
			label: 'Email',
			value: 'Enviar email',
			description: 'Contacto directo para propuestas y colaboraciones.',
			protected: {
				scheme: 'mailto',
				parts: ['ortiz', '.', 'ivan', '.', 'dev', '@', 'gmail', '.', 'com'],
				displayParts: ['ortiz', '.', 'ivan', '.', 'dev', '@', 'gmail', '.', 'com'],
				actionLabel: 'Mostrar y abrir email'
			}
		},
		{
			label: 'GitHub',
			value: 'ortiz-ivan',
			href: 'https://github.com/ortiz-ivan',
			description: 'Proyectos y evolución técnica.'
		}
	]
};

export const footerContent: FooterContent = {
	copy: 'Iván Ortiz, Fullstack Developer enfocado en sistemas de gestión y automatización.'
};
