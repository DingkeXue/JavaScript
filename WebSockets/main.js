/*
* 同源策略对 WebSocket 不适用
* readyState 有四个值
* WebSocket.CONNECTING(0): 连接还未开启
* WebSocket.OPEN(1): 已建立连接
* WebSocket.CLOSING(2): 正在关闭连接
* WebSocket.CLOSE(3): 已经关闭连接
* WebSocket 只能发送纯文本数据或者二进制，所以发送前必须进行序列化
* JavaScript高级程序设计中说WebSocket对象不支持 DOM2级事件，只支持 DOM0 级事件
* */
function WebSocketTest() {
    if ('WebSocket' in window) {
        alert("正在创建WebSocket");

        // 创建一个 WebSocket 对象
        let ws = new WebSocket('ws://localhost:8080'); // 不再是HTTP://   ，传入的路径必须是绝对路径

        ws.onopen = function () {
            // 已建立连接
            ws.send(JSON.stringify({name: "lbb"})); // 只能发送文本数据，需要序列化
            alert("正在发送数据");
        };

        ws.onmessage = function (event) {
            let msg = event.data; // 传回来的数据在 event 的 data 中
            console.log("已接收数据", msg);
        };

        ws.onclose = function () {
            alert("连接已关闭");
        }
    } else {
        alert("创建 WebSocket 失败");
    }
}
