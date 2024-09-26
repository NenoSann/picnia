import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/index';
import './assets/main.scss';
import './assets/_var.scss';
import './assets/base.css';
import { VueCropper } from 'vue-cropper';
const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueCropper);
app.mount('#app');
