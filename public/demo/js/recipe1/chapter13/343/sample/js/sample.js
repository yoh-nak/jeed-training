window.addEventListener("load", function(){
	// ボタン1にイベントを設定
	document.getElementById("vib1").addEventListener("click", function(){
		navigator.mozVibrate(3000);
	}, false);
	// ボタン2にイベントを設定
	document.getElementById("vib2").addEventListener("click", function(){
		navigator.mozVibrate([1000, 1000, 1000, 1000, 1000]);
	}, false);
}, false);
