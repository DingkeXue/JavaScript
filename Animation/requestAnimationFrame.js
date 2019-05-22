;(function() {
    var countDown = function() {
        var show = document.querySelector('#time2');
        var endTime = new Date('2219/01/17 01:00:00');
        var nowTime = new Date();
        var time = endTime.getTime() - nowTime.getTime();
        var day = '';
        var hour = '';
        var minute = '';
        var second = '';

        if (time > 0) {
            day = Math.floor(time / 1000 / 60 / 60 / 24);
            hour = Math.floor(time / 1000 /60 / 60 % 24);
            minute = Math.floor(time / 1000 / 60 % 60);
            second = Math.floor(time / 1000 % 60);
            window.requestAnimationFrame(countDown); // 递归调用
            show.innerHTML = day + '天' + toDouble(hour) + '小时' + toDouble(minute )+ '分钟' + toDouble(second) + '秒';
        } else {
            console.log('请重新设置时间');
        }
        function toDouble(n) {
            return n < 10 ? '0' + n : n;
        }

    };
    window.requestAnimationFrame(countDown);
})();