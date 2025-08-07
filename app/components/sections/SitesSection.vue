<template>

  <section id="sites" class="py-16">

    <div class="px-4 mx-auto max-w-7xl">

      <div class="mx-auto max-w-4xl px-4">

        <div class="text-center mb-12">

          <h3 class="text-3xl font-bold mb-4">Steg-för-steg guide</h3>

          <p class="text-xl text-gray-600 dark:text-gray-300">
             Följ dessa enkla steg för att ta bort dina uppgifter från svenska
            databaser
          </p>

        </div>

        <div class="space-y-6">

          <div
            v-for="(site, index) in sites"
            :key="site.name"
            class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out p-6 hover:border-blue-200/60 dark:hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-blue-100/25 dark:hover:shadow-blue-900/25 group animate-slide-up"
          >
             <!-- Mobile Layout -->
            <div class="block md:hidden">

              <div class="flex items-center space-x-3 mb-4">
                 <span
                  class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center text-sm font-semibold"
                  > {{ index + 1 }} </span
                >
                <h4 class="text-lg font-semibold">{{ site.name }}</h4>

              </div>

              <div class="mb-4">

                <p class="text-gray-600 dark:text-gray-300 mb-2">
                   {{ site.method }}
                </p>
                 <!-- Mobile info indicator -->
                <div
                  v-if="!site.method.toLowerCase().includes('bankid')"
                  class="inline-flex items-center space-x-1 text-xs text-yellow-600 dark:text-yellow-400 font-medium"
                >
                   <span v-if="site.email"
                    >💡 E-post - använd knappen nedan</span
                  > <span v-else>⚠️ Ingen BankID - besök webbplatsen</span>
                </div>

              </div>
               <!-- Email for mobile -->
              <div
                v-if="site.email && !site.method.includes('webbformulär')"
                class="mb-4 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
              >

                <div class="flex items-center space-x-2 text-sm mb-2">
                   <Icon
                    name="heroicons:envelope"
                    class="h-4 w-4 text-gray-400"
                  /> <span class="text-gray-500 dark:text-gray-400"
                    >E-postadress:</span
                  >
                </div>

                <div class="flex items-center justify-between">
                   <code
                    class="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded border"
                    > {{ site.email }} </code
                  > <Button
                    @click="copyEmailAddress(site.email!)"
                    variant="ghost"
                    size="sm"
                    icon="heroicons:clipboard"
                    class="ml-2"
                  />
                </div>

              </div>
               <!-- Action buttons for mobile -->
              <div class="space-y-3">
                 <Button
                  tag="NuxtLink"
                  :to="site.link"
                  external
                  target="_blank"
                  variant="secondary"
                  icon="heroicons:arrow-top-right-on-square"
                  class="w-full justify-center"
                  > {{ site.linkText || 'Besök webbplats' }} </Button
                > <Button
                  v-if="site.email"
                  @click="openEmailModal(site)"
                  variant="primary"
                  icon="heroicons:paper-airplane"
                  class="w-full justify-center"
                  > Skapa e-postmall </Button
                > <!-- Prominent email template hint for mobile -->
                <div
                  v-if="site.email"
                  class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-center"
                >

                  <p
                    class="text-xs text-blue-700 dark:text-blue-300 leading-relaxed"
                  >
                     💡 <strong>Tips:</strong> Du kan kopiera e-postmallen genom
                    att klicka på skapa e-postmall ovan eller använda mallen
                    längst ner på sidan
                  </p>

                </div>

              </div>

            </div>
             <!-- Desktop Layout -->
            <div class="hidden md:flex items-start justify-between gap-6">

              <div class="flex-1 min-w-0">

                <div class="flex items-center space-x-3 mb-3">
                   <span
                    class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center text-sm font-semibold"
                    > {{ index + 1 }} </span
                  >
                  <h4 class="text-lg font-semibold">{{ site.name }}</h4>

                </div>

                <div class="pl-11 mb-4">

                  <p class="text-gray-600 dark:text-gray-300">
                     {{ site.method }}
                  </p>

                </div>
                 <!-- Email display for desktop -->
                <div
                  v-if="site.email && !site.method.includes('webbformulär')"
                  class="pl-11 mb-4"
                >

                  <div class="flex items-center space-x-2 text-sm">
                     <Icon
                      name="heroicons:envelope"
                      class="h-4 w-4 text-gray-400"
                    /> <code
                      class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-800 dark:text-gray-200"
                      > {{ site.email }} </code
                    > <Button
                      @click="copyEmailAddress(site.email!)"
                      variant="ghost"
                      size="sm"
                      icon="heroicons:clipboard"
                      :title="`Kopiera ${site.email}`"
                    />
                  </div>

                </div>
                 <!-- Action buttons for desktop -->
                <div class="flex flex-wrap gap-3 pl-11">
                   <Button
                    tag="NuxtLink"
                    :to="site.link"
                    external
                    target="_blank"
                    variant="secondary"
                    icon="heroicons:arrow-top-right-on-square"
                    > {{ site.linkText || 'Besök webbplats' }} </Button
                  > <Button
                    v-if="site.email"
                    @click="openEmailModal(site)"
                    variant="primary"
                    icon="heroicons:paper-airplane"
                    > Skapa e-postmall </Button
                  >
                </div>

              </div>
               <!-- Desktop help box -->
              <div
                v-if="!site.method.toLowerCase().includes('bankid')"
                class="flex-shrink-0 w-72"
              >

                <div
                  class="bg-yellow-50/80 dark:bg-yellow-900/20 border border-yellow-200/60 dark:border-yellow-800/60 rounded-xl p-4"
                >

                  <div class="flex items-start space-x-3">

                    <div
                      class="flex-shrink-0 w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 rounded-lg flex items-center justify-center"
                    >
                       <Icon
                        name="heroicons:information-circle"
                        class="h-4 w-4 text-yellow-600 dark:text-yellow-400"
                      />
                    </div>

                    <div class="min-w-0">

                      <h5
                        class="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2"
                      >
                         {{ site.email ? 'E-postguide' : 'Ingen BankID' }}
                      </h5>

                      <div
                        class="text-xs text-yellow-700 dark:text-yellow-300 space-y-1 leading-relaxed"
                      >

                        <p v-if="site.email">
                           1. Besök webbplatsen först - kolla om de har nya
                          processer
                        </p>

                        <p v-if="site.email">
                           2. Om inget finns, skicka e-post till: <strong>{{
                            site.email
                          }}</strong
                          >
                        </p>

                        <p v-if="site.email">
                           3. Använd GDPR-mallen nedan för bäst resultat
                        </p>

                        <p
                          v-if="
                            !site.email && site.method.includes('webbformulär')
                          "
                        >
                           Denna sajt har ett kontaktformulär. Besök webbplatsen
                          först för att se om processen har ändrats.
                        </p>

                        <p
                          v-if="
                            !site.email && !site.method.includes('webbformulär')
                          "
                        >
                           Besök webbplatsen för att se deras aktuella process
                          för borttagning av personuppgifter.
                        </p>

                      </div>
                       <!-- Desktop email template hint -->
                      <div
                        v-if="site.email"
                        class="mt-3 pt-3 border-t border-yellow-200 dark:border-yellow-800"
                      >

                        <p
                          class="text-xs text-yellow-600 dark:text-yellow-400 font-medium"
                        >
                           💡 Du kan kopiera e-postmallen genom att klicka på
                          skapa e-postmall här eller använda mallen längst ner
                          på sidan
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script setup lang="ts">
import { sites } from '~/data/sites'
import type { Site } from '~/types'

const emit = defineEmits<{
  'open-email-modal': [site: Site]
}>()

const copyEmailAddress = async (email: string) => {
  const { showSuccess, showError } = useToast()
  try {
    await navigator.clipboard.writeText(email)
    showSuccess(`E-postadress ${email} kopierad!`)
  } catch (err) {
    showError('Kunde inte kopiera e-postadressen')
  }
}

const openEmailModal = (site: Site) => {
  emit('open-email-modal', site)
}
</script>

