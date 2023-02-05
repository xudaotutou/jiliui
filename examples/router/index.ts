import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
const routes :RouteRecordRaw[] = [
    {
        path:'/',
        redirect: '/button'
    },
    {
        path: '/button',
        component: ()=> import('../components/myButton.vue')
    },{
        path:'/layout',
        component: ()=>import("../components/myLayout.vue")
    }
   
]
const router  = createRouter({
    routes,
    history:createWebHistory()
})

export default router