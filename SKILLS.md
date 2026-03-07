# PAEM Website Build Skillbook

This file merges and operationalizes guidance from `GEMINI.md` and `PAEM_PROMPT_MASTER.md` into one practical playbook for this repository.

## 1) Mission

Build and evolve a premium, minimalist, architectural real-estate website for PAEM Real Estate.

Target feel:
- calm
- editorial
- premium
- intentional

Avoid generic template patterns and over-componentized SaaS UI.

## 2) Brand and Product Context

Brand: **PAEM Real Estate** (Zaragoza, Spain)

Core business lines:
- Promocion inmobiliaria
- Rehabilitacion inmobiliaria
- Alquiler de viviendas
- Venta de viviendas

Existing flagship project:
- La Muela

## 3) Design Language (Source of Truth)

Visual direction:
- minimalist + brutalist spacing
- architectural/editorial composition
- large imagery
- typography-first hierarchy
- restrained component set

Global style cues:
- noise overlay at low opacity for texture
- strong sans + serif contrast
- mono for labels/meta
- high whitespace and asymmetry

Do not:
- overuse cards/icons
- add decorative UI noise
- introduce generic hero + three-card marketing patterns

## 4) Current Information Architecture (Implemented)

Routes currently in app:
- `/` -> Home
- `/proyectos` -> Projects list
- `/proyectos/la-muela` -> Project detail
- `/terminos-condiciones` -> Terms
- `/politica-privacidad` -> Privacy
- `/politica-cookies` -> Cookies
- `/canal-comunicacion` -> Communication channel

Contact is also present in the final home section (`#contacto`) and linked from navbar/footer.

## 5) UX and Interaction Rules

Navbar:
- floating/minimal
- "Contacto" scrolls to `#contacto` on home
- from other routes, navigate to home hash and then scroll to target

Animation:
- GSAP + ScrollTrigger only where intentional
- preserve animation behavior unless explicitly asked to redesign it
- prefer transform/opacity-based motion
- avoid layout-triggering reads during scroll loops

Mobile animation policy (current):
- Home page GSAP section pinning is disabled for constrained mobile conditions:
  `((max-width: 767px) and (orientation: portrait)) or ((max-height: 450px) and (orientation: landscape))`

## 6) Performance and SEO Standards

These are mandatory baselines for future changes.

### Rendering and loading
- Keep homepage perceived-first render fast and stable.
- Home route is currently eager-loaded to avoid blank `Suspense` flash on first paint.
- Other routes remain lazy-loaded.

### CSS critical path
- Keep `vite-plugin-beasties` enabled.
- Maintain critical CSS inlining and async stylesheet swap behavior.

### Service worker
- Keep PWA enabled via `vite-plugin-pwa`.
- Do not put SW registration on the critical path.
- Keep registration in `main.jsx` post-load + idle.
- Keep `injectRegister: null` in `vite.config.js`.

### Caching and headers
- Preserve `public/_headers` behavior:
  - short-lived HTML/doc caching with stale-while-revalidate
  - long-lived immutable caching for hashed assets
  - compression-friendly setup (do not add `no-transform`)

### SEO essentials
- `index.html` must include:
  - valid meta description
  - favicon link(s)
- `public/robots.txt` must remain valid and reachable at `/robots.txt`.

### Dependency/security hygiene
- Keep `npm run build` gated by `npm run audit:check`.
- Keep package override for `serialize-javascript` until upstream no longer requires it.

## 7) Tech Stack and Conventions

Stack:
- React 19 + Vite
- Tailwind CSS 3.4
- GSAP + `@gsap/react`
- React Router
- Cloudflare Workers via `@cloudflare/vite-plugin` + Wrangler
- PWA via `vite-plugin-pwa`

Conventions:
- mobile-first Tailwind usage
- custom screens in `tailwind.config.js` up to `5xl`
- AVIF-first imagery and responsive `srcSet` for hero visuals
- use lazy image loading where content is below fold

## 8) Editing Guardrails

When implementing new changes:
- do not regress existing SEO/performance wins
- do not silently remove legal/compliance pages unless explicitly requested
- do not break GSAP timelines that were intentionally tuned
- verify with `npm run build` and lints after substantial edits

## 9) Practical Checklist Before Merging Changes

- [ ] Visual style still aligns with architectural minimalism
- [ ] Navbar/hash contact flow still works from every route
- [ ] No new CLS/FCP regressions from route fallback behavior
- [ ] No render-blocking regressions in HTML head
- [ ] No SW-critical-path regression in `main.jsx`
- [ ] `robots.txt`, meta description, favicon still valid
- [ ] `npm run build` passes (including audit check)

## 10) Priority Order for Future Work

1. Preserve UX quality and brand feel
2. Preserve/raise Core Web Vitals
3. Keep SEO baseline healthy
4. Maintain code clarity and predictable behavior
5. Add features only if they do not violate 1-4
