<template>
  <thead>
  <tr>
    <th
        v-for="title in titles"
        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
      {{ title }}
    </th>
  </tr>
  </thead>
</template>

<script setup>
const name = "listHead"

const titles = [
  '菜名',
  '人數',
  '食材',
  '鍋數',
  '每鍋籃/箱',
  '籃/箱 = KG',
  '叫貨量',
  '單位',
  '廠商',
  '備註',
  '功能',
]
</script>

<style scoped>


</style>