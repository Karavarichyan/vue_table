<script setup>
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['create'])

const post = ref({
  title: '',
  body: '',
})

const createPost = () => {
  emit('create', { ...post.value })
  post.value = { title: '', body: '' }
}
</script>

<template>
  <form @submit.prevent="createPost" class="mb-6 p-4 bg-white shadow-md rounded-lg">
    <h4 class="text-lg font-semibold mb-4">Add new post</h4>
    <input
      v-model="post.title"
      type="text"
      placeholder="Name"
      class="w-full mb-4 p-2 border border-gray-300 rounded-md"
    />
    <input
      v-model="post.body"
      type="text"
      placeholder="Description"
      class="w-full mb-4 p-2 border border-gray-300 rounded-md"
    />
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Create</button>
  </form>
</template>
