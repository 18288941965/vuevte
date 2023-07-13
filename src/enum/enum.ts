/**
 * BroadcastChannel code 定义
 * 1 ： 广播消息到同域名窗口，① 如果是登录窗口则跳转到首页；② 如果是其他窗口则重新加载页面；[如果channel消息窗口打开则关闭]
 * 100 ： 【弹窗提示】 关闭窗口跳转到登录页面
 */
export enum BCEnum {
    LOGIN = 1,
    LOGOUT = 100
}

/**
 * RouterUrl 定义
 * 路由跳转枚举
 */
export enum RUEnum {
    LOGIN = '/',
    HOME = '/app/home'
}