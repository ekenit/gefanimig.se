<template>
  <TransitionRoot appear :show="isVisible" as="template">
    <TransitionChild
      as="template"
      enter="transform transition duration-300 ease-out"
      enter-from="translate-y-full opacity-0"
      enter-to="translate-y-0 opacity-100"
      leave="transform transition duration-200 ease-in"
      leave-from="translate-y-0 opacity-100"
      leave-to="translate-y-full opacity-0"
    >
      <div :class="toastClasses" @click="hideToast">
        <Icon :name="getToastIcon" :class="iconClasses" />
        <span>{{ message }}</span>
        <button 
          @click="hideToast" 
          class="ml-auto text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          aria-label="Stäng notifiering"
        >
          <Icon name="heroicons:x-mark" class="h-4 w-4" />
        </button>
      </div>
    </TransitionChild>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

const { isVisible, message, type, hideToast, getToastIcon, getToastClasses } = useToast()

const toastClasses = computed(() => {
  return `fixed bottom-4 right-4 z-50 max-w-sm w-full ${getToastClasses.value}`
})

const iconClasses = computed(() => {
  return 'h-5 w-5 flex-shrink-0'
})
</script> 