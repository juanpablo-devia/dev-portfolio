export interface Contacto {
  tipo: string;
  texto: string;
  url: string;
}

export interface Perfil {
  nombre: string;
  iniciales: string;
  rol: string;
  bio: string;
  github: string;
  lenguajes: readonly string[];
  tecnologias: readonly string[];
  habilidades: readonly string[];
  contactos: readonly Contacto[];
}

export interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: readonly string[];
  caracteristicas: readonly string[];
  repo: string;
  demo: string;
  equipo?: boolean;
  aporte?: string;
}

export const PERFIL: Perfil = {
  nombre: 'Juan Pablo Devia',
  iniciales: 'JP',
  rol: 'Desarrollador Frontend · Estudiante de Ingeniería de Sistemas',
  bio:
    'Estudiante de octavo semestre de Ingeniería de Sistemas en la Unidad Central del Valle del Cauca (UCEVA). ' +
    'Me apasiona el desarrollo frontend y crear aplicaciones web y móviles útiles, rápidas y agradables de usar. ' +
    'Complemento con backend en Spring Boot y Node.js, y trabajo con pruebas, buenas prácticas y despliegue continuo.',
  github: 'https://github.com/juanpablo-devia',
  lenguajes: ['TypeScript', 'JavaScript', 'Java', 'Dart', 'C', 'SQL', 'HTML y CSS'],
  tecnologias: [
    'Angular',
    'React',
    'Spring Boot',
    'Flutter',
    'Node.js',
    'Firebase',
    'PostgreSQL',
    'Docker',
    'Git',
    'GitHub',
    'GitHub Actions',
  ],
  habilidades: [
    'Desarrollo frontend con Angular y React',
    'Aplicaciones móviles con Flutter',
    'APIs REST con Spring Boot y Node.js',
    'CI/CD con GitHub Actions y GitHub Pages',
    'Pruebas unitarias y Conventional Commits',
  ],
  contactos: [
    { tipo: 'Correo', texto: 'juandeviamasso@gmail.com', url: 'mailto:juandeviamasso@gmail.com' },
    {
      tipo: 'Correo institucional',
      texto: 'juan.devia01@uceva.edu.co',
      url: 'mailto:juan.devia01@uceva.edu.co',
    },
    { tipo: 'GitHub', texto: 'github.com/juanpablo-devia', url: 'https://github.com/juanpablo-devia' },
  ],
};

export const PROYECTOS: readonly Proyecto[] = [
  {
    nombre: 'Dev Portfolio',
    descripcion:
      'Este mismo portafolio: un catálogo centralizado de mis proyectos con perfil profesional, habilidades y acceso al código y a cada aplicación desplegada.',
    tecnologias: ['Angular 22', 'TypeScript', 'SCSS', 'Vitest', 'GitHub Actions'],
    caracteristicas: [
      'Catálogo generado a partir de datos tipados',
      'Diseño responsive con tema oscuro',
      'Pruebas unitarias del catálogo y sus enlaces',
      'Despliegue automático con verificación posterior',
    ],
    repo: 'https://github.com/juanpablo-devia/dev-portfolio',
    demo: 'https://juanpablo-devia.github.io/dev-portfolio/',
  },
  {
    nombre: 'Mis Finanzas',
    descripcion:
      'Aplicación web progresiva para controlar ingresos, gastos y metas de ahorro. Los datos se guardan en el navegador, sin servidor ni cuenta.',
    tecnologias: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Dexie (IndexedDB)', 'PWA'],
    caracteristicas: [
      'Registro, filtros y edición de movimientos',
      'Metas de ahorro con abonos y retiros',
      'Resumen con gráficos y comparación mensual',
      'Instalable y funciona sin conexión',
    ],
    repo: 'https://github.com/juanpablo-devia/finanzas-app',
    demo: 'https://juanpablo-devia.github.io/finanzas-app/',
  },
  {
    nombre: 'DevHub · Hash Location',
    descripcion:
      'App 1 del Laboratorio Pipelines (Arquitectura de Software): portafolio de desarrollador en Angular que usa Hash Location Strategy para funcionar en GitHub Pages sin configuración extra.',
    tecnologias: ['Angular 22', 'TypeScript', 'SCSS', 'Vitest', 'GitHub Actions'],
    caracteristicas: [
      'Rutas con # para Inicio, Proyectos y Contacto',
      'Componentes standalone con pruebas unitarias',
      'Pipeline con pruebas, build, deploy y verificación',
      'Ramas, pull requests y Conventional Commits',
    ],
    repo: 'https://github.com/juanpablo-devia/lab-pipelines-hash',
    demo: 'https://juanpablo-devia.github.io/lab-pipelines-hash/',
    equipo: true,
    aporte: 'documentación del proyecto (README).',
  },
  {
    nombre: 'DevHub · Path Location',
    descripcion:
      'App 2 del Laboratorio Pipelines: la misma app con rutas limpias (sin #), resolviendo la recarga de rutas internas en GitHub Pages con un fallback 404.html.',
    tecnologias: ['Angular 22', 'TypeScript', 'SCSS', 'Vitest', 'GitHub Actions'],
    caracteristicas: [
      'Rutas sin # y carga diferida de vistas',
      'Fallback 404.html generado en el pipeline',
      '23 pruebas unitarias con Vitest',
      'Verificación automática de una ruta interna',
    ],
    repo: 'https://github.com/juanpablo-devia/lab-pipelines-patch',
    demo: 'https://juanpablo-devia.github.io/lab-pipelines-patch/',
    equipo: true,
    aporte: 'documentación del proyecto (README).',
  },
  {
    nombre: 'Storage Manager',
    descripcion:
      'Librería Angular publicada en NPM (ngx-uceva-storage-manager) para gestionar LocalStorage y Cache Storage con una API tipada, más un Showcase que demuestra su uso.',
    tecnologias: ['Angular 22', 'TypeScript', 'ng-packagr', 'Vitest', 'Compodoc', 'NPM'],
    caracteristicas: [
      'Servicios tipados para LocalStorage y Cache Storage',
      'Claves prefijadas y errores identificables',
      '111 pruebas unitarias',
      'Showcase desplegado en GitHub Pages',
    ],
    repo: 'https://github.com/juanpablo-devia/Project-Store-Manager-Actividad',
    demo: 'https://juanpablo-devia.github.io/Project-Store-Manager-Actividad/',
    equipo: true,
    aporte: 'el CacheStorageService y su panel en el Showcase.',
  },
];
