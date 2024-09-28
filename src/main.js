import './assets/style.css'
import 'primeicons/primeicons.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@/presets/aura';
import Ripple from 'primevue/ripple';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
    unstyled: true,
    pt: Aura,
    ripple: true,
});
app.directive('ripple', Ripple);
app.use(createPinia())
app.use(router)

app.mount('#app')
