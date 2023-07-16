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
                    label: '二次封装组件',
                    icon: 'Cards',
                    url: null,
                    id: '03',
                    pid: '01',
                    cache: false,
                    name: null,
                    children:  [
                        {
                            label: 'checkbox组件',
                            icon: '',
                            url: '/admin/theme/ev/el/checkbox',
                            id: '03-01',
                            pid: '03',
                            cache: true,
                            name: 'EvElCheckboxDemo'
                        },
                        {
                            label: 'radio组件',
                            icon: '',
                            url: '/admin/theme/ev/el/radio',
                            id: '03-02',
                            pid: '03',
                            cache: true,
                            name: 'EvElRadioDemo'
                        },
                        {
                            label: 'select组件',
                            icon: '',
                            url: '/admin/theme/ev/el/select',
                            id: '03-03',
                            pid: '03',
                            cache: true,
                            name: 'EvElSelectDemo'
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