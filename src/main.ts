import { createApp } from 'vue';
import router from '@/router';
import App from './App.vue';
import './style/index.less';
import './style/dark.css';
createApp(App).use(router).mount('#app');
