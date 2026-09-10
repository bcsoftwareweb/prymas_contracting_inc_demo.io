# Prymas Contracting Inc. — Website Demo

Frontend-only demonstration website for **Prymas Contracting Inc.**, a fictional/example contracting company based in Maspeth, Queens, New York. The site was created by **B&C Software & Web** to show what a high-end custom website can look like for a local NYC contractor.

Live demo (after GitHub Pages is enabled):  
[https://bcsoftwareweb.github.io/prymas_contracting_inc_demo.io/](https://bcsoftwareweb.github.io/prymas_contracting_inc_demo.io/)

## Important

Prymas Contracting Inc. is presented as a sample company for this demonstration. Project names, statistics, testimonials, phone numbers, and email addresses are fictional. They are not real-world claims about completed work.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Vitest + Testing Library
- GitHub Actions
- GitHub Pages via the `gh-pages` branch

## Local development

```bash
npm install
npm run dev
```

Other commands:

```bash
npm test
npm run lint
npm run build
npm run preview
```

## GitHub Pages

The production build is deployed to the `gh-pages` branch by GitHub Actions.

In the repository settings, set **Pages** to:

- Source: **Deploy from a branch**
- Branch: **`gh-pages`**
- Folder: **`/ (root)`**

The workflow:

1. Installs dependencies
2. Runs linting
3. Runs tests
4. Builds the production app
5. Publishes `dist/` to `gh-pages`

If linting, tests, or the build fail, deployment does not run.

SPA routes are supported by copying `index.html` to `404.html` during the Vite build so GitHub Pages can load client-side routes.

## Project structure

```
src/
  components/
  pages/
  data/
  hooks/
  test/
```
