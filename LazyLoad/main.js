/*
* 懒加载：判断当前图片是否在可视窗内，如果是则加载
* */
init();
let timer = null;
$(document).on('scroll', function () {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        init();
    })
});

function init() {
    $('.wrapper img').not('[data-loaded]').each(function() {
        if(isShow($(this))) {
            loadImage($(this));
        }
    })
}

function isShow($node) {
    return $node.offset().top <= $(window).height() + $(window).scrollTop();
}

function loadImage($node) {
    $node.attr('src', $node.attr('data-src'));
    $node.attr('data-loaded', true);
}
