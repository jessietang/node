/**
 * Created by ASUS on 2018/3/21.
 */
const fs = require('fs');

// fs.readFile(文件名，回调函数)  是一个异步操作，所以有回调函数
fs.readFile('aaa.txt', function(err, data){
    if(err){
        console.log('读取失败');
    }else{
        console.log(data.toString());
    }
})
//fs.writeFile()