import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

var app = createApp(App);
//5、vue中使用router
app.use(router);
app.mount('#app')