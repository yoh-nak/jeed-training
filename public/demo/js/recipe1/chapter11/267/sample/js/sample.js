window.addEventListener("load", function(){
	// オーディオ要素を読み出す
	var audioObj = document.getElementsByTagName("audio")[0];
	// タイマーを使ってオーディオの状態を監視する
	setTimeout(function(){
		var ele = document.getElementsByTagName("output")[0];
		// 再生速度を表示
		ele.innerHTML = "playbackRate："+audioObj.playbackRate;
		// 一時停止状態を表示
		ele.innerHTML += "<br>paused："+audioObj.paused;
		// 再生終了状態を表示
		ele.innerHTML += "<br>ended："+audioObj.ended;
		// 自動再生状態を表示
		ele.innerHTML += "<br>autoplay："+audioObj.autoplay;
		// ループ（繰り返し再生）状態を表示
		ele.innerHTML += "<br>loop："+audioObj.loop;
		// タイマー処理を継続
		setTimeout(arguments.callee, 250);
	}, 250);
}, false);