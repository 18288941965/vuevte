
export default class LocalStorage {
    readonly loginStatus: string =  'vuevte-login-status'
    readonly userName: string =  'vuevte-user-name'

    // Set the status and username
    setLoginStatus (set = true, username = '') {
        if (set) {
            localStorage.setItem(this.loginStatus, '1')
            localStorage.setItem(this.userName, username)
        } else {
            localStorage.removeItem(this.loginStatus)
            localStorage.removeItem(this.userName)
        }
    }

    // Get the status
    getLoginStatus () {
        const loginStatus = localStorage.getItem(this.loginStatus) 
        return loginStatus ? loginStatus : ''
    }

    // Get username
    getUserName () {
        const userName = localStorage.getItem(this.userName)
        return userName ? userName : ''
    }
}