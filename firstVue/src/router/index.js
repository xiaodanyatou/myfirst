import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:Index
        },{
            path:'/content/:id',//:id  需要用id来区分，所以这里使用了动态路由配置
            component: Content
        }
    ]
})