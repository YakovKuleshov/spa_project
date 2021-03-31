import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { router } from './routes.js'

new Vue({
   store,
   router,
   el: '#app',
   render: h => h(App)
})