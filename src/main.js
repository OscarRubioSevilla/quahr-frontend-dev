import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { vfmPlugin } from 'vue-final-modal'

// App.use(vfmPlugin)
const app = createApp(App)

app.use(vfmPlugin);

app.mount('#app');
console.log(app)
