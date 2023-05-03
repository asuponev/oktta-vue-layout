import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import Company from '@/pages/Company.vue'
import Services from '@/pages/Services.vue'
import Cases from '@/pages/Cases.vue'

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
  {
    path: '/cases',
    component: Cases
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router