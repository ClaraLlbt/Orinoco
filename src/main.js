import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation du fichier CSS de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importation du fichier CSS de Bootstrap Icons
import './assets/main.css'
import './assets/media-queries.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
