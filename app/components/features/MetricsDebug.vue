<template>

  <div v-if="isDev" class="fixed bottom-4 right-4 z-50">

    <div
      class="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-md"
    >

      <div class="flex items-center justify-between mb-3">

        <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">
           📊 Metrics Debug
        </h3>
         <Button
          variant="ghost"
          size="sm"
          icon="heroicons:x-mark"
          @click="isOpen = !isOpen"
          class="!p-1"
        />
      </div>

      <div v-if="isOpen" class="space-y-3">

        <div class="text-xs text-gray-600 dark:text-gray-400">

          <p>
             Environment: <span class="font-mono">{{ environment }}</span
            >
          </p>

          <p>Last updated: {{ lastUpdated }}</p>

        </div>

        <div class="space-y-2">
           <Button
            variant="secondary"
            size="sm"
            @click="refreshMetrics"
            :loading="loading"
            class="w-full"
            > 🔄 Refresh Metrics </Button
          > <Button
            variant="secondary"
            size="sm"
            @click="testTracking"
            class="w-full"
            > 🧪 Test Tracking </Button
          >
        </div>

        <div v-if="metrics" class="bg-gray-50 dark:bg-gray-900 rounded p-3">

          <h4 class="text-xs font-semibold mb-2">Current Metrics:</h4>

          <pre
            class="text-xs text-gray-700 dark:text-gray-300 overflow-auto max-h-40"
            >{{ metrics }}</pre
          >

        </div>

      </div>

      <div v-else>
         <Button variant="ghost" size="sm" @click="isOpen = true" class="w-full"
          > 📊 Show Metrics </Button
        >
      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
const isDev = process.env.NODE_ENV === 'development'
const environment = process.env.NODE_ENV || 'unknown'
const isOpen = ref(false)
const loading = ref(false)
const metrics = ref<string>('')
const lastUpdated = ref<string>('')

const refreshMetrics = async () => {
  if (!isDev) return

  loading.value = true
  try {
    const response = await fetch('/api/metrics')
    if (response.ok) {
      metrics.value = await response.text()
      lastUpdated.value = new Date().toLocaleTimeString()
    }
  } catch (error) {
    console.error('Failed to fetch metrics:', error)
  } finally {
    loading.value = false
  }
}

const testTracking = async () => {
  if (!isDev) return

  try {
    await fetch('/api/metrics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'page_view',
        page: '/debug-test',
        method: 'GET',
        environment: 'development',
      }),
    })

    // Refresh metrics after test
    await refreshMetrics()
  } catch (error) {
    console.error('Failed to test tracking:', error)
  }
}

// Auto-refresh on mount
onMounted(() => {
  if (isDev) {
    refreshMetrics()
  }
})
</script>

