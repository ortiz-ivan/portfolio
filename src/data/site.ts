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
	subtitle: 'Desarrollo sistemas de gestion y automatizacion enfocados en negocios reales.',
	narrative:
		'Diseño y desarrollo sistemas que resuelven problemas reales de negocio, desde la arquitectura hasta la implementacion.',
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
	title: 'Trabajo desde el problema, estructuro con criterio y tomo decisiones orientadas a producto real.',
	intro:
		'Esta sección refleja cómo abordo el desarrollo de sistemas: entender el negocio, traducirlo a arquitectura y construir soluciones mantenibles y escalables.',

	principles: [
		{
			title: 'Cómo abordo problemas',
			copy:
				'Analizo el flujo real del negocio antes de escribir código. Identifico fricciones operativas y las convierto en requisitos funcionales claros que guían el diseño del sistema.'
		},
		{
			title: 'Cómo estructuro proyectos',
			copy:
				'Diseño sistemas modulares con separación clara de responsabilidades, pensando en escalabilidad y mantenimiento. Prioritizo arquitecturas que soporten crecimiento sin reescrituras constantes.'
		},
		{
			title: 'Cómo decido tecnologías',
			copy:
				'El stack se define por contexto, no por preferencia. Elijo herramientas que reduzcan tiempo de entrega, simplifiquen mantenimiento y se adapten a la complejidad real del producto.'
		}
	]
};

export const projectSection = {
	kicker: 'Proyectos seleccionados',
	title: 'Proyectos.',
	intro:
		'Diseño y desarrollo de sistemas fullstack orientados a negocio, abarcando gestión de ventas, inventario y automatización de procesos. Cada proyecto refleja decisiones técnicas orientadas a escalabilidad, mantenibilidad y uso en entornos reales.'
};

export const contactSection: ContactSection = {
	kicker: 'Contacto',
	title: 'Abierto a oportunidades donde el desarrollo impacte productos reales y sistemas escalables.',
	intro:
		'Este espacio reúne los canales directos para conversar sobre desarrollo fullstack, arquitectura de software y automatización de procesos.',

	items: [
		{
			label: 'LinkedIn',
			value: 'Ivan Ortiz',
			href: 'https://www.linkedin.com/in/ortiz-ivan08/',
			description: 'Perfil profesional orientado a desarrollo fullstack y construcción de sistemas.'
		},
		{
			label: 'Email',
			value: 'ivanzitro18@gmail.com',
			href: 'mailto:ivanzitro18@gmail.com',
			description: 'Contacto directo para propuestas laborales, proyectos o colaboraciones técnicas.'
		},
		{
			label: 'GitHub',
			value: 'ortiz-ivan',
			href: 'https://github.com/ortiz-ivan',
			description: 'Repositorio de proyectos y evolución técnica en sistemas fullstack.'
		}
	]
};

export const footerContent: FooterContent = {
	copy: 'Iván Ortiz Fullstack Developer enfocado en sistemas de gestion y automatizacion.',
	links: [
		{ label: 'Proyectos', href: '#projects' },
		{ label: 'Como pienso', href: '#thinking' },
		{ label: 'Contacto', href: '#contact' }
	]
};