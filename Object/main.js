/*
* ES6 新增 Object 方法
* */
// Object.is(): 比较两个值是否相等，采用 同值相同 算法来解决 ES5中 NaN 不等于自身，以及 +0 等于 -0 的情况
Object.is('foo', 'foo');  // true
Object.is({}, {});  // false 引用类型，指针不同

// ES5
console.log(+0 === -0);  // true
console.log(NaN === NaN);  // false

// ES6
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true

/*
* Object.assign()
* 用于对象的合并，将源对象的所有可枚举属性复制到目标对象中(浅复制)
* */
const target = {a: 1};
const source = {b: 2};
Object.assign(target, source);  // target: {a: 1, b: 2}

/*
* Object.keys: 返回对象的键值（数组）
* Object.values： 返回对象的值（数组）
* Object.entries：返回键值对（数组）
* */
let obj = {foo: 'FOO', bar: 'BAR'};
Object.keys(obj);  // ["foo", "bar"]
Object.values(obj);  // ["FOO", "BAR"]
Object.entries(obj);  // [["foo", "FOO"], ["bar", "BAR"]]

/*ES5 中 Object.defineProperty(target, key, descriptor)*/
Object.defineProperty(obj, 'foo', {
    // 描述符主要有两种形式：数据描述符和存取描述符
});
