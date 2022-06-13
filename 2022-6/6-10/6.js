const fs = require('fs')
fs.unlink('./post.txt',function (err) {//删除文件
    console.log(err);
})//已删除