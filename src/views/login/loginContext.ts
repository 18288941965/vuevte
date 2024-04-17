import axios from 'axios'
import {AxiosResult} from '@util/interface'
import {ElMessage} from 'element-plus'
import {LoginSuccess, LogoutSuccess} from '@util/types'
import {useRouter} from 'vue-router'
import BChannel from '../../util/channel/BChannel'
import {BCEnum} from '@util/channel/channelModels'
import {RUEnum} from '../../router/routerFind'
import LocalStorage from '../../class/LocalStorage'
import {LSEnum, LoginBean} from './loginModels'

// 退出系统
export const doLogout = (logoutSuccess: LogoutSuccess) => {
    axios.get('/admin/doLogout').then((res: { data: AxiosResult }) => {
        if (res.data.code === 200) {
            logoutSuccess()
        }
    })
}

// 登录系统
export const doLogin = (loginBean: LoginBean, loginSuccess: LoginSuccess) => {
    if (!loginBean.username || !loginBean.password) {
        ElMessage.error('用户名或密码不能为空！')
        return
    }
    axios.post('/admin/doLogin', { ...loginBean }).then((res: { data: AxiosResult }) => {
        if (res.data.code === 200) {
            loginSuccess(res.data)
        }
    })
}

// 退出登录的回调函数内容
export function logoutContext () {
    const router = useRouter()
    const local = new LocalStorage()
    const {
        postMessage,
    } = BChannel()

    const logoutSuccess: LogoutSuccess = () => {
        local.setLoginStatus(false, LSEnum.LOG_OUT)
        postMessage({ code: BCEnum.LOGOUT, msg: '您已在其他窗口退出登录' })
        router.replace(RUEnum.LOGIN)
    }
    return {
        logoutSuccess,
    }
}