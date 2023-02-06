import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/button'
    },
    {
        path: '/button',
        component: () => import('../components/myButton.vue')
    }, 
    {
        path: '/layout',
        component: () => import("../components/myLayout.vue")
    }, 
    {
        path: '/slider',
        component: () => import("../components/mySlider.vue")
    },
    {
        path: '/scrollbar',
        component: () => import("../components/myScrollbar.vue")
    }

]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router