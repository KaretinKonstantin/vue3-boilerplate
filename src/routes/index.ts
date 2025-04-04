import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/_ui-kit',
      name: 'ui-kit',
      component: () => import('@/pages/UiKit.vue'),
    },
  ],
})

export default router
