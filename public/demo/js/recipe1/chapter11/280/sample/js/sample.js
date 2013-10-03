window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input");
	// video要素を読み出す
	var videoObj = document.getElementsByTagName("video")[0];
	// ボタンにイベントを割り当て
	btn[0].addEventListener("click", function(){
		// 映像ファイルを読み込み
		videoObj.src = "movie/matsumotojyo.mp4";
	}, false);
	// ボタンにイベントを割り当て
	btn[1].addEventListener("click", function(){
		// 映像を再生する
		videoObj.play();
	}, false);
}, false);