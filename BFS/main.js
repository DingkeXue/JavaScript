/*
* 用一个队列来存放每一级元素，每次从队列中取出一个元素，并将该元素的孩子放进队列
* 先判断孩子是否有兄弟，如果有，先遍历兄弟再判断兄弟是否有孩子递归判断是否有兄弟，如果没有返回
* */
(function () {
    let root = document.querySelector('.root');

    function BFS(root) {
        var result = [];
        var arr = [];
        if (root) {
            arr.push(root);
            while (arr.length) {
                var node = arr.shift();
                var children = node.children;
                result.push(node);
                for (var i = 0; i < children.length; i++) {
                    arr.push(children[i]);
                }
            }
        }
        return result;
    }

    console.log(BFS(root));
})();
