window.addEventListener("load", function(){
	// video要素を読み出す
	var videoObj = document.getElementsByTagName("video")[0];
	// 映像にイベントリスナーを設定
	videoObj.addEventListener("timeupdate", function(){
		var ele = document.getElementsByTagName("output")[0];
		// 再生時間を表示
		ele.innerHTML = "再生時間："+this.currentTime;
	}, false);
}, false);