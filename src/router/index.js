import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import Company from '@/pages/Company.vue'
import Services from '@/pages/Services.vue'
import Cases from '@/pages/Cases.vue'
import Contacts from '@/pages/Contacts.vue'
import Сareers from '@/pages/Сareers.vue'

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
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/careers',
    component: Сareers
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router