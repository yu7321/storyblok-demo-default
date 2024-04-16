<script setup lang="ts">
const props = defineProps({ doc: Object })
</script>

<template>
  <li>
    <div class="px-4 py-5 sm:px-6">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          {{ doc.name }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          {{ doc.description }}
        </p>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <p class="text-sm font-medium text-gray-500">
          Status:
          <span class="text-green-600">Active</span>
        </p>
        <a
          :href="doc.file.filename"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Download
        </a>
      </div>
    </div>
  </li>
</template>
