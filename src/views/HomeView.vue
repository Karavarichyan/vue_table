<!-- <template>
  <div class="text-center">
    <h1 class="text-3xl font-bold text-gray-800">Добро пожаловать на главную страницу!</h1>
    <p class="mt-4 text-lg">Перейдите на страницу постов, чтобы увидеть таблицу.</p>
    <RouterLink to="/posts" class="text-blue-500 hover:underline">Перейти к постам</RouterLink>
  </div>
</template> -->
<!-- <script setup>
import { usePostStore } from '@/stores/postStore';
import { RouterLink } from 'vue-router';

const postStore = usePostStore();
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">Welcome to the Home Page!</h1>

    <ul class="space-y-4">
      <li
        v-for="post in postStore.posts"
        :key="post.id"
        class="bg-white p-4 rounded-lg shadow-md hover:bg-blue-100"
      >
        <RouterLink :to="`/posts/${post.id}`" class="text-blue-500 hover:underline">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template> -->
<!-- <script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold text-gray-800">Добро пожаловать на главную страницу!</h1>
    <p class="mt-4 text-lg">Перейдите на страницу постов, чтобы увидеть таблицу.</p>
    <RouterLink to="/posts" class="text-blue-500 hover:underline">Перейти к постам</RouterLink>
  </div>
</template>
 -->
 <!-- <script setup>
 import { usePostStore } from '@/stores/postStore';
 import { RouterLink } from 'vue-router';

 const postStore = usePostStore();
 </script>

 <template>
   <div class="p-6 bg-gray-100 min-h-screen">
     <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">Welcome to the Home Page!</h1>

     <ul class="space-y-4">
       <li
         v-for="post in postStore.posts"
         :key="post.id"
         class="bg-white p-4 rounded-lg shadow-md hover:bg-blue-100"
       >
         <RouterLink :to="`/posts/${post.id}`" class="text-blue-500 hover:underline">
           {{ post.title }}
         </RouterLink>
       </li>
     </ul>
   </div>
 </template> -->
 <script setup>
 import { ref, computed } from 'vue';
 import { usePostStore } from '@/stores/postStore';
 import { RouterLink } from 'vue-router';

 const postStore = usePostStore();

 const filterText = ref('');

 const filteredPosts = computed(() => {
   if (!filterText.value) return postStore.posts;
   return postStore.posts.filter((post) =>
     post.title.toLowerCase().includes(filterText.value.toLowerCase())
   );
 });
 </script>

 <template>
   <div class="p-6 bg-gray-100 min-h-screen">
     <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">Welcome to the Home Page</h1>

     <div class="mb-6">
       <input
         v-model="filterText"
         type="text"
         placeholder="Search posts..."
         class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
     </div>

     <ul class="space-y-4">
       <li
         v-for="post in filteredPosts"
         :key="post.id"
         class="bg-white p-4 rounded-lg shadow-md hover:bg-blue-100"
       >
         <RouterLink :to="`/posts/${post.id}`" class="text-blue-500 hover:underline">
           {{ post.title }}
         </RouterLink>
       </li>
     </ul>

     <div v-if="filteredPosts.length === 0" class="text-center text-red-500">
       No posts found
     </div>
   </div>
 </template>
