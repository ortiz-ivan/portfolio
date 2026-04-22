export interface HeroContent {
	name: string;
	role: string;
	positioning: string;
	subtitle: string;
	narrative: string;
	primaryCta: {
		label: string;
		href: string;
	};
	secondaryCta: {
		label: string;
		href: string;
	};
}

export interface ThinkingPrinciple {
	title: string;
	copy: string;
}

export interface ThinkingSection {
	kicker: string;
	title: string;
	intro: string;
	principles: ThinkingPrinciple[];
}

export interface ContactItem {
	label: string;
	value: string;
	href: string;
	description: string;
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
	positioning: 'Fullstack Developer (Java + Angular)',
	subtitle: 'Desarrollo sistemas de gestion y automatizacion para operaciones reales.',
	narrative:
		'Conecto negocio, arquitectura y producto para construir soluciones mantenibles.',
	primaryCta: {
		label: 'Ver proyectos',
		href: '#projects'
	},
	secondaryCta: {
		label: 'Contactar',
		href: '#contact'
	}
};

export const thinkingSection: ThinkingSection = {
	kicker: 'Cómo pienso como desarrollador',
	title: 'Pienso desde el problema y ejecuto con foco en producto real.',
	intro:
		'Asi abordo el desarrollo: entender el negocio, ordenar la arquitectura y ejecutar con criterio.',

	principles: [
		{
			title: 'Cómo abordo problemas',
			copy:
				'Analizo el flujo real antes de escribir codigo y convierto fricciones operativas en requisitos claros.'
		},
		{
			title: 'Cómo estructuro proyectos',
			copy:
				'Diseño sistemas modulares, con responsabilidades claras y una base que soporte crecimiento sin reescrituras.'
		},
		{
			title: 'Cómo decido tecnologías',
			copy:
				'Elijo tecnologias por contexto: velocidad de entrega, mantenimiento simple y ajuste al problema real.'
		}
	]
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
			label: 'Telefono',
			value: '+595 986 805831',
			href: 'tel:+595986805831',
			description: 'Llamadas o contacto directo por telefono.'
		},
		{
			label: 'LinkedIn',
			value: 'Ivan Ortiz',
			href: 'https://www.linkedin.com/in/ortiz-ivan08/',
			description: 'Perfil profesional y recorrido tecnico.'
		},
		{
			label: 'Email',
			value: 'ortiz.ivan.dev@gmail.com',
			href: 'mailto:ortiz.ivan.dev@gmail.com',
			description: 'Contacto directo para propuestas y colaboraciones.'
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
		{ label: 'Como pienso', href: '#thinking' },
		{ label: 'Contacto', href: '#contact' }
	]
};