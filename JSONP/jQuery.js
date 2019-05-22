/*
* jQuery 中对 jsonp 进行了封装，不用写回调函数，直接在 success 中进行调用
* */

jQuery(document).ready(function () {  // DOM 树加载完成后触发
    let btn = document.querySelector('#btn');
    let show = document.querySelector('#show');
    btn.addEventListener('click', function () {
        $.ajax({
            type: 'get',
            url: 'http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=?',
            dataType: 'jsonp',
            success: function (data) {
                show.innerText = data;
            },
            error: function () {
                alert("ERROR");
            }
        })
    })
});