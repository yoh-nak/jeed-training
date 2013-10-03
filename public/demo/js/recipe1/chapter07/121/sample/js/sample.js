window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// ベンダープレフィックスを考慮
	window.requestAnimationFrame = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.msRequestAnimationFrame;
	window.cancelAnimationFrame = window.cancelAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozCancelAnimationFrame ||
		window.msRequestAnimationFrame;
	// チェック
	if (!window.requestAnimationFrame){
		ele[0].innerHTML = "機能が実装されていません";
		return;
	}
	// タイマーIDを入れる変数を用意
	var timerID = null;
	// 開始ボタンにイベントを割り当て
	document.getElementById("startBtn").addEventListener("click", function(){
		if (!timerID){
			ele[1].innerHTML = "アニメタイマーを起動させました";
			// 1秒ごと時間を表示する
			timerID = window.requestAnimationFrame(function(){
				// 時間を表示
				ele[0].innerHTML = new Date();
				// 現在のタイマーをさらに呼び出し
				timerID = window.requestAnimationFrame(arguments.callee);
			});
		}else{
			ele[1].innerHTML = "すでにアニメタイマーは起動中です";
		}
	}, false);
	// 終了ボタンにイベントを割り当て
	document.getElementById("stopBtn").addEventListener("click", function(){
		if (!timerID){
			ele[1].innerHTML = "アニメタイマーは停止しています";
		}else{
			ele[1].innerHTML = "アニメタイマーを停止させました";
			window.cancelAnimationFrame(timerID);
			timerID = null;
		}
	}, false);
}, false);