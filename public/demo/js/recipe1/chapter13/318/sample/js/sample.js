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
		ele.innerHTML = "合計結果: " + evt.data;
	}
	// ワーカーにメッセージを送信
	myWorker.postMessage({ start : 1, end: 10 });
}, false);