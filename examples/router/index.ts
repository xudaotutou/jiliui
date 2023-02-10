import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/button'
  },
  {
    path: '/button',
    component: async () => await import('../components/myButton.vue')
  },
  {
    path: '/layout',
    component: async () => await import('../components/myLayout.vue')
  },
  {
    path: '/slider',
    component: async () => await import('../components/mySlider.vue')
  },
  {
    path: '/scrollbar',
    component: async () => await import('../components/myScrollbar.vue')
  },
  {
    path: '/input',
    component: async () => await import('../components/myInput.vue')
  },
  {
    path: '/inputnumber',
    component: async () => await import('../components/myInpuNumber.vue')
  }

]
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
