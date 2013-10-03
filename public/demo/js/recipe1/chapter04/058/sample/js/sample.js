window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数に数値を代入
	var n = 1969.215;
	// 桁数を指定する
	var num = n.toPrecision(5);
	// 結果を出力
	ele.innerHTML = "元の数："+n+"<br>処理後："+num;
}, false);