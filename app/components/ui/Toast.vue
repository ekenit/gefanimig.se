<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-2 opacity-0"
    >
      <div v-if="isVisible" :class="toastClasses" @click="hideToast">
        <Icon :name="toastIcon" class="h-4 w-4 flex-shrink-0" />
        <span class="text-sm">{{ message }}</span>
        <button
          @click.stop="hideToast"
          class="ml-auto pl-2 opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Stäng"
        >
          <Icon name="heroicons:x-mark-20-solid" class="h-4 w-4" />
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { isVisible, message, type, hideToast } = useToast()

const toastIcon = computed(() => {
  const icons: Record<string, string> = {
    success: 'heroicons:check-circle-20-solid',
    error: 'heroicons:x-circle-20-solid',
    warning: 'heroicons:exclamation-triangle-20-solid',
    info: 'heroicons:information-circle-20-solid',
  }
  return icons[type.value ?? 'info']
})

const toastClasses = computed(() => {
  const base = 'fixed bottom-4 right-4 z-[100] flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg border max-w-sm cursor-pointer'
  const styles: Record<string, string> = {
    success: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200',
    error: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200',
    warning: 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200',
    info: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200',
  }
  return `${base} ${styles[type.value ?? 'info']}`
})
</script>
