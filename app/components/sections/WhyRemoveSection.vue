<template>
  <section class="py-12 bg-gradient-to-r from-gray-50/80 to-blue-50/60 dark:from-gray-800/40 dark:to-blue-950/20">
    <div class="px-4 mx-auto max-w-7xl">
      <div class="mx-auto max-w-4xl">
        <Card variant="glass">
          <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <Icon name="heroicons:phone-x-mark" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Varför ta bort din information?</h3>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-gray-100">Folk som behöver nå dig har redan ditt nummer</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Vänner, familj och viktiga kontakter vet redan hur de når dig.</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-gray-100">Allt annat är spam</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Telefonförsäljare, bedragare och robotsamtal som stör din vardag.</p>
                </div>
              </div>
            </div>
            
            <Card variant="default" padding="sm" class="bg-blue-50/50 dark:bg-blue-900/20 border-blue-200/50 dark:border-blue-800/50">
              <p class="text-sm font-medium mb-2 text-blue-800 dark:text-blue-200">💡 Så enkelt är det:</p>
              <p class="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                Du behöver inte vara tillgänglig för random företag som hittat dig i en databas. 
                Att ha personuppgifter på dessa sajter skapar bara onödig exponering mot skit du inte vill ha.
              </p>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>