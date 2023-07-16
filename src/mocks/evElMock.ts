import Mock from 'mockjs'

Mock.mock('/api/admin/getDict', {
    code: 200,
    msg: null,
    data: [
        { 'label': '小鸟',   'value': '01' },
        { 'label': '小鸟2号', 'value': '02' },
        { 'label': '小飞机',  'value': '03' },
    ]
})

Mock.mock('/api/admin/getDict2', {
    code: 200,
    msg: null,
    data: [
        { 'mc': '1小鸟',   'dm': '01' },
        { 'mc': '1小鸟2号', 'dm': '02' },
        { 'mc': '1小飞机',  'dm': '03' },
    ]
})