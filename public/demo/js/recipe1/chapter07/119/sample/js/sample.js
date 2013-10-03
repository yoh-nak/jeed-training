window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// タイマーIDを入れる変数を用意
	var timerID = null;
	// 開始ボタンにイベントを割り当て
	document.getElementById("startBtn").addEventListener("click", function(){
		if (!timerID){
			ele[1].innerHTML = "タイマーを起動させました";
			// 1秒ごと時間を表示する
			timerID = setTimeout(function(){
				// 時間を表示
				ele[0].innerHTML = new Date();
				// 現在のタイマーをさらに呼び出し
				timerID = setTimeout(arguments.callee, 1000);
			}, 1000);
		}else{
			ele[1].innerHTML = "すでにタイマーは起動中です";
		}
	}, false);
	// 終了ボタンにイベントを割り当て
	document.getElementById("stopBtn").addEventListener("click", function(){
		if (!timerID){
			ele[1].innerHTML = "タイマーは停止しています";
		}else{
			ele[1].innerHTML = "タイマーを停止させました";
			clearTimeout(timerID);
			timerID = null;
		}
	}, false);
}, false);