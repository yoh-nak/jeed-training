window.addEventListener("load", function(){
	// ビデオ要素を読み出す
	var videoObj = document.getElementsByTagName("video")[0];
	// イベントを割り当てるボタン要素を読み出し
	var btn = document.getElementsByTagName("input");
	btn[0].addEventListener("click", function(){
		// 映像を再生
		videoObj.play();
	}, false);
	btn[1].addEventListener("click", function(){
		// 映像の再生を停止
		videoObj.pause();
	}, false);
}, false);