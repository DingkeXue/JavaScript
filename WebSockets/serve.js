/*
* 服务器端代码
* */
let app = require('express')();
let server = require('http').Server(app);
let WebSocket = require('ws');

let wss = new WebSocket.Server({port: 8080});

wss.on('connection', function connection(ws) {
    console.log("connection");

    // 监听数据
    ws.on('message', function message(message) {
        console.log("message", message);
    });

    // 发送数据
    ws.send('from server');
});

app.get('/', function (req, res) {
    res.send('200, from server');
});

app.listen(3000);



