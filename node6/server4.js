const express = require('express');
const cookieParser = require('cookie-parser'); //

var server = express();

server.use(cookieParser()); // secret这个值要放到这里来
// cookie
server.use('/', function(req, res){
    res.clearCookie('user'); // 删除cookie
    res.send('ok');
});

server.listen(8080);

