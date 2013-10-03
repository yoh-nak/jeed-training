window.addEventListener("load", function(){
	var n = -12.3;
	// 変数nの絶対値を求める
	var result = Math.abs(n);
	// 結果を出力
	document.getElementsByTagName("output")[0].innerHTML = result;
}, false);