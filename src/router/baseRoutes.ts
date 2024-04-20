import {RouteRecordRaw} from 'vue-router'
import menuDemoRouter from './menuDemoRouter'
import menuDemoRouter2 from './menuDemoRouter2'
import menuDemoRouter3 from './menuDemoRouter3'
import menuDemoRouter4 from './menuDemoRouter4'

const baseRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'AppLogin',
        component: () => import('../views/login/app-login.vue'),
        meta: { title: '登录' },
    },
    {
        path: '/app/institution',
        name: 'AppInstitution',
        component: () => import('../views/login/app-institution.vue'),
        meta: { title: '选择任职单位' },
    },
    {
        path: '/app/home',
        name: 'AppHome',
        component: () => import('../views/home/app-home.vue'),
        meta: { title: '首页' },
    },
    {
        path: '/admin/theme',
        name: 'AdminTheme',
        component: () => import('../views/theme/admin-theme.vue'),
        meta: { title: '后台管理模板'},
        children: menuDemoRouter,
    },
    {
        path: '/admin/theme2',
        name: 'AdminTheme2',
        component: () => import('../views/theme/admin-theme2.vue'),
        meta: { title: '后台管理模板2'},
        children: menuDemoRouter2,
    },
    {
        path: '/admin/theme3',
        name: 'AdminTheme3',
        component: () => import('../views/theme/admin-theme3.vue'),
        meta: { title: '后台管理模板3'},
        children: menuDemoRouter3,
    },
    {
        path: '/admin/theme4',
        name: 'AdminTheme4',
        component: () => import('../views/theme/admin-theme4.vue'),
        meta: { title: '后台管理模板4'},
        children: menuDemoRouter4,
    },
    {
        path: '/desktop/theme',
        name: 'DesktopTheme',
        component: () => import('../views/desktop/desktop-theme.vue'),
        meta: { title: '桌面模板' },
    },
    {
        path: '/desktop/theme2',
        name: 'DesktopTheme2',
        component: () => import('../views/desktop/desktop-theme2.vue'),
        meta: { title: '桌面模板2' },
    },
    {
        path: '/:pathMatch(.*)',
        name: '404Error',
        component: () => import('../views/error/404-error.vue'),
        meta: { title: '404' },
    },
]

export default baseRoutes