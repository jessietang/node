/**
 * Created by ASUS on 2018/3/21.
 */
const fs = require('fs');

// fs.writeFile(�ļ��������ݣ� �ص�)
fs.writeFile('bbb.txt','hahahahahaha', function(err){
    console.log(err);
});