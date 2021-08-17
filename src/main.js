import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { router } from './routes.js'

Vue.prototype.$isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

new Vue({   
   store,   
   router,
   el: '#app',
   render: h => h(App)
})