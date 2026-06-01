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
    slug: 'habita',
    name: 'Habita',
    priority: 3,
    eyebrow: 'Gestión de alquileres',
    isFeatured: false,
    summary: 'Aplicación full-stack para administrar edificios de alquiler: habitaciones, inquilinos, contratos y pagos.',
    longDescription:
        'Sistema interno de gestión de propiedades residenciales construido con React y Django. Cubre el ciclo completo: registrar unidades, asignar inquilinos, generar contratos y hacer seguimiento de pagos con estados de mora.',
    highlight: 'Proyecto que muestra criterio en arquitectura full-stack, modelado de dominio y UX funcional sin ornamentación.',
    tech: ['React 19', 'Django 5', 'PostgreSQL', 'React Query', 'Tailwind CSS', 'JWT'],
    features: [
        'Panel de control con métricas de unidades vacantes, contratos activos y pagos vencidos.',
        'Flujo completo de gestión: habitaciones → contratos → pagos, con estados y filtros.',
        'Autenticación JWT con refresh automático de tokens y rutas protegidas.'
    ],
    technicalDecisions: [
        'Separación estricta de settings por entorno (base / local / producción) en Django.',
        'React Query como capa de estado del servidor con invalidación de caché por mutación.',
        'Capa de servicios HTTP por dominio para mantener los componentes sin lógica de red.'
    ],
    results: [
        'Demuestra capacidad de diseñar y construir un producto funcional de principio a fin.',
        'Evidencia criterio de arquitectura en un stack moderno y profesional.',
        'Muestra que podés modelar dominio real con relaciones no triviales (habitación → contrato → pago).'
    ],
    caseStudy: {
        problem: {
            title: 'Gestionar un edificio de alquiler sin herramientas adecuadas genera fricción operativa.',
            description:
                'El objetivo era construir una herramienta interna que centralizara la administración de unidades, contratos y pagos, eliminando el seguimiento manual disperso en planillas.',
            points: [
                'El seguimiento de pagos y mora era manual y propenso a errores.',
                'No había forma de ver rápido el estado de ocupación del edificio.',
                'Cada contrato y su historial de pagos vivía en documentos separados sin relación.'
            ]
        },
        solution: {
            title: 'Aplicación full-stack con dominio modelado alrededor del ciclo de alquiler.',
            description:
                'Se construyó un sistema con módulos independientes por dominio (habitaciones, inquilinos, contratos, pagos) con un dashboard que centraliza el estado general del edificio.',
            points: [
                'Dashboard con indicadores clave: vacantes, mora y contratos activos.',
                'Registro y seguimiento de pagos con estados (pendiente, pagado, parcial, vencido).',
                'Formulario rápido de pago accesible desde cualquier pantalla del sistema.'
            ]
        },
        architecture: {
            title: 'Stack full-stack desacoplado con frontend en React y API REST en Django.',
            description:
                'El backend expone una API versionada con DRF y JWT. El frontend consume esa API con React Query, manteniendo estado del servidor y cliente separados.',
            layers: [
                {
                    name: 'Frontend',
                    description: 'React 19 + React Router 7 con React Query para server state y Zustand para auth.'
                },
                {
                    name: 'API',
                    description: 'Django REST Framework con serializers, filtros y autenticación JWT por dominio.'
                },
                {
                    name: 'Base de datos',
                    description: 'PostgreSQL con relaciones entre habitaciones, contratos e inquilinos modeladas en Django ORM.'
                }
            ]
        },
        technologiesNote:
            'El stack combina Django REST Framework y React para un sistema de gestión robusto, con separación clara entre API y frontend que facilita escalar cada capa de forma independiente.'
    },
    links: [
        { label: 'Demo', href: '#', kind: 'demo', available: false },
        { label: 'GitHub', href: 'https://github.com/ortiz-ivan/habita', kind: 'github', available: false },
        { label: 'Caso de estudio', href: '/projects/habita', kind: 'case-study', available: true }
    ],
    images: [
        {
            role: 'cover',
            alt: 'Dashboard de Habita',
            caption: 'Panel principal con métricas de ocupación, contratos y pagos.',
            status: 'planned'
        }
    ]
}
];

export function getProjectBySlug(slug: string) {
	return projects.find((project) => project.slug === slug);
}