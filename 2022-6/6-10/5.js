const fs = require('fs')
fs.writeFile('./main.js', 'hello lili', function (err) {//写入文件
    console.log(err);
})
console.log('===');