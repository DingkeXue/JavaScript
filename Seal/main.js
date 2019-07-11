/*
* 该方法返回的和传入的参数是同一个对象
* 该方法不会影响从原型链上继承的属性，但 __proto__ 属性的值也会不能修改
* */

let obj = {
    prop: function () {

    },
    name: 'bar'
};

let o = Object.seal(obj);
console.log(o === obj); // true

delete obj.name;
console.log(obj.name); // bar 删除失败

obj.name = 'foo';
console.log(obj.name); // foo 修改成功

obj.age = 11;
console.log(obj.age); // undefined  严格模式下上面赋值语句会报错


