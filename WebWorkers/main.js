/*
* 主线程中创建 Worker 对象
* 使用 postMessage message 与 worker 进行通信
* */
let show = document.querySelector('#show');
let w;

function startWorker() {
    if (typeof Worker !== 'undefined') {
        if (typeof w === 'undefined') {
            w = new Worker('./worker.js');
        }
        
        w.onmessage = function (event) {
            show.innerHTML = event.data;
        };
        
        w.onerror = function (event) {
            console.log("ERROR:" + event.filename + 'line:' + event.lineno + 'ERROR MESSAGE:' + event.message);
        } 
    } else {
        alert("不支持 Web Workers");
    }
}

function stopWorker() {
    w.terminate();
}