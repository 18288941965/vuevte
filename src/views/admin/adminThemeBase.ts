import {reactive} from 'vue'
import {MenuBeanBase} from '../../interface/menuInterface'
import {useRouter} from 'vue-router'

const updateBrowserTitle = (title: string) => {
    window.document.title = title
}

function themeBaseContext() {
    const router = useRouter()
    const rootMenu = reactive<MenuBeanBase>({
        id: '',
        icon: '',
        label: '',
    })

    const setParentMenu = (id : string, label: string, icon = '') => {
        Object.assign(rootMenu, { id, label, icon })
        updateBrowserTitle(label)
    }
    
    return {
        router,
        rootMenu,
        setParentMenu,
    }
}

export {
    themeBaseContext,
    updateBrowserTitle,
}