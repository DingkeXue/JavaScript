/*
* 实现一个私有变量，用 getName 方法访问，不能直接访问
* */
// 方法一
;(function (window) {
    let name = 'FOO';
    window.getName = function () {
        return name;
    }
})(window);
console.log(name); // undefined
console.log(getName()); // FOO

// 方法二：这里其实并没有定义name变量，还待确认
function Person(name) {
    this.getName = function () {
        return name;
    }
}
let lbb = new Person('lbb');
console.log(lbb.name); // undefined
console.log(lbb.getName()); // lbb


// 方法三
function test() {
    let name = 'test';
    function getName() {
        return name;
    }
    return getName;
}
let get = test();
console.log(name);  // undefined
console.log(get()); // test

// 利用ES6块级作用域
{
    let name = 'bar';
    window.getname = function () {
        return name;
    }
}
console.log(name);
console.log(getname());
