import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css'
import '@fouro/elx/src/ELTheme/index.css'
import '@fouro/all-in-one/lib/utils/validate'
import '@fouro/elx/src/utils/element-loader'
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false

Vue.config.store = store

Vue.use(infiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
