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
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
