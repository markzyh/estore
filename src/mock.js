// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const productData = function () {
    let Data = []
    for (let i = 0; i < 100; i++) {
        let data = {
            name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
        }
        Data.push(data)
    }
    return {
        Data: Data
    }
}
const productLists = function () {
    let Data = [
        {
            name: 'pc产品',
            id: 0,
            children: [
                {
                    cname: 'pc产品一',
                    isHot: false
                },
                {
                    cname: 'pc产品二',
                    isHot: true
                },
                {
                    cname: 'pc产品一',
                    isHot: false
                },
            ]
        },
        {
            name: '移动产品',
            id: 1,
            children: [
                {
                    cname: '移动产品一',
                    isHot: false
                },
                {
                    cname: '移动产品二',
                    isHot: true
                },
                {
                    cname: '移动产品一',
                    isHot: false
                },
            ]
        },
    ]
    return Data
}
const newsLists = function () {
    let Data = [
        '新闻一新闻一新闻一新闻一新闻一新闻一新闻一新闻一',
        '新闻二新闻二新闻二新闻二新闻二新闻二新闻二新闻二',
        '新闻三新闻三新闻三新闻三新闻三新闻三新闻三新闻三'
    ]
    return Data
}
const userMsg = function () {
    let Data = {
        userName:'mark',
        userPassword:123465
    }
    return Data
}
const getPrice = function () {
    let Data = {
        price : 789
    }
    return Data
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user/login', 'post', productData)
Mock.mock('/user/query', 'post', productData)
Mock.mock('/productLists', 'post', productLists)
Mock.mock('/newsLists', 'post', newsLists)
Mock.mock('/userMsg', 'post', userMsg)
Mock.mock('/getPrice', 'post', getPrice)
