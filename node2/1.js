/**
 * Created by ASUS on 2018/3/23.
 */
const mod = require('./mod'); //加一个./ 是告诉系统，我是要引入自己的模块，否则系统默认为是系统自己的模块
const mod1 = require('mod1');

const jt25 = require('jt25');

/*
* require:
 1).如果有 ./
    从当前目录找
 2).如果没有 ./
     先从系统模块找
     再从node_modules找

 以后我们写的自定义模块，都统一放到node_modules里面
* */

console.log(mod.a,mod.b,mod.c);
console.log(mod1.a,mod1.b,mod1.c);

// 使用自己上传到npm的包（jt25是自己上传后又下载下来的）
console.log(jt25.sum(1,2,3,4,5)); // 15
console.log(jt25.div(1,2)); // 0.5