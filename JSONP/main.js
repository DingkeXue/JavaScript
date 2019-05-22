/*
* 动态生成 script 标签，利用 src 请求不受同源策略，服务器端动态生成脚本
* 只能使用 GET 请求，兼容性好
* 无法确认请求是否失败
* 如果其它域不安全，只能完全放弃 JSONP
* */
let btn = document.querySelector('#btn');
let content = document.querySelector('#content');

// 回调函数
function cb(data) {
    alert("请求成功！");
    content.innerText = data;
}

btn.addEventListener('click', function () {
    let url = 'http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=cb';
    let script = document.createElement('script');
    script.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(script);
});