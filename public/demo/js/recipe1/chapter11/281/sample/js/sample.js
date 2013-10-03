window.addEventListener("load", function(){
	// video要素を読み出す
	var videoObj = document.getElementsByTagName("video")[0];
	// タイマーを使って映像の状態を監視する
	setTimeout(function(){
		var ele = document.getElementsByTagName("output")[0];
		// 再生速度を表示
		ele.innerHTML = "playbackRate："+videoObj.playbackRate;
		// 一時停止状態を表示
		ele.innerHTML += "<br>paused："+videoObj.paused;
		// 再生終了状態を表示
		ele.innerHTML += "<br>ended："+videoObj.ended;
		// 自動再生状態を表示
		ele.innerHTML += "<br>autoplay："+videoObj.autoplay;
		// ループ（繰り返し再生）状態を表示
		ele.innerHTML += "<br>loop："+videoObj.loop;
		// タイマー処理を継続
		setTimeout(arguments.callee, 250);
	}, 250);
}, false);