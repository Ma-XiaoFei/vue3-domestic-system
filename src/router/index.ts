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
      {
        name: 'videoSurveillance',
        path: 'video-surveillance',
        component: () => import('@/views/VideoSurveillance/Index.vue'),
      },
      {
        name: 'communityplatform',
        path: 'community-platform',
        component: () => import('@/views/CommunityPlatform/Index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

export default router;
