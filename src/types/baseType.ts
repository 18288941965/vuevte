import {MenuBean} from '../interface/menuInterface'

// 路由跳转
export type PushRouter = (menu: MenuBean) => void
// 登录成功回调
export type LoginSuccess = () => void
// 退出成功
export type LogoutSuccess = () => void
// 重新加载App
export type ReloadApp = () => void