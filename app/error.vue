<template>

  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4"
  >

    <div class="max-w-md w-full text-center">

      <div class="mb-8">

        <div
          class="w-24 h-24 mx-auto mb-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center"
        >
           <Icon
            name="heroicons:exclamation-triangle"
            class="h-12 w-12 text-red-600 dark:text-red-400"
          />
        </div>

        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
           {{
            error.statusCode === 404
              ? 'Sidan hittades inte'
              : 'Ett fel uppstod'
          }}
        </h1>

        <p class="text-gray-600 dark:text-gray-300 mb-8">
           {{
            error.statusCode === 404
              ? 'Sidan du letar efter finns inte. Kontrollera URL:en och försök igen.'
              : 'Något gick fel. Försök igen senare.'
          }}
        </p>

      </div>

      <div class="space-y-4">
         <Button
          @click="handleError"
          variant="primary"
          icon="heroicons:arrow-path"
          > Försök igen </Button
        > <Button
          tag="NuxtLink"
          to="/"
          variant="secondary"
          icon="heroicons:home"
          > Gå till startsidan </Button
        >
      </div>

      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">

        <p class="text-sm text-gray-500 dark:text-gray-400">
           Felkod: {{ error.statusCode }}
        </p>

      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    message: string
  }
}

const props = defineProps<Props>()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

