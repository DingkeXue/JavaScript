/*
* apply call 的区别：传参的形式不一样，call 是一个一个往里面传，apply 是传入一个数组
* bind:第一个也是 this 对象，传参也是一个个往里面传，但是最终返回的是一个函数
* */
(function () {
    Function.prototype.myCall = function (context) {
        // 确定传入的参数
        let ctx = JSON.parse(JSON.stringify(context)) || window;
        // 将当前被调用的方法定义在 ctx.func 上
        ctx.func = this;
        // 获取传入的参数
        const args = [...arguments].slice(1);
        console.log(args);
        // 已对象调用的形式调用func，此时this指向 ctx
        const res = args.length > 0 ? ctx.func(...args) : ctx.func();
        // 删除该方法，不然会对传入对象造成污染
        delete ctx.func;
        return res;
    };

    let obj = {
        name: 'bar'
    };
    function test1(age) {
        this.age = age;
        console.log(this.name, this.age);
    }
    console.log(test1.myCall(obj, 1)); // bar 1
})();
