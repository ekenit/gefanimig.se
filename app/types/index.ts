// Core site information interface
export interface Site {
  name: string
  method: string
  link: string
  linkText?: string
  email?: string
}

// Email template interface
export interface EmailTemplate {
  subject: string
  body: string
}

// Toast notification interface
export interface ToastNotification {
  message: string
  type?: 'success' | 'error' | 'info' | 'warning'
  duration?: number
}

// Dark mode theme type
export type Theme = 'light' | 'dark'

// Modal state interface
export interface ModalState {
  isOpen: boolean
  currentSite?: Site | null
}

// Navigation link interface
export interface NavLink {
  to: string
  label: string
  icon?: string
  external?: boolean
}

// SEO meta data interface
export interface SEOMeta {
  title: string
  description: string
  keywords: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
}
