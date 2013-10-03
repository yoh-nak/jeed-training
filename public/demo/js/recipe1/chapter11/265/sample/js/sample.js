window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input");
	// オーディオオブジェクトを読み出し
	var audioObj = document.getElementsByTagName("audio")[0];
	// ボタンにイベントを割り当て
	btn[0].addEventListener("click", function(){
		// コントローラーを表示する
		audioObj.controls = true;
	}, false);
	// ボタンにイベントを割り当て
	btn[1].addEventListener("click", function(){
		// コントローラーを非表示にする
		audioObj.controls = false;
	}, false);
}, false);