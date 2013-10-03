window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// IEで画面の解像度を調べる
	var xdpi = screen.deviceXDPI;
	var ydpi = screen.deviceYDPI;
	// 結果を出力
	ele.innerHTML = "画面の解像度(IE)："+xdpi+", "+ydpi+"<br>";
	// Androidなどの場合
	var dpi = window.devicePixelRatio;
	// 結果を出力
	ele.innerHTML += "画面の解像度："+dpi;
}, false);