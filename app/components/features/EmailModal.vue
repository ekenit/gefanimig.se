<template>
   <TransitionRoot appear :show="isOpen" as="template"
    > <Dialog as="div" @close="handleClose" class="relative z-50"
      > <!-- Backdrop --> <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
        >
        <div class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" />
         </TransitionChild
      > <!-- Modal -->
      <div class="fixed inset-0 flex items-center justify-center p-4 z-50">
         <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
          > <DialogPanel
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-200"
            >
            <div class="p-6">
               <!-- Header -->
              <div class="flex items-center justify-between mb-6">
                 <DialogTitle
                  class="text-xl font-bold text-gray-900 dark:text-gray-100"
                  > E-postmall för {{ currentSite?.name }} </DialogTitle
                > <Button
                  variant="ghost"
                  size="sm"
                  icon="heroicons:x-mark"
                  @click="handleClose"
                  class="!p-2"
                />
              </div>
               <!-- Description -->
              <div class="mb-6">

                <p class="text-gray-600 dark:text-gray-300">
                   Kopiera mallen nedan och anpassa den med dina uppgifter innan
                  du skickar.
                </p>

              </div>
               <!-- Email template -->
              <div class="mb-6">

                <div
                  class="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                >

                  <div class="flex items-center justify-between mb-3">

                    <h4
                      class="text-sm font-semibold text-gray-900 dark:text-gray-100"
                    >
                       E-postmall
                    </h4>
                     <Button
                      variant="ghost"
                      size="sm"
                      icon="heroicons:clipboard"
                      @click="handleCopyTemplate"
                      class="!p-2"
                      > Kopiera </Button
                    >
                  </div>

                  <div class="space-y-3">
                     <!-- Subject -->
                    <div>
                       <label
                        for="email-subject"
                        class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                        > Ämne: </label
                      > <input
                        id="email-subject"
                        v-model="emailSubject"
                        type="text"
                        class="block w-full bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-200"
                        placeholder="Ämne för e-postmeddelandet"
                      />
                    </div>
                     <!-- Body -->
                    <div>
                       <label
                        for="email-body"
                        class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                        > Meddelande: </label
                      > <textarea
                        id="email-body"
                        v-model="emailBody"
                        rows="12"
                        class="block w-full bg-white dark:bg-gray-800 px-3 py-3 rounded-lg border border-gray-200 dark:border-gray-600 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-200 font-mono resize-none"
                        placeholder="E-postmeddelandets innehåll..."
                      />
                    </div>

                  </div>

                </div>

              </div>
               <!-- Instructions -->
              <div class="mb-6">

                <div
                  class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4"
                >

                  <div class="flex items-start space-x-3">
                     <Icon
                      name="heroicons:information-circle"
                      class="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                    />
                    <div class="text-sm">

                      <p
                        class="font-medium text-blue-900 dark:text-blue-100 mb-2"
                      >
                         Så här använder du mallen:
                      </p>

                      <ol
                        class="text-blue-800 dark:text-blue-200 space-y-1 text-xs"
                      >

                        <li>
                           1. Redigera ämne och meddelande ovan efter behov
                        </li>

                        <li>2. Ersätt "Förnamn Efternamn" med ditt namn</li>

                        <li>3. Ersätt "Personnummer" med ditt personnummer</li>

                        <li>
                           4. Klicka "Kopiera mall" eller "Öppna i e-postklient"

                        </li>

                        <li>
                           5. Skicka till: <strong
                            class="text-blue-900 dark:text-blue-100"
                            >{{ currentSite?.email }}</strong
                          >
                        </li>

                      </ol>

                    </div>

                  </div>

                </div>

              </div>
               <!-- Action Buttons -->
              <div class="flex flex-wrap gap-3 justify-end">
                 <Button
                  variant="secondary"
                  icon="heroicons:clipboard-document"
                  @click="handleCopyTemplate"
                  > Kopiera mall </Button
                > <Button
                  variant="primary"
                  icon="heroicons:paper-airplane"
                  @click="handleSendEmail"
                  > Öppna i e-postklient </Button
                >
              </div>

            </div>
             </DialogPanel
          > </TransitionChild
        >
      </div>
       </Dialog
    > </TransitionRoot
  >
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import type { Site } from '~/types'
import { gdprTemplate } from '~/data/templates'
import { copyTemplate } from '~/utils/clipboard'

interface Props {
  isOpen: boolean
  currentSite?: Site | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

// Form state
const emailBody = ref('')
const emailSubject = ref('')

/**
 * Initialize form when modal opens
 */
watch(
  () => props.isOpen,
  isOpen => {
    if (isOpen && props.currentSite) {
      emailBody.value = gdprTemplate.body
      emailSubject.value = gdprTemplate.subject
    }
  }
)

/**
 * Handle modal close
 */
const handleClose = () => {
  emit('close')
}

/**
 * Handle template copying
 */
const handleCopyTemplate = async () => {
  const { showSuccess, showError } = useToast()
  const message = await copyTemplate(emailBody.value, 'E-postmallen')

  if (message.includes('kopierats')) {
    showSuccess(message)
    // Track template copy
    const { $trackEmailTemplateUsage } = useNuxtApp()
    $trackEmailTemplateUsage('copy')
  } else {
    showError(message)
  }
}

/**
 * Handle email sending
 */
const handleSendEmail = () => {
  if (!props.currentSite?.email) return

  const subject = encodeURIComponent(
    emailSubject.value || 'Begäran om radering av personuppgifter enligt GDPR'
  )
  const body = encodeURIComponent(emailBody.value)
  const mailtoLink = `mailto:${props.currentSite.email}?subject=${subject}&body=${body}`

  if (import.meta.client) {
    window.open(mailtoLink, '_blank')
    handleClose()

    const { showSuccess } = useToast()
    showSuccess('E-postklient öppnad!')

    // Track email client open
    const { $trackEmailTemplateUsage } = useNuxtApp()
    $trackEmailTemplateUsage('open_email_client')
  }
}
</script>

