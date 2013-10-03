window.addEventListener("load", function(){
	// 2〜10までの平方根の値を求める
	for(var i=2; i<=10; i++){
		// 平方根を求める
		var n = Math.sqrt(i);
		// 結果を出力
		document.getElementsByTagName("output")[0].innerHTML += i+" = "+n+"<br>";
	}
}, false);