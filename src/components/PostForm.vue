<template>
  <form @submit.prevent="createPost" class="space-y-4">
    <input
      v-model="title"
      placeholder="Title"
      class="w-full border border-gray-300 rounded-lg p-2"
    />
    <textarea
      v-model="body"
      placeholder="Description"
      class="w-full border border-gray-300 rounded-lg p-2"
    ></textarea>
    <ButtonComponent
      label="Add Post"
      color="blue"
      :onClick="createPost"
      class="w-full"
    />
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { usePostStore } from '@/stores/postStore';
import ButtonComponent from '@/components/ButtonComponent.vue';

const postStore = usePostStore();
const title = ref('');
const body = ref('');

const createPost = () => {
  if (title.value && body.value) {
    postStore.addPost({ title: title.value, body: body.value });
    title.value = '';
    body.value = '';
  } else {
    alert('Both title and description are required!');
  }
};
</script>
