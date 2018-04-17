const ejs = require('ejs');

ejs.renderFile('./views/1.ejs', {name: 'jessie', json: {arr: [
        {user: 'aaa',pass:'111' },
        {user: 'bbb',pass:'111' }
    ]},
    type:'admin'

}, function(err, data){
    if (err){
        console.log('编译失败');
    }else{
        console.log(data);
    }
});