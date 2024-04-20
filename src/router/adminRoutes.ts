import {RouteRecordRaw} from 'vue-router'

const adminRoutes: RouteRecordRaw[] = [
    {
        path: '/admin/theme2',
        name: 'AdminTheme2',
        component: () => import('../views/theme/admin-theme2.vue'),
        meta: { title: '后台管理'},
        children: [
            {
                path: 'menu',
                name: 'MenuIndex',
                component: () => import('../views/admin/menu/menu-index.vue'),
                meta: { title: '菜单管理' },
            },
        ],
    },
    ]

export default adminRoutes