# Architecture

**Analysis Date:** 2026-01-22

## Pattern Overview

**Overall:** Server-Side Rendering (SSR) Web Application with Component-Based UI

**Key Characteristics:**
- Nuxt 4 full-stack framework for modern SSR applications
- Vue 3 composition API with TypeScript
- Static content-driven (no database, data in files/constants)
- Client-side state management via composables
- Minimal backend (health check endpoint only)
- Fully static data: sites list, email templates, FAQ content

## Layers

**Presentation Layer:**
- Purpose: Render user interfaces and handle user interactions
- Location: `app/components/`
- Contains: Vue Single-File Components organized by function (layout, sections, features, UI)
- Depends on: Composables, data stores, utilities
- Used by: Pages and app.vue root component

**Pages Layer:**
- Purpose: Route handlers and page-level composition
- Location: `app/pages/`
- Contains: Route definitions (index.vue, about.vue, security.vue)
- Depends on: Components, composables
- Used by: Vue Router (automatic via Nuxt)

**Composables Layer (State Management):**
- Purpose: Shared reactive state and business logic
- Location: `app/composables/`
- Contains: useDarkMode.ts, useToast.ts - reusable composition functions
- Depends on: Vue reactivity, localStorage, DOM APIs
- Used by: Components, pages

**Data Layer:**
- Purpose: Static application data
- Location: `app/data/`
- Contains: sites.ts (7 Swedish data removal services), templates.ts (GDPR email templates)
- Depends on: Type definitions
- Used by: Components for displaying site information and templates

**Utilities Layer:**
- Purpose: Helper functions for common operations
- Location: `app/utils/`
- Contains: clipboard.ts (copy operations with fallback), calendar.ts
- Depends on: DOM APIs, browser APIs
- Used by: Components and composables

**Types Layer:**
- Purpose: TypeScript type definitions
- Location: `app/types/index.ts`
- Contains: Site, EmailTemplate, ToastNotification, Theme, ModalState, NavLink, SEOMeta interfaces
- Depends on: Nothing (foundational)
- Used by: All layers for type safety

**Plugin Layer:**
- Purpose: Application-level integrations
- Location: `app/plugins/`
- Contains: umami.client.ts (analytics integration)
- Depends on: Runtime config, DOM APIs
- Used by: Nuxt initialization

**API Layer (Minimal):**
- Purpose: Server-side endpoints
- Location: `server/api/`
- Contains: health.get.ts (system health check)
- Depends on: Nitro (Nuxt's server engine)
- Used by: External monitoring or health checks

**Root Component:**
- Purpose: Application shell, global error handling, dark mode
- Location: `app/app.vue`
- Contains: Layout structure, global error boundary, Core Web Vitals monitoring
- Depends on: composables/useDarkMode, components/Header, components/Footer, components/Toast
- Used by: Nuxt as root rendering component

## Data Flow

**User Navigation Flow:**

1. User accesses gefanimig.se
2. Nuxt server renders app.vue with Header component
3. Route matches to page (index.vue, about.vue, security.vue)
4. Page composition includes section components (HeroSection, SitesSection, etc.)
5. Components render UI with Tailwind CSS
6. User interactions emit events up component tree
7. State updates via composables (useDarkMode, useToast)
8. Dark mode persists to localStorage via useDarkMode composable
9. Toast notifications display via Toast component listening to useToast state

**Email Modal Workflow:**

1. User clicks "Skapa e-postmall" button on site card (SitesSection)
2. SitesSection emits 'open-email-modal' event with site data
3. Parent page (index.vue) opens EmailModal with currentSite prop
4. EmailModal initializes form with gdprTemplate from data/templates.ts
5. User can copy template via copyTemplate utility → shows Toast
6. User clicks "Öppna i e-postklient" → opens mailto: link
7. Modal emits close event → parent closes it

**Analytics Tracking:**

1. Umami plugin loads on client mount (umami.client.ts)
2. Script injected from external server (umami-gefanimig.fly.dev)
3. Automatic page view tracking via Umami
4. No custom event tracking needed (Umami handles auto-tracking)

**State Management:**

Dark Mode State:
- State: `isDarkMode` ref in useDarkMode composable
- Persistence: localStorage key 'theme'
- Application: Toggled via Header dark mode button
- Effect: document.documentElement classList toggle 'dark'
- Scope: Global across all pages

Toast Notifications:
- State: `message`, `type`, `isVisible` refs in useToast composable
- Auto-hide: setTimeout(3000ms) default
- Display: Toast component fixed position bottom-right
- Scope: Global singleton

Modal State:
- State: `showEmailModal`, `currentSite` refs in index.vue (page-level)
- Trigger: User interaction with site cards
- Content: Controlled via EmailModal props

## Key Abstractions

**Button Component:**
- Purpose: Reusable button with multiple variants
- Location: `app/components/ui/Button.vue`
- Pattern: Props-based configuration (variant, size, tag, icon)
- Variants: primary, secondary, danger, success, warning, ghost
- Sizes: sm, md, lg
- Supports: NuxtLink, external links, internal links, disabled state
- Used by: ~20 components throughout the app

**Site Card Component:**
- Purpose: Display individual database removal service
- Location: Part of SitesSection (not separated)
- Data: Site interface from data/sites.ts
- Features: Method description, BankID badge, email display, action buttons

**Composable Pattern:**
- Purpose: Encapsulate reactive state and logic
- Pattern: Factory function returning reactive state + methods
- Examples: useDarkMode(), useToast()
- Benefits: Reusability across components, testability, separation of concerns

**Data-Driven UI:**
- Purpose: Centralized site and template management
- Location: app/data/
- Pattern: Constant exports with helper functions
- Examples: sites array with getEmailSites(), getBankIDSites(), getSiteCount()

**Section-Based Page Composition:**
- Purpose: Break down complex pages into manageable sections
- Location: app/components/sections/
- Pattern: Each section is a standalone Vue component
- Example: index.vue composition = 10+ section components

## Entry Points

**Application Root:**
- Location: `app/app.vue`
- Triggers: Nuxt server initialization
- Responsibilities: Layout structure, global error handling, dark mode initialization, performance monitoring

**Pages:**
- Location: `app/pages/*.vue`
- Triggers: Route matching via Vue Router
- Responsibilities: Page-specific logic, composition of sections, SEO metadata, modal state management
- Pages:
  - `index.vue` - Main GDPR tool with sites guide
  - `about.vue` - Information about the project
  - `security.vue` - Security resources and information

**Plugin Initialization:**
- Location: `app/plugins/umami.client.ts`
- Triggers: Client-side application mount (import.meta.client)
- Responsibilities: Load and configure Umami analytics

**API Endpoint:**
- Location: `server/api/health.get.ts`
- Triggers: GET request to /api/health
- Responsibilities: Return system health status and uptime

## Error Handling

**Strategy:** Graceful degradation with user feedback

**Patterns:**

- Global Error Boundary: `onErrorCaptured` in app.vue logs errors without propagating
- Clipboard Operations: Try native API → fallback to document.execCommand
- Umami Integration: Graceful fail if website ID not configured (warn in console)
- Client-Only Code: `import.meta.client` guards prevent SSR errors

Example from clipboard.ts:
```typescript
try {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text)
  } else {
    return await fallbackCopyToClipboard(text)
  }
} catch (error) {
  return await fallbackCopyToClipboard(text)
}
```

Toast notifications surface errors to users via useToast.showError()

## Cross-Cutting Concerns

**Logging:**
- Approach: console.log/warn/error throughout codebase
- Examples: Performance monitoring (LCP, FID, CLS) in app.vue
- No structured logging framework

**Validation:**
- Approach: TypeScript interface validation at compile time
- Input validation minimal (trusting internal data)
- Runtime validation mainly for clipboard operations success

**Authentication:**
- Not applicable - static public content tool
- No user authentication or authorization

**Internationalization:**
- Language: Swedish (sv) configured globally in nuxt.config.ts
- All strings hardcoded in Swedish
- No i18n framework used

**Styling:**
- Framework: Tailwind CSS 3.4.17
- Approach: Utility-first, no component CSS files
- Dark mode: Tailwind's dark: prefix system-wide
- Design system: Consistent spacing, color palette, border radius via Tailwind config

**Icons:**
- Framework: @nuxt/icon with Heroicons iconset
- Usage: Icon name="heroicons:shield-check" pattern
- Scope: 40+ icon instances throughout UI components

---

*Architecture analysis: 2026-01-22*
