import type { ToastNotification } from '~/app/types'

let timer: ReturnType<typeof setTimeout> | null = null

export const useToast = () => {
  const isVisible = useState<boolean>('toast-visible', () => false)
  const message = useState<string>('toast-message', () => '')
  const type = useState<ToastNotification['type']>('toast-type', () => 'success')

  const showToast = (
    msg: string,
    toastType: ToastNotification['type'] = 'success',
    duration: number = 3000,
  ) => {
    if (timer) clearTimeout(timer)
    message.value = msg
    type.value = toastType
    isVisible.value = true
    timer = setTimeout(() => {
      isVisible.value = false
    }, duration)
  }

  const hideToast = () => {
    if (timer) clearTimeout(timer)
    isVisible.value = false
  }

  const showSuccess = (msg: string) => showToast(msg, 'success')
  const showError = (msg: string) => showToast(msg, 'error')
  const showInfo = (msg: string) => showToast(msg, 'info')
  const showWarning = (msg: string) => showToast(msg, 'warning')

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
  }
}
