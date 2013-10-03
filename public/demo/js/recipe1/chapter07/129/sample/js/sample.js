window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input")[0];
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(){
		// trueを指定して強制的にサーバーから読み込み
		location.reload(true);
	}, false);
	// 現在の時間を出力
	document.getElementsByTagName("output")[0].innerHTML = new Date();
}, false);