/*
* 上传文件
* */
let btn = document.getElementsByClassName('submit');
btn.addEventListener('click', function () {
   let file = document.getElementById('upload');
   let formData = new FormData();
   formData.append('file', file);

   let xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
           if (xhr.status === 200) {
               console.log(xhr.responseText);
           }
       }
   };
   xhr.open("GET", url);
   xhr.send();
});
