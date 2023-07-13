import {reactive, ref} from 'vue';
import {ActiveMenus, MenuBean} from '../interface/menuInterface';
import axios from 'axios';
import {AxiosResult} from '../interface/publicInterface';
import {PushRouter} from '../types/baseType';
import menuDfs from '../algo/menuDfs';

export function MenuStatusContext() {
    const keepAliveInclude = ref<String[]>([])
    const updateKeepAliveInclude = (name: string) => {
        if (keepAliveInclude.value.includes(name)) {
            keepAliveInclude.value.splice(keepAliveInclude.value.indexOf(name), 1)
        }
        keepAliveInclude.value.unshift(name)
    }

    const activeMenus = reactive<ActiveMenus>({
        menuId: '',
        menus: []
    })

    const updateActiveMenus = (menu: MenuBean) => {
        activeMenus.menuId = menu.id
        const menuIds = activeMenus.menus.map(item => item.id)
        if (menuIds.includes(menu.id)) {
            activeMenus.menus.splice(menuIds.indexOf(menu.id), 1)
        }
        activeMenus.menus.unshift(menu)
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
    const getMenus = (pushRouter: PushRouter, routerPath: string ) => {
        menuDefaultOpeneds.value = []
        axios.post('/api/admin/getMenus', { }).then((res: {data: AxiosResult}) => {
            if (res.data.code === 200) {
                const data = res.data.data
                if (data.length === 0) {
                    menus.value = []
                    return
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