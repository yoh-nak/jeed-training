window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input")[0];
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(){
		// オーディオオブジェクトの生成とオーディオファイルの読み込み
		var audioObj = new Audio("music/sample.mp3");
		// オーディオを再生する
		audioObj.play();
	}, false);
}, false);