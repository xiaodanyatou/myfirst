import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/*  */
import Layout from '@/views/layout/Layout'

/* Router Moudles */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import treeTableRouter from './modules/tree-table'
import nestedRouter from './modules/nested'

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