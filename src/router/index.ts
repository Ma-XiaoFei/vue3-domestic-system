import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    component: () => import('@/views/Home/Index.vue')
  },
  { name: 'ciscoManage', path: '/equipment-safety-management', component: () => import('@/views/CiscoManage/Index.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
