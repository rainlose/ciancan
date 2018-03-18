import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import {
  store
} from './store'
import {
  routes
} from './routes'

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://wd8360477617flqnwk.wilddogio.com/'

Vue.prototype.http = axios

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  mode: 'history'
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
