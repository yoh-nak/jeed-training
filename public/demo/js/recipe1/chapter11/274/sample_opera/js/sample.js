window.addEventListener("load", function(){
	// ビデオ要素を読み出す
	var videoObj = document.getElementsByTagName("video")[0];
	// イベントを割り当てるボタン要素を読み出し
	var btn = document.getElementsByTagName("input");
	btn[1].addEventListener("click", function(){
		// 設定時間を読み出し
		var time = document.getElementById("startTime").value;
		// 時間を設定
		videoObj.currentTime = time;
		// 映像を再生
		videoObj.play();
	}, false);
	// ビデオ要素にイベントを割り当て
	videoObj.addEventListener("timeupdate", function(){
		var ele = document.getElementsByTagName("output")[0];
		// 再生時間を表示
		ele.innerHTML = "再生時間："+this.currentTime;
	}, false);
}, false);