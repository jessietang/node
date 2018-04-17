// require 请求：引入模块
// module  模块 (批量输出)
// exports 输出


//exports.a = 12;

// 会偷偷的给我们加一个下面这样的东西 (好处：没有全局的变量)
/*(function(require, exports, module){
    exports.a = 12;
})();*/

// console.log(module.exports == exports); // true  这两个是同一个东西

module.exports = {
    a: 1,
    b: 2,
    c: 3
};
