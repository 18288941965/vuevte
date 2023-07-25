
export default class LocalStorage {
    readonly loginStatus: string =  'vuevte-login-status'
    readonly userName: string =  'vuevte-user-name'

    // 设置登录状态和用户名
    setLoginStatus (set = true, username = '') {
        if (set) {
            localStorage.setItem(this.loginStatus, '1')
            localStorage.setItem(this.userName, username)
        } else {
            localStorage.removeItem(this.loginStatus)
            localStorage.removeItem(this.userName)
        }
    }
    // 获取登录状态或用户名
    getLoginStatus (ls = true, un = false ) {
        return ls ? localStorage.getItem(this.loginStatus) : localStorage.getItem(this.userName)
    }
}