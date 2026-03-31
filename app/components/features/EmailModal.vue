<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="handleClose" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-150 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/40" />
      </TransitionChild>

      <div class="fixed inset-0 flex items-center justify-center p-4">
        <TransitionChild
          as="template"
          enter="duration-200 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel class="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 w-full max-w-xl max-h-[85vh] overflow-y-auto">
            <div class="p-6">
              <div class="flex items-center justify-between mb-5">
                <DialogTitle class="text-lg font-semibold">
                  E-postmall för {{ currentSite?.name }}
                </DialogTitle>
                <button
                  @click="handleClose"
                  class="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Icon name="heroicons:x-mark-20-solid" class="h-5 w-5" />
                </button>
              </div>

              <p class="text-sm text-gray-500 dark:text-gray-400 mb-5">
                Anpassa mallen med dina uppgifter innan du skickar.
              </p>

              <div class="space-y-4 mb-5">
                <div>
                  <label for="email-subject" class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Ämne
                  </label>
                  <input
                    id="email-subject"
                    v-model="emailSubject"
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label for="email-body" class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Meddelande
                  </label>
                  <textarea
                    id="email-body"
                    v-model="emailBody"
                    rows="12"
                    class="block w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-mono leading-relaxed resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
                  />
                </div>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-5 text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <p>1. Ersätt &quot;Förnamn Efternamn&quot; med ditt namn</p>
                <p>2. Ersätt &quot;Personnummer&quot; med ditt personnummer</p>
                <p>3. Skicka till: <strong class="text-gray-700 dark:text-gray-300">{{ currentSite?.email }}</strong></p>
              </div>

              <div class="flex gap-3 justify-end">
                <Button variant="secondary" icon="heroicons:clipboard-document" @click="handleCopyTemplate">
                  Kopiera
                </Button>
                <Button variant="primary" icon="heroicons:paper-airplane" @click="handleSendEmail">
                  Öppna e-postklient
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
const emit = defineEmits<{ close: [] }>()

const emailBody = ref('')
const emailSubject = ref('')

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen && props.currentSite) {
      emailBody.value = gdprTemplate.body
      emailSubject.value = gdprTemplate.subject
    }
  },
)

const handleClose = () => emit('close')

const handleCopyTemplate = async () => {
  const { showSuccess, showError } = useToast()
  try {
    await navigator.clipboard.writeText(emailBody.value)
    showSuccess('Mall kopierad!')
  } catch {
    showError('Kunde inte kopiera mallen')
  }
}

const handleSendEmail = () => {
  if (!props.currentSite?.email) return
  const subject = encodeURIComponent(emailSubject.value)
  const body = encodeURIComponent(emailBody.value)
  if (import.meta.client) {
    window.open(`mailto:${props.currentSite.email}?subject=${subject}&body=${body}`, '_blank')
    handleClose()
    useToast().showSuccess('E-postklient öppnad!')
  }
}
</script>
