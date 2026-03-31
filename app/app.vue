<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased">
    <Header />
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    <Footer />
    <Toast />
  </div>
</template>

<script setup lang="ts">
useDarkMode()
</script>
