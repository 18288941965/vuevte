import  * as Mock from 'mockjs'

// 获取菜单列表：返回tree结构
Mock.mock('/api/admin/getMenus', {
    code: 200,
    msg: null,
    data: [
        {
            label: '后台管理模板',
            icon: 'admin-theme.png',
            url: null,
            id: '01',
            pid: null,
            cache: false,
            name: null,
            children: [
                { label: '首页', icon: 'Dashboard', url: '/admin/theme2/dashboard', id: '02', pid: '01', cache: true, name: 'AdminDashboard' },
                { label: '图标', icon: 'Flag', url: '/admin/theme2/icon/demo', id: '04', pid: '01', cache: true, name: 'IconDemo' },
                {
                    label: '组件',
                    icon: 'Plugins',
                    url: null,
                    id: '03',
                    pid: '01',
                    cache: false,
                    name: null,
                    children:  [
                        {
                            label: 'dic组件',
                            icon: '',
                            url: '/admin/theme2/ev/dic',
                            id: '03-01',
                            pid: '03',
                            cache: false,
                            name: 'EvDicDemo'
                        },
                        {
                            label: 'pagination组件',
                            icon: '',
                            url: '/admin/theme2/ev/pagination',
                            id: '03-02',
                            pid: '03',
                            cache: true,
                            name: 'EvPaginationDemo'
                        }
                    ]
                }
            ]
        }
    ]
})

// 登录
Mock.mock('/api/admin/doLogin', 'post', (res) => {
    const bean = JSON.parse(res.body)
    if (bean.username !== 'admin@163.com' || bean.password !== 'admin') {
        return {
            code: 500,
            msg: '用户名或密码错误！',
            data: null
        }
    }
    return {
        code: 200,
        msg: null,
        data: null
    }
})

// 退出登录
Mock.mock('/api/admin/doLogout', 'get', {
    code: 200,
    msg: null,
    data: null
})