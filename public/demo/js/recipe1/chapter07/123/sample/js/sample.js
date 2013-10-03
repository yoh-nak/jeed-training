window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input");
	// ボタンにイベントを割り当て
	btn[0].addEventListener("click", function(){
		// ドキュメントのタイトルを読み出し
		var text = document.title;
		// 結果を出力
		document.getElementsByTagName("output")[0].innerHTML = text;
	}, false);
	// ボタンにイベントを割り当て
	btn[1].addEventListener("click", function(){
		// ドキュメントのタイトルを設定
		document.title = "サンプル";
	}, false);
}, false);