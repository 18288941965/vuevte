import  * as Mock from 'mockjs'

// 获取菜单列表：返回tree结构
Mock.mock('/api/admin/getMenus', {
    code: 200,
    msg: null,
    data: [
        {
            label: '基础模板',
            icon: 'admin-theme.png',
            url: null,
            id: '01',
            pid: null,
            cache: false,
            name: null,
            children: [
                { label: '首页', icon: 'Dashboard', url: '/admin/theme/menu/demo', id: '02', pid: '01', cache: true, name: 'MenuDemo' },
                {
                    label: '层级一',
                    icon: 'MenuDemo',
                    url: null,
                    id: '03',
                    pid: '01',
                    cache: false,
                    name: null,
                    children:  [
                        {
                            label: '层级二',
                            icon: 'DotIcon',
                            url: null,
                            id: '04',
                            pid: '03',
                            cache: false,
                            name: null,
                            children:  [
                                {
                                    label: '菜单一',
                                    icon: '',
                                    url: '/admin/theme/menu/demo2',
                                    id: '05',
                                    pid: '04',
                                    cache: false,
                                    name: 'MenuDemo2'
                                },
                                {
                                    label: '菜单二',
                                    icon: '',
                                    url: '/admin/theme/menu/demo3',
                                    id: '06',
                                    pid: '04',
                                    cache: true,
                                    name: 'MenuDemo3'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})