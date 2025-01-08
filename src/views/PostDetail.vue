<script setup>
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/postStore';

const route = useRoute();
const postStore = usePostStore(); 

const postId = Number(route.params.id);
const post = postStore.posts.find((p) => p.id === postId);
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div v-if="post" class="bg-white p-4 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-700">{{ post.body }}</p>
    </div>

    <div v-else class="text-red-500 text-center">
      Post not found
    </div>
  </div>
</template>
