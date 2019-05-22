/*
* 防抖函数
* */

;(function () {
    let button = document.querySelector("#click");
    button.addEventListener('click', Debounce(sayDebounce));

    function sayDebounce() {
        alert("点我了！");
    }

    function Debounce(callback) {
        let timeId = null;
        return function () {
            // 每次触发该函数时将之前的计时清零后重新计时
            clearTimeout(timeId);
            timeId = setTimeout(() => {
                callback.call(this. arguments);
            }, 1000);
        }
    }
})();