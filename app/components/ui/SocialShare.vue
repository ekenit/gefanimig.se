<template>
  <div class="flex items-center space-x-3">
    <span class="text-sm text-gray-600 dark:text-gray-400">Dela denna sida:</span>
    
    <!-- Copy Link -->
    <Button
      variant="ghost"
      size="sm"
      @click="copyLink"
      class="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
      aria-label="Kopiera länk"
    >
      <Icon name="heroicons:clipboard" class="h-4 w-4" />
    </Button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  url?: string
}

const props = withDefaults(defineProps<Props>(), {
  url: () => window?.location?.href || 'https://gefanimig.se'
})

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(props.url)
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}
</script> 