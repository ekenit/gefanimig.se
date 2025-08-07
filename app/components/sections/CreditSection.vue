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
                 Denna guide är inspirerad av en Reddit-post
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

            </div>

          </div>
           </Card
        >
      </div>

    </div>

  </section>

</template>

