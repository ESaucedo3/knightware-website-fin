    // Bootstrap 5
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

    // Vue & Router
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

    // Video Responsive
import VueResponsiveVideoBackgroundPlayer from 'vue-responsive-video-background-player';

    // Mounting App
const app = createApp(App);
app.use(router);
app.component('vue-responsive-video-background-player', VueResponsiveVideoBackgroundPlayer);
app.mount('#app');
