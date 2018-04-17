const path = require('path');

var str = 'c:\\wamp\\www\\a.html';

var obj = path.parse(str);

// base 文件名部分 a.html
// ext 扩展名部分 .html
// dir 文件路径 c:\\wamp\\www
// name 文件名部分 a (不包括扩展名)
console.log(obj);