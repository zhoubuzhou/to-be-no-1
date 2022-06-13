const fs = require('fs')
fs.rmdir('./main',function (err) {//删除目录
    console.log(err);
})//已删除