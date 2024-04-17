/**
 * RouterUrl 定义
 * 路由跳转枚举
 */
export enum RUEnum {
    LOGIN = '/',
    HOME = '/app/home',
    INSTITUTION = '/app/institution'
}

// 不需要登录就能访问的路由
export const NO_LOGIN: Array<string> = ['']