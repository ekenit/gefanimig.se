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
    <section class="py-12 bg-gradient-to-br from-red-50 to-orange-50/30 dark:from-red-950/50 dark:to-orange-950/30">
      <div class="px-4 mx-auto max-w-7xl">
        <div class="mx-auto max-w-4xl px-4">
          <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out p-8">
            <div class="text-center space-y-6">
              <div class="h-16 w-16 rounded-3xl flex items-center justify-center bg-gradient-to-br from-red-500/10 to-orange-600/20 border border-red-200/30 dark:border-red-700/30 mx-auto">
                <Icon name="heroicons:exclamation-triangle" class="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              
              <div class="space-y-3">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Problem med någon av databaserna?
                </h3>
                <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Om ett företag vägrar radera dina uppgifter eller inte svarar inom 30 dagar kan du anmäla dem till Integritetsskyddsmyndigheten (IMY).
                </p>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  tag="a"
                  href="https://imy.se/privatperson/lamna-klagomal/"
                  external
                  target="_blank"
                  variant="primary"
                  icon="heroicons:document-text"
                  size="lg"
                >
                  Anmäl till IMY
                </Button>
                <Button 
                  tag="a"
                  href="https://imy.se/"
                  external
                  target="_blank"
                  variant="secondary"
                  icon="heroicons:arrow-top-right-on-square"
                  size="lg"
                >
                  Läs mer om IMY
                </Button>
              </div>
              
              <div class="bg-red-50/50 dark:bg-red-900/20 rounded-xl p-6 mt-6">
                <p class="text-red-800 dark:text-red-200 text-sm leading-relaxed">
                  <strong>Tips:</strong> IMY kan ge företag böter på upp till 4% av deras omsättning om de bryter mot GDPR. 
                  De tar dina rättigheter på allvar och anmälningar är gratis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
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