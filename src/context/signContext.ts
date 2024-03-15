import axios from 'axios'
import {AxiosResult, LoginBean} from '../interface/publicInterface'
import {ElMessage} from 'element-plus'
import {LoginSuccess, LogoutSuccess} from '../types/baseType'
import {useRouter} from 'vue-router'
import {inject} from 'vue'
import BChannel from '../BChannel'
import {BCEnum} from '../enum/enum'
import LocalStorage from '../class/LocalStorage'

// 退出系统
export const doLogout = (logoutSuccess: LogoutSuccess) => {
    axios.get('/api/admin/doLogout').then((res: { data: AxiosResult }) => {
        if (res.data.code === 200) {
            logoutSuccess()
        } else {
            ElMessage.error(res.data.msg)
        }
    })
}

// 登录系统
export const doLogin = (loginBean: LoginBean, loginSuccess: LoginSuccess) => {
    if (!loginBean.username || !loginBean.password) {
        ElMessage.error('用户名或密码不能为空！')
        return
    }
    axios.post('/api/admin/doLogin', { ...loginBean }).then((res: { data: AxiosResult }) => {
        if (res.data.code === 200) {
            loginSuccess()
        } else {
            ElMessage.error(res.data.msg)
        }
    })
}

// 是否登录
export const isLogin = () => {
    const local = new LocalStorage()
    return local.getLoginStatus() === '1'
}

// 退出登录的回调函数内容
export function logoutContext () {
    const router = useRouter()
    const channel = inject('channel') as BroadcastChannel
    const local = new LocalStorage()
    const {
        postMessage,
    } = BChannel(channel)

    const logoutSuccess: LogoutSuccess = () => {
        local.setLoginStatus(false)
        postMessage({ code: BCEnum.LOGOUT, msg: '您已在其他窗口退出登录' })
        router.replace('/')
    }
    return {
        logoutSuccess,
    }
}