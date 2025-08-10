import { createApp } from 'vue';
import App from './App.vue';
import router from './route';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App).use(router);
app.use(Vue3Toastify, {
  autoClose: 2000,
  position: 'bottom-center',
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
});
app.mount('#app');