import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    this.$store.dispatch('GET_CATEGORY')
    // this.$store.dispatch('SAVE_CATEGORY')
  },
}).$mount('#app')
