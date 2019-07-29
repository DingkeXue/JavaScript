/*
* var newArr = arr.flat(depth)  depth 表示遍历的深度，可以是 Infinity
* */
let arr1 = [2, [3, 4], [5, [6]]];
let arr2 = arr1, arr3 = arr1;
let newArr = arr1.flat(Infinity);
console.log(newArr); // [2, 3, 4, 5, 6]

// 实现方法一
// 和深复制方法类似
Array.prototype.myFlat = function () {
  let result = [];
  this.forEach(item => {
      // 检测内部是否有子数组，如果存在，递归调用该方法；如果不存在，将该数直接 push 到新数组中
      if (Array.isArray(item)) {
          result = result.concat(item.myFlat());
      } else {
          result.push(item);
      }
  });
    return result;
};

console.log(arr2.myFlat()); // [2, 3, 4, 5, 6]

// 方法二：有传参的问题
Array.prototype.Flat = function(num = 1) {
    if (!Number(num) || Number(num) < 0) {
        return this;
    }
    let result = [];
    this.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(item.Flat(--num));
        } else {
            result.push(item);
        }
    });
    return result;
};
console.log([1, [2, [4]]].Flat(3));

// 方法三 : 利用toString() 方法将数组转换成字符串再用 split 方法将字符串分割成类数组，最后将字符串转换成数
Array.prototype.myFlat2 = function () {
    return this.toString().split(',').map(item => +item);
};

console.log(arr3.myFlat2());  // [2, 3, 4, 5, 6]
