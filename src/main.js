import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import i18n from './lang'
import './assets/styles/icon.css'
import './assets/styles/global.scss'
import './mock/index'
import './utils/boost'
import './utils/create-api'
 
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
