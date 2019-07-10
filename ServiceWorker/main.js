/*
* 需要在主线程里安装 Service Worker
* */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('注册成功', registration.scope);
            })
            .catch(err => {
                console.log('注册失败', err);
            })
    })
}

fetch('http://bar.other/resources/post-here/')
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
