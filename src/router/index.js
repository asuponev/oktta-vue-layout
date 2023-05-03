import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import Company from '@/pages/Company.vue'
import Services from '@/pages/Services.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/company',
    component: Company
  },
  {
    path: '/services',
    component: Services
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router