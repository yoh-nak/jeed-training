window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// WebSocketオブジェクトを生成する
	var ws = new WebSocket("ws://202.215.119.34:9002");
	// 受信したデータを表示
	ws.onmessage = function(msg){
		ele.innerHTML += "サーバーから："+msg.data+"<br>";
	}
	// 接続時のサーバーからのメッセージを表示
	ws.onopen = function(data){
		ele.innerHTML = "接続完了イベント発生<br>";
	}
	document.getElementById("check").addEventListener("click", function(){
		// フォームに入力した文字を読み出す
		var text = document.getElementById("uName").value;
		// サーバーに入力した文字を送信
		ws.send(text);
	}, false);
}, false);
