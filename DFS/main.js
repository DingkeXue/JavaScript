/*
* 深度优先搜索
* 先判断是否有孩子，如果有孩子继续搜索孩子
* */
(function () {
    let root = document.querySelector('.root');

    function DFS(root, list) {
        if (root) {
            list.push(root);
            var children = root.children;
            for (var i = 0; i < children.length; i++) {
                DFS(children[i], list);
            }
        }
        return list;
    }
    console.log(DFS(root, []));
})();
