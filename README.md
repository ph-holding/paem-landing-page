# PAEM Real Estate Website

Minimal, architectural real-estate website for PAEM Real Estate (Zaragoza, Spain), built with React + Vite and deployed on Cloudflare Workers.

## Tech stack

- React 19
- Vite 7
- Tailwind CSS 3.4
- GSAP + ScrollTrigger (`gsap`, `@gsap/react`)
- React Router
- Cloudflare Vite plugin + Wrangler
- PWA (`vite-plugin-pwa`)
- Critical CSS inlining (`vite-plugin-beasties`)

## Available scripts

- `npm run dev` -> local development
- `npm run lint` -> lint source files
- `npm run audit:check` -> fail on high/critical vulnerabilities
- `npm run build` -> audit check + production build
- `npm run preview` -> local Workers preview (`wrangler dev`)
- `npm run deploy` -> deploy via Wrangler

## Routes

- `/` -> Home
- `/proyectos` -> Projects list
- `/proyectos/la-muela` -> Project detail
- `/terminos-condiciones` -> Terms
- `/politica-privacidad` -> Privacy policy
- `/politica-cookies` -> Cookies policy
- `/canal-comunicacion` -> Communication channel

## Architecture notes

- `src/App.jsx` contains the app shell (router, navbar, footer, utility UI).
- `src/pages/HomePage.jsx` contains the home sections and home-specific GSAP behavior.
- Home route is eager-loaded for instant first paint; secondary routes are lazy-loaded.
- Suspense fallback reserves space to avoid layout shifts while lazy routes resolve.

## Performance and SEO baseline (implemented)

- Valid meta description in `index.html`.
- Valid `robots.txt` in `public/robots.txt`.
- Non-blocking Google Fonts loading strategy.
- Critical CSS inlining and stylesheet async swap through Beasties.
- PWA enabled with Workbox runtime caching (including Google Fonts).
- Service worker registration deferred to post-load + idle in `src/main.jsx` to keep it off the critical path.
- Caching and security headers configured in `public/_headers`:
  - short-lived document caching with `stale-while-revalidate`
  - immutable caching for fingerprinted assets
  - basic hardening headers
- SVG favicon configured (`/logo.svg`).

## Responsive behavior

- Tailwind custom breakpoints (`xs` through `5xl`) are defined in `tailwind.config.js`.
- GSAP section pinning on home is disabled on constrained mobile conditions:
  - `(max-width: 767px && portrait)` OR `(max-height: 450px && landscape)`

## Deployment

This project targets Cloudflare Workers with static assets:

- Config: `wrangler.jsonc`
- SPA fallback: `assets.not_found_handling = "single-page-application"`
- Build artifacts are generated to `dist/`

Deploy flow:

1. `npm run build`
2. `npm run deploy`

## Development guidance

If you are extending this project, read `SKILLS.md` first. It contains the consolidated project playbook (design system, animation constraints, performance guardrails, and implementation checklist).
