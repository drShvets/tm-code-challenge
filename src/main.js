import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { vuetify } from './vuetify/vuetity.config';
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(VueQueryPlugin);

app.mount('#app');
