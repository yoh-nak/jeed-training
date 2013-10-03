window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input");
	// オーディオオブジェクトを生成
	var audioObj = new Audio();
	// ボタンにイベントを割り当て
	btn[0].addEventListener("click", function(){
		// オーディオファイルを読み込み
		audioObj.src = "music/sample.ogg";
	}, false);
	// ボタンにイベントを割り当て
	btn[1].addEventListener("click", function(){
		// オーディオを再生する
		audioObj.play();
	}, false);
}, false);