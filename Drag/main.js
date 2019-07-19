function drag(event) {
    /*设置被拖数据的数据类型和值*/
    event.dataTransfer.setData('Text', event.target.id);
}

// 默认无法将数据/元素放置到其他元素中，如果要放置，需要阻止默认行为
function allowDrop(event) {
    event.preventDefault();
}

// 进行放置
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('Text');
    ev.target.appendChild(document.getElementById(data));
}
