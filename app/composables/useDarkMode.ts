import type { Theme } from '~/app/types'

/**
 * Composable for managing dark mode state and preferences
 * Handles localStorage persistence and system preference detection
 */
export const useDarkMode = () => {
  const isDarkMode = ref<boolean>(false)

  /**
   * Initialize dark mode based on stored preference or system preference
   */
  const initializeDarkMode = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem('theme')
      if (stored) {
        isDarkMode.value = stored === 'dark'
      } else {
        isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      applyTheme()
    }
  }

  /**
   * Toggle between light and dark mode
   */
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    applyTheme()
  }

  /**
   * Set dark mode to a specific value
   */
  const setDarkMode = (dark: boolean) => {
    isDarkMode.value = dark
    applyTheme()
  }

  /**
   * Get current theme as string
   */
  const currentTheme = computed((): Theme => {
    return isDarkMode.value ? 'dark' : 'light'
  })

  /**
   * Apply the current theme to the document
   */
  const applyTheme = () => {
    if (import.meta.client) {
      const theme = currentTheme.value
      document.documentElement.classList.toggle('dark', theme === 'dark')
      localStorage.setItem('theme', theme)
    }
  }

  // Initialize on mount
  onMounted(() => {
    initializeDarkMode()
  })

  return {
    isDarkMode: readonly(isDarkMode),
    currentTheme,
    toggleDarkMode,
    setDarkMode,
    initializeDarkMode
  }
} 