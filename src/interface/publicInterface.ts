// 后端统一返回值接口
interface AxiosResult {
    code: number
    msg: string
    data: any | null
}

interface ChannelData {
    code: number
    msg: string
}

export type {
    AxiosResult,
    ChannelData
}