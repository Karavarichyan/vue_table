<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
      Dynamic Post Table
    </h1>

    <PostForm @create="postStore.addPost" class="mb-6" />

    <div class="shadow overflow-hidden border border-gray-200 sm:rounded-lg">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-blue-50">
            <tr>
              <th
                scope="col"
                class="px-3 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider sm:px-6"
              >
                Title
              </th>
              <th
                scope="col"
                class="px-3 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider sm:px-6"
              >
                Description
              </th>
              <th
                scope="col"
                class="px-3 py-3 text-right text-xs font-medium text-blue-700 uppercase tracking-wider sm:px-6"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <PostRow
              v-for="post in postStore.posts"
              :key="post.id"
              :post="post"
              @remove="postStore.removePost"
              @update="postStore.updatePost"
              class="hover:bg-gray-100 transition-colors duration-200"
            />
          </tbody>
        </table>
      </div>

      <div v-if="postStore.posts.length === 0" class="text-center p-4 text-gray-500">
        No posts available
      </div>
    </div>
  </div>
</template>

<script setup>
import PostForm from '@/components/PostForm.vue'
import PostRow from '@/components/PostRow.vue'
import { usePostStore } from '@/stores/postStore'

const postStore = usePostStore()
</script>
