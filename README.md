# christian-egg.github.io

Personal portfolio built with Next.js App Router and exported as static files for GitHub Pages.

## Local development

- Install dependencies: `npm ci`
- Start dev server: `npm run dev`
- Build static output: `npm run build` (generates `out/`)

## GitHub Pages deployment

This repository deploys automatically from GitHub Actions using `.github/workflows/deploy.yml`.

### Required repository settings

1. In GitHub, open `Settings` -> `Pages`.
2. Set `Source` to `GitHub Actions`.
3. Open `Settings` -> `Actions` -> `General` -> `Workflow permissions`.
4. Set `Workflow permissions` to `Read and write permissions`.
5. Save settings.

### How deployment works

- On every push to `main`, the workflow runs `npm ci` and `npm run build`.
- Next.js is configured with `output: "export"` so build output is written to `out/`.
- The workflow uploads `out/` with `actions/upload-pages-artifact` and publishes it using `actions/deploy-pages`.
