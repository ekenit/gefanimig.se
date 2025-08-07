export default defineNuxtPlugin(() => {
  // Only run on client side
  if (process.server) return

  // Get Umami Website ID from environment variable
  const websiteId = useRuntimeConfig().public.umamiWebsiteId as string

  if (!websiteId) {
    console.warn('Umami Website ID not configured')
    return
  }

  // Add Umami tracking script
  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://umami-gefanimig.fly.dev/script.js'
  script.setAttribute('data-website-id', websiteId)
  document.head.appendChild(script)
})
