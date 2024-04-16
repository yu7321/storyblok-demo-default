<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="">
    <div class="wd-full container text-center">
      <Headline v-if="blok.headline" class="mb-4">{{ blok.headline }}</Headline>
      <Lead v-if="blok.lead">
        {{ blok.lead }}
      </Lead>
      <ComponentCheck
        v-for="(item, index) in blok.items"
        :key="item._uid"
        :index="index"
        :item="item"
        :blok="item"
      />
    </div>
  </section>
</template>
