<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950">
    <div class="py-16 px-4 mx-auto max-w-7xl">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600 bg-clip-text text-transparent">
          Om Ge Fan i Mig
        </h1>
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Varför du borde ta bort dina uppgifter från gamla databaser
        </p>
        
        <div class="grid md:grid-cols-2 gap-8 mt-16">
          <Card variant="glass" hoverable padding="lg">
            <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-600/20 border border-purple-200/30 dark:border-purple-700/30 mb-6">
              <Icon name="heroicons:phone-x-mark" class="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 class="text-lg font-semibold mb-4">Varför bry sig?</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Folk som verkligen behöver nå dig har redan ditt nummer. Allt annat är spam, telefonförsäljare och bedragare som hittar dig via dessa databaser. Så enkelt är det.
            </p>
          </Card>
          
          <Card variant="glass" hoverable padding="lg">
            <div class="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-pink-500/10 to-purple-600/20 border border-pink-200/30 dark:border-pink-700/30 mb-6">
              <Icon name="heroicons:currency-dollar" class="h-6 w-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 class="text-lg font-semibold mb-4">Gratis vs Bluffföretag</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Andra sajter tar 50-200 kr/månad för samma information som finns här gratis. Samma lagar, samma rättigheter, samma resultat. De lurar dig bara.
            </p>
          </Card>
        </div>

        <!-- Project Details -->
        <AboutProjectDetails />

        <!-- Scam Alert Section -->
        <AboutScamAlert />

        <!-- About the Creator Section -->
        <AboutCreator />

        <!-- Calendar Reminder Section -->
        <AboutCalendarReminder />

        <!-- Legal Disclaimer -->
        <AboutLegalDisclaimer />

        <!-- How it works -->
        <AboutHowItWorks />
        
        <div class="mt-12">
          <Button
            tag="a"
            href="/"
            variant="secondary"
            icon="heroicons:arrow-left"
          >
            Tillbaka till startsidan
          </Button>
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
    { name: 'description', content: 'Lär dig varför du borde ta bort dina personuppgifter från svenska databaser och undvika bluffföretag som tar betalt för samma information. Gratis GDPR-guide.' },
    { name: 'keywords', content: 'GDPR, personuppgifter, svenska databaser, integritet, om oss, Ge Fan i Mig, bluffföretag, gratis, telefonförsäljare, spam' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'language', content: 'sv' },
    { name: 'geo.region', content: 'SE' },
    { property: 'og:title', content: 'Om Ge Fan i Mig - Varför ta bort personuppgifter från databaser' },
    { property: 'og:description', content: 'Lär dig varför du borde ta bort dina personuppgifter från svenska databaser och undvika bluffföretag.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://gefanimig.se/about' },
    { property: 'og:site_name', content: 'Ge Fan i Mig' },
    { property: 'og:locale', content: 'sv_SE' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Om Ge Fan i Mig - Varför ta bort personuppgifter från databaser' },
    { name: 'twitter:description', content: 'Lär dig varför du borde ta bort dina personuppgifter från svenska databaser och undvika bluffföretag.' },
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
        description: 'Lär dig varför du borde ta bort dina personuppgifter från svenska databaser',
        url: 'https://gefanimig.se/about',
        inLanguage: 'sv',
        about: {
          '@type': 'Organization',
          name: 'Ge Fan i Mig',
          description: 'Gratis GDPR-verktyg för att ta bort personuppgifter från svenska databaser'
        }
      })
    }
  ]
})

// Page transition
definePageMeta({
  transition: {
    name: 'slide-left',
    mode: 'out-in'
  }
})
</script>