window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数nを数値オブジェクトとして生成
	var n = new Number("764");
	// 値に1加算する
	n = n + 1;
	// 結果を出力
	ele.innerHTML = n+"<br>"+typeof(n);
}, false);