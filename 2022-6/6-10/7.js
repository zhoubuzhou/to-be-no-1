const fs = require('fs')
fs.mkdir('./main',{recursive:false},function (err) {//创建目录
    console.log(err);
})