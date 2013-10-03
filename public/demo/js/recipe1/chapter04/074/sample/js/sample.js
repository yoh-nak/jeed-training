window.addEventListener("load", function(){
	// 2の16乗を求める
	var n = Math.pow(2, 16);
	// 値を出力
	document.getElementsByTagName("output")[0].innerHTML = n;
}, false);