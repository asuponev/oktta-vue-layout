import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/pages/MainPage.vue'
import CompanyPage from '@/pages/CompanyPage.vue'
import ServicesPage from '@/pages/ServicesPage.vue'
import DetailServiceDevelopment from '@/pages/DetailServiceDevelopment.vue'
import CasesPage from '@/pages/CasesPage.vue'
import ContactsPage from '@/pages/ContactsPage.vue'
import CareersPage from '@/pages/CareersPage.vue'
import DocumentsPage from '@/pages/DocumentsPage.vue'
import BriefPage from '@/pages/BriefPage.vue'
import DetailVacancy from '@/pages/DetailVacancy.vue'
import DetailCaseMesh3 from '@/pages/DetailCaseMesh3.vue'
import DetailCaseB2CPL from '@/pages/DetailCaseB2CPL.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/company',
    component: CompanyPage
  },
  {
    path: '/services',
    component: ServicesPage
  },
  {
    path: '/services/development',
    component: DetailServiceDevelopment
  },
  {
    path: '/cases',
    component: CasesPage
  },
  {
    path: '/contacts',
    component: ContactsPage
  },
  {
    path: '/careers',
    component: CareersPage
  },
  {
    path: '/careers/:id',
    component: DetailVacancy
  },
  {
    path: '/documents',
    component: DocumentsPage
  },
  {
    path: '/brief',
    component: BriefPage
  },
  {
    path: '/cases/mesh-3',
    component: DetailCaseMesh3
  },
  {
    path: '/cases/b2cpl',
    component: DetailCaseB2CPL
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router