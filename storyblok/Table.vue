<script setup>
const props = defineProps({ blok: Object })

const gridCardColor = computed(() => {
  return props.blok.background_color === 'light' ? 'bg-white' : 'bg-light'
})

const gridClasses = computed(() => getGridClasses(props.blok.cols))
</script>

<template>
  <section
    v-editable="blok"
    class="page-section grid-section"
    :class="'bg-' + blok.background_color"
  >
    <div class="wd-full container text-center">
      <Headline v-if="blok.headline" class="mb-4">{{ blok.headline }}</Headline>
      <Lead v-if="blok.lead">
        {{ blok.lead }}
      </Lead>

      <table
        class="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400"
        :class="[{ 'md:!mt-0': !blok.headline && !blok.lead }]"
      >
        <ComponentCheck
          v-for="(row, index) in blok.rows"
          :key="row._uid"
          :index="index"
          :row="row"
          :default-color="gridCardColor"
          :blok="row"
        />
      </table>
    </div>
  </section>
</template>
