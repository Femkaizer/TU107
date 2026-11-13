# FloodWatch BKK — Animated Hero / 10 pages

React + TypeScript + Tailwind CSS v4 + shadcn-style UI. Includes 10-page flood preparedness dashboard and `src/components/ui/animated-hero.tsx`, reusable shadcn-style `button.tsx`, and real illustrative photography from Unsplash. Images are for illustration only, not live flood evidence.

## Project structure
- `src/components/ui/animated-hero.tsx` animated Thai hero, powered by Framer Motion
- `src/components/ui/button.tsx` shadcn-style button
- `src/lib/utils.ts` cn utility
- `src/App.tsx` original risk simulation and 10-page navigation
- `src/ExtraPages.tsx` six pages for news, parking, transit, community reports, shelters and knowledge
- `src/index.css` Tailwind and design tokens
- `.github/workflows/deploy.yml` automatic build and deployment on GitHub Pages

## Build locally
`npm install` then `npm run build` (output: `dist/`). `npm run dev` starts a local server.

## Deploy on GitHub Pages without Terminal
1. Upload **the contents** of this project to the repository root (not the outer folder). Preserve `.github/workflows/deploy.yml`.
2. Choose Settings → Pages → Source: GitHub Actions.
3. Commit files to `main`; GitHub Actions builds using the repository name as the Vite base path.
4. View the built site at `https://YOURNAME.github.io/REPO/`. For an existing repository, replace the source files and let Actions finish.

Data caveat: Risk scores, example monitoring points and graph data are **demonstration data**, not realtime forecasts. Parking / transit / shelters are informational links, not confirmed available services. Reports saved in browser localStorage are not shared or verified. Images are photo illustrations, not evidence of ongoing flood events. Image delivery and OSM tiles need internet.
