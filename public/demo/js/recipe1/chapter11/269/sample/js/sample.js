window.addEventListener("load", function(){
	// オーディオ要素を読み出す
	var audioObj = document.getElementsByTagName("audio")[0];
	// オーディオにイベントリスナーを設定
	audioObj.addEventListener("timeupdate", function(){
		var ele = document.getElementsByTagName("output")[0];
		// 再生時間を表示
		ele.innerHTML = "再生時間："+this.currentTime;
	}, false);
}, false);