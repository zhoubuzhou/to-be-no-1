const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/users/search', function (req, res) {
    res.send(req.query)//可获取地址栏中传输的
})

app.post('/users/add',function (req, res) {
    res.send(req.body)
})


app.listen(8080, function () {
    console.log('http://127.0.0.1:8080');
})