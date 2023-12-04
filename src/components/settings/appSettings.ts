import {ref} from 'vue';

function appSettingsContext() {
    const fontSize = ref()
    const fontKey = 'vv-font-size'

    const setHtmlFont = (size = 'medium') => {
        const htmlElement = document.documentElement
        if (htmlElement) {
            htmlElement.style.fontSize = `var(--font-size-${size})`
            localStorage.setItem(fontKey, size)
            fontSize.value = size
        }
    }

    const initFontSize = () => {
        const item = localStorage.getItem(fontKey)
        setHtmlFont(item)
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