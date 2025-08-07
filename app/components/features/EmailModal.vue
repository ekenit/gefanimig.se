<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="handleClose" class="relative z-50">
      <!-- Backdrop -->
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" />
      </TransitionChild>

      <!-- Modal -->
      <div class="fixed inset-0 flex items-center justify-center p-4 z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-200">
            <div class="p-6">
              <!-- Header -->
              <div class="flex items-center justify-between mb-6">
                <DialogTitle class="text-xl font-bold">
                  Skapa e-postmall till {{ currentSite?.name }}
                </DialogTitle>
                <Button
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
                  Anpassa mallen innan du kopierar den eller skickar ett e-postmeddelande.
                </p>
              </div>

              <!-- Form Fields -->
              <div class="space-y-4 mb-6">
                <!-- Subject -->
                <div>
                  <label for="email-subject" class="block text-sm font-medium mb-2">
                    Ämne:
                  </label>
                  <input 
                    id="email-subject"
                    v-model="emailSubject"
                    type="text"
                    class="block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-200"
                    placeholder="Ämne för e-postmeddelandet" 
                  />
                </div>
                
                <!-- Body -->
                <div>
                  <label for="email-body" class="block text-sm font-medium mb-2">
                    Meddelande:
                  </label>
                  <textarea 
                    id="email-body"
                    v-model="emailBody"
                    rows="12"
                    class="block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-200 font-mono text-sm resize-none"
                    placeholder="E-postmeddelandets innehåll..."
                  />
                </div>
              </div>

              <!-- Reminder Notice -->
              <Card variant="default" padding="sm" class="mb-6">
                <div class="flex items-start space-x-3">
                  <Icon name="heroicons:information-circle" class="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div class="text-sm">
                    <p class="font-medium text-blue-900 dark:text-blue-100 mb-1">
                      Kom ihåg att anpassa mallen
                    </p>
                    <p class="text-blue-800 dark:text-blue-200">
                      Ersätt <strong>"Förnamn Efternamn"</strong> och <strong>"Personnummer"</strong> med dina egna uppgifter innan du skickar.
                    </p>
                  </div>
                </div>
              </Card>
              
              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-3 justify-end">
                <Button
                  variant="secondary"
                  icon="heroicons:clipboard-document"
                  @click="handleCopyTemplate"
                >
                  Kopiera mall
                </Button>
                
                <Button
                  variant="primary"
                  icon="heroicons:paper-airplane"
                  @click="handleSendEmail"
                >
                  Öppna i e-postklient
                </Button>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import type { Site } from '~/types'
import { gdprTemplate } from '~/data/templates'

interface Props {
  isOpen: boolean
  currentSite?: Site | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

// Form state
const emailSubject = ref('Begäran om radering av personuppgifter enligt GDPR')
const emailBody = ref('')

/**
 * Initialize form when modal opens
 */
watch(() => props.isOpen, (isOpen) => {
  if (isOpen && props.currentSite) {
    emailBody.value = gdprTemplate.body
  }
})

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
  } else {
    showError(message)
  }
}

/**
 * Handle email sending
 */
const handleSendEmail = () => {
  if (!props.currentSite?.email) return
  
  const subject = encodeURIComponent(emailSubject.value)
  const body = encodeURIComponent(emailBody.value)
  const mailtoLink = `mailto:${props.currentSite.email}?subject=${subject}&body=${body}`
  
  if (import.meta.client) {
    window.open(mailtoLink, '_blank')
    handleClose()
    
    const { showSuccess } = useToast()
    showSuccess('E-postklient öppnad!')
  }
}
</script> 