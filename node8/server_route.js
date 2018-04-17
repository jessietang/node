// route是express自带的，不用单独下载了
const express = require('express');

var server = express();

// 目录1： /user/
var routeUser = express.Router(); // 1.创建router
server.use('/user', routeUser); // 2.把router添加到server

// 3.router内部
routeUser.get('/1.html', function(req, res){ // http://xxx.com/user/1.html
    res.send('user1');
});
routeUser.get('/2.html', function(req, res){ // http://xxx.com/user/2.html
    res.send('user2');
});


// 目录2：/article/
var articleRouter = express.Router();
server.use('/article', articleRouter);
articleRouter.get('/101.html', function(req, res){ // http://xxx.com/article/101.html
    res.send('101');
});

server.listen(8080);