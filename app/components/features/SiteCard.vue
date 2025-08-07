<template>
  <Card
    variant="glass"
    hoverable
    class="animate-slide-up hover:border-blue-200/60 dark:hover:border-blue-500/30 hover:shadow-blue-100/25 dark:hover:shadow-blue-900/25 group"
  >
    <div class="flex items-start justify-between">
      <div class="flex-1 min-w-0">
        <!-- Step Number & Title -->
        <div class="flex items-center space-x-3 mb-3">
          <span class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center text-sm font-semibold">
            {{ stepNumber }}
          </span>
          <h4 class="text-lg font-semibold">{{ site.name }}</h4>
        </div>
        
        <!-- Method Description -->
        <p class="text-gray-600 dark:text-gray-300 mb-4 pl-11">
          {{ site.method }}
        </p>
        
        <!-- Email Display -->
        <div v-if="showEmail" class="pl-11 mb-4">
          <div class="flex items-center space-x-2 text-sm">
            <Icon name="heroicons:envelope" class="h-4 w-4 text-gray-400" />
            <code class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-800 dark:text-gray-200">
              {{ site.email }}
            </code>
            <Button
              variant="ghost"
              size="sm"
              icon="heroicons:clipboard"
              @click="handleCopyEmail"
              :title="`Kopiera ${site.email}`"
              class="!p-1"
            />
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3 pl-11">
          <Button
            tag="NuxtLink"
            :to="site.link"
            variant="secondary"
            external
            icon="heroicons:arrow-top-right-on-square"
          >
            {{ site.linkText || 'Besök webbplats' }}
          </Button>
          
          <Button
            v-if="site.email"
            variant="primary"
            icon="heroicons:paper-airplane"
            @click="handleEmailTemplate"
          >
            Skapa e-postmall
          </Button>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { Site } from '~/types'

interface Props {
  site: Site
  stepNumber: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  copyEmail: [email: string]
  openEmailModal: [site: Site]
}>()

/**
 * Should show email address (for non-form sites)
 */
const showEmail = computed(() => {
  return props.site.email && !props.site.method.includes('webbformulär')
})

/**
 * Handle email copying with toast notification
 */
const handleCopyEmail = async () => {
  if (!props.site.email) return
  
  const { showSuccess, showError } = useToast()
  const message = await copyEmailAddress(props.site.email)
  
  if (message.includes('kopierad')) {
    showSuccess(message)
  } else {
    showError(message)
  }
  
  emit('copyEmail', props.site.email)
}

/**
 * Handle email template creation
 */
const handleEmailTemplate = () => {
  emit('openEmailModal', props.site)
}
</script> 