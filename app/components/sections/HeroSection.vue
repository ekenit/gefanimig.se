<template>

  <section class="py-8 sm:py-12 md:py-16 relative overflow-hidden">
     <!-- Background Gradients -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950"
    ></div>

    <div
      class="hidden sm:block absolute top-20 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"
    ></div>

    <div
      class="hidden sm:block absolute bottom-20 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse [animation-delay:1000ms]"
    ></div>

    <div class="relative text-center max-w-4xl mx-auto px-4 animate-fade-in">
       <!-- Main Heading -->
      <h2
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent leading-tight"
      >
         Ta kontroll över dina personuppgifter
      </h2>
       <!-- Subtitle -->
      <p
        class="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed"
      >
         Komplett guide för att ta bort dina uppgifter från svenska
        personuppgiftsdatabaser enligt GDPR
      </p>
       <!-- Free Badge -->
      <div
        class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-8 max-w-2xl mx-auto"
      >

        <div class="flex items-center space-x-3">
           <Icon
            name="heroicons:heart"
            class="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0"
          />
          <div class="text-sm text-green-800 dark:text-green-200">

            <p class="font-semibold mb-1">100% gratis - inga dolda kostnader</p>

            <p>
               Till skillnad från andra sajter som tar betalt för denna tjänst
              är vår guide helt gratis. Vi hjälper dig utan att tjäna pengar på
              din integritet. De andra hemsidorna tar betalt för att göra dessa
              små steg åt dig, jag anser att det är bluff och skrämsel.
            </p>

          </div>

        </div>

      </div>
       <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
         <Button
          @click="scrollToSites"
          variant="primary"
          icon="heroicons:rocket-launch"
          > Börja nu </Button
        > <Button
          @click="scrollToTemplate"
          variant="secondary"
          icon="heroicons:document-text"
          > gå till GDPR-mall </Button
        >
      </div>

    </div>

  </section>

</template>

<script setup lang="ts">
/**
 * Scroll to sites section
 */
const scrollToSites = () => {
  if (import.meta.client) {
    document.getElementById('sites')?.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Scroll to template section
 */
const scrollToTemplate = () => {
  if (import.meta.client) {
    document.getElementById('template')?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

