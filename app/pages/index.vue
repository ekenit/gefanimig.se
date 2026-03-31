<template>
  <main class="max-w-3xl mx-auto px-4">
    <!-- Hero -->
    <section class="pt-16 pb-12 sm:pt-20 sm:pb-16">
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Ta bort dina personuppgifter från svenska databaser
      </h1>
      <p class="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
        Steg-för-steg med färdiga mallar och direktlänkar. Tar ungefär fem minuter, kostar ingenting.
      </p>
    </section>

    <!-- Sites -->
    <section id="sites" class="pb-16">
      <h2 class="text-xl font-semibold mb-6">Välj databas</h2>
      <div class="divide-y divide-gray-200 dark:divide-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <div
          v-for="(site, index) in sites"
          :key="site.name"
          class="p-4 sm:p-5 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="min-w-0">
              <div class="flex items-center gap-2.5 mb-1.5">
                <span class="text-xs font-mono text-gray-400 dark:text-gray-600 tabular-nums">{{ index + 1 }}</span>
                <h3 class="font-medium">{{ site.name }}</h3>
                <span
                  v-if="site.method.toLowerCase().includes('bankid')"
                  class="text-[10px] font-medium uppercase tracking-wider text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950 px-1.5 py-0.5 rounded"
                >
                  BankID
                </span>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ site.method }}</p>
            </div>
            <a
              :href="site.link"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-shrink-0 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 whitespace-nowrap"
            >
              {{ site.linkText || 'Besök' }}&ensp;&rarr;
            </a>
          </div>
          <div v-if="site.email" class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <button
              @click="openEmailModal(site)"
              class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              Skapa e-postmall
            </button>
            <span class="text-gray-300 dark:text-gray-700">|</span>
            <span class="text-gray-400 dark:text-gray-500 text-xs font-mono">{{ site.email }}</span>
            <button
              @click="copyEmail(site.email!)"
              class="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Kopiera
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- GDPR Template -->
    <section id="template" class="pb-16">
      <h2 class="text-xl font-semibold mb-2">GDPR-mall</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-5">
        Ersätt namn och personnummer med dina uppgifter.
      </p>
      <div class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5">
        <pre class="whitespace-pre-wrap text-sm leading-relaxed font-mono text-gray-700 dark:text-gray-300">{{ gdprTemplate.body }}</pre>
      </div>
      <div class="flex gap-3 mt-4">
        <Button @click="handleCopyTemplate" variant="primary" icon="heroicons:clipboard-document">
          Kopiera
        </Button>
        <Button @click="handleDownloadTemplate" variant="secondary" icon="heroicons:arrow-down-tray">
          Ladda ner .txt
        </Button>
      </div>
    </section>

    <!-- If they refuse -->
    <section class="pb-16">
      <h2 class="text-xl font-semibold mb-3">Om företaget vägrar</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        Företag måste svara inom 30 dagar. Om de inte gör det, eller vägrar radera,
        kan du anmäla dem gratis till Integritetsskyddsmyndigheten (IMY).
      </p>
      <div class="flex flex-wrap gap-3">
        <Button
          tag="a"
          href="https://www.imy.se/privatperson/utfora-arenden/filtersida/"
          external
          variant="primary"
          icon="heroicons:arrow-top-right-on-square"
        >
          Anmäl till IMY
        </Button>
        <Button
          tag="a"
          href="https://imy.se/"
          external
          variant="secondary"
          icon="heroicons:arrow-top-right-on-square"
        >
          Om IMY
        </Button>
      </div>
    </section>

    <!-- Extra tips -->
    <section class="pb-16">
      <h2 class="text-xl font-semibold mb-6">Bra att veta</h2>
      <div class="space-y-4">
        <!-- Google removal -->
        <div class="border border-gray-200 dark:border-gray-800 rounded-lg p-5">
          <h3 class="font-medium mb-2">Ta bort dig från Googles sökresultat</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Information kan finnas kvar i Google efter att den tagits bort från källan.
            Använd Googles eget formulär för att begära borttagning.
          </p>
          <details class="mb-3 group">
            <summary class="text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-800 dark:hover:text-blue-300 select-none">
              Visa GDPR-mall för Google (engelska)
            </summary>
            <div class="mt-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md p-4">
              <pre class="whitespace-pre-wrap text-xs font-mono text-gray-600 dark:text-gray-400 leading-relaxed">{{ googleRemovalTemplate }}</pre>
              <button
                @click="handleCopyGoogleTemplate"
                class="mt-3 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Kopiera mall
              </button>
            </div>
          </details>
          <a
            href="https://reportcontent.google.com/forms/rtbf"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Googles borttagningsformulär&ensp;&rarr;
          </a>
        </div>

        <!-- Address protection -->
        <div class="border border-gray-200 dark:border-gray-800 rounded-lg p-5">
          <h3 class="font-medium mb-2">Skydda din adress</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Aktivera adresslås så krävs BankID vid adressändringar.
            Förhindrar obehörig eftersändning och folkbokföringsändringar.
          </p>
          <div class="flex flex-wrap gap-x-4 gap-y-2">
            <a
              href="https://www.adressandring.se/vara-tjanster/adresslaset"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              Adresslåset&ensp;&rarr;
            </a>
            <a
              href="https://www.skatteverket.se/privat/folkbokforing/andringar/andring-av-folkbokforingsadress.html"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              Skatteverket&ensp;&rarr;
            </a>
          </div>
        </div>

        <!-- Calendar reminder -->
        <div class="border border-gray-200 dark:border-gray-800 rounded-lg p-5">
          <h3 class="font-medium mb-2">Gör detta varje år</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Databaser fylls på igen med tiden. Sätt en kalenderpåminnelse.
          </p>
          <Button @click="handleCalendarDownload" variant="secondary" size="sm" icon="heroicons:calendar-days">
            Ladda ner påminnelse (.ics)
          </Button>
        </div>
      </div>
    </section>

    <!-- Legal -->
    <section class="pb-12 border-t border-gray-200 dark:border-gray-800 pt-8">
      <p class="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
        Denna guide tillhandahålls i informationssyfte och utgör inte juridisk rådgivning.
        Kontaktuppgifter och processer kan ändras. Verifiera alltid direkt med respektive tjänst.
        Inspirerad av ett
        <a
          href="https://www.reddit.com/r/stockholm/comments/1j2mem6/skydda_personuppgifter_ta_bort_er_från_mrkollse/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:text-gray-600 dark:hover:text-gray-300"
        >Reddit-inlägg</a>.
      </p>
    </section>

    <!-- Email Modal -->
    <EmailModal :is-open="showEmailModal" :current-site="currentSite" @close="closeEmailModal" />
  </main>
</template>

<script setup lang="ts">
import { sites } from '~/data/sites'
import { gdprTemplate, googleRemovalTemplate } from '~/data/templates'
import { downloadCalendarReminder } from '~/utils/calendar'
import type { Site } from '~/types'

const showEmailModal = ref(false)
const currentSite = ref<Site | null>(null)

const openEmailModal = (site: Site) => {
  currentSite.value = site
  showEmailModal.value = true
}

const closeEmailModal = () => {
  showEmailModal.value = false
  currentSite.value = null
}

const copyEmail = async (email: string) => {
  const { showSuccess, showError } = useToast()
  try {
    await navigator.clipboard.writeText(email)
    showSuccess(`${email} kopierad!`)
  } catch {
    showError('Kunde inte kopiera')
  }
}

const handleCopyTemplate = async () => {
  const { showSuccess, showError } = useToast()
  try {
    await navigator.clipboard.writeText(gdprTemplate.body)
    showSuccess('Mall kopierad!')
  } catch {
    showError('Kunde inte kopiera mallen')
  }
}

const handleDownloadTemplate = () => {
  if (!import.meta.client) return
  const blob = new Blob([gdprTemplate.body], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'gdpr-mall.txt'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
  useToast().showSuccess('Mall nedladdad!')
}

const handleCopyGoogleTemplate = async () => {
  const { showSuccess, showError } = useToast()
  try {
    await navigator.clipboard.writeText(googleRemovalTemplate)
    showSuccess('Google-mall kopierad!')
  } catch {
    showError('Kunde inte kopiera')
  }
}

const handleCalendarDownload = () => {
  downloadCalendarReminder()
  useToast().showSuccess('Påminnelse nedladdad!')
}

useHead({
  title: 'Ge Fan i Mig - Ta bort personuppgifter från svenska databaser',
  meta: [
    {
      name: 'description',
      content: 'Gratis guide för att ta bort dina personuppgifter från Ratsit, Merinfo, Hitta och andra svenska databaser. Färdiga GDPR-mallar och direktlänkar.',
    },
    { property: 'og:title', content: 'Ge Fan i Mig - Ta bort personuppgifter från svenska databaser' },
    { property: 'og:description', content: 'Gratis guide för att ta bort dina personuppgifter från svenska databaser. Färdiga GDPR-mallar och direktlänkar.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://gefanimig.se' },
    { property: 'og:image', content: 'https://gefanimig.se/og-image.png' },
    { property: 'og:locale', content: 'sv_SE' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://gefanimig.se/og-image.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://gefanimig.se' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Ge Fan i Mig',
        description: 'Gratis guide för att ta bort personuppgifter från svenska databaser',
        url: 'https://gefanimig.se',
        inLanguage: 'sv',
      }),
    },
  ],
})
</script>
