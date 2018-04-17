const express = require('express');
const cookieParser = require('cookie-parser'); //

var server = express();

server.use(cookieParser()); //
// cookie
server.use('/aaa/a.html', function(req, res){
    //res.cookie('user', 'jessietang', {path: '/aaa', maxAge: 30*24*3600*1000}); //maxAge过期时间
    console.log(req.cookies); // { user: 'jessietang' }

    res.send('ok');
});

server.listen(8080);

