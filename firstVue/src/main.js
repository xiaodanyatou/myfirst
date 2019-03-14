import Vue from 'vue'

import Cookies from 'js-cookie'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang'
import './icons'
import './errorLog'
import './permission'
import './mock'

import * as filters from './filters'


Vue.use(Element, {
  size: Cookies.get('size') || 'medium',  //set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

//register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filters(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})


