<template>

  <section class="py-8 bg-blue-50/50 dark:bg-blue-950/20">

    <div class="px-4 mx-auto max-w-7xl">

      <div class="mx-auto max-w-4xl px-4">
         <Card variant="glass"
          >
          <div class="flex items-start space-x-4">

            <div
              class="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center"
            >
               <Icon
                name="heroicons:chat-bubble-left-ellipsis"
                class="h-6 w-6 text-orange-600 dark:text-orange-400"
              />
            </div>

            <div class="flex-1">

              <h4 class="text-lg font-semibold mb-2">
                Tack för inspirationen!
              </h4>

              <p class="text-gray-600 dark:text-gray-300 mb-4">
                 Denna guide är inspirerad av en användbar Reddit-post som
                hjälpte många svenskar att ta kontroll över sina
                personuppgifter. <strong
                  >Till skillnad från betaltjänsterna är detta 100%
                  gratis.</strong
                >
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                 <Button
                  tag="NuxtLink"
                  to="https://www.reddit.com/r/stockholm/comments/1j2mem6/skydda_personuppgifter_ta_bort_er_från_mrkollse/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
                  variant="secondary"
                  size="sm"
                  external
                  icon="heroicons:arrow-top-right-on-square"
                  > Se ursprungligt Reddit-inlägg </Button
                >
              </div>
               <!-- Enhanced Anti-scam section -->
              <div
                class="bg-gradient-to-r from-red-50/80 to-orange-50/80 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200/60 dark:border-red-800/60 rounded-xl p-5 mb-4"
              >

                <div class="flex items-start space-x-3">

                  <div
                    class="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/40 rounded-lg flex items-center justify-center"
                  >
                     <Icon
                      name="heroicons:shield-exclamation"
                      class="h-4 w-4 text-red-600 dark:text-red-400"
                    />
                  </div>

                  <div class="min-w-0 flex-1">

                    <h5
                      class="text-sm font-semibold text-red-800 dark:text-red-200 mb-2"
                    >
                       Undvik bluffföretag
                    </h5>

                    <p
                      class="text-red-700 dark:text-red-300 text-sm mb-3 leading-relaxed"
                    >
                       Många företag tar 50-200 kr/månad för att "skydda din
                      identitet" eller "ta bort dina uppgifter". Det är bluff -
                      allt du behöver finns här gratis och är ofta bättre än
                      deras betaltjänster.
                    </p>

                    <div class="flex flex-wrap gap-2">
                       <Button
                        tag="a"
                        href="/security"
                        variant="ghost"
                        size="sm"
                        icon="heroicons:shield-check"
                        class="!text-red-700 dark:!text-red-300 !bg-red-100/50 dark:!bg-red-900/30 hover:!bg-red-200/50 dark:hover:!bg-red-900/50"
                        > Gratis säkerhetsverktyg </Button
                      >
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
           </Card
        >
      </div>

    </div>

  </section>

</template>
