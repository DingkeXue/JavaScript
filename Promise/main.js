/*
*  使用 promise 封装 ajax
* */
function ajax(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                    resolve(xhr.responseText);
                } else {
                    reject();
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send(null);
    })
}

/*打印属性*/
const promise = new Promise((resolve, reject) => {
    console.log('a');
    resolve();
    console.log('b');
});
promise.then(() => {
    console.log('c');
});
console.log('d'); // output: a b d c
