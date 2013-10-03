window.addEventListener("load", function(){
	var n = Math.pow(2, 35)+0.25;
	// 変数nを四捨五入する
	var result1 = Math.round(n);
	// 変数nの小数値を切り捨てる
	var result2 = Math.floor(n);
	// 変数nの小数値を切り上げる
	var result3 = Math.ceil(n);
	// 変数nの小数値を切り捨てる
	var result4 = n | 0;
	// 変数nの小数値を切り捨てる
	var result5 = ~~n;
	// 結果を出力
	var ele = document.getElementsByTagName("output")[0];
	ele.innerHTML = result1+"<br>"+result2+"<br>"+result3+"<br>";
	ele.innerHTML += result5+"<br>"+result2;
}, false);