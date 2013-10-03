var ws = require( 'websocket-server');
// サーバー生成
var server = ws.createServer();
// 接続時のイベント
server.addListener('connection',function(conn){
	// 接続時にメッセージを送信
	conn.send("Connect OK");
	console.log("Connect.......");
	// メッセージ受信時のイベント
	conn.addListener('message', function(message){
		// メッセージを送信
		conn.send("Length = "+message.length);
		console.log("Send data");
	});
});
server.listen(9002);