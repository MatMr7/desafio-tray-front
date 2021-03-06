import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes/index'
import { apiHost } from '../config/index'
import VeeValidate from 'vee-validate'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource)
Vue.http.options.root = apiHost

Vue.use(VeeValidate)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
