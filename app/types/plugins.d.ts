declare module '#app' {
  interface NuxtApp {
    $trackInteraction: (action: string, site?: string) => void
    $trackEmailTemplateUsage: (action: 'copy' | 'open_email_client') => void
    $trackClick: (element: string, page: string) => void
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $trackInteraction: (action: string, site?: string) => void
    $trackEmailTemplateUsage: (action: 'copy' | 'open_email_client') => void
    $trackClick: (element: string, page: string) => void
  }
}

export {}
