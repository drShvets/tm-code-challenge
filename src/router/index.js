import { createRouter, createWebHistory } from 'vue-router';
import routeNames from '@/router/route-names';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routeNames.ROOT,
      component: DefaultLayout
    }
  ]
});

export default router;
