window.addEventListener("load", function(){
	// 乱数を10回発生させる
	for(var i=0; i<10; i++){
		// 乱数値を求める
		var n = (Math.random() * 10 | 0) + 1;
		// 結果を出力
		document.getElementsByTagName("output")[0].innerHTML += n+"<br>";
	}
}, false);