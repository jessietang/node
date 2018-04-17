const express = require('express');
const cookieParser = require('cookie-parser'); //

var server = express();

server.use(cookieParser('ag3gs3gs')); // secret这个值要放到这里来
// cookie
server.use('/', function(req, res){
    //req.secret = 'ag3gs3gs';
    // signed: true 签名 不是加密让别人看不见，可以做到防止串改
    res.cookie('user', 'jessie', {signed: true});
    console.log('签名的cookie', req.signedCookies); // 签名的cookie { user: 'jessie' }
    console.log('无签名的cookie', req.cookies); // 无签名的cookie {}
    res.send('ok');
});

server.listen(8080);

