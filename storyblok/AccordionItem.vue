<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps({ item: Object })

const accordionOpen = ref<boolean>(false)

onMounted(() => {
  accordionOpen.value = false
})
</script>

<template>
  <div class="px-20 py-3">
    <h2>
      <button
        id="accordion-title-01"
        class="flex w-full items-center justify-between py-2 text-left text-xl font-semibold text-primary"
        @click.prevent="accordionOpen = !accordionOpen"
        :aria-expanded="accordionOpen"
        aria-controls="accordion-text-01"
      >
        <span>{{ item.label }}</span>
        <svg
          class="ml-8 shrink-0 fill-indigo-500"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            class="origin-center transform transition duration-200 ease-out"
            :class="{ '!rotate-180': accordionOpen }"
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            class="origin-center rotate-90 transform transition duration-200 ease-out"
            :class="{ '!rotate-180': accordionOpen }"
          />
        </svg>
      </button>
    </h2>
    <div
      id="accordion-text-01"
      role="region"
      aria-labelledby="accordion-title-01"
      class="grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out"
      :class="
        accordionOpen
          ? 'grid-rows-[1fr] opacity-100'
          : 'grid-rows-[0fr] opacity-0'
      "
    >
      <div class="overflow-hidden">
        <p class="pb-3">
          <RichText :text="item.text"></RichText>
        </p>
      </div>
    </div>
  </div>
</template>
