import { createRouter, createWebHashHistory } from 'vue-router'

import Main from '@/pages/Main.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router