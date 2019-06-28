/*
* 主线程中创建 Worker 对象
* 使用 postMessage message 与 worker 进行通信
* */
let show = document.querySelector('#show');
let worker;

function startWorker() {
    if (typeof Worker !== 'undefined') {
        if (typeof worker === 'undefined') {
            worker = new Worker('./worker.js');
        }

        worker.onmessage = function (event) {
            show.innerHTML = event.data;
        };

        worker.onerror = function (event) {
            console.log("ERROR:" + event.filename + 'line:' + event.lineno + 'ERROR MESSAGE:' + event.message);
        }
    } else {
        alert("不支持 Web Workers");
    }
}

function stopWorker() {
    worker.terminate();
}
