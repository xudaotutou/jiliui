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
    path: '/calendar',
    component: async () => await import('../components/myCalendar.vue')
  },
  {
    path: '/myBackToTop',
    component: async () => await import('../components/myBackToUp.vue')
  },
  {
    path: '/steps',
    component: async () => await import('../components/mySteps.vue')
  },
  {
    path: '/dropdown',
    component: async () => await import('../components/myDropdown.vue')
  },
  {
    path: '/menu',
    component: async () => await import('../components/myMenu.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
