<script setup>
const props = defineProps({ blok: Object })

//let youtubeUrl =
//let youtubeUrl = "https://www.youtube-nocookie.com/embed/" + blok.videoid + "?controls=0";

const youtubeUrl = computed(
  () =>
    `<iframe src="https://www.youtube-nocookie.com/embed/${props.blok.videoid}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen class="aspect-video w-full"></iframe>`,
)
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
    <div class="container" v-html="youtubeUrl"></div>
  </section>
</template>
