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
]

export default menuDemoRouter
