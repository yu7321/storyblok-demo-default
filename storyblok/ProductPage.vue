<script setup>
const props = defineProps({ blok: Object })

const optimizedArticleImage = computed(() =>
  getOptimizedImage(props.blok.image, 2000),
)
const optimizedAuthorImage = computed(() =>
  getOptimizedImage(props.blok.author.content.profile_picture, 200),
)
</script>

<template>
  <section
    class="page-section banner-section no-padding: true bg-white"
    v-editable="blok"
  >
    <div class="container: false">
      <div
        class="relative flex min-h-[540px] items-center justify-center overflow-hidden px-4 py-16 sm:px-6 md:min-h-[600px] md:px-8 lg:min-h-[720px] lg:px-12 lg:py-32 xl:py-40 2xl:py-48"
        style="background-color: white"
      >
        <div class="relative z-30 bg-white/70 p-5">
          <h2
            class="mb-4 text-center font-display text-base font-bold leading-tight text-gray-800 md:text-base md:leading-tight lg:text-base lg:leading-tight"
          >
            {{ blok.name }}
          </h2>
          <div class="mx-auto max-w-3xl">
            <h3
              class="text-md gont-bold text-center font-display text-gray-800 md:text-lg lg:text-xl"
            >
              {{ blok.seasonDescription }}
            </h3>
          </div>
          <div
            class="mx-auto mt-12 flex flex-col items-center justify-center space-y-6 bg-gray-800 text-gray-100 md:flex-row md:space-x-8 md:space-y-0"
          >
            <button>
              <NuxtLink to="" v-editable="button" class="block h-full w-full">
                ADD TO SHOPPING BAG
              </NuxtLink>
            </button>
          </div>
        </div>

        <img
          :src="blok.image1"
          :alt="blok.name"
          class="pointer-events-none absolute top-0 z-0 h-full"
        />
      </div>
    </div>
  </section>
  <article v-editable="blok" class="bg-white">
    <header
      class="overlay-15 relative flex h-[75vh] w-full items-end bg-white pb-40 lg:h-screen lg:pb-80"
    >
      <img
        v-if="blok.image2"
        :src="blok.image2"
        :alt="blok.name"
        class="pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-cover"
      />
      <div v-if="blok.name" class="container relative z-10 text-white">
        <h1
          class="mb-4 font-display text-base font-bold leading-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight"
        >
          {{ blok.name }}
        </h1>
      </div>
    </header>
    <main class="container relative z-50">
      <div
        class="rounded-lg bg-white bg-opacity-80 p-6 backdrop-blur-lg lg:flex lg:items-start"
      >
        <section class="mb-12 w-full lg:mb-0 lg:pr-32">
          <Headline v-if="blok.name" size="small" class="mb-10">
            {{ blok.name }}
          </Headline>
          <Lead v-if="blok.editorialDescription" class="mb-10">
            {{ blok.editorialDescription }}
          </Lead>
          <Lead v-if="blok.materialCare" class="mb-10">
            {{ blok.materialCare }}
          </Lead>
        </section>
      </div>

      <div v-editable="blok">
        <ComponentCheck
          v-for="(blok, index) in blok.body"
          :key="blok._uid"
          :blok="blok"
          :index="index"
        />
      </div>
    </main>
  </article>
</template>
