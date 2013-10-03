window.addEventListener("load", sendDateTime, false);
function sendDateTime(){
	// メッセージを送信するiframe要素
	var targetFrame = document.getElementById("clock");
	// 現在時刻を取得
	var dateTime = (new Date()).toString();
	// 送信先のオリジンを設定。*ならオリジン問わない
	var targetOrigin = "*";
	// iframe要素に現在時刻を送信
	targetFrame.contentWindow.postMessage(dateTime, targetOrigin);
	// 1秒ごとに繰り返し送信
	setTimeout(arguments.callee, 1000);
}