<script setup>
const props = defineProps({ row: Object, defaultColor: String })
</script>

<template>
  <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
    <td
      :class="{ 'font-bold': row.bold }"
      class="border border-slate-300 px-6 py-4 text-left"
    >
      {{ row.cell0 }}
    </td>
    <td
      :class="{ 'font-bold': row.bold }"
      class="border border-slate-300 px-6 py-4 text-center"
    >
      {{ row.cell1 }}
    </td>
    <td
      :class="{ 'font-bold': row.bold }"
      class="border border-slate-300 px-6 py-4 text-center"
    >
      {{ row.cell2 }}
    </td>
    <td
      :class="{ 'font-bold': row.bold }"
      class="border border-slate-300 px-6 py-4 text-center"
    >
      {{ row.cell3 }}
    </td>
    <td
      :class="{ 'font-bold': row.bold }"
      class="border border-slate-300 px-6 py-4 text-center"
    >
      {{ row.cell4 }}
    </td>
  </tr>
</template>
