window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 2〜10までの対数を出力
	for(var i=2; i<=10; i++){
		// 対数を求める
		var n = Math.log(i);
		// 結果を出力
		ele.innerHTML += i+" = "+n+"<br>";
	}
	// 自然対数の底eの値を表示
	ele.innerHTML += "自然対数の底e："+Math.E+"<br>";
	// 2の自然対数値を表示
	ele.innerHTML += "2の自然対数："+Math.LN2+"<br>";
	// 10の自然対数値を表示
	ele.innerHTML += "10の自然対数："+Math.LN10;
}, false);