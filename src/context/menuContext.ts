import {reactive, ref} from 'vue'
import {ActiveMenus, MenuBean} from '../interface/menuInterface'
import axios from 'axios'
import {AxiosResult} from '../interface/publicInterface'
import {PushRouter} from '../types/baseType'
import menuDfs from '../algo/menuDfs'
import {useRouter} from 'vue-router'

export function MenuStatusContext() {
    const keepAliveInclude = ref<string[]>([])
    const activeMenuPath = ref<MenuBean[]>([])
    const activeMenus = reactive<ActiveMenus>({
        menuId: '',
        menus: []
    })

    const cleanActiveMenuPath = () => {
        activeMenuPath.value = []
    }

    const updateKeepAliveInclude = (name: string) => {
        if (!keepAliveInclude.value.includes(name)) {
            keepAliveInclude.value.push(name)
        }
    }

    const cleanKeepAliveInclude = (id: string | undefined) => {
        // 关闭除打开页面外的所有窗口
        if (!id) {
            const openObj = activeMenus.menus.find(item => item.id === activeMenus.menuId)
            keepAliveInclude.value =
                openObj
                && openObj.name
                && keepAliveInclude.value.includes(openObj.name) ? [openObj.name] : []
            return
        }

        // 关闭指定的窗口
        const closeObj = activeMenus.menus.find(item => item.id === id)
        if (closeObj && closeObj.name) {
            const _index = keepAliveInclude.value.indexOf(closeObj.name)
            if (_index != -1) {
                keepAliveInclude.value.splice(_index, 1)
            }
        }
    }

    const updateActiveMenus = (menu: MenuBean) => {
        activeMenus.menuId = menu.id
        const menuIds = activeMenus.menus.map(item => item.id)
        if (!menuIds.includes(menu.id)) {
            activeMenus.menus.push(menu)
        }
    }

    const cleanActiveMenus = (id: string | undefined, index: number) => {
        // 关闭除打开页面外的所有窗口
        if (!id) {
            const openObj = activeMenus.menus.find(item => item.id === activeMenus.menuId)
            if (openObj) {
                activeMenus.menus = [openObj]
            }
            return
        }

        // 关闭指定的窗口
        const findObj = activeMenus.menus.find(item => item.id === id)
        if (findObj) {
            if (activeMenus.menuId === findObj.id) {
                activeMenus.menuId = ''
            }
            activeMenus.menus.splice(index, 1)
        }
    }

    const menuCollapse = ref(false)
    const setMenuCollapse = (collapse: boolean) => {
        menuCollapse.value = collapse
    }

    return {
        activeMenuPath,
        activeMenus,
        menuCollapse,
        setMenuCollapse,
        updateActiveMenus,
        cleanActiveMenus,
        keepAliveInclude,
        cleanKeepAliveInclude,
        updateKeepAliveInclude,
        cleanActiveMenuPath
    }
}

export function MenuContext() {
    const menus = ref<MenuBean[]>([])
    const menuDefaultOpeneds = ref<String[]>([])
    const router = useRouter()

    // 获取菜单并设置打开菜单样式
    const getMenus = (pushRouter: PushRouter, routerPath: string, loadCallback: Function | undefined ) => {
        menuDefaultOpeneds.value = []
        // TODO 这里是为了测试不同的模板加载不同的菜单
        const fullPath = router.currentRoute.value.fullPath
        axios.post('/api/admin/getMenus', { fullPath }).then((res: {data: AxiosResult}) => {
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