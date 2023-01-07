import { createApp } from 'vue';
import './style.scss';
import router from '@/router/index'
import App from './App.vue';

import { vfmPlugin } from 'vue-final-modal';
import piniaStore from './stores/index';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
// App.use(vfmPlugin)
const app = createApp(App);

app.use(vfmPlugin);
app.use(piniaStore);
app.use(router)
app.mount('#app');
app.component('EasyDataTable', Vue3EasyDataTable);