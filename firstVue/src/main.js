import Vue from 'vue'
// import Element from 'element-ui'
import App from './App'
import Home from '@/components/Home'
// import Router from 'vue-router' 
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(router) // 引入路由
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,Home},
  template: '<App/>'
})


