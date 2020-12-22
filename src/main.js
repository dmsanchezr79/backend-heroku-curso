import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify';
import store from './store';

const base = axios.create({
  // baseURL: "http://localhost:3000/api"
  baseURL: "https://thawing-wildwood-89198.herokuapp.com/api"
})

Vue.config.productionTip = false

Vue.prototype.$http = base;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
