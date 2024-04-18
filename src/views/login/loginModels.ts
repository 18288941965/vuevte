/**
 * 登录状态.
 * LS(loginStatus).
 */
enum LSEnum{
    LOG_OUT = '',
    LOG_IN = '1',
    LOG_INST = '2'
}

/**
 * 登录对象.
 * @param username 用户名
 * @param password 密码
 */
interface LoginBean{
    username: string
    password: string
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

export {
    LSEnum,
    LoginBean,
    InstitutionBean,
}