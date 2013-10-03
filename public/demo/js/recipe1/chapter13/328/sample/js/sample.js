window.addEventListener("orientationchange", function(evt){
	var ele = document.getElementsByTagName("output")[0];
	// 回転角度を求める
	var deg = window.orientation;
	// 結果を画面に出力
	ele.innerHTML = "回転角度："+deg;
}, false);