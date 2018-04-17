const express = require('express');
const querystring = require('querystring');
const bodyParser = require('body-parser');

const bodyParser2 = require('./libs/my-body-parser');  // bodyParser2是一个function

var server = express();

server.listen(8080);

/*server.use(function(req, res, next){
    var str = '';
    req.on('data', function(data){
        str += data;
    });
    req.on('end', function(){
        req.body = querystring.parse(str);
        next();
    });
});*/

// server.use(bodyParser.urlencoded({})); // 这行代码跟上面注释的代码是等价的

server.use(bodyParser2()); // 使用自定义中间件

server.use('/', function(req, res, next){
    console.log(req.body); // { user: 'tj', pass: '111' }
});