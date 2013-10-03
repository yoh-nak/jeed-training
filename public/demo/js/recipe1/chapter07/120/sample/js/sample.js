window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// タイマーIDを入れる変数を用意
	var timerID = null;
	// 開始ボタンにイベントを割り当て
	document.getElementById("startBtn").addEventListener("click", function(){
		if (!timerID){
			ele[1].innerHTML = "インターバルタイマーを起動させました";
			// 1秒ごと定期的にミリ秒を表示する
			timerID = setInterval("displayTime()", 100);
		}else{
			ele[1].innerHTML = "すでにインターバルタイマーは起動中です";
		}
	}, false);
	// 終了ボタンにイベントを割り当て
	document.getElementById("stopBtn").addEventListener("click", function(){
		if (!timerID){
			ele[1].innerHTML = "インターバルタイマーは停止しています";
		}else{
			ele[1].innerHTML = "インターバルタイマーを停止させました";
			clearInterval(timerID);
			timerID = null;
		}
	}, false);
}, false);
// 定期的に呼び出される処理
function displayTime(){
	var ele = document.getElementsByTagName("output");
	ele[0].innerHTML = (new Date()).getTime();
}
