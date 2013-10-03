window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数maxに最大値を代入する
	var max = Number.MAX_VALUE;
	// 変数minに最小値を代入する
	var min = Number.MIN_VALUE;
	// 結果を出力
	ele.innerHTML = "最大値："+max+"<br>最小値："+min;
}, false);