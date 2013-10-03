window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// オンラインかオフラインか調べる
	var flag = navigator.onLine;
	// 結果を出力
	ele.innerHTML = "接続状態："+flag;
}, false);