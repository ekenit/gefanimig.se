// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-08-07',
  
  // Enable Nuxt 4 app directory structure
  future: {
    compatibilityVersion: 4,
  },
  
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  // Ensure auto-imports work in Nuxt 4
  imports: {
    dirs: [
      'composables/**',
      'utils/**', 
      'data/**'
    ]
  },

  // Component auto-imports
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  css: ['./app/main.css'],
  
  ssr: true,
  
  nitro: {
    compressPublicAssets: true,
    // Security headers via route rules
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';"
        }
      }
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'sv'
      },
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#3B82F6' },
        { property: 'og:image', content: 'https://gefanimig.se/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Ge Fan i Mig - GDPR verktyg för Sverige' },
        { name: 'twitter:image', content: 'https://gefanimig.se/og-image.jpg' },
      ]
    }
  }
})
