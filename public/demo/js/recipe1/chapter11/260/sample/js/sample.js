window.addEventListener("load", function(){
	// オーディオ要素を読み出す
	var audioObj = document.getElementsByTagName("audio")[0];
	// イベントを割り当てるボタン要素を読み出し
	var btn = document.getElementsByTagName("input");
	btn[1].addEventListener("click", function(){
		// 設定時間を読み出し
		var time = document.getElementById("startTime").value;
		// 時間を設定
		audioObj.currentTime = time;
		// オーディオを再生
		audioObj.play();
	}, false);
	// オーディオにイベントを割り当て
	audioObj.addEventListener("timeupdate", function(){
		var ele = document.getElementsByTagName("output")[0];
		// 再生時間を表示
		ele.innerHTML = "再生時間："+this.currentTime;
	}, false);
}, false);