<script setup>
defineProps({ blok: Object, index: Number })
const componentExists = (component) =>
  typeof resolveComponent(component) !== 'string'
</script>

<template>
  <StoryblokComponent
    v-if="componentExists(blok.component)"
    :blok="blok"
    :index="index"
  />
  <div v-else class="container flex justify-center">
    <div
      class="my-16 inline-flex items-center justify-center space-x-2 rounded-lg bg-light p-8 text-xl text-dark"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 shrink-0 text-yellow-600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="font-light">
        Component named
        <span class="font-medium">{{ blok.component }}</span>
        is not defined in your frontend framework yet.
      </span>
    </div>
  </div>
</template>
