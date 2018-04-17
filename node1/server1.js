/**
 * Created by ASUS on 2018/3/21.
 */
const http = require('http');
var server = http.createServer(function(req, res){
    //console.log('有人来了');
    // console.log(req.url); // /b.html   // /favicon.ico 网站图标
    switch(req.url){
        case '/1.html':
            res.write('111');
            break;
        case '/2.html':
            res.write('222');
            break;
        default:
            res.write('404');
            break;
    }
    //res.write('abc');
    res.end();
});

// 监听---等着
// 端口---数字
server.listen(8080);

// 前端访问： http://localhost:8080/