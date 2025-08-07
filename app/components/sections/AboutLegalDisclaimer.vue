<template>

  <div class="mt-8">
     <Card
      variant="default"
      padding="md"
      class="bg-yellow-50/50 dark:bg-yellow-900/20 border-yellow-200/50 dark:border-yellow-800/50 text-left"
      >
      <h4
        class="text-lg font-semibold mb-4 text-yellow-800 dark:text-yellow-200 flex items-center"
      >
         <Icon name="heroicons:exclamation-triangle" class="h-5 w-5 mr-3" />
        Viktig information
      </h4>

      <div class="space-y-3 text-yellow-700 dark:text-yellow-300">

        <div class="flex items-start space-x-3">

          <div
            class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"
          ></div>

          <div>

            <p class="font-medium">Ansvarsfriskrivning</p>

            <p class="text-sm mt-1">
              Denna guide tillhandahålls i god tro men utan garantier. Vi
              ansvarar inte för resultatet av dina GDPR-begäran.
            </p>

          </div>

        </div>

        <div class="flex items-start space-x-3">

          <div
            class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"
          ></div>

          <div>

            <p class="font-medium">Juridisk rådgivning</p>

            <p class="text-sm mt-1">
              Detta är inte juridisk rådgivning. För komplexa ärenden, kontakta
              en jurist.
            </p>

          </div>

        </div>

        <div class="flex items-start space-x-3">

          <div
            class="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"
          ></div>

          <div>

            <p class="font-medium">Verifiering</p>

            <p class="text-sm mt-1">
              Kontaktinformation och processer kan ändras. Vi rekommenderar att
              du verifierar informationen direkt med respektive tjänst.
            </p>

          </div>

        </div>

      </div>
       </Card
    >
  </div>

</template>
