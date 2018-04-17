/*===========文件上传==========*/
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs'); // 拿来改上传上来的文件的名字
const pathLib = require('path');

var server = express();

server.listen(8080);

var objMulter = multer({dest: './www/upload/'}); // 上传的文件保存的路径
//server.use(bodyParser.urlencoded({extended: false}))
server.use(objMulter.any());

server.use('/', function(req, res, next){
    //console.log(req.body);
    console.log(req.files);
    //console.log(req.files[0].path); // 'www\\upload\\8e27fa4ca620ec3b8cda8b1c59d58084'
    //console.log(req.files[0].originalname); //成绩.png
    // 新文件名
    var newname = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path, newname, function(err){
        if(err){
            res.send('上传失败');
        }else{
            res.send('上传成功')
        }
    })
    // 1.获取原始文件扩展名
    // 2.重命名临时文件 (原始文件名+扩展名)
})