# Storybook React

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://pohping.github.io/storybook-react/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

A React + TypeScript component library built with Vite, documented and showcased with [Storybook](https://storybook.js.org/).

## 🔗 Live Preview

**[View the live Storybook →](https://pohping.github.io/storybook-react/)**

Browse every component, its variants, controls, and docs directly in the browser — no setup required.

## ✨ Tech Stack

- **React 19** + **TypeScript**
- **Vite** for dev server and builds
- **Storybook 10** (`@storybook/react-vite`) for component development and documentation
- **Redux Toolkit** + **React Redux** for state management
- **React Router** for routing
- **Tiptap** for rich text editing
- **MSW (Mock Service Worker)** for API mocking inside stories
- **Vitest** + `@storybook/addon-vitest` for component testing
- **`@storybook/addon-a11y`** for accessibility checks
- **Sass** for styling
- **Motion** (Framer Motion) for animations

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/pohping/storybook-react.git
cd storybook-react
npm install
```

### Run Storybook locally

```bash
npm run storybook
```

This starts Storybook at [http://localhost:6006](http://localhost:6006).

### Run the app

```bash
npm run dev
```

## 📜 Available Scripts

| Script                  | Description                                      |
| ------------------------ | ------------------------------------------------- |
| `npm run dev`            | Start the Vite dev server                         |
| `npm run build`          | Type-check and build the app for production       |
| `npm run preview`        | Preview the production build locally              |
| `npm run lint`           | Run ESLint                                         |
| `npm run storybook`      | Start Storybook in dev mode on port 6006           |
| `npm run build-storybook`| Build a static Storybook site into `./docs`        |

## 📁 Project Structure

```
storybook-react/
├── .storybook/     # Storybook configuration (main.ts, preview.ts)
├── docs/           # Static Storybook build output (published via GitHub Pages)
├── public/         # Static assets
├── src/            # Components, stories, and app source
├── index.html
└── package.json
```

## 🌐 Deployment

The live Storybook is built with:

```bash
npm run build-storybook
```

which outputs a static site to `./docs`. This folder is published via **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / `docs`), making it available at:

👉 https://pohping.github.io/storybook-react/

To update the live demo, rebuild and push the `docs` folder:

```bash
npm run build-storybook
git add docs
git commit -m "chore: update storybook build"
git push
```

## 📄 License

This project currently has no license specified. Add one if you intend others to reuse this code.
