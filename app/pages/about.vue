<template>
  <main class="max-w-3xl mx-auto px-4">
    <section class="pt-16 pb-12 sm:pt-20 sm:pb-16">
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Om Ge Fan i Mig</h1>
      <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
        En enkel sida som samlar allt du behöver för att ta bort dig från svenska personuppgiftsdatabaser.
      </p>
    </section>

    <section class="pb-12">
      <h2 class="text-xl font-semibold mb-4">Varför finns den här sidan?</h2>
      <div class="space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed">
        <p>
          Det finns företag som tar 50&ndash;200 kr i månaden för att &quot;ta bort dina uppgifter&quot;.
          I praktiken gör de exakt det som beskrivs på den här sidan &mdash; skickar samma GDPR-begäran
          och klickar i samma formulär. Du kan göra det själv på fem minuter.
        </p>
        <p>
          De som verkligen behöver nå dig har redan ditt nummer. Resten är oftast
          telefonförsäljare och bedragare som hittar dig via publika databaser.
        </p>
      </div>
    </section>

    <section class="pb-12">
      <h2 class="text-xl font-semibold mb-4">Så fungerar det</h2>
      <ol class="space-y-3 text-gray-600 dark:text-gray-400">
        <li class="flex gap-3">
          <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium flex items-center justify-center">1</span>
          <span>Välj en databas från listan på startsidan.</span>
        </li>
        <li class="flex gap-3">
          <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium flex items-center justify-center">2</span>
          <span>Logga in med BankID eller skicka GDPR-mallen via e-post.</span>
        </li>
        <li class="flex gap-3">
          <span class="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium flex items-center justify-center">3</span>
          <span>Företaget måste svara inom 30 dagar enligt lag.</span>
        </li>
      </ol>
    </section>

    <section class="pb-12">
      <h2 class="text-xl font-semibold mb-4">Om projektet</h2>
      <div class="grid sm:grid-cols-3 gap-4">
        <div class="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <p class="text-sm font-medium mb-1">Gratis</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">Ingen kostnad, inget företag, ingen vinst.</p>
        </div>
        <div class="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <p class="text-sm font-medium mb-1">Öppen källkod</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            All kod på
            <a href="https://github.com/ekenit/gefanimig.se" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>.
          </p>
        </div>
        <div class="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <p class="text-sm font-medium mb-1">Ingen tracking</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">Integritetsvänlig analytics utan cookies.</p>
        </div>
      </div>
    </section>

    <section class="pb-12 border-t border-gray-200 dark:border-gray-800 pt-8">
      <p class="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
        Sidan är gjord av en privatperson och utgör inte juridisk rådgivning.
        Använd informationen på egen risk.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Om - Ge Fan i Mig',
  meta: [
    { name: 'description', content: 'Om Ge Fan i Mig - gratis guide för att ta bort personuppgifter från svenska databaser.' },
    { property: 'og:title', content: 'Om - Ge Fan i Mig' },
    { property: 'og:description', content: 'Gratis guide för att ta bort personuppgifter från svenska databaser.' },
    { property: 'og:url', content: 'https://gefanimig.se/about' },
  ],
  link: [{ rel: 'canonical', href: 'https://gefanimig.se/about' }],
})
</script>
