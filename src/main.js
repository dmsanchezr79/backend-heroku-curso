import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify';

const base = axios.create({
  baseURL: "http://localhost:3000/api"
  // baseURL: "https://shielded-hollows-52645.herokuapp.com"
})

Vue.config.productionTip = false

Vue.prototype.$http = base;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
