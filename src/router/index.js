import { createRouter, createWebHistory } from 'vue-router';
import { routeNames } from '@/router/route-names';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
const PlanetListPage = () => import('@/pages/PlanetListPage.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routeNames.ROOT,
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: routeNames.PLANET_LIST,
          component: PlanetListPage
        }
      ]
    }
  ]
});

export default router;
