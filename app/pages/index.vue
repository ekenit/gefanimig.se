<template>
  <div class="relative">
    <!-- Hero Section with Modern Gradient -->
    <HeroSection />
    
    <!-- Credit Section -->
    <CreditSection />
    
    <!-- Why Remove Section -->
    <WhyRemoveSection />
    

    
    <!-- Sites Guide Section -->
    <SitesSection @open-email-modal="openEmailModal" />
    
    <!-- IMY Contact Section -->
    <IMYContactSection />
    
    <!-- Calendar Reminder Section -->
    <AboutCalendarReminder />
    <!-- Optional Support Section -->
    <SupportSection />
    <!-- GDPR Template Section -->
    <TemplateSection />
    
    <!-- Additional Help Section -->
    <AdditionalHelpSection />
    
    <!-- Email Modal -->
    <EmailModal 
      :is-open="showEmailModal" 
      :current-site="currentSite" 
      @close="closeEmailModal" 
    />
  </div>
</template>

<script setup lang="ts">
// Modal state
const showEmailModal = ref(false)
const currentSite = ref(null)

// Modal handlers
const openEmailModal = (site: any) => {
  currentSite.value = site
  showEmailModal.value = true
}

const closeEmailModal = () => {
  showEmailModal.value = false
  currentSite.value = null
}

// SEO and Meta
useHead({
  title: 'Ge Fan i Mig - Ta bort personuppgifter från svenska databaser | GDPR verktyg',
  meta: [
    { name: 'description', content: 'Gratis GDPR-verktyg för att ta bort dina personuppgifter från Ratsit, Merinfo, Hitta och andra svenska databaser. Färdiga mallar och guider för att utöva dina rättigheter.' },
    { name: 'keywords', content: 'GDPR, personuppgifter, Ratsit, Merinfo, Hitta, svenska databaser, integritet, personuppgiftslag, ta bort uppgifter, gratis GDPR verktyg' },
    { name: 'author', content: 'Ge Fan i Mig' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'language', content: 'sv' },
    { name: 'geo.region', content: 'SE' },
    { name: 'geo.placename', content: 'Sverige' },
    { property: 'og:title', content: 'Ge Fan i Mig - Ta bort personuppgifter från svenska databaser' },
    { property: 'og:description', content: 'Gratis GDPR-verktyg för att ta bort dina personuppgifter från Ratsit, Merinfo, Hitta och andra svenska databaser.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://gefanimig.se' },
    { property: 'og:site_name', content: 'Ge Fan i Mig' },
    { property: 'og:locale', content: 'sv_SE' },
    { property: 'og:image', content: 'https://gefanimig.se/og-image.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Ge Fan i Mig - GDPR verktyg för Sverige' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Ge Fan i Mig - Ta bort personuppgifter från svenska databaser' },
    { name: 'twitter:description', content: 'Gratis GDPR-verktyg för att ta bort dina personuppgifter från Ratsit, Merinfo, Hitta och andra svenska databaser.' },
    { name: 'twitter:image', content: 'https://gefanimig.se/og-image.jpg' },
    { name: 'theme-color', content: '#3B82F6' },
    { name: 'msapplication-TileColor', content: '#3B82F6' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'Ge Fan i Mig' },
    { name: 'canonical', content: 'https://gefanimig.se' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'canonical', href: 'https://gefanimig.se' },
    { rel: 'alternate', hreflang: 'sv', href: 'https://gefanimig.se' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Ge Fan i Mig',
        description: 'Gratis GDPR-verktyg för att ta bort personuppgifter från svenska databaser',
        url: 'https://gefanimig.se',
        inLanguage: 'sv',
        author: {
          '@type': 'Organization',
          name: 'Ge Fan i Mig',
          url: 'https://gefanimig.se'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://gefanimig.se/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        },
        sameAs: [
          'https://github.com/ekenit/gefanimig.se'
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Hur tar jag bort mina uppgifter från Ratsit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Använd våra färdiga mallar för att skicka GDPR-begäran till Ratsit. Du har rätt att få dina personuppgifter raderade enligt GDPR.'
            }
          },
          {
            '@type': 'Question',
            name: 'Är det gratis att ta bort personuppgifter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, det är helt gratis. Du har rätt att få dina personuppgifter raderade enligt GDPR utan kostnad.'
            }
          },
          {
            '@type': 'Question',
            name: 'Vad händer om företaget vägrar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Om ett företag vägrar eller inte svarar inom 30 dagar kan du anmäla dem till Integritetsskyddsmyndigheten (IMY).'
            }
          }
        ]
      })
    }
  ]
})

// Page transition
definePageMeta({
  transition: {
    name: 'slide-right',
    mode: 'out-in'
  }
})
</script>