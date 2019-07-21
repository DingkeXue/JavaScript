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
* Object.keys: 返回对象的键值
* Object.values： 返回对象的值
* Object.entries：返回键值对
* */
