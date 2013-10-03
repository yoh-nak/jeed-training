window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input");
	// オーディオオブジェクトを生成
	var audioObj = document.getElementsByTagName("audio")[0];
	// ボタンにイベントを割り当て
	btn[0].addEventListener("click", function(){
		// 1倍速で再生する
		audioObj.playbackRate = 1.0;
	}, false);
	// ボタンにイベントを割り当て
	btn[1].addEventListener("click", function(){
		// 2倍速で再生する
		audioObj.playbackRate = 2.0;
	}, false);
}, false);