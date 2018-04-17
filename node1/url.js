/**
 * Created by ASUS on 2018/3/21.
 */
const urlLib = require('url');

var obj = urlLib.parse('http://localhost:8080/test/?user=tangjing&pass=123456', true);
console.log(obj);