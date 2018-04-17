/**
 * Created by ASUS on 2018/3/22.
 */
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

http.createServer(function(req,res){
    // get
    var obj = urlLib.parse(req.url, true);
    var url = obj.pathname;
    var GET = obj.query;
    console.log(url); // 访问http://localhost:8080/form3.html 打印出/form3.html

    // post
    var str = '';
    req.on('data', function(data){
        str += data;
    });
    req.on('end', function(){
        var POST = querystring.parse(str);
        //console.log(POST);
    });

    // 文件请求
    var file_name = './www'+url;
    fs.readFile(file_name, function(err, data){
        if (err) {
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    });
}).listen(8080);