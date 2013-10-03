window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数に数値を代入
	var n = 1969.2154649;
	// 小数点以下を3桁にする
	var num = n.toFixed(3);
	// 結果を出力
	ele.innerHTML = "元の数："+n+"<br>処理後："+num;
}, false);