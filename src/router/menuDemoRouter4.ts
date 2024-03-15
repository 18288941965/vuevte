import {RouteRecordRaw} from 'vue-router'

const menuDemoRouter4: RouteRecordRaw[] = [
  {
    path: 'dashboard4',
    name: 'AdminDashboard4',
    component: () => import('../views/copy/admin-dashboard4.vue'),
    meta: { title: 'AdminDashboard4' },
  },
  {
    path: 'icon/demo4',
    name: 'IconDemo4',
    component: () => import('../views/copy/icon-demo4.vue'),
    meta: { title: 'IconDemo4' },
  },
  {
    path: 'ev/dic4',
    name: 'EvDicDemo4',
    component: () => import('../views/copy/ev-dic-demo4.vue'),
    meta: { title: 'EvDicDemo4' },
  },
  {
    path: 'ev/pagination4',
    name: 'EvPaginationDemo4',
    component: () => import('../views/copy/ev-pagination-demo4.vue'),
    meta: { title: 'EvPaginationDemo4' },
  },
]

export default menuDemoRouter4
