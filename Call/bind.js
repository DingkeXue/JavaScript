/*
* @ 第一个参数为对象，传参挨个传进去
* */
(function () {
    Function.prototype.myBind = function (context) {
        // 确定传入的对象进行深拷贝
        const ctx = JSON.parse(JSON.stringify(context)) || window;
        // 将当前被调用的方法定义早 ctx.func 上
        ctx.func = this;
        // 获取实参
        const args = [...arguments].slice(1);

        // 返回一个函数，等待调用
        return function () {
            // 对bind函数的参数和调用时函数的参数进行合并
            const allArgs = args.concat([...arguments]);
            console.log(allArgs);
            // 已对象的形式调用 func
            return allArgs.length > 0 ? ctx.func(...allArgs) : ctx.func();
        }
    };

    let obj = {
        name: 'lbb'
    } ;
    function test(age) {
        this.age = age;
       console.log(this.name, this.age);
    }
    let test2 = test.myBind(obj, 111);
    test2(2222);
})();

