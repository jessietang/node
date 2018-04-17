const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

var arr = [];
for(var i=0; i<1000000; i++){
    arr.push('sign_'+Math.random())
}
server.use(cookieParser()); // secret这个值要放到这里来
server.use(cookieSession({
    name: 'sess',
    //keys: ['aaa', 'bbb', 'ccc'],
    keys: arr,
    maxAge: 20*60*1000 // 在该网站上20分钟没有操作，把你踢下线
})); // 放到cookieParser后面

// session
server.use('/', function(req, res){
    //console.log(req.session);
    if (req.session['count'] == null) {
        req.session['count'] = 1;
    }else{
        req.session['count']++;
    }
    console.log(req.session['count']);
    res.send('ok');
});

server.listen(8080);

