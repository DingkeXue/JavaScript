/*
* js实现图片懒加载（IntersectionObserver）
* IntersectionObserver(callback, options)
* */
document.addEventListener('DOMContentLoaded', function() {
   let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
   // 检测是否有 IntersectionObserve 对象
   if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
       let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
           entries.forEach(function(entry) {
               if (entry.isIntersecting) {
                   let lazyImage = entry.target;
                   lazyImage.src = lazyImage.dataset.src;
                   lazyImage.srcset = lazyImage.dataset.srcset;
                   lazyImage.classList.remove('lazy');
                   lazyImageObserver.unobserve(lazyImage);
               }
           })
       });

       // 检测所有图片
       lazyImages.forEach(function(lazyImage) {
           lazyImageObserver.observe(lazyImage);
       })
   }
});
