import type { ToastNotification } from '~/app/types'

/**
 * Composable for managing toast notifications
 * Provides a clean API for showing success, error, and info messages
 */
export const useToast = () => {
  const isVisible = ref<boolean>(false)
  const message = ref<string>('')
  const type = ref<ToastNotification['type']>('success')

  /**
   * Show a toast notification
   */
  const showToast = (msg: string, toastType: ToastNotification['type'] = 'success', duration: number = 3000) => {
    message.value = msg
    type.value = toastType
    isVisible.value = true

    setTimeout(() => {
      hideToast()
    }, duration)
  }

  /**
   * Hide the toast notification
   */
  const hideToast = () => {
    isVisible.value = false
  }

  /**
   * Show success toast
   */
  const showSuccess = (msg: string) => {
    showToast(msg, 'success')
  }

  /**
   * Show error toast
   */
  const showError = (msg: string) => {
    showToast(msg, 'error')
  }

  /**
   * Show info toast
   */
  const showInfo = (msg: string) => {
    showToast(msg, 'info')
  }

  /**
   * Show warning toast
   */
  const showWarning = (msg: string) => {
    showToast(msg, 'warning')
  }

  /**
   * Get icon for toast type
   */
  const getToastIcon = computed(() => {
    const icons = {
      success: 'heroicons:check-circle',
      error: 'heroicons:x-circle',
      warning: 'heroicons:exclamation-triangle',
      info: 'heroicons:information-circle'
    }
    return icons[type.value] || icons.info
  })

  /**
   * Get CSS classes for toast type
   */
  const getToastClasses = computed(() => {
    const baseClasses = 'flex items-center space-x-3 p-4 rounded-xl shadow-lg border'
    const typeClasses = {
      success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200',
      error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200',
      warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200',
      info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200'
    }
    return `${baseClasses} ${typeClasses[type.value] || typeClasses.info}`
  })

  return {
    isVisible: readonly(isVisible),
    message: readonly(message),
    type: readonly(type),
    showToast,
    hideToast,
    showSuccess,
    showError,
    showInfo,
    showWarning,
    getToastIcon,
    getToastClasses
  }
} 