window.addEventListener("load", function(){
	// オーディオ要素を読み出す
	var audioObj = document.getElementsByTagName("audio")[0];
	// オーディオにイベントリスナーを設定
	audioObj.addEventListener("ended", function(){
		var flag = confirm("再生が終了しました。再度再生しますか？");
		if (flag === true){
			// 再生時間を0（最初）に設定する
			this.currentTime = 0;
			// 再生する
			this.play();
		}
	}, false);
}, false);