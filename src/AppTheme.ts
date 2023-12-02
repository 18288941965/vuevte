function themeContext() {
    const themeKey = 'vv-theme-model'

    // 获取主题
    const getThemeModel = () => {
      const model = localStorage.getItem(themeKey)
        return model ? model : 'light'
    }

    const setThemeModel = (model: string | null) => {
        model === null ? localStorage.removeItem(themeKey) : localStorage.setItem(themeKey, model)

        const appElement = document.getElementById('app')
        const htmlElement = document.documentElement
        if (appElement) {
            appElement.setAttribute('class', `app-${model}`)
            htmlElement.setAttribute('class', model ? model : '')
        }
    }

    const initThemeModel = () => {
        const themeModel = getThemeModel()
        setThemeModel(themeModel)
    }

    return {
        initThemeModel,
        getThemeModel,
        setThemeModel
    }
}

export {
    themeContext
}