// 菜单类型
interface MenuBean{
    label: string
    icon: string | null
    url: string | null
    id: string
    pid: string | null
    cache: boolean
    name: string | null
    children?: Array<MenuBean>
}

interface ActiveMenus {
    menuId: String
    menus: Array<MenuBean>
}

export type {
    MenuBean,
    ActiveMenus
}