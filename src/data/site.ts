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
	href: string;
	description: string;
	icon: 'linkedin' | 'github';
}

export interface SkillCategory {
	title: string;
	items: string[];
}

export interface SkillsSection {
	items: SkillCategory[];
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
		href: '/ivan-ortiz-cv.pdf',
		download: true
	}
};

export const skillsSection: SkillsSection = {
	items: [
		{
			title: 'Lenguajes',
			items: ['Java', 'Python', 'TypeScript / JavaScript', 'SQL']
		},
		{
			title: 'Backend',
			items: ['Node.js', 'Spring (Boot)', 'Django', 'Django REST Framework']
		},
		{
			title: 'Frontend',
			items: ['React', 'Angular', 'React Query / TanStack Query', 'Tailwind CSS', 'Zustand']
		},
		{
			title: 'Bases de datos',
			items: ['PostgreSQL', 'MongoDB']
		},
		{
			title: 'ORM / Data',
			items: ['Prisma', 'SQLAlchemy']
		},
		{
			title: 'Testing',
			items: ['Vitest', 'pytest']
		},
		{
			title: 'DevOps & Herramientas',
			items: [
				'Docker (Compose)',
				'Linux / SSH',
				'Git',
				'GitLab CI',
				'GitHub Actions (CI)',
				'Netlify'
			]
		}
	]
};

export const experienceSection: ExperienceSection = {
	items: [
		{
			company: 'Airam S.A.',
			role: 'Desarrollador Fullstack',
			period: 'Febrero 2026 – Actualidad',
			description:
				'Desarrollo y mantengo sistemas empresariales de punta a punta: backend, integraciones, frontend y despliegue.',
			responsibilities: [
				'APIs REST con Java y Spring e integraciones clave, como SIFEN para facturación electrónica.',
				'Optimización de consultas SQL en vistas críticas, bajando respuestas de ~3s a ~1s.',
				'Despliegues a test y producción con pipelines de GitLab CI.',
				'Servicios con Docker Compose en servidores Linux, administrados por SSH.'
			],
			tech: ['Java', 'Spring', 'PostgreSQL', 'Docker', 'GitLab CI', 'Linux', 'React', 'Angular']
		}
	]
};

export const contactSection: ContactSection = {
	items: [
		{
			label: 'LinkedIn',
			value: 'Ivan Ortiz',
			href: 'https://www.linkedin.com/in/ortiz-ivan08/',
			description: 'Perfil profesional y recorrido técnico.',
			icon: 'linkedin'
		},
		{
			label: 'GitHub',
			value: 'ortiz-ivan',
			href: 'https://github.com/ortiz-ivan',
			description: 'Proyectos y evolución técnica.',
			icon: 'github'
		}
	]
};

export const footerContent: FooterContent = {
	copy: 'Iván Ortiz, Fullstack Developer enfocado en sistemas de gestión y automatización.'
};
