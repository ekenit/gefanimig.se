<template>

  <div class="mt-8">
     <Card
      variant="default"
      padding="md"
      class="bg-gray-50/50 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50"
      >
      <h4
        class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center"
      >
         <Icon name="heroicons:user" class="h-5 w-5 mr-3" /> Varför gör jag
        detta?
      </h4>

      <div class="space-y-4 text-gray-700 dark:text-gray-300">

        <p class="leading-relaxed">
           Jag är en helt vanlig privatperson som blev less på alla
          telefonförsäljare och spam. Såg folk betala hundralappar för något som
          är gratis, så jag byggde den här sajten.
        </p>

        <div class="bg-white/50 dark:bg-gray-700/50 rounded-lg p-4">

          <p class="text-sm font-medium mb-2">Transparent info:</p>

          <ul class="text-sm space-y-1 list-disc list-inside">

            <li>Detta är inget företag, bara en person med en dator</li>

            <li>Kostar mig ~50-100 kr/månad att driva (hosting)</li>

            <li>Kommer finnas så länge jag orkar och har råd</li>

            <li>Donationer hjälper men är absolut inte nödvändiga</li>

            <li>
              Jag samlar inte in personuppgifter (det skulle ju vara dumt)
            </li>

          </ul>

        </div>

        <p class="text-sm italic">
           Om sajten försvinner någon dag så är all info öppen och mallar finns
          i koden. Ta bara det du behöver och gör din egen version.
        </p>
         <!-- Contact Section -->
        <div
          class="bg-blue-50/50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200/30 dark:border-blue-800/30"
        >

          <h5
            class="font-medium text-blue-800 dark:text-blue-200 mb-3 flex items-center"
          >
             <Icon name="heroicons:envelope" class="h-4 w-4 mr-2" /> Kontakt &
            Open Source
          </h5>

          <div class="space-y-2 text-sm">

            <p class="text-blue-700 dark:text-blue-300">
               Har du förslag, hittat buggar eller vill bara säga hej? Maila
              mig:
            </p>
             <Button
              tag="a"
              href="mailto:ekenitt@pm.me?subject=Ge Fan i Mig - Feedback"
              variant="ghost"
              size="sm"
              icon="heroicons:envelope"
              class="!text-blue-600 dark:!text-blue-400 !bg-transparent hover:!bg-blue-100 dark:hover:!bg-blue-900/30"
              > ekenitt@pm.me </Button
            >
            <p class="text-blue-600 dark:text-blue-400 text-xs">
               Projektet är open source under MIT-licens. Kod och mallar är fria
              att använda. ( ja det är två "t" i eposten. Någon annan hann före
              mig med ekenit@pm.me)
            </p>

          </div>

        </div>

      </div>
       </Card
    >
  </div>

</template>
