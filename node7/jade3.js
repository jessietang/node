const jade = require('jade');
const fs = require('fs');

var str = jade.renderFile('./views/2.jade', {pretty: true, name:'xiayuyu', a: 12,b: 5,
    json: {width:'100px', height:'30px', background: 'red'},
    arr: ['class1', 'class2', 'class3'],
    arr2: ['111', '222','333','444'],
    content: '<h2>title......</h2><span>aaaaaa</span>'
});
fs.writeFile('./build/1.html', str, function(err){
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
});
console.log(str);