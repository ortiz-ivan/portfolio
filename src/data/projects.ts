export interface ProjectLink {
	label: string;
	href: string;
	kind: 'demo' | 'github' | 'case-study';
	available: boolean;
}

export interface ProjectImage {
	role: 'cover' | 'dashboard' | 'detail';
	alt: string;
	src?: string;
	caption: string;
	status: 'planned' | 'ready';
}

export interface ProjectEntry {
	slug: string;
	name: string;
	priority: 1 | 2 | 3;
	eyebrow: string;
	isFeatured: boolean;
	summary: string;
	longDescription: string;
	highlight: string;
	tech: string[];
	features: string[];
	technicalDecisions: string[];
	results: string[];
	caseStudy: {
		problem: {
			title: string;
			description: string;
			points: string[];
		};
		solution: {
			title: string;
			description: string;
			points: string[];
		};
		architecture: {
			title: string;
			description: string;
			layers: Array<{
				name: string;
				description: string;
			}>;
		};
		technologiesNote: string;
	};
	links: ProjectLink[];
	images: ProjectImage[];
}

export const projects: ProjectEntry[] = [
	{
		slug: 'kairos',
		name: 'Kairos',
		priority: 1,
		eyebrow: 'Caso de estudio principal',
		isFeatured: true,
		summary: 'Sistema de gestion empresarial con control de ventas, inventario, reportes y roles.',
		longDescription:
			'Sistema completo para operaciones comerciales, pensado para centralizar ventas, stock y trazabilidad interna en una arquitectura desacoplada.',
		highlight: 'Proyecto estrella para mostrar criterio tecnico y valor real de negocio.',
		tech: ['Django REST', 'React', 'PostgreSQL', 'Roles y permisos'],
		features: [
			'Sistema de roles y permisos por tipo de usuario.',
			'CRUD completo para clientes, productos y ventas.',
			'Reportes operativos para seguimiento comercial y control interno.'
		],
		technicalDecisions: [
			'Arquitectura basada en APIs REST desacopladas para separar frontend y backend.',
			'Manejo de estado en frontend para mantener una interfaz fluida sobre flujos de negocio complejos.',
			'Diseno modular para escalar nuevas entidades y reportes sin rehacer el sistema.'
		],
		results: [
			'Muestra capacidad para modelar un sistema con varias entidades, permisos y flujos operativos.',
			'Demuestra criterio para separar frontend y backend sin perder consistencia en la experiencia.',
			'Presenta una base clara para crecer hacia reportes, auditoria y nuevas areas del negocio.'
		],
		caseStudy: {
			problem: {
				title: 'Centralizar operacion comercial dispersa en un solo sistema.',
				description:
					'El reto era organizar ventas, inventario y reportes en una unica herramienta que permitiera operar con menos friccion y mayor control.',
				points: [
					'La informacion critica quedaba repartida entre procesos manuales y vistas aisladas.',
					'Los permisos por rol necesitaban restringir acciones sin romper el flujo diario.',
					'El negocio exigia trazabilidad sobre productos, clientes y movimientos de venta.'
				]
			},
			solution: {
				title: 'Construir una plataforma desacoplada, modular y orientada a operacion real.',
				description:
					'La solucion se planteo como un sistema con backend API y frontend dedicado, donde cada modulo responde a una necesidad concreta del negocio.',
				points: [
					'Frontend en React para gestionar interfaces dinamicas y flujos con varios estados.',
					'Backend con Django REST para encapsular reglas de negocio y exponer endpoints consistentes.',
					'Modulos preparados para extender ventas, inventario, usuarios y reportes sin rehacer la base.'
				]
			},
			architecture: {
				title: 'Una arquitectura que separa responsabilidades y facilita evolucion.',
				description:
					'La estructura del proyecto se penso para aislar la logica sensible del negocio y sostener crecimiento sin acoplamientos innecesarios.',
				layers: [
					{
						name: 'Frontend',
						description: 'Interfaz en React para operaciones, formularios, tablas y navegacion por contexto de usuario.'
					},
					{
						name: 'API',
						description: 'Capa REST con Django para exponer entidades, permisos y reglas de validacion.'
					},
					{
						name: 'Persistencia',
						description: 'Modelo relacional preparado para ventas, productos, clientes y reportes operativos.'
					}
				]
			},
			technologiesNote:
				'El stack se eligio por su equilibrio entre velocidad de desarrollo, control del dominio y capacidad de escalar un sistema de gestion con multiples modulos.'
		},
		links: [
			{ label: 'Demo', href: '#', kind: 'demo', available: false },
			{ label: 'GitHub', href: '#', kind: 'github', available: false },
			{ label: 'Caso de estudio', href: '/projects/kairos', kind: 'case-study', available: true }
		],
		images: [
			{
				role: 'cover',
				alt: 'Vista general del sistema Kairos',
				caption: 'Hero visual del sistema con foco en ventas, inventario y reportes.',
				status: 'planned'
			},
			{
				role: 'dashboard',
				alt: 'Dashboard operativo de Kairos',
				caption: 'Captura del panel principal con metricas y accesos por rol.',
				status: 'planned'
			}
		]
	},
	{
		slug: 'domusops',
		name: 'DomusOps',
		priority: 2,
		eyebrow: 'Sistema de organizacion domestica',
		isFeatured: false,
		summary:
			'Sistema de gestion domestica con inventario, compras y control financiero mensual en una sola interfaz.',
		longDescription:
			'Proyecto orientado a centralizar inventario, compras y finanzas del hogar mediante reglas configurables, lectura mensual del gasto y una operacion cotidiana mas ordenada.',
		highlight: 'Caso para mostrar modelado de datos, reglas configurables y una operacion domestica mas visible.',
		tech: ['Django', 'Django REST Framework', 'React', 'Vite', 'Data modeling', 'Business rules'],
		features: [
			'Dashboard operativo con alertas de stock bajo, productos proximos a vencer y gasto mensual estimado.',
			'Modulo financiero con ingresos, gastos fijos, gastos variables, eventos auditables y cierre mensual.',
			'Configuracion dinamica de categorias, unidades, alertas, moneda y buckets presupuestarios para adaptar reglas sin tocar codigo.'
		],
		technicalDecisions: [
			'Separo el dominio en configuracion, compras, gastos y reportes para mantener entidades y servicios acotados pero conectados.',
			'La configuracion operativa se centraliza en un singleton editable para que categorias, ratios y umbrales no dependan de hardcodes.',
			'Los reportes combinan estimaciones de inventario, gastos reales e ingresos para dar una lectura mensual util sin sobredimensionar el sistema.'
		],
		results: [
			'Expone capacidad para modelar datos cotidianos con impacto operativo real en inventario, compras y finanzas.',
			'Muestra criterio para convertir reglas domesticas simples en dashboards, alertas y cierres mensuales accionables.',
			'Refuerza versatilidad al resolver un problema no corporativo con el mismo nivel de estructura que un sistema de negocio.'
		],
		caseStudy: {
			problem: {
				title: 'Unificar inventario, compras y finanzas en un flujo domestico realmente util.',
				description:
					'La necesidad principal era evitar informacion fragmentada entre stock, compras y gastos, y construir una lectura mensual clara para decidir mejor.',
				points: [
					'El inventario y los gastos del hogar se seguian con poca relacion entre si.',
					'No habia una vista mensual que mezclara ingresos, compromisos fijos y consumo variable.',
					'Las reglas de categorias, alertas y presupuesto quedaban demasiado dependientes de ajustes manuales.'
				]
			},
			solution: {
				title: 'Diseñar un sistema compacto, configurable y orientado a lectura cotidiana.',
				description:
					'La solucion priorizo una operacion diaria simple, una capa de configuracion flexible y reportes que conectan inventario con lectura financiera mensual.',
				points: [
					'Inventario con categorias, frecuencias de uso, stock minimo y alertas operativas.',
					'Modulo financiero con ingresos, gastos fijos, gastos variables, timeline de eventos y cierre mensual.',
					'Reportes con composicion del gasto, tendencia historica y lectura de la regla 50/30/20.'
				]
			},
			architecture: {
				title: 'Arquitectura ligera por dominios con configuracion centralizada.',
				description:
					'El proyecto necesitaba una estructura flexible, capaz de sostener reglas utiles y evolucionar sin convertir la operacion diaria en una complejidad innecesaria.',
				layers: [
					{
						name: 'Modelado',
						description: 'Entidades para productos, ingresos, gastos, eventos financieros, cierres mensuales y configuracion operativa.'
					},
					{
						name: 'Logica',
						description: 'Servicios para resumen mensual, proyeccion de gasto, buckets presupuestarios, auditoria de movimientos y cierres automaticos.'
					},
					{
						name: 'Interfaz',
						description: 'Dashboard, paneles de gastos, reportes y configuracion pensados para consulta rapida y actualizacion frecuente.'
					}
				]
			},
			technologiesNote:
				'El stack se usa aqui para sostener reglas de negocio configurables y una experiencia de uso clara; la tecnologia acompaña al modelo operativo, no lo define.'
		},
		links: [
			{ label: 'Demo', href: '#', kind: 'demo', available: false },
			{ label: 'GitHub', href: 'https://github.com/ortiz-ivan/domusops', kind: 'github', available: true },
			{ label: 'Caso de estudio', href: '/projects/domusops', kind: 'case-study', available: true }
		],
		images: [
			{
				role: 'cover',
				alt: 'Vista general de DomusOps',
				caption: 'Resumen visual del dashboard domestico con inventario, gastos y reportes mensuales.',
				status: 'planned'
			}
		]
	},
	{
		slug: 'kairos-web',
		name: 'Kairos Web',
		priority: 3,
		eyebrow: 'Landing orientada a conversion',
		isFeatured: false,
		summary: 'Landing page enfocada en captacion de clientes y validacion comercial del producto.',
		longDescription:
			'Pieza orientada a comunicar propuesta de valor, estructurar mejor la conversion y alinear interfaz con objetivos de negocio.',
		highlight: 'Proyecto estrategico para mostrar criterio en UI, UX y conversion.',
		tech: ['Astro', 'UI/UX', 'Copywriting', 'Conversion design'],
		features: [
			'Jerarquia de mensajes enfocada en propuesta de valor y captacion.',
			'Secciones pensadas para reducir friccion y guiar al contacto.',
			'Base visual alineada con una imagen profesional del producto.'
		],
		technicalDecisions: [
			'Arquitectura ligera para priorizar velocidad de carga y despliegue rapido.',
			'Diseno centrado en claridad de oferta antes que en ornamentacion visual.',
			'Sistema de secciones reutilizable para iterar mensajes comerciales.'
		],
		results: [
			'Muestra que tambien puedes pensar producto desde conversion y comunicacion.',
			'Vende criterio de UI y UX orientado a negocio.',
			'Complementa el portfolio con una pieza menos operativa y mas estrategica.'
		],
		caseStudy: {
			problem: {
				title: 'Comunicar mejor la propuesta de valor y reducir friccion comercial.',
				description:
					'El objetivo era ordenar el mensaje del producto y construir una pagina capaz de guiar mejor la atencion del usuario hacia la accion.',
				points: [
					'La propuesta de valor necesitaba una jerarquia mas clara.',
					'El recorrido visual debia dirigir mejor hacia el contacto.',
					'La experiencia debia transmitir profesionalismo sin exceso visual.'
				]
			},
			solution: {
				title: 'Construir una landing sobria, rapida y orientada a conversion.',
				description:
					'Se priorizo una estructura clara de secciones, con mensajes breves y visuales consistentes para dar confianza y enfocar la accion.',
				points: [
					'Jerarquia fuerte en hero, beneficios y CTA.',
					'Lenguaje visual profesional alineado al producto.',
					'Base reutilizable para probar mejoras de comunicacion.'
				]
			},
			architecture: {
				title: 'Arquitectura de pagina ligera y mantenible.',
				description:
					'La estructura tecnica se mantuvo simple para iterar rapido y preservar rendimiento, especialmente en un sitio de presentacion.',
				layers: [
					{
						name: 'Contenido',
						description: 'Secciones enfocadas en propuesta de valor, credibilidad y conversion.'
					},
					{
						name: 'Presentacion',
						description: 'Sistema visual reutilizable para mantener consistencia y velocidad.'
					},
					{
						name: 'Deploy',
						description: 'Base ligera preparada para publicar e iterar sin friccion.'
					}
				]
			},
			technologiesNote:
				'En este proyecto la tecnologia se eligio por ligereza, velocidad de carga y facilidad para ajustar mensaje y estructura.'
		},
		links: [
			{ label: 'Demo', href: '#', kind: 'demo', available: false },
			{ label: 'GitHub', href: '#', kind: 'github', available: false },
			{ label: 'Caso de estudio', href: '/projects/kairos-web', kind: 'case-study', available: true }
		],
		images: [
			{
				role: 'cover',
				alt: 'Portada de Kairos Web',
				caption: 'Captura del landing orientado a negocio y conversion.',
				status: 'planned'
			}
		]
	}
];

export function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}