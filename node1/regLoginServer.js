/**
 * Created by ASUS on 2018/3/22.
 */
const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');
const fs = require('fs');

var users = {}; // {"tj": "12345", "jessie": "12345", "cassie": "12345"}

http.createServer(function(req,res){
    // 解析数据
    var str = '';
    req.on('data', function(data){
        str += data;
    });
    req.on('end', function(){
        var obj = urlLib.parse(req.url, true);
        console.log(obj)
        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);

        /*
         * 用户注册、登录
         接口：
         /user?act=reg&user=name&pass=12345
         {"ok": false, msg: "原因"}
         /user?act=login&user=name&pass=12345
         {"ok": true, msg: "原因"}
         * */
        /*
         * 对文件的访问：
         http://localhost:8080/1.jpg
         http://localhost:8080/1.html
         http://localhost:8080/ajax.js
         对接口的访问：
         http://localhost:8080/user?act=reg&user=name&pass=12345
         * */
        // 区分 --- 到底是访问文件呢，还是访问接口呢
        if (url == '/user') { // 接口
            switch(GET.act){
                case 'reg':
                    // 1.检测用户名是否有了
                    if (users[GET.user]){
                        res.write('{"ok": false, "msg": "该用户已经存在"}');
                    }else{ // 2.插入users
                        users[GET.user] = GET.pass;
                        res.write('{"ok": true, "msg": "注册成功"}');
                    }
                    break;
                case 'login':
                    if (users[GET.user] == null){
                        res.write('{"ok": false, "msg":"此用户不存在" }');
                    }else if (users[GET.user] != GET.pass) {
                        res.write('{"ok": false, "msg": "用户名或者密码有误"}');
                    }else{
                        res.write('{"ok": true, "msg": "登录成功！"}');
                    }
                    break;
                default:
                    res.write('{"ok": false, msg: "未知的act"}');
            }
            res.end();
        }else{ // 文件
            // 读取文件
            var file_name = './www'+url;
            fs.readFile(file_name, function(err, data){
                if (err) {
                    res.write('404');
                }else{
                    res.write(data);
                }
                res.end();
            });
        }
    });


}).listen(8080);