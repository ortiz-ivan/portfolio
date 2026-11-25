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
	icon: 'linkedin' | 'github' | 'instagram';
}

export interface SkillCategory {
	title: string;
	items: string[];
}

export interface SkillsSection {
	items: SkillCategory[];
}

/** Métrica de antes y después, dibujada como cota (CompareCota) */
export interface ComparisonMetric {
	title: string;
	before: { value: number; label: string };
	after: { value: number; label: string };
}

export interface ExperienceItem {
	company: string;
	role: string;
	period: string;
	description: string;
	responsibilities: string[];
	tech: string[];
	metric?: ComparisonMetric;
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
		'Construyo sistemas de gestión que usan negocios reales: punto de venta, inventario, caja y facturación electrónica.',
	narrative:
		'Hoy desarrollo sistemas empresariales en Airam con Java, Spring y PostgreSQL: APIs, integraciones como SIFEN, una app móvil publicada en Google Play y App Store, y trato directo con clientes.',
	panelSummary:
		'Como freelance llevé a producción un POS que un comercio usa a diario y lo migré de escritorio a web, con más de 400 tests.',
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
			items: ['Spring Boot', 'FastAPI', 'Flask', 'Django / DRF', 'REST APIs']
		},
		{
			title: 'Frontend y móvil',
			items: ['React', 'Angular', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'Capacitor']
		},
		{
			title: 'Bases de datos',
			items: ['PostgreSQL', 'SQLite', 'Redis']
		},
		{
			title: 'ORM / Migraciones',
			items: ['SQLAlchemy', 'Alembic']
		},
		{
			title: 'Testing',
			items: ['pytest', 'Vitest', 'Playwright']
		},
		{
			title: 'DevOps & Herramientas',
			items: [
				'Docker (Compose)',
				'Linux / SSH',
				'Git',
				'GitLab CI',
				'GitHub Actions (CI)',
				'Railway',
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
				'Desarrollo y mantengo sistemas empresariales de punta a punta: desde el relevamiento con clientes hasta el despliegue y la capacitación de usuarios.',
			responsibilities: [
				'Migración de una aplicación web a app móvil con Capacitor, con notificaciones push, publicada en Google Play y App Store y con usuarios activos.',
				'Relevamiento de requerimientos en visitas a clientes y capacitación de usuarios en los módulos nuevos que implementé.',
				'Integración y mantenimiento de endpoints SIFEN para facturación electrónica.',
				'Optimización de consultas SQL en vistas críticas, bajando respuestas de ~3s a ~1s.',
				'APIs REST con Java y Spring Boot, separadas por capas y con DTOs.',
				'Despliegues a test y producción con GitLab CI y Docker Compose en servidores Linux (SSH).'
			],
			tech: [
				'Java',
				'Spring',
				'PostgreSQL',
				'Docker',
				'GitLab CI',
				'Linux',
				'React',
				'Angular',
				'Capacitor'
			],
			metric: {
				title: 'Tiempo de respuesta · vistas críticas',
				before: { value: 3, label: '~3 s' },
				after: { value: 1, label: '~1 s' }
			}
		},
		{
			company: 'Freelance',
			role: 'Desarrollador Fullstack · Software a medida',
			period: 'Noviembre 2025 – Actualidad',
			description:
				'Desarrollo software por encargo para clientes, con alcance acordado, entrega en producción y mantenimiento.',
			responsibilities: [
				'Kairos: punto de venta en producción para un comercio, con ventas, inventario con kardex, caja, créditos y reportes.',
				'Migré Kairos por fases de app de escritorio (SQLite) a web PWA en Railway, importando los datos existentes; más de 400 tests con pytest en CI.',
				'Domus: demo de un marketplace de servicios con apps de cliente, profesional y administrador para la presentación de un equipo universitario.',
				'Flujo de Domus modelado como máquina de estados por rol, con tests unitarios y E2E como condición de deploy.'
			],
			tech: [
				'Python',
				'Flask',
				'PostgreSQL',
				'Railway',
				'React',
				'TypeScript',
				'Zustand',
				'Playwright'
			]
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
		},
		{
			label: 'Instagram',
			value: 'ivan_ortiz.dev',
			href: 'https://www.instagram.com/ivan_ortiz.dev/',
			description: 'Contenido y novedades sobre desarrollo.',
			icon: 'instagram'
		}
	]
};

export const footerContent: FooterContent = {
	copy: 'Iván Ortiz, Fullstack Developer enfocado en sistemas de gestión y automatización.'
};
