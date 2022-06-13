const express = require('express')
const app = express();


app.use(express.static('./public'))
app.listen(8080);
//http://192.168.1.71:8080
//http://127.0.0.1:8080

