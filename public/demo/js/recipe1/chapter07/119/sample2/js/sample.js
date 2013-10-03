window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// タイマーIDを入れる変数を用意
	var timerID = null;
	// 開始ボタンにイベントを割り当て
	document.getElementById("startBtn").addEventListener("click", function(){
		timerID = setTimeout(function(msg){
			ele.innerHTML = msg;
		}, 1000, "test message");
	}, false);
}, false);