import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import Company from '@/pages/Company.vue'
import Services from '@/pages/Services.vue'
import Cases from '@/pages/Cases.vue'
import Contacts from '@/pages/Contacts.vue'
import Careers from '@/pages/Careers.vue'
import Documents from '@/pages/Documents.vue'
import Brief from '@/pages/Brief.vue'

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
    component: Careers
  },
  {
    path: '/documents',
    component: Documents
  },
  {
    path: '/brief',
    component: Brief
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router