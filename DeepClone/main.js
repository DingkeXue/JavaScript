/*
* 深复制：判断属性是否属于 object 后者 array，如果属于，递归复制；不属于，直接复制
* */
function deepClone(origin, target={}) {
    for(let key in origin) {
        if (origin.hasOwnProperty(key)) {
            // 如果属性是对象并且不为空
            if (typeof origin[key] === 'object' && origin[key] !== null) {
                target[key] = {};
                deepClone(origin[key], target[key]);
            }
            // 如果属性是数组
            else if (Array.isArray(key)) {
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
