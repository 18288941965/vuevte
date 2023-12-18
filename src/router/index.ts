import { createRouter, createWebHistory } from 'vue-router'
import menuDemoRouter from './menuDemoRouter'
import menuDemoRouter2 from './menuDemoRouter2'
import menuDemoRouter3 from './menuDemoRouter3'

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
      meta: { title: '后台管理模板'},
      children: menuDemoRouter
    },
    {
      path: '/admin/theme2',
      name: 'AdminTheme2',
      component: () => import('../views/admin/admin-theme2.vue'),
      meta: { title: '后台管理模板2'},
      children: menuDemoRouter2
    },
    {
      path: '/admin/theme3',
      name: 'AdminTheme3',
      component: () => import('../views/admin/admin-theme3.vue'),
      meta: { title: '后台管理模板3'},
      children: menuDemoRouter3
    },
    {
      path: '/desktop/theme',
      name: 'DesktopTheme',
      component: () => import('../views/desktop/desktop-theme.vue'),
      meta: { title: '桌面模板' }
    },
    {
      path: '/desktop/theme2',
      name: 'DesktopTheme2',
      component: () => import('../views/desktop/desktop-theme2.vue'),
      meta: { title: '桌面模板2' }
    }
  ]
})

export default router
