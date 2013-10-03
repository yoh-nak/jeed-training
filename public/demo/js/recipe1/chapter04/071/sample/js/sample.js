window.addEventListener("load", function(){
	var n = 12.48;
	// 変数nを四捨五入する
	var result1 = Math.round(n);
	// 変数nの小数値を切り捨てる
	var result2 = Math.floor(n);
	// 変数nの小数値を切り上げる
	var result3 = Math.ceil(n);
	// 結果を出力
	var ele = document.getElementsByTagName("output")[0];
	ele.innerHTML = result1+"<br>"+result2+"<br>"+result3;
}, false);