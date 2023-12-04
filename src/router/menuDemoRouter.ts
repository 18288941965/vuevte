import {RouteRecordRaw} from 'vue-router'

const menuDemoRouter: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: 'AdminDashboard',
    component: () => import('../views/admin/admin-dashboard.vue'),
    meta: { title: 'AdminDashboard' }
  },
  {
    path: 'icon/demo',
    name: 'IconDemo',
    component: () => import('../views/demo/icon-demo.vue'),
    meta: { title: 'IconDemo' }
  },
  {
    path: 'ev/checkbox',
    name: 'EvElCheckboxDemo',
    component: () => import('../views/demoev/ev-checkbox-demo.vue'),
    meta: { title: 'EvCheckboxDemo' }
  },
  {
    path: 'ev/radio',
    name: 'EvElRadioDemo',
    component: () => import('../views/demoev/ev-radio-demo.vue'),
    meta: { title: 'EvRadioDemo' }
  },
  {
    path: 'ev/select',
    name: 'EvElSelectDemo',
    component: () => import('../views/demoev/ev-select-demo.vue'),
    meta: { title: 'EvSelectDemo' }
  },
  {
    path: 'ev/pagination',
    name: 'EvPagination',
    component: () => import('../views/demoev/ev-pagination-demo.vue'),
    meta: { title: 'EvPagination' }
  },
]

export default menuDemoRouter
