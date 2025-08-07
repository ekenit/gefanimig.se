<template>

  <div
    class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950"
  >

    <div class="py-8 sm:py-12 md:py-16 px-4 mx-auto max-w-7xl">

      <div class="max-w-4xl mx-auto">
         <!-- Breadcrumb --> <Breadcrumb current-page="Om oss" />
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600 bg-clip-text text-transparent"
        >
           Om Ge Fan i Mig
        </h1>

        <p
          class="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
           Varför du borde ta bort dina uppgifter från svenska databaser
        </p>
         <!-- Core Value Proposition -->
        <div
          class="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16"
        >
           <Card variant="glass" hoverable padding="lg"
            >
            <div
              class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-600/20 border border-purple-200/30 dark:border-purple-700/30 mb-6"
            >
               <Icon
                name="heroicons:phone-x-mark"
                class="h-6 w-6 text-purple-600 dark:text-purple-400"
              />
            </div>

            <h3 class="text-lg font-semibold mb-4">Varför bry sig?</h3>

            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
               De som verkligen behöver nå dig har redan ditt nummer. Resten är
              oftast spam, telefonförsäljare och bedragare som hittar dig via
              publika databaser.
            </p>
             </Card
          > <Card variant="glass" hoverable padding="lg"
            >
            <div
              class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-pink-500/10 to-purple-600/20 border border-pink-200/30 dark:border-pink-700/30 mb-6"
            >
               <Icon
                name="heroicons:currency-dollar"
                class="h-6 w-6 text-pink-600 dark:text-pink-400"
              />
            </div>

            <h3 class="text-lg font-semibold mb-4">Gratis vs Bluffföretag</h3>

            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
               Andra sajter tar 50–200 kr i månaden för samma information som
              finns här gratis. Det är samma lagar, samma rättigheter, samma
              resultat. Låt dig inte luras.
            </p>
             </Card
          >
        </div>
         <!-- Quick Facts & GitHub -->
        <div class="mt-12">
           <Card variant="glass" padding="lg"
            >
            <div class="text-center">

              <h3 class="text-xl font-semibold mb-6">Om projektet</h3>

              <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

                <div class="text-center">

                  <div
                    class="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-3"
                  >
                     <Icon
                      name="heroicons:heart"
                      class="h-6 w-6 text-green-600 dark:text-green-400"
                    />
                  </div>

                  <h4 class="font-medium mb-2">100% Gratis</h4>

                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Inget företag, ingen vinst
                  </p>

                </div>

                <div class="text-center">

                  <div
                    class="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3"
                  >
                     <Icon
                      name="heroicons:code-bracket"
                      class="h-6 w-6 text-blue-600 dark:text-blue-400"
                    />
                  </div>

                  <h4 class="font-medium mb-2">Öppen källkod</h4>

                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Transparent och verifierbar
                  </p>

                </div>

                <div class="text-center sm:col-span-2 lg:col-span-1">

                  <div
                    class="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3"
                  >
                     <Icon
                      name="heroicons:shield-check"
                      class="h-6 w-6 text-purple-600 dark:text-purple-400"
                    />
                  </div>

                  <h4 class="font-medium mb-2">Ingen tracking</h4>

                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Respekterar din integritet
                  </p>

                </div>

              </div>
               <!-- GitHub Link -->
              <div class="pt-6 border-t border-gray-200 dark:border-gray-700">
                 <Button
                  tag="NuxtLink"
                  to="https://github.com/ekenit/gefanimig.se"
                  external
                  target="_blank"
                  variant="secondary"
                  icon="heroicons:code-bracket"
                  class="mx-auto"
                  > Se källkoden på GitHub </Button
                >
              </div>

            </div>
             </Card
          >
        </div>
         <!-- How It Works - Simplified -->
        <div class="mt-12">
           <Card variant="glass" padding="lg"
            >
            <h3 class="text-xl font-semibold mb-6 text-center">
              Så fungerar det
            </h3>

            <div class="grid sm:grid-cols-3 gap-6 text-center">

              <div>

                <div
                  class="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3"
                >
                   <span class="font-bold text-blue-600 dark:text-blue-400"
                    >1</span
                  >
                </div>

                <h4 class="font-medium mb-2">Hitta sajterna</h4>

                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Lista över svenska databaser som lagrar dina uppgifter
                </p>

              </div>

              <div>

                <div
                  class="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3"
                >
                   <span class="font-bold text-blue-600 dark:text-blue-400"
                    >2</span
                  >
                </div>

                <h4 class="font-medium mb-2">Använd GDPR-mall</h4>

                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Färdiga e-postmallar för att begära borttagning
                </p>

              </div>

              <div>

                <div
                  class="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3"
                >
                   <span class="font-bold text-blue-600 dark:text-blue-400"
                    >3</span
                  >
                </div>

                <h4 class="font-medium mb-2">Få bekräftelse</h4>

                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Företagen måste svara inom 30 dagar enligt lag
                </p>

              </div>

            </div>
             </Card
          >
        </div>
         <!-- Legal Notice - Simplified -->
        <div class="mt-12">
           <Card variant="glass" padding="lg"
            >
            <div class="text-center">
               <Icon
                name="heroicons:information-circle"
                class="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-4"
              />
              <h3 class="text-lg font-semibold mb-4">Viktig information</h3>

              <p
                class="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
              >
                 Denna sajt är gjord av en privatperson och är inte juridisk
                rådgivning. Använd informationen på egen risk. Resultatet kan
                variera beroende på hur företagen hanterar förfrågningar.
              </p>

            </div>
             </Card
          >
        </div>
         <!-- Calendar Reminder --> <AboutCalendarReminder /> <!-- Navigation -->

        <div class="mt-12 text-center">
           <Button
            tag="a"
            href="/"
            variant="primary"
            icon="heroicons:arrow-left"
            > Tillbaka till startsidan </Button
          >
        </div>

      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
// SEO and Meta
useHead({
  title: 'Om Ge Fan i Mig - Varför ta bort personuppgifter från databaser',
  meta: [
    {
      name: 'description',
      content:
        'Lär dig varför du borde ta bort dina personuppgifter från svenska databaser och undvika bluffföretag som tar betalt för samma information. Gratis GDPR-guide.',
    },
    {
      name: 'keywords',
      content:
        'GDPR, personuppgifter, svenska databaser, integritet, om oss, Ge Fan i Mig, bluffföretag, gratis, telefonförsäljare, spam',
    },
    {
      name: 'robots',
      content:
        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
    { name: 'language', content: 'sv' },
    { name: 'geo.region', content: 'SE' },
    {
      property: 'og:title',
      content:
        'Om Ge Fan i Mig - Varför ta bort personuppgifter från databaser',
    },
    {
      property: 'og:description',
      content:
        'Lär dig varför du borde ta bort dina personuppgifter från svenska databaser och undvika bluffföretag.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://gefanimig.se/about' },
    { property: 'og:site_name', content: 'Ge Fan i Mig' },
    { property: 'og:locale', content: 'sv_SE' },
    { name: 'twitter:card', content: 'summary' },
    {
      name: 'twitter:title',
      content:
        'Om Ge Fan i Mig - Varför ta bort personuppgifter från databaser',
    },
    {
      name: 'twitter:description',
      content:
        'Lär dig varför du borde ta bort dina personuppgifter från svenska databaser och undvika bluffföretag.',
    },
    { name: 'canonical', content: 'https://gefanimig.se/about' },
  ],
  link: [
    { rel: 'canonical', href: 'https://gefanimig.se/about' },
    { rel: 'alternate', hreflang: 'sv', href: 'https://gefanimig.se/about' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Om Ge Fan i Mig',
        description:
          'Lär dig varför du borde ta bort dina personuppgifter från svenska databaser',
        url: 'https://gefanimig.se/about',
        inLanguage: 'sv',
        about: {
          '@type': 'Organization',
          name: 'Ge Fan i Mig',
          description:
            'Gratis GDPR-verktyg för att ta bort personuppgifter från svenska databaser',
        },
      }),
    },
  ],
})

// Page transition
definePageMeta({
  transition: {
    name: 'slide-left',
    mode: 'out-in',
  },
})
</script>
