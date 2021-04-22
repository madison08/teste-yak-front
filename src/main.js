import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

// Vue.use(VueRouter)

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
