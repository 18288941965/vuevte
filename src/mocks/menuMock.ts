import  * as Mock from 'mockjs'
import {MenuBean} from '../interface/menuInterface'
import {AxiosResult} from '../interface/publicInterface'

// 获取菜单列表：返回tree结构
Mock.mock('/api/admin/getMenus', 'post',(res) => {
    const bean = JSON.parse(res.body)
    const fullPath = bean.fullPath
    let themeNum = ''
    if (fullPath.startsWith('/admin/theme2')) {
        themeNum = '2'
    } else if (fullPath.startsWith('/admin/theme3')) {
        themeNum = '3'
    } else if (fullPath.startsWith('/admin/theme4')) {
        themeNum = '4'
    }

    const obj: AxiosResult = {
        code: 200,
        msg: '操作成功',
        data: [],
    }

    const children = [
        {
            label: 'dic组件',
            icon: '',
            url: `/admin/theme${themeNum}/ev/dic${themeNum}`,
            id: '03-01',
            pid: '03',
            sxh: 1,
            cache: false,
            name: `EvDicDemo${themeNum}`,
        },
        {
            label: 'pagination组件',
            icon: '',
            url: `/admin/theme${themeNum}/ev/pagination${themeNum}`,
            id: '03-02',
            pid: '03',
            sxh: 2,
            cache: true,
            name: `EvPaginationDemo${themeNum}`,
        },
    ]

    const menus: Array<MenuBean> = []
    menus.push({
        label: '后台管理模板',
        icon: `admin-temp${themeNum}.png`,
        url: `/admin/theme${themeNum}`,
        id: '01',
        pid: undefined,
        sxh: 1,
        cache: false,
        name: `AdminTheme${themeNum}`,
        children: [
            { label: '首页', icon: 'Dashboard', url: `/admin/theme${themeNum}/dashboard${themeNum}`, id: '02', pid: '01', sxh: 1, cache: true, name: `AdminDashboard${themeNum}` },
            { label: '图标', icon: 'Flag', url: `/admin/theme${themeNum}/icon/demo${themeNum}`, id: '04', pid: '01', sxh: 2, cache: true, name: `IconDemo${themeNum}` },
            { label: '组件', icon: 'Plugins', url: undefined, id: '03', pid: '01', sxh: 3, cache: false, name: undefined, children: children },

            { label: '测试菜单', icon: 'Bug', url: undefined, id: '04', pid: '01', sxh: 4, cache: false, name: undefined, children: [
                    { label: '菜单分组', icon: '', url: undefined, id: '04-1', pid: '04', sxh: 1, cache: false, name: undefined, children: [
                            { label: '测试菜单2层级三', icon: '', url: '/error/404', id: '04-1-1', pid: '04-1', sxh: 1, cache: false, name: 'TestMenu' },
                            { label: '测试菜单2层级三', icon: '', url: '/error/404', id: '04-1-2', pid: '04-1', sxh: 2, cache: false, name: 'TestMenu' },
                            { label: '测试菜单2层级三', icon: '', url: '/error/404', id: '04-1-3', pid: '04-1', sxh: 3, cache: false, name: 'TestMenu' },

                        ] },
                    { label: '菜单分组2', icon: '', url: undefined, id: '04-2', pid: '04', sxh: 2, cache: false, name: undefined, children: [
                            { label: '测试菜单3层级二', icon: '', url: '/error/404', id: '04-2-1', pid: '04-2', sxh: 1, cache: false, name: 'TestMenu' },
                            { label: '测试菜单3层级二', icon: '', url: '/error/404', id: '04-2-2', pid: '04-2', sxh: 2, cache: false, name: 'TestMenu' },
                            { label: '测试菜单3层级二', icon: '', url: '/error/404', id: '04-2-3', pid: '04-2', sxh: 3, cache: false, name: 'TestMenu' },
                        ] },
                ] },
        ],
    })

    obj.data = menus

    return obj
})

// 获取收藏的菜单: 这里都跳转到默认主题，在实际的开发种路由也是配置死的。
Mock.mock('/api/admin/getStarMenu', 'get', () => {
    const themeNum = ''
    return {
        code: 200,
        msg: '操作成功',
        data: [
            {
                label: 'dic组件',
                icon: '',
                url: `/admin/theme${themeNum}/ev/dic${themeNum}`,
                id: '03-01',
                pid: '03',
                sxh: 1,
                cache: false,
                name: `EvDicDemo${themeNum}`,
            },
            {
                label: 'pagination组件',
                icon: '',
                url: `/admin/theme${themeNum}/ev/pagination${themeNum}`,
                id: '03-02',
                pid: '03',
                sxh: 2,
                cache: true,
                name: `EvPaginationDemo${themeNum}`,
            },
        ],
    }
})