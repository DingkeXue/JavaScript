/*
* 实现数组的 push方法
* */
Array.prototype.myPush = function () {
  let len = this.length, args = Array.from(arguments);
  for(let item of args) {
      this[len++] = item;
  }
  return this.length;
};
let arr = [1, 2, 3];
console.log(arr.myPush(5));
