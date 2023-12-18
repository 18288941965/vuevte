import {RouteRecordRaw} from 'vue-router'

const menuDemoRouter3: RouteRecordRaw[] = [
  {
    path: 'dashboard3',
    name: 'AdminDashboard3',
    component: () => import('../views/copy/admin-dashboard3.vue'),
    meta: { title: 'AdminDashboard3' }
  },
  {
    path: 'icon/demo3',
    name: 'IconDemo3',
    component: () => import('../views/copy/icon-demo3.vue'),
    meta: { title: 'IconDemo3' }
  },
  {
    path: 'ev/dic3',
    name: 'EvDicDemo3',
    component: () => import('../views/copy/ev-dic-demo3.vue'),
    meta: { title: 'EvDicDemo3' }
  },
  {
    path: 'ev/pagination3',
    name: 'EvPaginationDemo3',
    component: () => import('../views/copy/ev-pagination-demo3.vue'),
    meta: { title: 'EvPaginationDemo3' }
  },
]

export default menuDemoRouter3
