# Codebase Concerns

**Analysis Date:** 2026-01-22

## Tech Debt

**Type Safety with `any` Types:**
- Issue: Two locations using `any` type annotations instead of proper types, bypassing TypeScript safety
- Files: `app/app.vue` (line 32), `app/pages/index.vue` (line 25)
- Impact: Error handling logic and modal state management lack type checking, making future refactoring risky and harder to debug
- Fix approach: Replace `any` with proper type definitions - use `Error` class for errors and `Site` interface from `~/types` for site parameter

**Missing Performance Monitoring Collection:**
- Issue: Core Web Vitals (LCP, FID, CLS) are logged to console in development but have no production collection mechanism
- Files: `app/app.vue` (lines 48-62)
- Impact: Cannot track actual user experience issues in production; performance regressions go undetected
- Fix approach: Implement Sentry integration or similar error tracking service to capture and analyze performance metrics in production

**Hardcoded External Script URLs:**
- Issue: Umami analytics script URL is hardcoded in plugin code
- Files: `app/plugins/umami.client.ts` (line 16: `https://umami-gefanimig.fly.dev/script.js`)
- Impact: Script URL changes require code modification and redeployment; no flexibility for environment-specific URLs
- Fix approach: Move to environment variable configuration (UMAMI_SCRIPT_URL in env.example and nuxt.config)

## Security Considerations

**CSP Configuration with `unsafe-inline` and `unsafe-eval`:**
- Risk: Content Security Policy allows inline scripts and eval, reducing protection against XSS attacks
- Files: `nuxt.config.ts` (lines 49-50)
- Current mitigation: Umami is in allowlist; inline styles used for Tailwind
- Recommendations:
  - Extract inline styles into separate CSS where possible
  - Consider nonce-based CSP for required inline scripts instead of `unsafe-inline`
  - Remove `unsafe-eval` if not strictly necessary (check Tailwind/Vue runtime requirements)

**Unvalidated Clipboard Operations:**
- Risk: User can copy arbitrary text (email templates) to clipboard without validation
- Files: `app/utils/clipboard.ts`, `app/components/features/EmailModal.vue`
- Current mitigation: Only user-controlled data (template text) is copied, not external data
- Recommendations: Add maximum length validation to prevent clipboard DoS; sanitize template content before copying

**Email Template Exposure via mailto Links:**
- Risk: Email content encoded in mailto URLs can leak sensitive template structure in browser history and logs
- Files: `app/components/features/EmailModal.vue` (line 259)
- Current mitigation: User is shown content to verify before sending
- Recommendations: Consider alternative approaches like email service integration; document that mailto links appear in history

**Umami Script Injection Without Subresource Integrity:**
- Risk: Script tag dynamically created without SRI (Subresource Integrity) attributes
- Files: `app/plugins/umami.client.ts` (lines 14-18)
- Current mitigation: Umami is a trusted service hosted on Fly.io
- Recommendations: Add `integrity` attribute with SRI hash if script remains stable; implement script injection error handling

## Performance Bottlenecks

**Large Page Components:**
- Problem: Security page is very large and likely to be slow with all content in single component
- Files: `app/pages/security.vue` (938 lines)
- Cause: All security resources and links bundled in one file without code splitting
- Improvement path: Break into smaller components (password checkers, ID monitoring, etc.); lazy-load sections below the fold

**About Page Complexity:**
- Problem: About page is large monolithic component without lazy loading
- Files: `app/pages/about.vue` (346 lines)
- Cause: All sections rendered at once
- Improvement path: Use dynamic imports for below-fold sections; implement intersection observer for lazy rendering

**No Lazy Loading for Heavy Components:**
- Problem: EmailModal and other features load immediately even if user never opens them
- Files: `app/pages/index.vue` - imports all sections without dynamic loading
- Cause: All sections imported synchronously
- Improvement path: Use Nuxt lazy components for modals and below-fold sections; analyze bundle impact with `nuxt analyze`

## Fragile Areas

**Modal State Management:**
- Files: `app/pages/index.vue` (lines 20-32)
- Why fragile: Simple ref-based state with no error handling; if component unmounts during modal operation, state could leak
- Safe modification: Add cleanup handlers to close modal on route change; consider Pinia store for shared modal state across pages
- Test coverage: No tests for modal open/close state transitions

**Dark Mode Initialization Race Condition:**
- Files: `app/composables/useDarkMode.ts` (lines 13-25)
- Why fragile: Dark mode initialization depends on `import.meta.client` check after component mount; brief flash of wrong theme possible before initialization
- Safe modification: Pre-initialize theme from localStorage before first paint using middleware or app plugin
- Test coverage: No tests for theme initialization on different system preferences

**Calendar File Download Cleanup:**
- Files: `app/utils/calendar.ts` (lines 47-77)
- Why fragile: Creates DOM elements dynamically and relies on manual cleanup; missing cleanup in edge cases could leak memory
- Safe modification: Use URL.createObjectURL cleanup consistently; wrap in try/finally; consider using Blob streaming instead
- Test coverage: No tests for file download operations or cleanup

**Clipboard Fallback Mechanism:**
- Files: `app/utils/clipboard.ts` (lines 24-41)
- Why fragile: Deprecated `document.execCommand('copy')` used as fallback; behavior varies across browsers
- Safe modification: Remove fallback or add feature detection; test on supported browsers; log failures for monitoring
- Test coverage: No tests for clipboard operations

## Test Coverage Gaps

**No Unit Tests:**
- What's not tested: All utility functions, composables, and components lack test coverage
- Files: `app/utils/clipboard.ts`, `app/utils/calendar.ts`, `app/composables/useDarkMode.ts`, `app/composables/useToast.ts`
- Risk: Refactoring any utility could break user-facing features undetected
- Priority: High - utilities handle critical user interactions (clipboard, downloads, theme)

**No E2E Tests:**
- What's not tested: Email modal workflow, calendar download, site selection, navigation flow
- Risk: Changes to UI component interactions or routing could break user journeys
- Priority: High - core functionality (GDPR email generation) has no automated validation

**No Component Tests:**
- What's not tested: Modal interactions, button clicks, form state changes, toast notifications
- Files: All `.vue` files in `app/components/`
- Risk: Component prop changes or event handler modifications could break UI silently
- Priority: Medium - visual regressions and interaction bugs undetected

**No Integration Tests:**
- What's not tested: Full workflows like selecting a site → opening modal → copying template → sending email
- Risk: Critical user journeys have no end-to-end validation
- Priority: High - this is the core use case of the application

## Missing Critical Features

**No Error Tracking in Production:**
- Problem: Global error handlers exist but errors don't reach developers
- Blocks: Cannot identify production issues, user experience regressions, or broken functionality
- Recommendation: Implement Sentry or similar; errors in `app/app.vue` (lines 32-42) currently just log to console

**No Fallback UI When Data Missing:**
- Problem: If `sites.ts` data loads incorrectly or is empty, UI shows nothing gracefully
- Blocks: Cannot verify data integrity; users see blank page on data errors
- Recommendation: Add error boundaries and fallback UI for missing site data

**No Analytics for Critical Actions:**
- Problem: Copy template, send email, download calendar actions have no tracking
- Blocks: Cannot measure feature adoption or identify workflow drops
- Recommendation: Add event tracking for key user actions in composables and components

**No Offline Support:**
- Problem: No service worker or offline fallback
- Blocks: Users on poor connections cannot access templates or site information
- Recommendation: Implement service worker caching for static content

## Dependencies at Risk

**Hardcoded External Analytics Dependency:**
- Risk: Umami instance at `umami-gefanimig.fly.dev` could go offline or change without warning
- Impact: Analytics stops working; CSP may block if domain changes
- Migration plan: Move Umami to configuration; implement Sentry as primary error tracking; decouple analytics from security features

**No Dependency Security Scanning:**
- Risk: No `npm audit` or automated security update checks configured
- Impact: Vulnerable dependencies could slip into production unnoticed
- Recommendation: Add GitHub Actions workflow for `npm audit`; enable Dependabot

## Scaling Limits

**Static Site Limitations:**
- Current capacity: Fully SSR'd static site handles unlimited concurrent users (CDN-like)
- Limit: Database lookups would break scalability; dynamic user data would require backend
- Scaling path: Current architecture is fine for informational content; only impacts if adding user accounts/persistence

**Site Data Hardcoded in Array:**
- Current capacity: 7 sites fit easily in memory
- Limit: Adding hundreds of sites would bloat bundle; no dynamic site management possible
- Scaling path: Keep in code as `sites.ts` for now; if >50 sites, move to JSON file or API endpoint

**Performance with Page Size:**
- Current capacity: 938-line security.vue loads in reasonable time
- Limit: Adding significantly more content (100+ more sections) would hurt TTI metrics
- Scaling path: Already noted in performance section - break large pages into lazy-loaded components
