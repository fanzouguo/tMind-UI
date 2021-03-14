// @ts-nocheck
import { createApp } from 'vue';
import App from './App.vue';
import tmindUi from './.libTemp/tmindUi.umd';

createApp(App)
.use(tmindUi)
.mount('#app');
