import {createRouter, createWebHistory} from 'vue-router'

import baseRoutes from './baseRoutes'
import adminRoutes from './adminRoutes'

const routes = baseRoutes.concat(adminRoutes)

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
})

export default router
