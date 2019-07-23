/*
* 柯里化：把接受多个参数的函数变成接收一个单一参数的函数
* */
function add(x, y) {
    return x + y;
}
// currying 后
function curryingAdd(x) {
    return function (y) {
        return x + y;
    }
}
console.log(add(1, 2));  // 3
console.log(curryingAdd(1)(2)); // 3

/*
* add(1)(2)(3) 无限累加器，原理是将add作为函数返回，然后接收新的参数进行计算
* */
function add2(a) {
    // 内部使用闭包来记住之前的值
    function sum(b) {
        a = a + b;
        return sum;
    }
    // 打印函数的时候回自动调用 toString() 方法，重新该方法
    sum.toString = function () {
        return a;
    };
    return sum;
}
console.log(add2(1)(2)(3));

/*
* 上面是基于每次传入的固定的一个参数，下面是通用的情况
* */
function curryAdd() {
    // 第一次执行时创建一个数组来存储所有的参数
    let args = [].slice.call(arguments);

    // 在内部创建一个闭包来保存所有的参数
    function sum() {
        args.push(...arguments);
        return sum;
    }
    // 重写 toString() 方法
    sum.toString = function () {
        return args.reduce((pre, current) => pre + current);
    };

    // 每次返回一个函数
    return sum;
}

console.log('last', curryAdd(1, 2)(3));


