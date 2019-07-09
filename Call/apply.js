/*
* @ 第一个参数为指定的对象，第二个参数为一个数组
* */
(function () {
    Function.prototype.myApply = function (context) {
        // 确定对象,如果传入的是 null 后者 undefined，非严格模式下为 window
        const ctx = context || window;
        // 将当前被调用的方法定义在 ctx.func上
        ctx.func = this;
        // 已对象的形式调用该方法，此时 this 为 ctx
        let res = arguments[1] ? ctx.func(...arguments[1]) : ctx.func();
        // 删除该方法，避免污染传入的对象
        delete ctx.func;
        return res;
    };

    let obj = {
        name: 'foo'
    };

    function test(age) {
        this.age = age;
        console.log(this.name, this.age);
    }

    console.log(test.myApply(obj, [1]));
})();
