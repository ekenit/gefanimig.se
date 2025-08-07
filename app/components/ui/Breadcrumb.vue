<template>

  <nav
    class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6"
    aria-label="Breadcrumb"
  >
     <NuxtLink
      to="/"
      class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors flex items-center space-x-1"
      > <Icon name="heroicons:home" class="h-4 w-4" /> <span>Hem</span>
      </NuxtLink
    > <Icon name="heroicons:chevron-right" class="h-4 w-4" /> <span
      class="text-gray-700 dark:text-gray-300 font-medium"
      >{{ currentPage }}</span
    >
  </nav>

</template>

<script setup lang="ts">
interface Props {
  currentPage: string
}

defineProps<Props>()
</script>

