import { createApp } from 'vue';
import router from '@/router';
import { routes } from '@/router';
import App from './App.vue';
import './style/index.less';
import './style/dark.css';

setTimeout(() => {
  routes.forEach((t) => {
    router.addRoute(t);
  });
  router.replace(location.pathname);
}, 0);

createApp(App).use(router).mount('#app');
