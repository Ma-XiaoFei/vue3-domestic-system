import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes = [
  {
    path: '/',
    component: () => import('@/layout/Index.vue'),
    children: [
      { path: '/', component: () => import('@/views/Home/Index.vue') },
      {
        name: 'ciscoManage',
        path: 'equipment-safety-management',
        component: () => import('@/views/CiscoManage/Index.vue'),
      },
      {
        name: 'laborRealName',
        path: 'labor-real-name',
        component: () => import('@/views/LaborRealName/Index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

export default router;
