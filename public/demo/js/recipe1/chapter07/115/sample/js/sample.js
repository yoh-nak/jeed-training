window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("input")[0];
	// ボタンにイベントを割り当て
	ele.addEventListener("click", function(){
		// 印刷する
		window.print();
	}, false);
}, false);