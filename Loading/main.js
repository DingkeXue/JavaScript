let ul = document.getElementById('ul');  // 获取 ul 列表
let div = document.getElementById('article');  // 获取 ul 列表的div
let text = document.getElementById('text'); // 获取 下拉div
let start; // 辅助变量：触摸开始时，相对于文档顶部的 y 坐标
let num = 11; // 添加 li 文本
let refresh = false, isLoad = false;

/*上拉加载*/
// 上拉加载的方法
function addLi() {
    // 使用文档碎片来提高渲染速度
    let fragment = document.createDocumentFragment();
    for(let i = 0; i < 10; i++) {
        let li = document.createElement('li');
        li.className = 'li';
        li.innerHTML = num++;
        fragment.appendChild(fragment);
    }
    ul.appendChild(fragment);
}
