<template>

  <header
    class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50"
  >

    <div class="py-4 px-4 mx-auto max-w-7xl">

      <div class="flex items-center justify-between">
         <!-- Logo --> <NuxtLink
          to="/"
          class="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
          <div
            class="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
          >
             <Icon name="heroicons:shield-check" class="h-5 w-5 text-white" />
          </div>

          <h1
            class="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent"
          >
             Ge Fan i Mig
          </h1>
           </NuxtLink
        > <!-- Navigation -->
        <div class="flex items-center space-x-3">
           <!-- Dark Mode Toggle --> <Button
            variant="ghost"
            size="sm"
            :icon="isDarkMode ? 'heroicons:sun' : 'heroicons:moon'"
            @click="toggleDarkMode"
            :title="
              isDarkMode ? 'Växla till ljust läge' : 'Växla till mörkt läge'
            "
          /> <!-- Navigation Links -->
          <div class="flex items-center space-x-2">
             <NuxtLink
              to="/security"
              class="inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-xl border border-transparent transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98] bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50 shadow-sm hover:shadow-md focus:ring-red-500 dark:focus:ring-red-400"
              > <Icon name="heroicons:shield-check" class="h-4 w-4 mr-2" />
              Andra Säkerhetsresurser </NuxtLink
            > <NuxtLink
              to="/about"
              class="inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-xl border border-transparent transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98] bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 shadow-sm hover:shadow-md focus:ring-gray-500 dark:focus:ring-gray-400"
              > <Icon
                name="heroicons:information-circle"
                class="h-4 w-4 mr-2"
              /> Om Sidan </NuxtLink
            >
          </div>

        </div>

      </div>

    </div>

  </header>

</template>

<script setup lang="ts">
const { isDarkMode, toggleDarkMode } = useDarkMode()
</script>

