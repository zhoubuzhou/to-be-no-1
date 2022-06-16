const express = require('express');
const { mock } = require('mockjs')

const app = express();

app.get('/users/all',(req,res)=>{
    res.send(mock({
        'data|5': [
            {
                // id:'@guid()',
                'id|+1':200,
                name:'@cname()',
                'age|10-30':0,
                'gender|1':['0','1'],
                email:'@email()',
                addr:'@county(ture)'
            }
        ]
    }))
})

app.get('/users', (req, res) => {
    res.send(mock({
        //随机地址
        b:'@guid()',
        e:'@region()',
        r:'@province()',
        d:'@city(ture)',
        a:'@county(ture)',
        //随机姓名
        // fname:'@cfirst()',
        // lname:'@clast()',
        // fullname:'@cname()',
        //文本随机
        // post:'@cparagraph(2,5)'
        // post:'@csentence(2,5)'
        // post:'@cword(2,5)'
        // post:'@ctitle(2,5)'
        //日期时间随机
        // birth:'[@date()]',
        // birth:'[@date(yyyy-mm)]',
        // birth:'[@time(hh:mm:ss)]',
        // birth:'[@datetime(MM-dd HH:mm)]',
        // birth:'[@now(MM-dd HH:mm)]',
        //函数随机
        // fname:'li',
        // lname:'jack',
        // fullName:function () {
        //     return `${this.lname}` `${this.fname}`
        // }
        //布尔随机
        // 'flage|1-9':true,
        //对象随机
        // 'city|2-4':{
        //     '1':'南京',
        //     '2':'北京',
        //     '3':'上海',
        //     '4':'成都',
        //     '5':'海南',
        // }
        //字符随机
        // 'star|1-5': '☆',
        //数字随机
        // 'num|10-30':0,
        // // 'price|60-100.2-5':0
        // 'price|60-100.2':0
    }))
})

app.listen(3000, function () {
    console.log('http://127.0.0.1:3000');
})