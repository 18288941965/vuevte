interface MenuBeanBase{
    id: string
    label: string
    icon: string | undefined
}

// 菜单类型
interface MenuBean extends MenuBeanBase{
    pid: string | undefined
    url: string | undefined
    cache: boolean
    name: string | undefined
    sxh: number | undefined
    children?: Array<MenuBean>
}

interface ActiveMenus {
    menuId: string
    menus: Array<MenuBean>
}

export type {
    MenuBeanBase,
    MenuBean,
    ActiveMenus
}