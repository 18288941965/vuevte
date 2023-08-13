import Mock from 'mockjs'

// 获取字典
Mock.mock('/api/admin/getDict', {
    code: 200,
    msg: null,
    data: [
        { label: 'label选项1',   value: '01' },
        { label: 'label选项2', value: '02' },
        { label: 'label选项3',  value: '03' },
    ]
})

// 获取字典
Mock.mock('/api/admin/getDict2', {
    code: 200,
    msg: null,
    data: [
        { mc: 'mc选项1',   dm: '01' },
        { mc: 'mc选项2', dm: '02' },
        { mc: 'mc选项3',  dm: '03' },
    ]
})

// 分页获取列表数据
Mock.mock('/api/admin/getDataList', 'post', (res) => {
    const bean = JSON.parse(res.body)
    const pageNum = bean.pageNum
    const pageSize = bean.pageSize

    const list = []
    for (let i = 0; i < 107; i++) {
        list.push({ name: `测试数据${i + 1}`, date: new Date().getTime() })
    }

    return {
        code: 200,
        msg: null,
        data: {
            list: list.slice((pageNum - 1) * pageSize, pageNum * pageSize),
            total: 107,
            pageNum,
            pageSize
        }
    }
})

// 获取所有列表数据
Mock.mock('/api/admin/getAllDataList', 'post', (res) => {
    const list = []
    for (let i = 0; i < 527; i++) {
        list.push({ name: `测试数据${i + 1}`, date: new Date().getTime() })
    }
    return {
        code: 200,
        msg: null,
        data: list
    }
})