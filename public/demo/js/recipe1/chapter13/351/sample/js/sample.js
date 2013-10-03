window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// WebSocketオブジェクトを生成する
	var ws = new WebSocket("ws://202.215.119.34:9001");
	// 接続状態を確認
	var msg = ["接続中", "接続済み", "切断中", "切断された"];
	// 接続状態を表示する
	ele.innerHTML = "ステータス："+msg[ws.readyState];
}, false);
