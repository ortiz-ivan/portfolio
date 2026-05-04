export interface HeroContent {
	name: string;
	role: string;
	positioning: string;
	subtitle: string;
	narrative: string;
	notes: string[];
	panelSummary: string;
	focus: string;
	focusNote: string;
	primaryCta: {
		label: string;
		href: string;
		download?: boolean;
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
	kicker: string;
	title: string;
	items: ExperienceItem[];
}

export interface ContactSection {
	kicker: string;
	title: string;
	intro: string;
	items: ContactItem[];
}

export interface FooterContent {
	copy: string;
	links: Array<{
		label: string;
		href: string;
	}>;
}

export const heroContent: HeroContent = {
	name: 'Iván Ortiz',
	role: 'Fullstack Developer',
	positioning: 'Sobre mi',
	subtitle:
		'Soy desarrollador fullstack y disfruto construir software util, claro y mantenible para problemas reales.',
	narrative:
		'Actualmente trabajo en sistemas empresariales donde backend, integraciones, datos y producto se cruzan todos los dias. Me interesa entender primero como funciona la operacion antes de decidir la forma del sistema.',
	notes: [
		
	],
	panelSummary:
		'Trabajo con foco en productos internos, automatizacion e integraciones que impactan el dia a dia de una operacion.',
	focus: 'Backend + integraciones',
	focusNote:
		'Java, Spring, Angular y PostgreSQL forman hoy mi base para entregar soluciones utiles sin complejidad innecesaria.',
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

export const projectSection = {
	kicker: 'Proyectos seleccionados',
	title: 'Proyectos seleccionados.',
	intro:
		'Sistemas fullstack orientados a negocio, con foco en gestion, automatizacion y decisiones tecnicas sostenibles.'
};

export const experienceSection: ExperienceSection = {
	kicker: 'Experiencia',
	title: 'Experiencia construyendo sistemas empresariales.',
	items: [
		{
			company: 'Airam',
			role: 'Desarrollador Fullstack',
			period: 'Febrero 2026 – Actualidad',
			description:
				'Desarrollo y mantengo sistemas empresariales con foco en backend, integraciones y rendimiento.',
			responsibilities: [
				'Desarrollo de APIs REST con Java y Spring, separadas por capas y DTOs.',
				'Optimizacion de consultas SQL en vistas criticas, bajando respuestas de ~3s a ~1s.',
				'Integracion y mantenimiento de endpoints clave, incluyendo SIFEN para facturacion electronica.',
				'Evolucion de modelos en PostgreSQL y apoyo en frontend sobre React y Angular.'
			],
			tech: ['Java', 'Spring', 'PostgreSQL', 'React', 'Angular', 'Django', 'Docker']
		}
	]
};

export const contactSection: ContactSection = {
	kicker: 'Contacto',
	title: 'Abierto a oportunidades en productos reales y sistemas escalables.',
	intro:
		'Canales directos para conversar sobre desarrollo fullstack y arquitectura de software.',

	items: [
		{
			label: 'LinkedIn',
			value: 'Ivan Ortiz',
			href: 'https://www.linkedin.com/in/ortiz-ivan08/',
			description: 'Perfil profesional y recorrido tecnico.'
		},
		{
			label: 'Email',
			value: 'Mostrar email',
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
			description: 'Proyectos y evolucion tecnica.'
		}
	]
};

export const footerContent: FooterContent = {
	copy: 'Iván Ortiz, Fullstack Developer enfocado en sistemas de gestion y automatizacion.',
	links: [
		{ label: 'Proyectos', href: '#projects' },
		{ label: 'Experiencia', href: '#experience' },
		{ label: 'Contacto', href: '#contact' }
	]
};