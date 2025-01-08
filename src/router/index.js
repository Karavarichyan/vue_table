import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import PostDetail from '@/views/PostDetail.vue';
import PostTable from '@/components/PostTable.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostTable,
  },
  {
    path: '/posts/:id',
    name: 'post-detail',
    component: PostDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
