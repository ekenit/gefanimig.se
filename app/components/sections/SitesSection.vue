<template>

  <section id="sites" class="py-16">

    <div class="px-4 mx-auto max-w-7xl">

      <div class="mx-auto max-w-5xl px-4">

        <div class="text-center mb-12">

          <h3 class="text-3xl font-bold mb-4">Ta bort dina uppgifter</h3>

          <p class="text-xl text-gray-600 dark:text-gray-300">
             Välj en databas och följ instruktionerna för att ta bort dina
            personuppgifter
          </p>

        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div
            v-for="(site, index) in sites"
            :key="site.name"
            class="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
          >
             <!-- Gradient overlay on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/30 group-hover:to-blue-100/20 dark:from-blue-900/10 dark:to-blue-800/10 transition-all duration-300"
            ></div>

            <div class="relative p-6">
               <!-- Header with number -->
              <div class="flex items-center justify-between mb-4">

                <div class="flex items-center space-x-3">
                   <span
                    class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center text-sm font-semibold"
                    > {{ index + 1 }} </span
                  >
                  <h4
                    class="text-lg font-semibold text-gray-900 dark:text-gray-100"
                  >
                     {{ site.name }}
                  </h4>

                </div>

              </div>
               <!-- Method description -->
              <div class="mb-6">

                <p
                  class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                >
                   {{ site.method }}
                </p>

              </div>
               <!-- Action buttons -->
              <div class="space-y-3">
                 <!-- Visit website button --> <Button
                  tag="NuxtLink"
                  :to="site.link"
                  external
                  target="_blank"
                  variant="secondary"
                  icon="heroicons:arrow-top-right-on-square"
                  class="w-full justify-center"
                  @click="trackSiteClick(site)"
                  > {{ site.linkText || 'Besök webbplats' }} </Button
                > <!-- Email template button (only for sites with email) -->
                <Button
                  v-if="site.email"
                  @click="openEmailModal(site)"
                  variant="primary"
                  icon="heroicons:envelope"
                  class="w-full justify-center"
                  > Skapa e-postmall </Button
                > <!-- Simple info for sites without email -->
                <div
                  v-if="
                    !site.email && !site.method.toLowerCase().includes('bankid')
                  "
                  class="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
                >

                  <p class="text-xs text-gray-600 dark:text-gray-400">
                     💡 Besök webbplatsen för att se deras aktuella process
                  </p>

                </div>
                 <!-- BankID info -->
                <div
                  v-if="site.method.toLowerCase().includes('bankid')"
                  class="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                >

                  <p class="text-xs text-green-700 dark:text-green-300">
                     ✅ BankID-inloggning tillgänglig
                  </p>

                </div>

              </div>
               <!-- Email address display (if available) -->
              <div
                v-if="site.email && !site.method.includes('webbformulär')"
                class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
              >

                <div class="flex items-center justify-between">

                  <div class="flex items-center space-x-2">
                     <Icon
                      name="heroicons:envelope"
                      class="h-4 w-4 text-blue-600 dark:text-blue-400"
                    /> <span
                      class="text-xs text-blue-700 dark:text-blue-300 font-medium"
                      > E-post: </span
                    >
                  </div>
                   <Button
                    @click="copyEmailAddress(site.email!)"
                    variant="ghost"
                    size="sm"
                    icon="heroicons:clipboard"
                    class="!p-1"
                    :title="`Kopiera ${site.email}`"
                  />
                </div>
                 <code
                  class="block mt-1 text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded border text-blue-800 dark:text-blue-200"
                  > {{ site.email }} </code
                >
              </div>

            </div>

          </div>

        </div>
         <!-- Help section at the bottom -->
        <div class="mt-12 text-center">

          <div
            class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6"
          >

            <div class="flex items-center justify-center space-x-2 mb-3">
               <Icon
                name="heroicons:information-circle"
                class="h-5 w-5 text-blue-600 dark:text-blue-400"
              />
              <h4
                class="text-lg font-semibold text-blue-900 dark:text-blue-100"
              >
                 Behöver du hjälp?
              </h4>

            </div>

            <p
              class="text-blue-800 dark:text-blue-200 text-sm leading-relaxed max-w-2xl mx-auto"
            >
               För sajter utan BankID: Besök webbplatsen först för att se om de
              har uppdaterat sina processer. Om inget finns, använd e-postmallen
              längst ner på sidan.
            </p>

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

const trackSiteClick = (site: Site) => {
  // No tracking needed - Umami handles this automatically
}
</script>

