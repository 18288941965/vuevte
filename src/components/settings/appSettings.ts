import {ref} from 'vue'

function appSettingsContext() {
    const fontSize = ref('')
    const fontKey = 'vv-font-size'
    const fontType = ['small', 'medium', 'large']

    const setHtmlFont = (size = 'medium') => {
        const temp = fontType.includes(size) ? size : 'medium'
        const htmlElement = document.documentElement
        if (htmlElement) {
            htmlElement.style.fontSize = `var(--font-size-${temp})`
            localStorage.setItem(fontKey, temp)
            fontSize.value = temp
        }
    }

    const initFontSize = () => {
        const item = localStorage.getItem(fontKey)
        setHtmlFont(item ? item : undefined)
    }

    return {
        fontSize,
        initFontSize,
        setHtmlFont
    }
}

export {
    appSettingsContext
}