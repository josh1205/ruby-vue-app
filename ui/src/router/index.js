import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/artists',
      name: 'Artists',
      component: () => import('../components/artists/Artists.vue')
    },
    {
      path: '/records',
      name: 'Records',
      component: () => import('../components/records/Records.vue')
    },
    {
      path: '/',
      name: 'Signin',
      component: () => import('../components/Signin.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../components/Signup.vue')
    }
  ]
})

export default router
