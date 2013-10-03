window.addEventListener("load", function(){
	// video要素を読み出す
	var videoObj = document.getElementsByTagName("video")[0];
	// 映像にイベントリスナーを設定
	videoObj.addEventListener("ended", function(){
		var flag = confirm("再生が終了しました。再度再生しますか？");
		if (flag === true){
			// 再生時間を0（最初）に設定する
			this.currentTime = 0;
			// 再生する
			this.play();
		}
	}, false);
}, false);