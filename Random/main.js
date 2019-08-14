/*
* 用递归算法实现，数组长度为5且元素的随机数在 2-32 间不重复的整数
* 1. 生成一个长度为5的空数组
* 2. 生成一个（2-32）之间的整数
* 3. 把随机数插入到数组中，去重问题，不能使用for/while循环
* 4. 输出该数组
* */
let arr = new Array(5);

function insertArr(arr, i = 0, min = 2, max = 32) {
    const num = Math.max(min, Math.ceil(Math.random() * max));
    if (!arr[arr.length - 1]) {
        if(!arr.includes(num)) {
            arr[i++] = num;
        }
        return insertArr(arr, i);
    }
    return arr;
}
console.log(insertArr(arr, 0));
