window.addEventListener("touchstart", function(evt){
	var ele = document.getElementsByTagName("output")[0];
	// タッチされた数を求める
	var n = evt.touches.length;
	// 結果を画面に出力
	ele.innerHTML = "同時にタッチされた数："+n;
}, false);