/**
 * Created by ASUS on 2018/3/21.
 */
const fs = require('fs');

// fs.writeFile(文件名，内容， 回调)
fs.writeFile('bbb.txt','hahahahahaha', function(err){
    console.log(err);
});