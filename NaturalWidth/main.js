/*
* 获取图片原始高度
* */
function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = function () {
            let obj = {
                w: image.naturalWidth,
                h: image.naturalHeight
            };
            resolve(obj);
        };
        image.onerror = function () {
            return new Error('failed to load image');
        };
        image.src = url;
    })
}
