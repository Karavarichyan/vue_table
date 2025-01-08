<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'blue',
  },
  onClick: {
    type: Function,
    required: true,
  },
  additionalClasses: {
    type: String,
    default: '',
  },
})

const colors = {
  blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300',
  red: 'bg-red-500 hover:bg-red-600 focus:ring-red-300',
  green: 'bg-green-500 hover:bg-green-600 focus:ring-green-300',
  gray: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-300',
}
</script>

<template>
  <button
    :class="[
      'px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 shadow-md focus:outline-none focus:ring-2',
      colors[color] || colors.blue,
      additionalClasses,
    ]"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
