import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import Company from '@/pages/Company.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/company',
    component: Company
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router