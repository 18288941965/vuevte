import {RouteRecordRaw} from 'vue-router'

const menuDemoRouter2: RouteRecordRaw[] = [
  {
    path: 'dashboard2',
    name: 'AdminDashboard2',
    component: () => import('../views/copy/admin-dashboard2.vue'),
    meta: { title: 'AdminDashboard2' },
  },
  {
    path: 'icon/demo2',
    name: 'IconDemo2',
    component: () => import('../views/copy/icon-demo2.vue'),
    meta: { title: 'IconDemo2' },
  },
  {
    path: 'ev/dic2',
    name: 'EvDicDemo2',
    component: () => import('../views/copy/ev-dic-demo2.vue'),
    meta: { title: 'EvDicDemo2' },
  },
  {
    path: 'ev/pagination2',
    name: 'EvPaginationDemo2',
    component: () => import('../views/copy/ev-pagination-demo2.vue'),
    meta: { title: 'EvPaginationDemo2' },
  },
]

export default menuDemoRouter2
