<template>

  <section
    id="template"
    class="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800/50 dark:to-blue-950/30"
  >

    <div class="px-4 mx-auto max-w-7xl">

      <div class="mx-auto max-w-4xl px-4">

        <div class="text-center mb-12">

          <h3 class="text-3xl font-bold mb-4">GDPR-mall för radering</h3>

          <p class="text-xl text-gray-600 dark:text-gray-300">
             Denna mall kan du använda när du begär radering av dina uppgifter
          </p>

        </div>

        <div
          class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out p-6"
        >

          <div class="mb-6">

            <div class="flex items-center space-x-2 mb-4">
               <Icon
                name="heroicons:document-text"
                class="h-5 w-5 text-blue-600 dark:text-blue-400"
              />
              <h4 class="text-lg font-semibold">Färdig GDPR-mall</h4>

            </div>

            <p class="text-gray-600 dark:text-gray-300 mb-4">
               Denna mall följer GDPR-krav och hänvisar till relevanta juridiska
              grunder.
            </p>

          </div>

          <div
            class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-6 border border-gray-200/50 dark:border-gray-700/50"
          >

            <pre
              class="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-mono"
              >{{ gdprTemplate.body }}</pre
            >

          </div>

          <div class="flex flex-wrap gap-3">
             <Button
              @click="copyTemplate"
              variant="primary"
              icon="heroicons:clipboard-document"
              > Kopiera mall </Button
            > <Button
              @click="downloadTemplate"
              variant="secondary"
              icon="heroicons:arrow-down-tray"
              > Ladda ner som .txt </Button
            >
          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script setup lang="ts">
import { gdprTemplate } from '~/data/templates'

const copyTemplate = async () => {
  const { showSuccess, showError } = useToast()
  try {
    await navigator.clipboard.writeText(gdprTemplate.body)
    showSuccess('GDPR-mallen har kopierats till urklipp!')
  } catch (err) {
    showError('Kunde inte kopiera mallen')
  }
}

const downloadTemplate = () => {
  const { showSuccess } = useToast()
  if (import.meta.client) {
    const blob = new Blob([gdprTemplate.body], {
      type: 'text/plain;charset=utf-8',
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'gdpr-mall.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    showSuccess('GDPR-mall nedladdad som gdpr-mall.txt!')
  }
}
</script>
