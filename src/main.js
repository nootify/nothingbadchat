import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-3-socket.io';

createApp(App)
  .use(router)
  .use(
    new VueSocketIO({
      debug: process.env.VUE_APP_DEBUG_SOCKET_IO === 'true' ? true : false,
      connection: SocketIO('http://localhost:5000'),
    })
  )
  .mount('#app');
