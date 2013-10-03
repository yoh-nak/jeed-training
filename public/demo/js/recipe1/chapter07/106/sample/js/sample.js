window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ヒストリーの数を調べる
	var len = history.length;
	// 結果を出力
	ele.innerHTML = "ヒストリー数："+len;
}, false);