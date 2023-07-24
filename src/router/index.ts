import { createRouter, createWebHistory } from 'vue-router'
import menuDemoRouter from './menuDemoRouter'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'AppLogin',
      component: () => import('../views/login/app-login.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/app/home',
      name: 'AppHome',
      component: () => import('../views/home/app-home.vue'),
      meta: { title: '首页' }
    },
    {
      path: '/admin/theme',
      name: 'AdminTheme',
      component: () => import('../views/admin/admin-theme.vue'),
      meta: { title: '后台管理模板Ⅰ'},
      children: menuDemoRouter
    },
    {
      path: '/desktop/theme',
      name: 'DesktopTheme',
      component: () => import('../views/desktop/desktop-theme.vue'),
      meta: { title: '桌面模板Ⅰ' }
    },
    {
      path: '/desktop/theme2',
      name: 'DesktopTheme2',
      component: () => import('../views/desktop/desktop-theme2.vue'),
      meta: { title: '桌面模板Ⅱ' }
    }
  ]
})

export default router
