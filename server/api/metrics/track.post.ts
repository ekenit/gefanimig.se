import {
  trackPageView,
  trackUniqueVisitor,
  trackSessionDuration,
  trackSiteInteraction,
  trackClick,
  trackEmailTemplateUsage,
} from '~/utils/metrics'

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)
    const { type, ...data } = body

    switch (type) {
      case 'page_view':
        trackPageView(data.page)
        break

      case 'unique_visitor':
        trackUniqueVisitor(data.page)
        break

      case 'session_duration':
        trackSessionDuration(data.page, data.duration)
        break

      case 'site_interaction':
        trackSiteInteraction(data.action, data.site)
        break

      case 'click':
        trackClick(data.element, data.page)
        break

      case 'email_template_usage':
        trackEmailTemplateUsage(data.action)
        break

      default:
        console.warn('Unknown tracking type:', type)
    }

    return { success: true }
  } catch (error) {
    console.error('Error tracking metric:', error)
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    })
  }
})
