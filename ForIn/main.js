/*
* for...in 语句以原始插入顺序迭代对象的可枚举属性  不应该用它来迭代一个数组对象，因为迭代数组会返回索引而不是属性名
* for...of 语句遍历可迭代对象定义要迭代的数据
* */
// 原型上的方法
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

// 可迭代对象
let iterable = [2, 4, 6];
iterable.name = 'hello';

console.log(iterable);

// for...in 会遍历一个对象自有的、继承的、可枚举的、非 Symbol 的属性
for (let i in iterable) {
    console.log(i);  // 0 1 2  name objCustom arrCustom
}

for (let i in iterable) {
    if (iterable.hasOwnProperty(i)) {
        console.log(i); // 0 1 2
    }
}

// for...of  迭代的是属性的值
for (let i of iterable) {
    console.log(i); // 2 4 6
}

