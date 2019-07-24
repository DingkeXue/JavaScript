/*
* arguments 对象的 callee 属性，通过它可以调用函数自身
* 它主要解决了闭包中函数调用的问题
* */
// 1. 递归
function fac(n) {
    if (n === 1) return n;
    return n * arguments.callee(n - 1);
}
console.log(fac(5)); // 120

// 根据输入的i输出相应的值
let data = [];
for (var i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i);
    }
}
data[0](); // 3
data[1](); // 3
data[2](); // 3

// 解决方案
for (let i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i);
    }
}
data[0](); // 0
data[1](); // 1
data[2](); // 2

for (var i = 0; i < 3; i++) {
    (data[i] = function () {
        console.log(arguments.callee.i);
    }).i = i;
}
data[0](); // 0
data[1](); // 1
data[2](); // 2


/*
* 接收参数 n = 5;不用 for 循环输出数组 [1, 2, 3, 4, 5]
* */
function show(n) {
    let arr = [];
    return (function () {
        arr.unshift(n);
        n--;
        if (n !== 0) {
            arguments.callee();
        }
        return arr;
    })()
}
console.log(show(5));

// 不用 arguments.callee
function show2(n) {
    let arr = [];
    return (function fn() {
        arr.unshift(n);
        n--;
        if (n !== 0) {
            fn();
        }
        return arr;
    })()
}
console.log(show2(5));
