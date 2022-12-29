import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';

import { vfmPlugin } from 'vue-final-modal';
import piniaStore from './stores/index';
// App.use(vfmPlugin)
const app = createApp(App);

app.use(vfmPlugin);
app.use(piniaStore);
app.mount('#app');
