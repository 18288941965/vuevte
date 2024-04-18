// 登录
import * as Mock from 'mockjs'
import {InstitutionBean} from '../views/login/loginModels'

Mock.mock('/api/admin/doLogin', 'post', (res) => {
    const bean = JSON.parse(res.body)
    if (bean.username !== 'admin@163.com' || bean.password !== 'admin') {
        return {
            code: 500,
            msg: '用户名或密码错误！',
            data: null,
        }
    }
    return {
        code: 200,
        msg: null,
        data: null,
    }
})

// 获取任职单位列表
Mock.mock('/api/admin/getInstitutionList', 'get', () => {
    const data: Array<InstitutionBean> = [
        { instCode: '532600001', instName: '第一个任职单位', roles: [
                { roleCode: '001', roleName: '系统管理员' },
                { roleCode: '002', roleName: '权限管理员' },
            ]  },
        { instCode: '532600002', instName: '第二个任职单位', roles: [
                { roleCode: '001', roleName: '系统管理员' },
                { roleCode: '003', roleName: '实施测试' },
                { roleCode: '004', roleName: '研发测试' },
            ]  },
    ]
    return {
        code: 200,
        msg: null,
        data,
    }
})

// 退出登录
Mock.mock('/api/admin/doLogout', 'get', {
    code: 200,
    msg: null,
    data: null,
})