/*
* 深复制：判断属性是否属于 object 后者 array，如果属于，递归复制；不属于，直接复制
* */
function deepClone(origin, target = {}) {
    // 遍历origin中的key
    for(let key in origin) {
        // 看改属性是否是对象上而不是原型上的
        if (origin.hasOwnProperty(key)) {
            // 该属性是对象的情景
            if (typeof origin[key] === 'object' && origin[key] !== null) {
                target[key] = {};
                deepClone(origin[key], target[key]);
            } else if (Array.isArray(origin[key])) {  // 是数组的情况
                target[key] = [];
                deepClone(origin[key], target[key]);
            } else {
                target[key] = origin[key];
            }
        }
    }
    return target;
}

let obj = {
    name: 'bar',
    arr: [1, 2],
    info: {
        age: 22,
        gender: 'male'
    }
};

let copy = {};
console.log(deepClone(obj, copy));
obj.name = 'foo';
console.log(copy);  // copy.name: bar 不变

// 方法二
let copy2 = JSON.parse(JSON.stringify(obj));
console.log(copy2);
