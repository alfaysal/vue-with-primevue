import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/signIn.vue')
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/inventory/index.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/order/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/order/index.vue')
    },
  ]
})

export default router
