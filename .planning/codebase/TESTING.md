# Testing Patterns

**Analysis Date:** 2026-01-22

## Test Framework

**Runner:**
- Not configured - No test framework detected
- No `vitest.config.*`, `jest.config.*`, or similar test configuration files
- No test scripts in `package.json`

**Assertion Library:**
- Not configured

**Run Commands:**
- No testing commands available
- No test infrastructure in place

## Test File Organization

**Location:**
- No test files found in codebase
- No `*.test.*` or `*.spec.*` files present

**Naming:**
- Not applicable - no tests to establish naming patterns

**Structure:**
- Not applicable - no tests to establish structure

## Test Structure

**Current State:**
- No tests are written in this codebase
- Testing infrastructure is not set up

## Mocking

**Framework:**
- Not applicable - no test framework present

**Patterns:**
- Not applicable

**What to Mock:**
- Not applicable

**What NOT to Mock:**
- Not applicable

## Fixtures and Factories

**Test Data:**
- Not applicable - no test framework

**Location:**
- Not applicable

## Coverage

**Requirements:**
- Not enforced - no coverage configuration detected

**View Coverage:**
- Not applicable

## Test Types

**Unit Tests:**
- Not implemented

**Integration Tests:**
- Not implemented

**E2E Tests:**
- Not implemented

## Manual Testing Guidance

Since no automated testing framework is configured, here is guidance for manual testing patterns when tests are needed:

### Testing Composables

**Pattern for `useDarkMode.ts`:**
- Test localStorage persistence: Verify theme value persists across page reloads
- Test system preference detection: Test on systems with dark mode preference
- Test theme application: Verify document.documentElement.classList gets 'dark' class
- Test all exported functions: `toggleDarkMode()`, `setDarkMode(true/false)`, `initializeDarkMode()`
- Edge case: Test behavior when localStorage is unavailable

**Pattern for `useToast.ts`:**
- Test all toast types: 'success', 'error', 'info', 'warning'
- Test auto-hide timeout: Verify toast hides after specified duration
- Test computed icon/class generation: Each type should produce correct icon and classes
- Test shorthand methods: `showSuccess()`, `showError()`, `showInfo()`, `showWarning()`
- Test readonly refs: Verify state refs are readonly to consumers

### Testing Utilities

**Pattern for `clipboard.ts`:**
- Test modern clipboard API path: navigator.clipboard.writeText()
- Test fallback path: textarea selection fallback for older browsers
- Test secure context check: Behavior when window.isSecureContext is false
- Test error handling: Try-catch paths return appropriate values
- Test return values: `Promise<boolean>` for `copyToClipboard()`, `Promise<string>` for wrapper functions
- Edge case: Test when DOM is unavailable (SSR context)

**Pattern for `calendar.ts` and other utilities:**
- Test pure functions independently
- Test date calculations with edge cases (leap years, month boundaries)
- Test error handling paths with invalid inputs

### Testing Components

**Pattern for Button Component (`Button.vue`):**
- Test all variants: primary, secondary, danger, success, warning, ghost
- Test all sizes: sm, md, lg
- Test icon positioning: left and right
- Test disabled state: Button should not emit click when disabled
- Test tag rendering: Verify correct HTML element based on props (button/a/NuxtLink)
- Test external links: Proper target="_blank" and rel="noopener noreferrer"
- Test slot rendering: Icon slots, label slots

**Pattern for Modal Component (`EmailModal.vue`):**
- Test modal open/close: Watch for isOpen prop changes
- Test form state initialization: emailSubject and emailBody populate from template
- Test copy functionality: Verify clipboard operations and toast feedback
- Test email opening: Verify mailto: link construction with proper encoding
- Test user interactions: All buttons trigger expected handlers
- Test computed properties: Email subject/body encoding

**Pattern for Composable Components:**
- Test component-specific state management
- Test event emission: All emits() reach parent correctly
- Test slot rendering: Default and named slots
- Test prop reactivity: Component updates when props change
- Test computed properties: Dynamic class generation

### Testing Data Modules

**Pattern for `sites.ts`:**
- Test data structure: All sites have required properties
- Test filter functions: `getEmailSites()`, `getBankIDSites()` return correct subsets
- Test count function: `getSiteCount()` returns correct length
- Data integrity: All sites have valid email addresses or proper method descriptions

**Pattern for `templates.ts`:**
- Test template data structure: subject and body are non-empty strings
- Test custom template creation: `createCustomTemplate()` produces valid output
- Test template consistency: GDPR compliance language is present
- Test internationalization: Swedish language consistency

### Testing Data Flow

**Pattern for Email Modal Flow:**
1. User clicks "Open Email Modal" on site card
2. Modal receives site data via currentSite prop
3. Form initializes with GDPR template
4. User edits subject/body
5. Copy button: Copies to clipboard and shows toast feedback
6. Send button: Constructs mailto: URL and opens in default email client
7. Close button: Emits close event to parent

**Pattern for Dark Mode Flow:**
1. Initialize dark mode from localStorage or system preference
2. Apply theme to document.documentElement
3. Toggle updates state and localStorage
4. Other components react via isDarkMode computed property
5. Test persistence: Reload page and verify theme is restored

### Integration Testing Guidance

**API Routes (`server/api/health.get.ts`):**
- Test endpoint returns JSON with status 'ok'
- Test timestamp is current ISO string
- Test uptime value is positive number
- Test environment variable is accessible

**Page Components:**
- Test page loads without errors
- Test all sections render (HeroSection, SitesSection, etc.)
- Test navigation between pages works
- Test SEO metadata is properly set

## Common Testing Scenarios

**Async Operations Testing:**
- Toast notifications with setTimeout delay
- Clipboard operations with Promise returns
- Modal transitions with Headless UI transitions

**Error Path Testing:**
- Clipboard failures with fallback implementation
- Missing environment variables (Umami config)
- Invalid input to utility functions

**State Management Testing:**
- Ref reactivity: Changes propagate to templates
- Computed properties: Update when dependencies change
- Watch watchers: Trigger on prop/ref changes
- Readonly protection: Prevent direct state mutation

---

*Testing analysis: 2026-01-22*
