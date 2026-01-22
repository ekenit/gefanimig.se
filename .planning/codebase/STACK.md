# Technology Stack

**Analysis Date:** 2026-01-22

## Languages

**Primary:**
- TypeScript - Full project codebase for type safety
- Vue 3 - Frontend component framework

**Secondary:**
- JavaScript - Configuration files and build scripts

## Runtime

**Environment:**
- Node.js 20 Alpine - Container runtime specified in Dockerfile

**Package Manager:**
- npm - Dependency manager
- Lockfile: `package-lock.json` (present)

## Frameworks

**Core:**
- Nuxt 4.0.1 - Full-stack Vue framework with SSR support
- Vue 3.5.18 - Reactive frontend framework
- Vue Router 4.5.1 - Client-side routing

**Styling:**
- Tailwind CSS 3.4.17 - Utility-first CSS framework
- @tailwindcss/forms 0.5.10 - Form component styling
- @tailwindcss/typography 0.5.16 - Typography plugin
- @tailwindcss/postcss 4.1.11 - PostCSS plugin
- PostCSS 8.5.6 - CSS transformation tool
- Autoprefixer 10.4.21 - Vendor prefix automation

**UI & Icons:**
- @nuxt/icon 1.15.0 - Icon system integration
- @iconify-json/heroicons 1.2.2 - Heroicons icon library
- @headlessui/vue 1.7.23 - Unstyled, accessible components

**Development Tools:**
- Prettier 3.6.2 - Code formatter
- prettier-plugin-vue 1.1.6 - Vue support for Prettier
- eslint-plugin-prettier 5.5.4 - ESLint integration
- vite-tsconfig-paths 5.1.4 - Path alias resolution

## Key Dependencies

**Critical:**
- nuxt 4.0.1 - Meta-framework providing server and client bundling
- vue 3.5.18 - Core reactivity and component system
- tailwindcss 3.4.17 - Complete CSS generation and utility classes

**Infrastructure:**
- @tailwindcss/* - Extended Tailwind ecosystem for forms and typography

## Configuration

**Environment:**
- Runtime config via `process.env.UMAMI_WEBSITE_ID` - Analytics tracking ID
- NODE_ENV set to 'production' in Fly.io deployment
- SSR enabled (server-side rendering)

**Build:**
- `nuxt.config.ts` - Main Nuxt configuration with:
  - Tailwind CSS and icon module integration
  - Auto-import configuration for composables and utilities
  - Component auto-discovery
  - Nitro server configuration with compression
  - Security headers via route rules (CSP, X-Frame-Options, etc.)
- `tsconfig.json` - TypeScript configuration with Nuxt project references
- `tailwind.config.js` - Tailwind theming with custom colors and animations
- `vite.config.ts` - Implicitly via Nuxt/Vite

## Platform Requirements

**Development:**
- Node.js 20+
- npm for package management

**Production:**
- Node.js 20 Alpine Docker image
- Fly.io hosting (ARN region)
- Container specs: shared-cpu-1x, 256MB memory minimum
- Port 3000 exposed
- HTTPS enforced

---

*Stack analysis: 2026-01-22*
