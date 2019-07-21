/*
* ES6 新增 Object 方法
* */
// Object.is(): 比较两个值是否相等，采用 同值相同 算法来解决 ES5中 NaN 不等于自身，以及 +0 等于 -0 的情况
Object.is('foo', 'foo');  // true
Object.is({}, {});  // false 引用类型，指针不同
