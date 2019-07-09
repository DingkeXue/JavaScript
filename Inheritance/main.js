/*
* 这里说了三种继承机制，分别是 原型链继承、混合继承、寄生继承
* */

// 原型链继承：将子类的 prototype 属性设置为 A 的实例，要确保构造函数没有任何参数；弊端是不支持多重继承
function Parent1() {}
Parent1.prototype.say = function (msg) {
  console.log(msg);
};

function Children1() {}
// 实现继承
Children1.prototype = new Parent1();
// 创建实例
let a1 = new Parent1();
let b1 = new Children1();
b1.say('hello'); // hello
