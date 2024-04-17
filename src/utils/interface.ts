/**
 * 后端统一返回值接口.
 * @param code 代码
 * @param msg 提示信息
 * @param data 数据
 */
interface AxiosResult {
    code: number
    msg: string
    data: any | undefined | null
}

/**
 * 分页对象.
 * @param pageNum 页码
 * @param pageSize 条数
 * @param total 总数
 * @param list 数据
 */
interface Pagination {
    pageNum: number
    pageSize: number
    total: number
    list: Array<any>
}


interface RoleBean{
    roleCode: string
    roleName: string
}

/**
 * 任职机构
 */
interface InstitutionBean{
    instCode: string
    instName: string
    roles?: Array<RoleBean>
}

/**
 * 本次存储的用户对象
 */
interface LocalUserInfoBean{
    userName: string
    instCode: string
    instName: string
    loginStatus: string
    fontType: string
    themeModel: string
}

/**
 * 对话框-无参.
 * @param show 状态标识
 */
interface DialogEmpty{
    show: boolean
}

/**
 * 对话框-唯一标识.
 * @param dataId 唯一标识
 */
interface DialogBase extends DialogEmpty{
    dataId: String | undefined
}

/**
 * 对话框-json参数.
 * @param params json对象参数
 */
interface DialogParam extends DialogEmpty{
    params: {
        [key: string]: any
    }
}

export type {
    AxiosResult,
    Pagination,
    InstitutionBean,
    LocalUserInfoBean,

    DialogEmpty,
    DialogBase,
    DialogParam,
}