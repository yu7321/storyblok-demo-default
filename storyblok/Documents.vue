<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="">
    <div class="wd-full container text-left">
      <Headline v-if="blok.headline" class="mb-4">{{ blok.headline }}</Headline>
      <Lead v-if="blok.lead">
        {{ blok.lead }}
      </Lead>
      <ul
        class="mx-auto mt-16 max-w-sm overflow-hidden bg-white shadow sm:rounded-md"
      >
        <ComponentCheck
          v-for="(doc, index) in blok.docs"
          :key="doc._uid"
          :index="index"
          :doc="doc"
          :blok="doc"
        />
      </ul>
    </div>
  </section>
</template>
