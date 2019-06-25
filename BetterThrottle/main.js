(function () {
    let btn = document.getElementById('btn');


    // fn 是回调函数，delay 是延时时间
    function throttle(fn, delay) {
        // last 为上次触发时间，timer 为定时器
        let last = 0, timer = null;

        return function () {
            // 保留调用时的上下文
            let context = this;
            // 保留传入的参数
            let args = arguments;
            // 记录本次触发回调函数的时间
            let nowTime = +new Date();
            // 判断上次触发时间是否小于delay时间
            if (nowTime - last < delay) {
                // 小于触发防抖函数
                clearTimeout(timer);
                // 设定新的定时器
                timer = setTimeout(function () {
                    last = nowTime;
                    fn.apply(context, args);
                }, delay)
            } else {
                // 如果超过了时间阈值，则给用户返回一个响应
                last = nowTime;
                fn.apply(context, args);
            }
        }
    }

    let better_throlle = throttle(function () {
        console.log("我被触发了");
    }, 1000);

    btn.addEventListener('click', better_throlle);

})();
