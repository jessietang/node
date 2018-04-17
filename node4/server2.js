const express = require('express');
const expressStatic = require('express-static');

var server = express();

server.listen(8080);

// 用户相关数据
var users = {
    'jessie': '123',
    'cassie': '456',
    'lisa': '789'
};

// 接口请求： /login?user=xxx&pass=xxx  返回结果：{ok: true/false, msg: '原因'}
server.get('/login', function(req, res){
    //console.log(req.query); // { user: '11', pass: '22' }
    var user = req.query['user'];
    var pass = req.query['pass'];

    if (users[user] == null){
        res.send({ok: false, msg: '此用户不存在'});
    }else{
        if (users[user] != pass) {
            res.send({ok: false, msg: '密码错误'});
        }else{
            res.send({ok: true, msgL: '成功'})
        }
    }
});

// 类似的可以请求其他的接口
/*server.get('/register',function(){});
server.get('/info', function(){})*/

// 读取文件
server.use(expressStatic('./www')); // 这样写了，可以直接访问www下面的所有文件，
//例如我要访问/www/a.html:  http://localhost:8080/a.html