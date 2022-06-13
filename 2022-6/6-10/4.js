const fs = require('fs')
fs.readFile('./post.js',function (a,b) {
    console.log(a);
    console.log(b.toString());
})