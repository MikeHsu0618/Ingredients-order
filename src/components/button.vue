<template>
  <button
      :class="cssColor[color]"
      class="px-3 py-1 border-2 rounded-full  hover:bg-indigo-500 hover:text-indigo-100 mt-2 ml-3">
    <slot></slot>
  </button>
</template>

<script setup>
const name = "button"
const props = defineProps({
  color: String,
})

const cssColor = {
  green: [
    'hover:bg-green-500',
    'border-green-500',
    'text-green-500',
    'hover:text-green-100'
  ],
  indigo: [
    'hover:bg-indigo-500',
    'border-indigo-500',
    'text-indigo-500',
    'hover:text-indigo-100'
  ],
  red: [
    'hover:bg-red-500',
    'border-red-500',
    'text-red-500',
    'hover:text-red-100'
  ]
}
</script>

<style scoped>

</style>