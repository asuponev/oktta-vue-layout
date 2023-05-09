import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/pages/Main.vue'
import Company from '@/pages/Company.vue'
import Services from '@/pages/Services.vue'
import Cases from '@/pages/Cases.vue'
import Contacts from '@/pages/Contacts.vue'
import Careers from '@/pages/Careers.vue'
import Documents from '@/pages/Documents.vue'
import Brief from '@/pages/Brief.vue'
import OpenPositionPage from '@/pages/OpenPositionPage.vue'
import Mesh3Case from '@/pages/Mesh3Case.vue'

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
    path: '/careers/:id',
    component: OpenPositionPage
  },
  {
    path: '/documents',
    component: Documents
  },
  {
    path: '/brief',
    component: Brief
  },
  // fake path for demonstrate page
  {
    path: '/cases/mesh-3',
    component: Mesh3Case
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router