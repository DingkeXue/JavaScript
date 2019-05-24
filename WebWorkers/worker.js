let i = 0;
function add() {
    i ++;
    postMessage(i);
}

setInterval(add, 1000);