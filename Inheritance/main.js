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


// 组合继承：1.在子类构造函数中继承父类属性 2.将子类 prototype 属性设置为父类实例
function Parent2(name) {
    this.name = name;
}
Parent2.prototype.say = function () {
    console.log(this.name);
};

function Children2(name, age) {
    // 构造函数内继承
    Parent2.call(this, name);
    this.age = age;
}
// 原型继承
Children2.prototype = new Parent2();
Children2.prototype.sayAge = function () {
    console.log(this.age);
};

// 实例
let a2 = new Parent2('bar');
let b2 = new Children2('foo', 18);
a2.say();
b2.say();
b2.sayAge();

// 寄生组合继承
function inheritPrototype(sub, sup) {
    let prototype = Object(sup.prototype);
    // 重写因子类原型导致子类 constructor 属性被修改
    sub.constructor = sub;
    // 设置子类的原型
    sub.prototype = prototype;
}
// 定义父类
function Super(age) {
    this.age = age;
}
Super.prototype.sayAge = function () {
    console.log(this.age);
};
// 定义子类
function Sub(age, name) {
    Super.call(this, age);
    this.name = name;
}

// 寄生组合继承
inheritPrototype(Sub, Super);

Sub.prototype.sayName = function () {
    console.log(this.name);
};

// 实例
let a3 = new Super(11);
let b3 = new Sub(12, 'lbb');
a3.sayAge();
b3.sayAge();
b3.sayName();


