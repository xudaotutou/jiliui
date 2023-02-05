import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
const Button = ()=> import('../components/my-button.vue')
const Scrollbar = ()=> import('../components/scroll-bar.vue')
const routes :RouteRecordRaw[] = [
    {
        path:'/',
        redirect: '/button'
    },
    {
        path: '/button',
        component: Button
    },
    {
        path:'/scrollbar',
        component: Scrollbar
    }
   
]
const router  = createRouter({
    routes,
    history:createWebHistory()
})

export default router