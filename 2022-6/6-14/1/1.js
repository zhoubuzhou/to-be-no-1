const express = require('express')
const app = express();


app.use(express.static('./public'))

app.get('/users', function (req, res) {
    res.send([
        { id: 1, name: 'jack', age: 20 },
        { id: 2, name: 'lili', age: 21 },
    ]);
})

app.get('/users/xml', function (req, res) {
    res.type('xml');//头部 信封
    //res.setHeader('content-type','application/xml');
    //主体 信纸
    res.send(`
    <users>
     <user>
      <id>1</id>
      <name>jack</name>
      <age>20</age>
     </user>
     <user>
     <id>2</id>
     <name>lili</name>
     <age>21</age>
    </user>
    </users>
    `)
})

app.get('/js', function (req, res) {
    res.send('alert("hello")');
})

app.get('/img', function (req, res) {
    res.sendFile('C:/Users/pc/Desktop/git it/to be no.1/2022-6/6-14/1/public/OIP-C.jpg');
})

app.get('/users/:id/:x', function (req, res) {
    res.send(req.params);
})

app.listen(8080, function () {
    console.log('http://127.0.0.1');
})