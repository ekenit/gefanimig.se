<template>
  <section class="py-16">
    <div class="px-4 mx-auto max-w-7xl">
      <div class="mx-auto max-w-4xl px-4">
        <h3 class="text-3xl font-bold text-center mb-12">Ytterligare hjälp</h3>
        
        <div class="space-y-8">


          <!-- Google Removal -->
          <Card variant="glass" hoverable>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                <Icon name="heroicons:magnifying-glass" class="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div class="flex-1 space-y-4">
                <h4 class="text-lg font-semibold">🚨 Ta bort från Google sökresultat</h4>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Även efter att du tagit bort din information från sajterna ovan kan den fortfarande synas i Googles sökresultat. Detta är kanske det viktigaste steget av alla.
                </p>
                
                <Card variant="default" padding="sm" class="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                  <h5 class="font-semibold text-red-800 dark:text-red-200 mb-3">Använd denna GDPR-mall som skäl:</h5>
                  <div class="bg-white dark:bg-gray-800 rounded-lg p-4 text-sm font-mono text-gray-800 dark:text-gray-200 border">
                    <p class="mb-3">This page is about me because it includes specific personal details, such as my name and address. The content directly identifies me, and these details are private and sensitive.</p>
                    <p>The continued presence of this information violates my rights under the General Data Protection Regulation (GDPR). Specifically, it infringes on my right to privacy and data protection as outlined in Article 17 (Right to Erasure) of the GDPR. The information is no longer necessary for the purposes for which it was originally collected or processed, and its continued publication is not justified by any overriding legitimate interest, thus requiring its removal to comply with EU data protection laws.</p>
                  </div>
                  <div class="flex gap-2 mt-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      icon="heroicons:clipboard"
                      @click="copyGoogleTemplate"
                      class="text-xs bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800/50"
                    >
                      Kopiera mall
                    </Button>
                  </div>
                </Card>
                
                <Button
                  tag="NuxtLink"
                  to="https://reportcontent.google.com/forms/rtbf"
                  variant="danger"
                  external
                  icon="heroicons:arrow-top-right-on-square"
                >
                  Google-formulär för borttagning
                </Button>
              </div>
            </div>
          </Card>

          <!-- Address Protection -->
          <Card variant="glass" hoverable>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                <Icon name="heroicons:home" class="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div class="flex-1 space-y-4">
                <h4 class="text-lg font-semibold">🏠 Skydda din adress</h4>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong>Extremt viktigt!</strong> Dessa officiella svenska tjänster ger dig extra skydd mot att obehöriga ändrar din adress och begränsar vem som kan se var du bor.
                </p>
                
                <Card variant="default" padding="sm" class="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <h5 class="font-semibold text-green-800 dark:text-green-200 mb-3">Vad gör dessa tjänster?</h5>
                  <div class="space-y-2 text-sm text-green-700 dark:text-green-300">
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p class="font-medium">Adresslåset</p>
                        <p class="text-sm mt-1">Förhindrar att någon annan ändrar din folkbokföringsadress utan att du vet om det</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p class="font-medium">Skatteverket-spärr</p>
                        <p class="text-sm mt-1">Begränsar vem som kan ändra din adress</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p class="font-medium">Viktigt</p>
                        <p class="text-sm mt-1">Båda är helt gratis och tar bara några minuter att aktivera</p>
                      </div>
                    </div>
                  </div>
                </Card>

                          <!-- Legal Disclaimer -->
  
                  
                <div class="flex flex-wrap gap-3">
                  <Button
                    tag="NuxtLink"
                    to="https://www.adressandring.se/vara-tjanster/adresslaset"
                    variant="success"
                    external
                    icon="heroicons:arrow-top-right-on-square"
                  >
                    Adresslåset
                  </Button>
                  <Button
                    tag="NuxtLink"
                    to="https://www.skatteverket.se/privat/folkbokforing/andringar/andring-av-folkbokforingsadress.html"
                    variant="success"
                    external
                    icon="heroicons:arrow-top-right-on-square"
                  >
                    Skatteverket-spärr
                  </Button>
                  <Button
                    tag="NuxtLink"
                    to="/security"
                    variant="secondary"
                    icon="heroicons:shield-check"
                  >
                    Fler säkerhetsverktyg
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="default" padding="md" class="bg-yellow-50/50 dark:bg-yellow-900/20 border-yellow-200/50 dark:border-yellow-800/50 text-left">
            <h4 class="text-lg font-semibold mb-4 text-yellow-800 dark:text-yellow-200 flex items-center">
              <Icon name="heroicons:exclamation-triangle" class="h-5 w-5 mr-3" />
              Viktig information
            </h4>
            <div class="space-y-3 text-yellow-700 dark:text-yellow-300">
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p class="font-medium">Ansvarsfriskrivning</p>
                  <p class="text-sm mt-1">Denna guide tillhandahålls i god tro men utan garantier. Vi ansvarar inte för resultatet av dina GDPR-begäran.</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p class="font-medium">Juridisk rådgivning</p>
                  <p class="text-sm mt-1">Detta är inte juridisk rådgivning. För komplexa ärenden, kontakta en jurist.</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p class="font-medium">Verifiering</p>
                  <p class="text-sm mt-1">Kontaktinformation och processer kan ändras. Vi rekommenderar att du verifierar informationen direkt med respektive tjänst.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const googleTemplate = `This page is about me because it includes specific personal details, such as my name and address. The content directly identifies me, and these details are private and sensitive.

The continued presence of this information violates my rights under the General Data Protection Regulation (GDPR). Specifically, it infringes on my right to privacy and data protection as outlined in Article 17 (Right to Erasure) of the GDPR. The information is no longer necessary for the purposes for which it was originally collected or processed, and its continued publication is not justified by any overriding legitimate interest, thus requiring its removal to comply with EU data protection laws.`

const copyGoogleTemplate = async () => {
  const { showSuccess, showError } = useToast()
  try {
    await navigator.clipboard.writeText(googleTemplate)
    showSuccess('Google-mallen har kopierats till urklipp!')
  } catch (err) {
    showError('Kunde inte kopiera Google-mallen')
  }
}
</script>