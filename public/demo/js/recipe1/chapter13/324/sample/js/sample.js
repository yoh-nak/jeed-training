window.addEventListener("touchstart", function(evt){
	var ele = document.getElementsByTagName("output")[0];
	// 最初にタッチされた位置だけ座標値を表示する
	// クライアント要素上でのXY座標
	ele.innerHTML = "clientX : " + evt.touches[0].clientX;
	ele.innerHTML += "<br>clientY : " + evt.touches[0].clientY;
	// ページ上でのXY座標
	ele.innerHTML += "<br>pageX : " + evt.touches[0].pageX;
	ele.innerHTML += "<br>pageY : " + evt.touches[0].pageY;
	// 画面（スクリーン）上でのXY座標
	ele.innerHTML += "<br>screenX : " + evt.touches[0].screenX;
	ele.innerHTML += "<br>screenY : " + evt.touches[0].screenY;
}, false);