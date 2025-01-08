<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="text-amber-800">hellgggggggggggll</div>  <div>hellll</div>



  <RouterView />
</template> -->
<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="bg-gray-800 p-4">
    <RouterLink to="/" class="text-white mr-4">Home</RouterLink>
  </nav>

  <div class="p-6">
    <RouterView />
  </div>
</template> -->
<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="bg-gray-800 p-4">
    <RouterLink to="/" class="text-white mr-4">Home</RouterLink>
    <RouterLink to="/posts" class="text-white">Posts</RouterLink>
  </nav>

  <div class="p-6">
    <RouterView />
  </div>
</template>
