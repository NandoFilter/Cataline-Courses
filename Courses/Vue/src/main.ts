import { createApp } from 'vue'
import App from './App.vue'
import highlight from './directives/highlight'
import '@fortawesome/fontawesome-free/css/all.css'
import ButtonStyled from '@/components/ButtonStyled.vue'

const app = createApp(App)

app.component('ButtonStyled', ButtonStyled)

app.directive('highlight', highlight)

app.mount('#app')
