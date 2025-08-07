export default defineNuxtPlugin(() => {
  // Only run on client side
  if (process.server) return

  // Add Umami tracking script
  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://umami-gefanimig.fly.dev/script.js'
  script.setAttribute('data-website-id', 'your-website-id') // You'll get this from Umami dashboard
  document.head.appendChild(script)
})
