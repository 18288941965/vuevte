// 后端统一返回值接口
interface AxiosResult {
    code: number
    msg: string
    data: any | null
}
// 广播消息接口
interface ChannelData {
    code: number
    msg: string
}
// 登录对象
interface LoginBean{
    username: string,
    password: string
}
// 分页对象
interface Pagination {
    pageNum: number,
    pageSize: number,
    total: number,
    list: Array<any>
}

// 无参对话框
interface DialogEmpty{
    show: boolean
}
// 一个参数对话框
interface DialogBase extends DialogEmpty{
    dataId: String | undefined
}
// 多参对话框
interface DialogParam extends DialogEmpty{
    params: any
}

export type {
    AxiosResult,
    ChannelData,
    LoginBean,
    Pagination,

    DialogEmpty,
    DialogBase,
    DialogParam
}