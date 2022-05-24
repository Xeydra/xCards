import { createApp } from 'vue';

import store from './store/index.js';
import App from './App.vue';
import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseGrid from './components/UI/BaseGrid.vue'
import IconButton from './components/UI/IconButton.vue'

const app = createApp(App);

app.use(store);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-grid', BaseGrid);
app.component('icon-button', IconButton);

app.mount('#app');
