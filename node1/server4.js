/**
 * Created by ASUS on 2018/3/22.
 */
const http = require('http');
const querystring = require('querystring');

http.createServer(function(req,res){
    // post-req  post数据很大---分段发送，分段接收

    var str = ''; //接收数据就拼接进来

    // data--有一段数据到达就接收一次（很多次）
    var i= 0;
    req.on('data', function(data){
        console.log(`第${i++}次收到数据`);
        str += data;
    });
    // end -- 数据全部到达的时候（只发生一次）
    req.on('end', function(){
        console.log(str);
        var POST = querystring.parse(str);
        console.log(POST);
    });
}).listen(8080);