import {RouteRecordRaw} from 'vue-router'

const menuDemoRouter: RouteRecordRaw[] = [
  {
    path: 'menu/demo',
    name: 'MenuDemo',
    component: () => import('../views/demo/menu-demo.vue'),
    meta: { title: 'MenuDemo' }
  },
  {
    path: 'menu/demo2',
    name: 'MenuDemo2',
    component: () => import('../views/demo/menu-demo2.vue'),
    meta: { title: 'MenuDemo2' }
  },
  {
    path: 'menu/demo3',
    name: 'MenuDemo3',
    component: () => import('../views/demo/menu-demo3.vue'),
    meta: { title: 'MenuDemo3' }
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
