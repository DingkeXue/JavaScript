/*
* 取出给定数组的最大值
* */

let arr = [3, 1, 44, 34, 2];

// 1 ES6
console.log(Math.max(...arr));

// 2 排序取最后一位
arr.sort((a, b) => a - b);
console.log(arr[arr.length - 1]);

// 3 reduce
let max = arr.reduce(function max(prev, next) {
    return Math.max(prev, next);
});
console.log(max);
