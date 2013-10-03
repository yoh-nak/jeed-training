window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input");
	// ビデオオブジェクトを読み出し
	var videoObj = document.getElementsByTagName("video")[0];
	// ボタンにイベントを割り当て
	btn[0].addEventListener("click", function(){
		// コントローラーを表示する
		videoObj.controls = true;
	}, false);
	// ボタンにイベントを割り当て
	btn[1].addEventListener("click", function(){
		// コントローラーを非表示にする
		videoObj.controls = false;
	}, false);
}, false);