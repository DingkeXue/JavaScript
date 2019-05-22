;(function () {
    let button = document.querySelector("#click");
    button.addEventListener('click', Throttle(sayThrottle));

    function sayThrottle() {
        console.log("我出来了!");
    }

    function Throttle(callback) {
        let canrun = true;

        return function () {
            // 如果 canrun = false 说明已经触发过该函数但还没有在指定时间内完成对回调函数的调用
            if (!canrun) {
                return
            }
            canrun = false;

            setTimeout(() => {
                callback.call(this, arguments);
                canrun = true;
            }, 1000);
        }
    }
})();