<script setup>
const props = defineProps({
  label: String,
  color: String,
  onClick: Function,
});

const colors = {
  blue: 'bg-blue-500 hover:bg-blue-600',
  red: 'bg-red-500 hover:bg-red-600',
  green: 'bg-green-500 hover:bg-green-600',
  gray: 'bg-gray-500 hover:bg-gray-600',
};
</script>

<template>
  <button
    :class="`px-4 py-2 rounded text-white font-medium shadow ${colors[color]}`"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
