window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input");
	// video要素を読み出し
	var videoObj = document.getElementsByTagName("video")[0];
	// ボタンにイベントを割り当て
	btn[0].addEventListener("click", function(){
		// 1倍速で再生する
		videoObj.playbackRate = 1.0;
		videoObj.defaultPlaybackRate = 1.0;
	}, false);
	// ボタンにイベントを割り当て
	btn[1].addEventListener("click", function(){
		// 2倍速で再生する
		videoObj.playbackRate = 2.0;
		videoObj.defaultPlaybackRate = 2.0;
	}, false);
}, false);