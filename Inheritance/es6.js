/*
* class 可以通过 extends 关键字实现继承
* 需要注意的是 this 一定要在 super 之后使用
* super 只能用在构造函数中，其它地方都会报错
* */
// 定义父类
class Parent {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return this.x + this.y;
    }
}
// 通过 extends 定义子类
class Children extends Parent{
    constructor(x, y, color) {
        // 调用父类的 constructor(x, y)
        super(x, y);
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的 toString 方法
    }
}
// 实例
let lbb = new Children(1, 3, 'red');
console.log(lbb.toString());

/*
* 类的 prototype 属性和 __proto__ 属性
*1. 子类的 __proto__ 属性，表示构造函数的继承，总是指向父类
* 2. 子类的 prototype 属性的 __proto__ 属性，表示方法的继承，总是指向父类的 prototype 属性
* */
console.log(Children.__proto__ === Parent); // true
console.log(Children.prototype.__proto__ === Parent.prototype); // true
