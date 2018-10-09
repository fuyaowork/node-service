//引入express中间件
var express = require('express');
var app = express();
var path = require('path');

//静态文件路径
app.use(express.static(path.join(__dirname, 'dist')));


//监听端口为8009
var server = app.listen(8009, function () {
    console.log('Example app listening at http://localhost:8009');
});