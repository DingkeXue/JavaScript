/*
* 如何渲染几万条数据并不卡住页面
* 使用 requestAnimationFrame来每隔16.6ms更新部分数据
* */
setTimeout(() => {
    // 插入十万条数据
   const total = 100000;
   // 每次插入20条，如果性能不好可以更小
    const  once = 20;
    // 总共需要插入的次数
    const loopCount = total / once;
    // 记录插入的次数
    let count = 0;
    let ul = document.querySelector('ul');

    // 插入函数
    function add() {
        // 使用文档碎片来提高性能
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < once; i++) {
            let li = document.createElement('li');
            fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        count++;
        loop();
    }
    function loop() {
        if (count < loopCount) {
            window.requestAnimationFrame(add);
        }
    }
    loop();
},0);
