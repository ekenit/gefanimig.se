/**
 * Utility functions for clipboard operations
 * Handles copying text to clipboard with proper error handling
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  if (!import.meta.client) return false

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

/**
 * Fallback copy method for older browsers
 */
const fallbackCopyToClipboard = async (text: string): Promise<boolean> => {
  try {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    const result = document.execCommand('copy')
    document.body.removeChild(textArea)
    return result
  } catch (error) {
    console.error('Fallback copy failed:', error)
    return false
  }
}

/**
 * Copy email address to clipboard
 */
export const copyEmailAddress = async (email: string): Promise<string> => {
  const success = await copyToClipboard(email)
  return success
    ? `${email} kopierad till urklipp!`
    : 'Kunde inte kopiera e-postadressen. Kopiera manuellt istället.'
}

/**
 * Copy template to clipboard
 */
export const copyTemplate = async (
  template: string,
  templateName: string = 'mall'
): Promise<string> => {
  const success = await copyToClipboard(template)
  return success
    ? `${templateName} kopierats till urklipp!`
    : 'Kunde inte kopiera mallen. Kopiera manuellt istället.'
}
