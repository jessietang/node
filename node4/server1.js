const express = require('express');

var server = express();

/*server.get('/', function(req, res){
    console.log('有get');
});
server.post('/', function(req, res){
    console.log('有post');
});*/

// get post都会走这里，通吃
server.use('/', function(req, res){
    console.log('use了');
});

server.listen(8080);