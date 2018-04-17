const express = require('express')
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const ejs = require('ejs');
const mysql = require('mysql');
const common = require('./libs/common');

// 连接池
const db = mysql.createPool({host: 'localhost', port: '3306', user: 'root',
password: '123456', database: 'blog'});

var server = express();

server.listen(8080);

// 1.解析cookie
server.use(cookieParser('aasdhhf'));

// 2.使用session
var arr = [];
for (var i=0; i<10000; i++){
    arr.push(arr[i]);
}
server.use(cookieSession({name: 'sess_id', keys: arr, maxAge: 20*60*1000}));

// 3.post数据
server.use(bodyParser.urlencoded({extended: false}));

// 4.配置模板引擎
server.set('view engine', 'html');
server.set('views', './template');
server.engine('html', consolidate.ejs);

// 接收用户请求
server.get('/', function(req, res, next){
    db.query("SELECT * FROM banner_table", (err, data) => {
        if (err) {
            console.log(err);
            res.status().send('database errors').end();
        }else{
            //console.log(data);


            res.banners = data;
            next();
        }
    });
});

server.get('/', (req, res, next) => {
    // 查询文章列表
    console.log(res.banners);
    db.query("SELECT ID, title, summary FROM article_table", (err, data) => {
        if (err) {
            res.status(500).send('database error').end();
        }else{
            res.articles = data;
            next();
        }
    });
});

server.get('/', (req, res) => {
    res.render('index.ejs', {banners: res.banners, articles: res.articles});
});

server.get('/article', (req, res) => {
    if (req.query.id) {
        db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, (err, data) =>{
           if(err){
               res.status(500).send('数据有问题').end();
           }else{
               if (data.length == 0) {
                   res.status(404).send('您请求的文章找不到').end();
               }else{
                   var article_data = data[0];
                   article_data.sDate = common.time2date(article_data.post_time);
                   // 这里换行没起到作用，正则应该是对的，可能内容不对
                   article_data.content = article_data.content.replace('/^/gm', '<p>').replace('/$/gm', '</p>');
                   res.render('context.ejs', {article_data: article_data})
               }
           }
        });
    }else{
        res.status(404).send('您请求的文章找不到').end();
    }
});

// 5.static数据
server.use(expressStatic('./www'));