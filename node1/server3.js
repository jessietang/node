/**
 * Created by ASUS on 2018/3/21.
 */
const http = require('http');
const urlLib = require('url');

http.createServer(function(req,res){
    var GET = {};
    var obj = urlLib.parse(req.url,true);
    var url = obj.pathname;
    GET = obj.query;

    console.log(url,GET);

    res.write('aaa');
    res.end();

}).listen(8080);
