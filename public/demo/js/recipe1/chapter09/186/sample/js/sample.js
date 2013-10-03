window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// loadイベントが発生した事を画面に出力
	ele.innerHTML += "loadイベント発生<br>";
}, false);
window.addEventListener("DOMContentLoaded", function(){
	var ele = document.getElementsByTagName("output")[0];
	// DOMContentLoadedイベントが発生した事を画面に出力
	ele.innerHTML += "DOMContentLoadedイベント発生<br>";
}, false);
