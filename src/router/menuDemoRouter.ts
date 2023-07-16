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
    path: 'ev/el/checkbox',
    name: 'EvElCheckboxDemo',
    component: () => import('../views/demo/ev-el-checkbox-demo.vue'),
    meta: { title: 'EvElCheckboxDemo' }
  },
  {
    path: 'ev/el/radio',
    name: 'EvElRadioDemo',
    component: () => import('../views/demo/ev-el-radio-demo.vue'),
    meta: { title: 'EvElRadioDemo' }
  },
  {
    path: 'ev/el/select',
    name: 'EvElSelectDemo',
    component: () => import('../views/demo/ev-el-select-demo.vue'),
    meta: { title: 'EvElSelectDemo' }
  },
]

export default menuDemoRouter
