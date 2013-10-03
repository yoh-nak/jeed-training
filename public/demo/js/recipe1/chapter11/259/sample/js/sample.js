window.addEventListener("load", function(){
	// オーディオ要素を読み出す
	var audioObj = document.getElementsByTagName("audio")[0];
	// イベントを割り当てるボタン要素を読み出し
	var btn = document.getElementsByTagName("input");
	btn[0].addEventListener("click", function(){
		// オーディオを再生
		audioObj.play();
	}, false);
	btn[1].addEventListener("click", function(){
		// オーディオの再生を停止
		audioObj.pause();
	}, false);
}, false);