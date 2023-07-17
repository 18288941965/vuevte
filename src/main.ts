import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import './style.css'
import './assets/css/scroll.css'
import './assets/css/nprogress.css'

// 模拟后端数据：在自己的项目中请删除此引用
import './mocks/adminMock'
import './mocks/evElMock'

import * as menuIcon from './components/svicon/menuIcon'

const app = createApp(App)
app.use(router)
app.use(ElementPlus, {})
app.mount('#app')

// 注册所有自定义图片
for (const [key, component] of Object.entries(menuIcon)) {
    app.component(key, component)
}