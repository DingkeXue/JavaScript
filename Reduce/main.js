/*
* reduce 为数组中的每一个元素一次执行回调函数，不包括数组中
* 被删除或者从未被赋值的元素，接受四个参数：累计器、当前值、当前索引、源数组
* arr.reduce(callback, [initialValue]);
* */
let arr = [1, 2, 3, 4];
// 因为没有给初始值，所以累计器将会使用数组的第一个元素最为初始值，current 和 index 从第二个元素开始
let arr2 = arr.reduce((accumulator, current, index) => accumulator + current);
console.log(arr2); // 10

// 如果数组中有未定义的值，则直接跳过
arr = [1, 2, , 4];
console.log(arr2); // 7

//给定一个初始值
let arr3 = [1, 2, 3, 4];
let arr4 = arr3.reduce((acc, current) => {
    return acc +　current;
}, 10);
console.log(arr4); // 20

