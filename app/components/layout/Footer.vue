<template>

  <footer class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">

    <div class="mx-auto max-w-4xl px-4">

      <div class="text-center">
         <!-- Logo -->
        <div class="flex items-center justify-center space-x-3 mb-4">

          <div
            class="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center"
          >
             <Icon name="heroicons:shield-check" class="h-5 w-5 text-white" />
          </div>
           <span class="text-xl font-bold">Ge Fan i Mig</span>
        </div>
         <!-- Tagline -->
        <p class="text-gray-400 mb-6">
           En privatperson som blev less på spam och bluffföretag
        </p>
         <!-- Quick Facts -->
        <div
          class="bg-gray-800/50 rounded-xl p-4 mb-6 text-left max-w-2xl mx-auto"
        >

          <div class="grid sm:grid-cols-2 gap-3 text-sm">

            <div class="flex items-center space-x-2">

              <div
                class="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"
              ></div>
               <span class="text-gray-300">100% gratis, inget företag</span>
            </div>

            <div class="flex items-center space-x-2">

              <div class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
               <span class="text-gray-300">~50-100 kr/månad att driva</span>
            </div>

            <div class="flex items-center space-x-2">

              <div
                class="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
              ></div>
               <span class="text-gray-300">Öppen källkod, ingen bullshit</span>
            </div>

            <div class="flex items-center space-x-2">

              <div
                class="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"
              ></div>
               <span class="text-gray-300">Samma info som betalföretagen</span>
            </div>

          </div>

        </div>
         <!-- Action Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
           <Button
            tag="NuxtLink"
            to="https://buymeacoffee.com/ekenit"
            variant="warning"
            external
            icon="heroicons:heart"
            > Köp en kaffe ☕ </Button
          > <slot name="dark-mode-toggle" />
        </div>
         <!-- Simple Footer -->
        <div class="border-t border-gray-700 pt-6 mt-6">
          <div class="text-center space-y-4">
            <!-- Share Link -->
            <div>
              <Button
                variant="ghost"
                size="sm"
                @click="copyLink"
                class="text-gray-400 hover:text-gray-300 text-sm"
              >
                <Icon name="heroicons:link" class="h-4 w-4 mr-2" />
                Dela denna sida
              </Button>
            </div>
            
            <!-- Copyright -->
            <p class="text-xs text-gray-500">
              © 2025 Ge Fan i Mig • Använd på egen risk • 100% gratis
            </p>
          </div>
        </div>

      </div>

    </div>

  </footer>

</template>

<script setup lang="ts">
// Footer component - clean and modular

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText('https://gefanimig.se')
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}
</script>

