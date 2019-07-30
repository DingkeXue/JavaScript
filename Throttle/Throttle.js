;(function () {
    let button = document.querySelector("#click");
    button.addEventListener('click', Throttle(sayThrottle));

    function sayThrottle() {
        console.log("我出来了!");
    }

    function Throttle(callback) {
        let canRun = true;

        return function () {
            // 如果 canRun = false 说明已经触发过该函数但还没有在指定时间内完成对回调函数的调用
            if (!canRun) {
                return
            }
            canRun = false;

            setTimeout(() => {
                callback.call(this, arguments);
                canRun = true;
            }, 1000);
        }
    }

    // 方法2
    function throttle(fn, delay) {
        // 上次触发时间
        let last = 0;

        return function () {
            // 现在触发时间、保留this、arguments
            let now = +new Date(), context = this, args = arguments;
            // 判断时间间隔是否大于指定的时间间隔
            if (now - last >= delay) {
                // 如果大于等于则触发回调函数
                last = now;
                fn.apply(context, args);
            }
        }
    }

    function say_throttle() {
        console.log(1);
    }

    // button.addEventListener('click', throttle(say_throttle, 1000));
})();
