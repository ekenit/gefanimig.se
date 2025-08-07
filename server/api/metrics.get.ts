import { getMetrics } from '~/utils/metrics'

export default defineEventHandler(async event => {
  try {
    // Set appropriate headers for Prometheus metrics
    setHeader(event, 'Content-Type', 'text/plain; version=0.0.4; charset=utf-8')
    setHeader(event, 'Cache-Control', 'no-cache, no-store, must-revalidate')

    // Get metrics in Prometheus format
    const metrics = await getMetrics()

    return metrics
  } catch (error) {
    console.error('Error generating metrics:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    })
  }
})
