window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("input");
	// 最初のボタンにイベントを割り当て
	ele[0].addEventListener("click", function(){
		// 現在のページURLを取得
		var url = location.href;
		alert(url);
	}, false);
	// 2番目のボタンにイベントを割り当て
	ele[1].addEventListener("click", function(){
		location.href = "http://www.c-r.com/";
	}, false);
}, false);