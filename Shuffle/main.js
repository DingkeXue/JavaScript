/*
* 让一个数组乱序：每次产生一个下标，如果和当前下标不等，互换值
* */
function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * arr.length);
        if (i !== j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr;
}
console.log(shuffle([1, 2, 3, 4, 5]));
