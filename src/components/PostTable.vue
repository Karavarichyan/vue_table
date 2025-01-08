<template>
  <div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold mb-6 text-center">Dynamic Post Table</h1>
    <PostForm class="mb-6" />

    <div class="shadow border border-gray-200 sm:rounded-lg overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-blue-50">
            <tr>
              <th class="px-3 py-3 text-left text-sm font-medium text-blue-700 uppercase">
                Title
              </th>
              <th class="px-3 py-3 text-left text-sm font-medium text-blue-700 uppercase">
                Description
              </th>
              <th class="px-3 py-3 text-right text-sm font-medium text-blue-700 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <PostRow
              v-for="post in postStore.posts"
              :key="post.id"
              :post="post"
            />
          </tbody>
        </table>
      </div>
      <div
        v-if="postStore.posts.length === 0"
        class="text-center p-4 text-gray-500"
      >
        No posts available
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/postStore';
import PostRow from '@/components/PostRow.vue';
import PostForm from '@/components/PostForm.vue';

const postStore = usePostStore();
</script>
