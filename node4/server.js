const express = require('express');

var server = express();
server.use('/a.html', function(req, res){
    // res.write({a:1, b:2}); // 会报错
    res.send({a:1, b:2}); // express保留了原生的功能，添加了一些方法（send）,增强原有的功能
    res.end();
});
server.use('/b.html', function(req, res){
    res.send('bbb');
    res.end();
});
server.listen(8080);