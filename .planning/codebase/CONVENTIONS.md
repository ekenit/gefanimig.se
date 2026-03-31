# Coding Conventions

**Analysis Date:** 2026-01-22

## Naming Patterns

**Files:**
- Vue components: PascalCase (e.g., `EmailModal.vue`, `SocialShare.vue`, `HeroSection.vue`)
- TypeScript files: camelCase for utilities/composables (e.g., `useDarkMode.ts`, `useToast.ts`, `clipboard.ts`)
- Data files: camelCase (e.g., `sites.ts`, `templates.ts`)
- API routes: kebab-case with file extension pattern (e.g., `health.get.ts`, `[id].post.ts`)

**Functions:**
- Composables: camelCase with `use` prefix (e.g., `useDarkMode()`, `useToast()`)
- Helper functions: camelCase (e.g., `copyTemplate()`, `copyToClipboard()`, `scrollToSites()`)
- Handler functions: camelCase with `handle` prefix (e.g., `handleClose()`, `handleCopyTemplate()`, `handleSendEmail()`)
- Getter functions: camelCase starting with `get` (e.g., `getEmailSites()`, `getBankIDSites()`, `getSiteCount()`)
- Event handlers: camelCase with `on` prefix in template bindings (e.g., `@click="handleClick"`, `@close="handleClose"`)

**Variables:**
- Local state: camelCase (e.g., `emailBody`, `currentSite`, `showEmailModal`, `isDarkMode`)
- Reactive refs: camelCase (e.g., `isVisible`, `message`, `type`, `isDarkMode`)
- Computed properties: camelCase (e.g., `currentTheme`, `getToastIcon`, `getToastClasses`)
- Constants: UPPER_SNAKE_CASE with `const` declaration (implicit in modern code)

**Types:**
- Interfaces: PascalCase (e.g., `Props`, `ToastNotification`, `Site`, `EmailTemplate`, `Theme`, `ModalState`, `NavLink`)
- Type aliases: PascalCase (e.g., `Theme = 'light' | 'dark'`)
- Prop interfaces: `Props` convention in component scripts

## Code Style

**Formatting:**
- Prettier is the primary formatter
- Configuration file: `.prettierrc`
- Key settings:
  - `semi: false` - No semicolons
  - `singleQuote: true` - Single quotes for strings
  - `tabWidth: 2` - 2-space indentation
  - `trailingComma: 'es5'` - Trailing commas in multi-line objects/arrays
  - `printWidth: 80` - Max line width
  - `arrowParens: 'avoid'` - Omit parens for single-param arrow functions
  - `endOfLine: 'lf'` - LF line endings
  - `bracketSpacing: true` - Spaces inside object braces
  - `vueIndentScriptAndStyle: false` - No extra indentation in Vue script/style blocks

**Formatting Examples:**
```typescript
// Arrow functions without parens
const scaleSites = (): Site[] => {
  return sites.filter(site => site.email)
}

// Trailing commas
const props = {
  variant: 'primary',
  size: 'md',
}

// Single quotes
const message = 'E-postmallen kopierats till urklipp!'

// No semicolons
const isDarkMode = ref<boolean>(false)
```

**Linting:**
- ESLint: Not currently configured
- No linting configuration detected in `.eslintrc` or similar
- Relies on Prettier for formatting consistency

## Import Organization

**Order:**
1. Built-in/library imports (Vue, Nuxt components, third-party)
2. Type imports (`import type { ... }`)
3. Local imports (relative paths `~/...`)

**Pattern Examples:**
```typescript
// Pattern 1: Vue/component imports first
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import type { Site } from '~/types'
import { gdprTemplate } from '~/data/templates'
import { copyTemplate } from '~/utils/clipboard'

// Pattern 2: Type-only imports
import type { ToastNotification } from '~/app/types'

// Pattern 3: Named imports with grouping
const { isDarkMode, toggleDarkMode } = useDarkMode()
const { showSuccess, showError } = useToast()
```

**Path Aliases:**
- Used throughout: `~` points to project root
- Examples: `~/app/types`, `~/data/templates`, `~/utils/clipboard`, `~/types`
- Enables clean, absolute-like imports from anywhere in the codebase

## Error Handling

**Patterns:**
- Console logging for errors: `console.error(message, error)` for caught exceptions
- Silent fallbacks with return values: Functions return `boolean` or message `string` to indicate success/failure
- Try-catch for async operations: Used in clipboard operations with fallback implementations

**Error Handling Examples:**
```typescript
// Pattern 1: Try-catch with fallback
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      return await fallbackCopyToClipboard(text)
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    return await fallbackCopyToClipboard(text)
  }
}

// Pattern 2: Try-catch with user feedback
const handleCopyTemplate = async () => {
  const { showSuccess, showError } = useToast()
  const message = await copyTemplate(emailBody.value, 'E-postmallen')

  if (message.includes('kopierats')) {
    showSuccess(message)
  } else {
    showError(message)
  }
}

// Pattern 3: Error boundary in Vue root component
onErrorCaptured((error, instance, info) => {
  console.error('Error captured:', error, instance, info)
  return false // Prevent propagation
})
```

## Logging

**Framework:** Console API (built-in `console` object)

**Patterns:**
- `console.error()` for errors and exceptions
- `console.log()` for performance metrics (Web Vitals: LCP, FID, CLS)
- `console.warn()` for configuration warnings
- Minimal logging - only critical issues and performance monitoring
- Performance monitoring uses PerformanceObserver API

**Logging Examples:**
```typescript
// Error logging
console.error('Global error:', error)
console.error('Error captured:', error, instance, info)
console.error('Failed to copy to clipboard:', error)

// Warning logging
console.warn('Umami Website ID not configured')

// Performance monitoring
console.log('LCP:', entry.startTime)
console.log('FID:', (entry as any).processingStart - entry.startTime)
console.log('CLS:', (entry as any).value)
```

## Comments

**When to Comment:**
- Function-level documentation: JSDoc-style comments for public functions and composables
- Complex logic: Explain "why" not "what"
- Intent markers: `// Initialize on mount`, `// Apply the current theme`
- Section headers: `<!-- Header -->`, `<!-- Background Gradients -->`

**JSDoc/TSDoc:**
- Used extensively for composables and utility functions
- Standard pattern:
  ```typescript
  /**
   * Brief description of what function does
   * Optional longer explanation of behavior
   */
  export const functionName = () => { ... }
  ```

**Comment Examples:**
```typescript
/**
 * Composable for managing toast notifications
 * Provides a clean API for showing success, error, and info messages
 */
export const useToast = () => { ... }

/**
 * Utility functions for clipboard operations
 * Handles copying text to clipboard with proper error handling
 */
export const copyToClipboard = async (text: string): Promise<boolean> => { ... }

// Template initialization comment in watch
/**
 * Initialize form when modal opens
 */
watch(
  () => props.isOpen,
  isOpen => {
    if (isOpen && props.currentSite) {
      emailBody.value = gdprTemplate.body
      emailSubject.value = gdprTemplate.subject
    }
  }
)
```

## Function Design

**Size:** Functions are kept concise and focused
- Simple utility functions: 1-5 lines
- Composable functions: 15-30 lines with multiple related concerns
- Handler functions: 5-15 lines

**Parameters:**
- Named parameters via destructuring in TypeScript
- Props interfaces for Vue components: `interface Props { ... }`
- Use `withDefaults()` for Vue component defaults

**Return Values:**
- Explicit TypeScript typing on returns
- Composables return object with named exports and readonly refs
- Utilities return `Promise<boolean>` or `Promise<string>` for async operations
- Computed properties return computed type or explicit types

**Return Examples:**
```typescript
// Composable returns object with typed values
return {
  isDarkMode: readonly(isDarkMode),
  currentTheme,
  toggleDarkMode,
  setDarkMode,
  initializeDarkMode,
}

// Utility returns Promise with explicit type
export const copyToClipboard = async (text: string): Promise<boolean> => { ... }
export const copyEmailAddress = async (email: string): Promise<string> => { ... }

// Getter functions return filtered arrays
export const getEmailSites = (): Site[] => {
  return sites.filter(site => site.email)
}
```

## Module Design

**Exports:**
- Named exports preferred: `export const functionName = () => { ... }`
- Default exports rare: Only used in Vue pages and some configs
- Barrel files: Not currently used; imports reference specific files

**File Organization:**
- One primary export per file (utilities, composables, data)
- Related helper functions: Keep private with no export (e.g., `fallbackCopyToClipboard`)
- Type exports: Grouped at top with `export interface` or `export type`

**Module Examples:**
```typescript
// Pattern 1: Composable with named exports
export const useDarkMode = () => { ... }
export const useToast = () => { ... }

// Pattern 2: Data file with helper functions
export const sites: Site[] = [ ... ]
export const getEmailSites = (): Site[] => { ... }
export const getBankIDSites = (): Site[] => { ... }

// Pattern 3: Utility with private fallback
export const copyToClipboard = async (text: string): Promise<boolean> => { ... }
const fallbackCopyToClipboard = async (text: string): Promise<boolean> => { ... }
```

## Vue-Specific Conventions

**Setup Script:**
- Use `<script setup lang="ts">` exclusively
- Props: Define with `interface Props { ... }` and `defineProps<Props>()`
- Emits: Define with `defineEmits<{ eventName: [types] }>()`
- Reactive state: Use `ref<Type>()` with explicit typing

**Template:**
- Single root element (or use Fragment/teleport)
- HTML comments for section markers: `<!-- Header -->`, `<!-- Modal -->`
- Component naming: Use PascalCase in templates
- Event handlers: Inline with arrow functions or method references

**Computed Properties:**
- Use `computed(() => { ... })` with explicit return type
- Used for derived state and dynamic class generation

**Watchers:**
- Use `watch()` for reactive property changes
- Include JSDoc comments explaining purpose

---

*Convention analysis: 2026-01-22*
