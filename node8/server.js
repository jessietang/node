const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const jade = require('jade')
const ejs = require('ejs');
const consolidate = require('consolidate');
const multer = require('multer');

var server = express();

server.listen(8080);

// 1.解析cookie
server.use(cookieParser('aggdyywe'));

// 2.使用session
var arr = [];
for(var i=0; i<100000; i++){
    arr.push('keys_'+Math.random());
}
server.use(cookieSession({name: 'sess_id', keys: arr, maxAge: 20*60*1000}));

// 3.post数据
server.use(bodyParser.urlencoded({extended: false})); // 数据
server.use(multer({dest: './www/upload'}).any()); // 文件

// 用户请求
/*server.use('/', function(req, res,next){
    console.log(req.query,req.body,req.files,req.cookies,req.session);
});*/

// 4.配置模板引擎---
// 我要输出什么东西
server.set('view engine', 'html'); // 以html来呈现视图引擎（view engine）
// 模板文件放在哪儿
server.set('views', './views');
// 哪种模板引擎
server.engine('html',consolidate.ejs); // 当你需要html的时候，就用ejs来呈现视图引擎

//接受用户请求
server.get('/index',function(req,res){
    res.render('1.ejs',{name: 'smart jessie'} );

    /*if (req.session.userid) { // 登陆过
        res.render('1.ejs', {name: 'samrt jessie index page'});
    }else{ // 没有登陆过
        res.render('login.ejs',{});
    }*/
});

// 4.static数据
server.use(expressStatic('./www'));