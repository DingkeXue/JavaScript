function Geolocation() {
    let show = document.querySelector('#show');
    
    if (!navigator.geolocation) {
        alert("您的浏览器不支持该服务");
        return;
    } 

    // 位置获取成功
    function geo_success(position) {
        // 获取经纬度
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        show.innerHTML = `<p>经度是： ${latitude} <br>纬度是： ${longitude}</p>`;
    }

    // 位置获取失败，一般显示在日志里
    function geo_error(error) {
        console.log("error message:", error.message);
        console.log("error code:", error.code);
    }

    // 可选参数
    let geo_options = {
      enableHighAccuracy: false,
      maximumAge: 50000,
      timeout: 30000
    };

    // 静态获取位置
    navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);

    // 动态获取位置
    let watchID = navigator.geolocation.watchPosition(geo_success, geo_error);
    clearWatch(watchID);
}


