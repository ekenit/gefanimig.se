<template>

  <section
    class="py-16 bg-gradient-to-br from-blue-50 to-indigo-50/30 dark:from-blue-950/50 dark:to-indigo-950/30"
  >

    <div class="px-4 mx-auto max-w-7xl">

      <div class="mx-auto max-w-4xl px-4">

        <div class="text-center mb-12">

          <h3 class="text-3xl font-bold mb-4 flex items-center justify-center">
             <Icon
              name="heroicons:calendar-days"
              class="h-8 w-8 mr-4 text-blue-600 dark:text-blue-400"
            /> Kom ihåg att göra detta igen
          </h3>

          <p class="text-xl text-gray-600 dark:text-gray-300">
             Nya företag dyker upp, gamla databaser fylls på igen
          </p>

        </div>

        <div
          class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out p-8"
        >

          <div class="text-center space-y-6">

            <div
              class="h-16 w-16 rounded-3xl flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-600/20 border border-blue-200/30 dark:border-blue-700/30 mx-auto"
            >
               <Icon
                name="heroicons:clock"
                class="h-8 w-8 text-blue-600 dark:text-blue-400"
              />
            </div>

            <div class="space-y-3">

              <h4
                class="text-2xl font-semibold text-gray-800 dark:text-gray-200"
              >
                 Gör detta en gång per år
              </h4>

              <p
                class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
              >
                 Databaser fylls på igen, nya sajter dyker upp, och dina
                uppgifter kan komma tillbaka. Sätt en årlig påminnelse för att
                hålla dig fri från spam och telefonförsäljare.
              </p>

            </div>

            <div class="flex justify-center pt-4">
               <Button
                @click="handleDownloadCalendarReminder"
                variant="primary"
                icon="heroicons:calendar-days"
                size="lg"
                > Ladda ner årlig påminnelse (.cal) </Button
              >
            </div>

            <div class="bg-blue-50/50 dark:bg-blue-900/20 rounded-xl p-6 mt-6">

              <p
                class="text-blue-800 dark:text-blue-200 text-sm leading-relaxed"
              >
                 <strong>Tips:</strong> Kalenderpåminnelsen läggs automatiskt
                till i din standardkalender. Kom ihåg att göra detta regelbundet
                så håller du dig fri från spam och telefonförsäljare.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

<script setup lang="ts">
import { downloadCalendarReminder } from '~/utils/calendar'

const handleDownloadCalendarReminder = () => {
  downloadCalendarReminder()
}
</script>
