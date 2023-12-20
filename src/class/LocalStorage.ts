
export default class LocalStorage {
    readonly loginStatus: string =  'vuevte-login-status'
    readonly userName: string =  'vuevte-user-name'
    readonly fontType: string = 'vv-font-size'
    readonly themeModel: string = 'vv-theme-model'

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

    setFontType (type: string) {
        localStorage.setItem(this.fontType, type)
    }

    setThemeModel (model: string | null) {
        model === null ? localStorage.removeItem(this.themeModel) : localStorage.setItem(this.themeModel, model)
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

    getFontType () : string | undefined {
        const item = localStorage.getItem(this.fontType)
        return item ? item : undefined
    }

    getThemeModel() {
        return localStorage.getItem(this.themeModel)
    }
}