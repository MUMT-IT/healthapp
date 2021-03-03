import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import vueMoment from 'vue-moment'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(vueMoment)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
