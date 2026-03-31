<template>
  <header class="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
    <div class="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
      <NuxtLink to="/" class="font-semibold text-base tracking-tight hover:opacity-70 transition-opacity">
        Ge Fan i Mig
      </NuxtLink>

      <nav class="flex items-center gap-1">
        <NuxtLink
          to="/about"
          class="px-3 py-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Om
        </NuxtLink>
        <button
          @click="toggleDarkMode"
          class="ml-1 p-2 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :title="isDarkMode ? 'Ljust läge' : 'Mörkt läge'"
        >
          <Icon :name="isDarkMode ? 'heroicons:sun-20-solid' : 'heroicons:moon-20-solid'" class="h-4 w-4" />
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const { isDarkMode, toggleDarkMode } = useDarkMode()
</script>
