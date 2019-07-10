// 监听 service worker 中的安装事件
self.addEventListener('install', function (event) {
    // 如果监听到了 service worker 已经安装成功，就会调用 event.waitUntil 回调函数
    event.waitUntil(
        // 安装成功后操作 CacheStorage 缓存，使用之前需要先通过 caches.open() 打开对应缓存空间
        caches.open('my-test-cache-v1').then(cache => {
            // 通过 cache 缓存对象的 addAll 方法添加 precache 缓存
            return cache.addAll(['/', '/index.html', '/main.css', '/main.js'])
        })
    )
});

self.addEventListener('fetch', function (event) {
   event.respondWith(
       // 截获fetch 请求，如果缓存中有，直接返回缓存，如果没有，再发起请求
       caches.match(event.request).then(response => {
           if (response)
               return response;
           // 拷贝原始请求，请求后加到缓存中
           let request = event.request.clone();
           return fetch(request).then(response => {
               // 请求失败的话，直接返回失败的结果
               if (!response || response.status !== 200)
                   return response;

               // 请求成功，将请求和响应缓存起来
               let responseClone = response.clone();
               caches.open('my-test-cache-v1').then(cache => {
                   cache.put(request, responseClone);
               });

               // 向主线程返回响应
               return response;
           })
       })
   )
});
