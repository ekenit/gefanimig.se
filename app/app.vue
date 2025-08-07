<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 selection:bg-blue-200 dark:selection:bg-blue-800 font-sans antialiased">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <Header />

    <!-- Page Content -->
    <NuxtPage :transition="{
      name: 'page',
      mode: 'out-in'
    }" />

    <!-- Footer with Dark Mode Toggle -->
    <Footer>
      <template #dark-mode-toggle>
        <Button
          variant="ghost"
          size="sm"
          :icon="isDarkMode ? 'heroicons:sun' : 'heroicons:moon'"
          @click="toggleDarkMode"
        >
          {{ isDarkMode ? 'Ljust läge' : 'Mörkt läge' }}
        </Button>
      </template>
    </Footer>

    <!-- Toast Notifications -->
    <Toast />
  </div>
</template>

<script setup lang="ts">
// Use composables
const { isDarkMode, toggleDarkMode } = useDarkMode()

// Global error handling
const handleError = (error: any) => {
  console.error('Global error:', error)
  // In production, you might want to send this to an error tracking service
  // like Sentry or LogRocket
}

// Error boundary
onErrorCaptured((error, instance, info) => {
  console.error('Error captured:', error, instance, info)
  return false // Prevent error from propagating
})

// Performance monitoring
onMounted(() => {
  if (import.meta.client) {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime)
        } else if (entry.entryType === 'first-input') {
          console.log('FID:', (entry as any).processingStart - entry.startTime)
        } else if (entry.entryType === 'layout-shift') {
          console.log('CLS:', (entry as any).value)
        }
      }
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
  }
})
</script>