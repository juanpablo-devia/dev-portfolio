cat > README.md <<'EOF'
# 👨‍💻 Dev Portfolio · Juan Pablo Devia

![CI/CD](https://github.com/juanpablo-devia/dev-portfolio/actions/workflows/deploy.yml/badge.svg)

Portafolio digital desarrollado en **Angular 22** que funciona como catálogo centralizado de mis proyectos: presenta mi perfil profesional, habilidades y tecnologías, y da acceso al repositorio y a la aplicación desplegada de cada proyecto.

🔗 **Portafolio publicado:** https://juanpablo-devia.github.io/dev-portfolio/

Proyecto del taller **Dev Portfolio Project** · Arquitectura de Software · Unidad Central del Valle del Cauca (UCEVA).

## 📂 Catálogo de proyectos

| # | Proyecto | Tecnologías | Repositorio | App desplegada |
|---|---|---|---|---|
| 1 | Dev Portfolio (este repositorio) | Angular 22, SCSS, Vitest | [Repo](https://github.com/juanpablo-devia/dev-portfolio) | [Ver app](https://juanpablo-devia.github.io/dev-portfolio/) |
| 2 | Mis Finanzas | React 19, Vite, Tailwind, Dexie, PWA | [Repo](https://github.com/juanpablo-devia/finanzas-app) | [Ver app](https://juanpablo-devia.github.io/finanzas-app/) |
| 3 | DevHub · Hash Location | Angular 22, Vitest | [Repo](https://github.com/juanpablo-devia/lab-pipelines-hash) | [Ver app](https://juanpablo-devia.github.io/lab-pipelines-hash/) |
| 4 | DevHub · Path Location | Angular 22, Vitest | [Repo](https://github.com/juanpablo-devia/lab-pipelines-patch) | [Ver app](https://juanpablo-devia.github.io/lab-pipelines-patch/) |
| 5 | Storage Manager | Angular 22, ng-packagr, Vitest, NPM | [Repo](https://github.com/juanpablo-devia/Project-Store-Manager-Actividad) | [Ver app](https://juanpablo-devia.github.io/Project-Store-Manager-Actividad/) |

Cada proyecto tiene su propio repositorio y su propio pipeline de GitHub Actions con build, despliegue automático en GitHub Pages y verificación posterior.

## ✨ Características

- **Perfil profesional:** presentación, lenguajes, tecnologías y contacto.
- **Catálogo de proyectos:** nombre, descripción, tecnologías, características y aporte personal en los proyectos de equipo.
- **Acceso a cada proyecto:** enlace al repositorio en GitHub y a la aplicación desplegada.
- Diseño responsive con tema oscuro.

## ⚙️ CI/CD

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) se ejecuta en cada `push` a `master`, en cada `pull_request` hacia `master` (solo valida, sin desplegar) y de forma manual (`workflow_dispatch`).

1. **Build y pruebas:** instala dependencias con `npm ci`, ejecuta las pruebas unitarias con Vitest y genera el build de producción con la ruta base del repositorio.
2. **Deploy:** publica `dist/dev-portfolio/browser` en GitHub Pages.
3. **Verificar despliegue y catálogo:** comprueba que el portafolio responda con estado 200 y contenga `<app-root>`, y además que **todas las apps enlazadas en el catálogo** respondan con estado 200. Si alguna falla, el pipeline queda en rojo.

## 🧪 Pruebas

Las pruebas unitarias (Vitest) validan que:

- El catálogo tenga exactamente cinco proyectos y el primero sea este portafolio.
- Cada proyecto tenga descripción, tecnologías, características y enlaces a la cuenta del estudiante.
- La página muestre el nombre, los cinco proyectos con sus dos enlaces, los lenguajes y las tecnologías.

## 🚀 Ejecutar en local

Requisitos: Node.js 22 o superior.

```bash
git clone https://github.com/juanpablo-devia/dev-portfolio.git
cd dev-portfolio
npm install
npm start                    # http://localhost:4200
npm test -- --watch=false    # pruebas unitarias
npm run build                # build de producción en dist/dev-portfolio/browser
```

## 📁 Estructura

src/
├── index.html # título y tipografías (Inter, JetBrains Mono)
├── styles.scss # variables del tema oscuro
└── app/
├── app.ts / app.html / app.scss # página del portafolio
├── app.spec.ts # pruebas de la página
└── data/
├── portfolio.data.ts # perfil y catálogo de proyectos (datos tipados)
└── portfolio.data.spec.ts # pruebas de los datos


Para agregar o editar un proyecto solo se modifica `src/app/data/portfolio.data.ts`.

## 📝 Convención de commits

Se usa [Conventional Commits](https://www.conventionalcommits.org/es/): `feat:`, `fix:`, `docs:`, `test:`, `ci:`, `build:`.

## 👤 Autor

**Juan Pablo Devia** — Ingeniería de Sistemas, UCEVA
[GitHub](https://github.com/juanpablo-devia) · [LinkedIn](https://www.linkedin.com/in/juan-pablo-devia-masso-773a71432/)

**Docente:** Jesus David Mejia Vergara
EOF