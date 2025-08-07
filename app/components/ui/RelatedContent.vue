<template>

  <section
    class="py-8 bg-gradient-to-br from-gray-50 to-gray-100/30 dark:from-gray-900 dark:to-gray-800/30"
  >

    <div class="px-4 mx-auto max-w-7xl">

      <div class="mx-auto max-w-4xl">

        <h3
          class="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200"
        >
           Relaterat innehåll
        </h3>

        <div class="grid gap-6 md:grid-cols-2">
           <Card variant="glass" hoverable padding="lg"
            >
            <div class="flex items-start space-x-4">

              <div
                class="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center"
              >
                 <Icon
                  name="heroicons:information-circle"
                  class="h-6 w-6 text-purple-600 dark:text-purple-400"
                />
              </div>

              <div class="flex-1">

                <h4
                  class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200"
                >
                   Om projektet
                </h4>

                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   Läs mer om varför vi skapade denna sida och hur du kan bidra.

                </p>
                 <Button
                  tag="NuxtLink"
                  to="/about"
                  variant="secondary"
                  size="sm"
                  icon="heroicons:arrow-right"
                  > Läs mer </Button
                >
              </div>

            </div>
             </Card
          > <Card variant="glass" hoverable padding="lg"
            >
            <div class="flex items-start space-x-4">

              <div
                class="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center"
              >
                 <Icon
                  name="heroicons:shield-check"
                  class="h-6 w-6 text-red-600 dark:text-red-400"
                />
              </div>

              <div class="flex-1">

                <h4
                  class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200"
                >
                   Säkerhetsverktyg
                </h4>

                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   Upptäck gratis verktyg för att skydda din digitala säkerhet.
                </p>
                 <Button
                  tag="NuxtLink"
                  to="/security"
                  variant="secondary"
                  size="sm"
                  icon="heroicons:arrow-right"
                  > Utforska verktyg </Button
                >
              </div>

            </div>
             </Card
          >
        </div>

      </div>

    </div>

  </section>

</template>

