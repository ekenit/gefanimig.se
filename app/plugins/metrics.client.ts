export default defineNuxtPlugin(() => {
  // Only run on client side
  if (process.server) return

  const router = useRouter()
  const route = useRoute()

  // Session tracking
  let sessionStartTime = Date.now()
  let lastActivity = Date.now()

  // Track initial page view and unique visitor
  trackPageView(route.path)
  trackUniqueVisitor(route.path)

  // Track route changes
  router.afterEach(to => {
    trackPageView(to.path)
    trackUniqueVisitor(to.path)
  })

  // Track user activity
  const trackActivity = () => {
    lastActivity = Date.now()
  }

  // Track clicks
  const trackClick = (element: string, page: string) => {
    trackClickInternal(element, page)
  }

  // Track user interactions
  const trackInteraction = (action: string, site?: string) => {
    trackSiteInteraction(action, site)
  }

  const trackEmailTemplateUsage = (action: 'copy' | 'open_email_client') => {
    trackEmailTemplateUsageInternal(action)
  }

  // Add event listeners for activity tracking
  if (import.meta.client) {
    document.addEventListener('click', trackActivity)
    document.addEventListener('scroll', trackActivity)
    document.addEventListener('mousemove', trackActivity)
    document.addEventListener('keypress', trackActivity)
  }

  // Track session duration on page unload
  if (import.meta.client) {
    window.addEventListener('beforeunload', () => {
      const sessionDuration = (Date.now() - sessionStartTime) / 1000
      trackSessionDuration(route.path, sessionDuration)
    })
  }

  // Expose tracking functions globally
  return {
    provide: {
      trackInteraction,
      trackEmailTemplateUsage,
      trackClick,
    },
  }
})

// Privacy-safe tracking functions
function trackPageView(page: string) {
  // Only track in production
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/metrics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'page_view',
        page,
      }),
    }).catch(() => {
      // Silently fail - metrics are not critical
    })
  }
}

function trackUniqueVisitor(page: string) {
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/metrics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'unique_visitor',
        page,
      }),
    }).catch(() => {
      // Silently fail
    })
  }
}

function trackSessionDuration(page: string, duration: number) {
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/metrics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'session_duration',
        page,
        duration,
      }),
    }).catch(() => {
      // Silently fail
    })
  }
}

function trackSiteInteraction(action: string, site?: string) {
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/metrics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'site_interaction',
        action,
        site,
      }),
    }).catch(() => {
      // Silently fail
    })
  }
}

function trackClickInternal(element: string, page: string) {
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/metrics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'click',
        element,
        page,
      }),
    }).catch(() => {
      // Silently fail
    })
  }
}

function trackEmailTemplateUsageInternal(action: 'copy' | 'open_email_client') {
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/metrics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'email_template_usage',
        action,
      }),
    }).catch(() => {
      // Silently fail
    })
  }
}
