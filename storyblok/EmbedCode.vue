<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <section
    v-editable="blok"
    class="page-section text-section relative z-50"
    :class="[
      'bg-' + blok.background_color,
      {
        'overlap-preceding-hero':
          blok.overlap_preceding_hero && !blok.single_color_background,
      },
    ]"
  >
    <div class="container">
      <td v-html="blok.snippet"></td>
    </div>
  </section>
</template>
