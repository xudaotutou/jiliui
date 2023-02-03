import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
const Button = ()=> import('../components/myButton.vue')
const routes :RouteRecordRaw[] = [
    {
        path:'/',
        redirect: '/button'
    },
    {
        path: '/button',
        component: Button
    }
   
]
const router  = createRouter({
    routes,
    history:createWebHistory()
})

export default router