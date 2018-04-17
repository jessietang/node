const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');

var server = express();

server.listen(8080);

server.use(bodyParser.urlencoded({
    extended: true, // 扩展模式
    limit: 2*1024*1024 // 限制   默认100k  2*1024*1024表示2兆
}));
// 获取get post相关的数据
server.use('/', function(req,res){
    //console.log(req.query); // 容纳的是get数据 { user: 'tangjing', pass: '123456' }

    console.log(req.body);  // 容纳的是post数据（但是必须先有server.use(bodyParser.urlencoded({}));） { user: 'tangjing', pass: '111' }
});