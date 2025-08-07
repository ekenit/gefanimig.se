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
  title: 'Ge Fan i Mig - Ta kontroll över dina personuppgifter',
  meta: [
    { name: 'description', content: 'Modern GDPR-verktyg för att ta bort dina personuppgifter från svenska databaser. Enkel guide med färdiga mallar för Ratsit, Merinfo, Hitta och fler.' },
    { name: 'keywords', content: 'GDPR, personuppgifter, Ratsit, Merinfo, Hitta, svenska databaser, integritet, personuppgiftslag' },
    { name: 'author', content: 'Ge Fan i Mig' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: 'Ge Fan i Mig - GDPR verktyg för Sverige' },
    { property: 'og:description', content: 'Ta kontroll över dina personuppgifter - ta bort dem från svenska databaser enligt GDPR' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://gefanimig.se' },
    { property: 'og:site_name', content: 'Ge Fan i Mig' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Ge Fan i Mig - GDPR verktyg för Sverige' },
    { name: 'twitter:description', content: 'Ta kontroll över dina personuppgifter - ta bort dem från svenska databaser enligt GDPR' },
    { name: 'theme-color', content: '#3B82F6' },
    { name: 'msapplication-TileColor', content: '#3B82F6' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'Ge Fan i Mig' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' },
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