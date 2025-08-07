import {
  register as promRegister,
  Counter,
  Histogram,
  Gauge,
  Registry,
} from 'prom-client'

// Initialize Prometheus registry
const register = new Registry()

// GDPR-compliant metrics (no personal data)
export const metrics = {
  // Page views (anonymous)
  pageViews: new Counter({
    name: 'page_views_total',
    help: 'Total number of page views',
    labelNames: ['page'] as const,
  }),

  // Unique visitors (session-based, not personal)
  uniqueVisitors: new Counter({
    name: 'unique_visitors_total',
    help: 'Total number of unique visitors (session-based)',
    labelNames: ['page'] as const,
  }),

  // Session duration
  sessionDuration: new Histogram({
    name: 'session_duration_seconds',
    help: 'Session duration in seconds',
    labelNames: ['page'] as const,
    buckets: [30, 60, 300, 600, 1800, 3600, 7200], // 30s, 1m, 5m, 10m, 30m, 1h, 2h
  }),

  // Site interactions (anonymous)
  siteInteractions: new Counter({
    name: 'site_interactions_total',
    help: 'Total number of site interactions',
    labelNames: ['action', 'site'] as const,
  }),

  // Click tracking (anonymous)
  clicks: new Counter({
    name: 'clicks_total',
    help: 'Total number of clicks on elements',
    labelNames: ['element', 'page'] as const,
  }),

  // Email template usage (anonymous)
  emailTemplateUsage: new Counter({
    name: 'email_template_usage_total',
    help: 'Total number of email template usages',
    labelNames: ['action'] as const,
  }),

  // Response time metrics
  responseTime: new Histogram({
    name: 'http_request_duration_seconds',
    help: 'HTTP request duration in seconds',
    labelNames: ['method', 'route'] as const,
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10],
  }),

  // Active sessions (gauge)
  activeSessions: new Gauge({
    name: 'active_sessions_current',
    help: 'Current number of active sessions',
  }),
}

// Register metrics
register.registerMetric(metrics.pageViews)
register.registerMetric(metrics.uniqueVisitors)
register.registerMetric(metrics.sessionDuration)
register.registerMetric(metrics.siteInteractions)
register.registerMetric(metrics.clicks)
register.registerMetric(metrics.emailTemplateUsage)
register.registerMetric(metrics.responseTime)
register.registerMetric(metrics.activeSessions)

/**
 * Track page view (privacy-safe)
 */
export const trackPageView = (page: string) => {
  metrics.pageViews.inc({ page })
}

/**
 * Track unique visitor (session-based, not personal)
 */
export const trackUniqueVisitor = (page: string) => {
  metrics.uniqueVisitors.inc({ page })
}

/**
 * Track session duration
 */
export const trackSessionDuration = (page: string, duration: number) => {
  metrics.sessionDuration.observe({ page }, duration)
}

/**
 * Track site interaction (privacy-safe)
 */
export const trackSiteInteraction = (action: string, site?: string) => {
  metrics.siteInteractions.inc({ action, site: site || 'unknown' })
}

/**
 * Track click (privacy-safe)
 */
export const trackClick = (element: string, page: string) => {
  metrics.clicks.inc({ element, page })
}

/**
 * Track email template usage
 */
export const trackEmailTemplateUsage = (
  action: 'copy' | 'open_email_client'
) => {
  metrics.emailTemplateUsage.inc({ action })
}

/**
 * Track response time
 */
export const trackResponseTime = (
  method: string,
  route: string,
  duration: number
) => {
  metrics.responseTime.observe({ method, route }, duration)
}

/**
 * Update active sessions count
 */
export const updateActiveSessions = (count: number) => {
  metrics.activeSessions.set(count)
}

/**
 * Get metrics in Prometheus format
 */
export const getMetrics = async (): Promise<string> => {
  return await register.metrics()
}

export default metrics
