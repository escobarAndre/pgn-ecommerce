import { createApp } from 'vue'
import App from './App.vue'
import category from './components/category/category.vue'
import product from './components/prouct/product.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';


import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'               //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App)
app.component('category', category)
app.component('product', product)

app.use(PrimeVue)
app.component('Dropdown', Dropdown)
app.component('Button', Button)
app.mount('#app')
