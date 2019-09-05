/*  使用setTimeout 实现 setInterval*/
// 递归调用
function myInterval(fn, time) {
    function interval() {
        setTimeout(interval, time);
        fn();
    }
    setTimeout(interval, time);
}
