/*
* reduce 为数组中的每一个元素一次执行回调函数，不包括数组中
* 被删除或者从未被赋值的元素，接受四个参数：累计器、当前值、当前索引、源数组
* arr.reduce(callback, [initialValue]);
* */
let arr = [1, 2, 3, 4];
let arr2 = arr.reduce((accumulator, current, index) => accumulator + current);
console.log(arr2); // 10

// 如果数组中有未定义的值，则直接跳过
arr = [1, 2, , 4];
console.log(arr2); // 7
