// @ts-nocheck
import { createApp } from 'vue';
import App from './App.vue';
// import tmindUi from './.libTemp/tmindUi.umd';
import tmindUi from '../lib/tmindUi.umd';

createApp(App)
.use(tmindUi)
.mount('#app');

/* eslint-disable no-console */
console.log(tmindUi);
