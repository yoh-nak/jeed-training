window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Web Workersが使えるか調べる
	if (!window.Worker){
		ele.innerHTML = "Web Workersは使えません";
		return;
	}
	// ワーカーオブジェクトを作成
	var myWorker = new Worker("js/add.js");
	// 先にイベントハンドラを設定
	myWorker.onmessage = function(evt){
		ele.innerHTML = evt.data;
		// ワーカーを呼び出す
		myWorker.postMessage(1);
	}
	// 通常終了ボタンにイベントを設定
	document.getElementById("endBtn").addEventListener("click", function(){
		myWorker.postMessage(false);
	}, false);
	// 強制終了ボタンにイベントを設定
	document.getElementById("killBtn").addEventListener("click", function(){
		// 強制終了
		myWorker.terminate();
	}, false);
	// ワーカーにメッセージを送信
	myWorker.postMessage(1);
}, false);