/*
* async 返回一个promise对象
* 正常情况下，await 命令后面是一个 promise 对象，如果不是，直接返回对应的值
* */
function sleep(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    })
}

async function sleepAsync() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        await sleep(1000);
    }
}

sleepAsync();
