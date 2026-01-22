# Codebase Structure

**Analysis Date:** 2026-01-22

## Directory Layout

```
gefanimig.se/
├── app/                      # Main application code (Nuxt 4)
│   ├── app.vue              # Root component with layout, error handling, performance monitoring
│   ├── main.css             # Global styles
│   ├── pages/               # Route definitions (auto-routed)
│   ├── components/          # Vue components organized by type
│   ├── composables/         # Reusable composition functions (state logic)
│   ├── data/                # Static application data
│   ├── types/               # TypeScript interfaces and types
│   ├── utils/               # Helper utility functions
│   └── plugins/             # Nuxt plugins (integrations)
├── server/                  # Server-side code (Nitro)
│   └── api/                 # API endpoints
├── public/                  # Static assets (icons, manifests, og-image)
├── .github/                 # GitHub workflows and configurations
├── .vscode/                 # VS Code settings
├── .planning/               # GSD planning directory
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
├── package-lock.json        # Locked versions
├── Dockerfile               # Docker build configuration
├── fly.toml                 # Fly.io deployment configuration
├── env.example              # Example environment variables
├── .gitignore               # Git exclusions
├── .prettierrc               # Code formatter configuration
└── .prettierignore          # Formatter exclusions
```

## Directory Purposes

**`app/`:**
- Purpose: Core application code following Nuxt 4 file conventions
- Contains: Pages, components, composables, utilities, types, data
- Key files: `app.vue` (root), `pages/index.vue` (main page)

**`app/pages/`:**
- Purpose: Route definitions (auto-routed based on filename)
- Contains: Three main pages
- Key files:
  - `index.vue` - Root path / (main GDPR tool)
  - `about.vue` - /about (project information)
  - `security.vue` - /security (security resources)
- Convention: Filenames map directly to routes

**`app/components/`:**
- Purpose: Reusable Vue components organized by category
- Structure:
  - `ui/` - Base UI components (Button, Card, Toast, etc.)
  - `layout/` - Page structure components (Header, Footer)
  - `sections/` - Page section components (HeroSection, SitesSection, etc.)
  - `features/` - Feature-specific components (EmailModal)
- Key files:
  - `ui/Button.vue` - Multi-variant button component
  - `layout/Header.vue` - Global navigation header with mobile menu
  - `features/EmailModal.vue` - GDPR email template modal
  - `sections/SitesSection.vue` - Displays all 7 databases

**`app/composables/`:**
- Purpose: Reusable Vue composition functions (state + logic)
- Contains: Reactive state management utilities
- Key files:
  - `useDarkMode.ts` - Dark/light theme state with localStorage persistence
  - `useToast.ts` - Toast notification state and methods

**`app/data/`:**
- Purpose: Static application data
- Contains: Constants and data factories
- Key files:
  - `sites.ts` - Array of 7 Swedish databases (Ratsit, Merinfo, Hitta, etc.) with metadata
  - `templates.ts` - GDPR email templates (Swedish and Google removal)
- Pattern: Exports arrays + helper functions (getEmailSites(), getBankIDSites(), etc.)

**`app/types/`:**
- Purpose: TypeScript type definitions
- Contains: Single file with all interfaces
- Key file: `index.ts` - Site, EmailTemplate, ToastNotification, Theme, ModalState, NavLink, SEOMeta

**`app/utils/`:**
- Purpose: Helper functions for common operations
- Contains: Utility modules
- Key files:
  - `clipboard.ts` - Copy to clipboard with modern API fallback
  - `calendar.ts` - Calendar utilities (not heavily used)

**`app/plugins/`:**
- Purpose: Nuxt plugins for application-level integrations
- Contains: Client-side plugins
- Key file: `umami.client.ts` - Analytics integration (loads Umami tracking script)

**`server/api/`:**
- Purpose: API endpoints (Nitro server)
- Contains: Minimal backend functionality
- Key file: `health.get.ts` - Returns server status and uptime

**`public/`:**
- Purpose: Static assets served directly
- Contains: Favicons, PWA icons, manifests, social media images
- Key files:
  - `og-image.png` - Open Graph image for social sharing
  - `favicon.ico`, `favicon-32x32.png` - Favicon variants
  - `site.webmanifest` - PWA manifest
  - `robots.txt` - Search engine directives
  - `sitemap.xml` - XML sitemap

**`.github/`:**
- Purpose: GitHub-specific configurations
- Contains: Workflows, action configurations

**`.vscode/`:**
- Purpose: VS Code workspace settings
- Contains: IDE configuration for development

## Key File Locations

**Entry Points:**
- `app/app.vue` - Root component, initializes dark mode, error boundary, performance monitoring
- `app/pages/index.vue` - Main page route, contains modal state, composes section components
- `nuxt.config.ts` - Application configuration (modules, imports, CSS, security headers)

**Configuration:**
- `nuxt.config.ts` - Nuxt 4 setup, module registration (@nuxtjs/tailwindcss, @nuxt/icon)
- `tsconfig.json` - TypeScript compiler options (references .nuxt generated configs)
- `tailwind.config.js` - Tailwind CSS customization
- `package.json` - Dependencies and scripts
- `env.example` - Environment variable template (UMAMI_WEBSITE_ID)

**Core Logic:**
- `app/data/sites.ts` - Database removal service definitions
- `app/data/templates.ts` - GDPR email template content
- `app/composables/useDarkMode.ts` - Dark mode state management
- `app/composables/useToast.ts` - Toast notification state
- `app/utils/clipboard.ts` - Clipboard utilities with fallback

**Testing:**
- No test files found (Not applicable - static UI application)

## Naming Conventions

**Files:**
- Vue components: PascalCase (Button.vue, SitesSection.vue)
- Composables: camelCase with `use` prefix (useDarkMode.ts, useToast.ts)
- Utilities: camelCase (clipboard.ts, calendar.ts)
- Data files: camelCase (sites.ts, templates.ts)
- Pages: kebab-case becomes PascalCase in routes (about.vue → /about)

**Directories:**
- Feature directories: kebab-case (app/components/sections/, app/components/layout/)
- Plural for collections: pages, components, composables, data, types, utils, plugins
- Singular for single items: server (not servers)

**Components:**
- Nested by function: `components/ui/`, `components/sections/`, `components/layout/`, `components/features/`
- Each component = single .vue file (no subdirectories)

**Imports/Paths:**
- Alias `~` maps to project root (nuxt.config.ts auto-imports)
- Usage: `import { sites } from '~/data/sites'`

## Where to Add New Code

**New Feature (e.g., new section or modal):**
- Primary code: `app/components/sections/` (for page sections) or `app/components/features/` (for complex interactive features)
- Tests: Not applicable (no test setup)
- Supporting data: Add to `app/data/` if needed
- Types: Add interfaces to `app/types/index.ts`

**New Component/Module (reusable UI):**
- Implementation: `app/components/ui/` for generic UI components
- Usage example: See `app/components/ui/Button.vue`
- Pattern: Props for configuration, emits for events, computed for derived state

**Shared Composable (state logic):**
- Implementation: `app/components/composables/`
- Pattern: Export factory function returning reactive state + methods
- Example: `export const useMyFeature = () => { const state = ref(); return { state, action }; }`

**Utilities/Helpers:**
- Shared across components: `app/utils/`
- Pattern: Pure functions or functions with localStorage/DOM interactions
- Example: `export const myHelper = (input) => { return output; }`

**Static Data:**
- Sites, templates, constants: `app/data/`
- Pattern: Export typed arrays or objects
- With helpers: Export filter/getter functions like `getEmailSites()`

**API Endpoints:**
- New endpoints: `server/api/` with convention `[method].[extension].ts`
- Examples: `server/api/users.get.ts`, `server/api/data.post.ts`
- Currently only: `server/api/health.get.ts`

**Styling:**
- Global styles: `app/main.css` (imported in nuxt.config.ts)
- Component styles: Use Tailwind classes in templates (no CSS files)
- Dark mode: Use Tailwind's `dark:` prefix for dark mode variants

**New Page/Route:**
- File: `app/pages/newpage.vue`
- Auto-routed to: `/newpage`
- Convention: Filenames are routes, use nested dirs for nested routes
- Example: `app/pages/privacy.vue` → `/privacy`

## Special Directories

**`.nuxt/`:**
- Purpose: Generated by Nuxt during build/dev
- Generated: Yes
- Committed: No (in .gitignore)
- Contains: Auto-imports config, compiled TypeScript configs, dev server files

**`.next/` or `dist/`:**
- Purpose: Build output
- Generated: Yes (during `npm run build`)
- Committed: No (in .gitignore)
- Contains: Production-ready compiled application

**`node_modules/`:**
- Purpose: Installed dependencies
- Generated: Yes (via npm install)
- Committed: No (in .gitignore)
- Lock file: `package-lock.json` tracks versions

**`public/`:**
- Purpose: Static assets served at root level
- Generated: No (committed)
- Committed: Yes
- Served as: `https://gefanimig.se/favicon.ico`, etc.

---

*Structure analysis: 2026-01-22*
