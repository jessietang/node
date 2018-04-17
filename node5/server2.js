const express = require('express');

var server = express();

server.listen(8080);

// express链式操作
server.use('/', function(req, res, next){
    console.log('a');
    next(); // 调用了这个方法，才进行下一步的链式调用
});

server.use('/', function(req, res, next){
    console.log('b');
});