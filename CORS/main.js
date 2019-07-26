/*
* CORS基本原理：使用自定义的HTTP请求头部，让浏览器和服务器协商是否进行沟通
* 如GET，POST 请求会自动添加 Origin 头部，在服务器上需要设置： Access-Control-Allow-Origin 的值
* IE8 采用：XDR  其它采用：XHR
* */
// XDR : XDomainRequest  特点：请求和响应不发送 cookie，只能设置Content-type，只支持 GET，POST； 不能访问响应头
/*
var xdr = new XDomainRequest();
xdr.onload = function () {
    alert(xdr.responseText);
};
xdr.onerror = function () {
    alert("error")
};
// 请求超时函数
xdr.timeout = 1000;
xdr.ontimeout = function() {
    alert("请求超时")
};
xdr.open("GET", "https://www.baidu.com");
xdr.send();*/

// XHR
/*
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            console.log(xhr.responseText);
        } else {
            console.log("error");
        }
    }
};
xhr.open('POST', "http://wpdic.com/cors.php");
xhr.send();*/

// 兼容模式
function createCorsRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != 'undefined'){  // 兼容 IE 8
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

window.onload = function () {
  var btn = document.querySelector('#btn');
  var text = document.querySelector('#text');

  btn.addEventListener('click', function () {
      var xhr = createCorsRequest('GET', "http://wpdic.com/cors.php");
      if (xhr) {
          if (xhr.status) {  // XHR
              xhr.onreadystatechange = function () {
                  if (xhr.readyState === 4) {
                      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                          text.innerText = xhr.responseText;
                      }
                      else {
                          alert("请求错误！");
                      }
                  }
              }
          } else { // XDR没有statechange事件
              xhr.onload = function () {
                  text.innerText = xhr.responseText;
              };
              xhr.onerror = function () {
                alert("请求错误！");
              }
          }
          xhr.send();
      }
  })
};
