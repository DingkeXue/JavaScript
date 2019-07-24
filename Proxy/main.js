/*
* 监听一个对象的方法
* Object.defineProperty(obj, prop, descriptor)：只能监听 obj 上已有属性
* Proxy：可以理解成在目标之前架设一层 拦截，对象访问或者设置该对象，都必须通过这个拦截
* */
// Object.defineProperty()
function Test() {
    let value = null;
    let arr = [];

    Object.defineProperty(this, 'num', {
        get: function () {
            console.log('您执行了 get 操作');
            return this.value;
        },
        set: function (newVal) {
            console.log('您执行了 set 操作');
            this.value = newVal;
            arr.push({value: newVal});
        }
    });

    this.getArr = function () {
        return arr;
    }
}
let test = new Test();
test.num = 1; // 您执行了 set 操作
console.log(test.num);  // 1 您执行了 get 操作
test.num = 2; // 您执行了 set 操作
console.log(test.getArr());  // [{value: 1}, {value: 2}]


/*========proxy==========*/
let obj = new Proxy({}, {
   get: function (target, key, receiver) {
       console.log(`getting ${key}`);
       return Reflect.get(target,key, receiver);
   },
   set: function (target, key, value, receiver) {
       console.log(`setting ${key}`);
       return Reflect.set(target, key, value, receiver);
   }
});

obj.count = 1; // setting count
console.log(++obj.count); // 1.getting count  2.setting count   output: 2
