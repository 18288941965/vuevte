import {reactive, ref} from 'vue'
import {ActiveMenus, MenuBean} from '../interface/menuInterface'
import axios from 'axios'
import {AxiosResult} from '../interface/publicInterface'
import {PushRouter} from '../types/baseType'
import menuDfs from '../algo/menuDfs'

export function MenuStatusContext() {
    const keepAliveInclude = ref<string[]>([])
    const activeMenus = reactive<ActiveMenus>({
        menuId: '',
        menus: []
    })

    const updateKeepAliveInclude = (name: string, clean = false) => {
        // 清除历史
        if (clean) {
            if (!activeMenus.menus[0].cache) {
                keepAliveInclude.value = []
            } else {
                keepAliveInclude.value.splice(1, keepAliveInclude.value.length - 1)
            }
            return
        }
        if (!keepAliveInclude.value.includes(name)) {
            keepAliveInclude.value.push(name)
        }
    }

    const updateActiveMenus = (menu: MenuBean, clean= false) => {
        // 清除历史
        if (clean) {
            activeMenus.menus.splice(1, activeMenus.menus.length - 1)
            return
        }
        activeMenus.menuId = menu.id
        const menuIds = activeMenus.menus.map(item => item.id)
        if (!menuIds.includes(menu.id)) {
            activeMenus.menus.push(menu)
        }
    }

    const menuCollapse = ref(false)
    const setMenuCollapse = (collapse: boolean) => {
        menuCollapse.value = collapse
    }

    return {
        activeMenus,
        menuCollapse,
        setMenuCollapse,
        updateActiveMenus,
        keepAliveInclude,
        updateKeepAliveInclude
    }
}

export function MenuContext() {
    const menus = ref<MenuBean[]>([])
    const menuDefaultOpeneds = ref<String[]>([])

    // 获取菜单并设置打开菜单样式
    const getMenus = (pushRouter: PushRouter, routerPath: string, loadCallback: Function | undefined ) => {
        menuDefaultOpeneds.value = []
        axios.post('/api/admin/getMenus', { }).then((res: {data: AxiosResult}) => {
            if (res.data.code === 200) {
                const data = res.data.data
                if (data.length === 0) {
                    menus.value = []
                    return
                }

                if (loadCallback) {
                    loadCallback(data[0].id, data[0].label, data[0].icon)
                }

                // 菜单的深度优先搜索
                const menuNodes = menuDfs(data[0], routerPath)
                if (menuNodes.length === 0) {
                    menus.value = data
                    return
                }

                menuDefaultOpeneds.value = menuNodes.map(menuNodes => menuNodes.id)
                menuDefaultOpeneds.value.splice(menuNodes.length - 1, 1)
                menus.value = data

                const currentRoute = menuNodes[menuNodes.length - 1]
                currentRoute && currentRoute.url ? pushRouter(currentRoute) : null
            }
        })
    }

    return {
        menus,
        menuDefaultOpeneds,
        getMenus
    }
}