window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 全体の不透明度を設定
	context.globalAlpha = 0.25;
	// 塗りの色を設定
	context.fillStyle = "red";
	// 四角形を描画
	context.fillRect(50, 50, 150, 150);
	// 塗りの色を設定
	context.fillStyle = "blue";
	// 四角形を描画
	context.fillRect(100, 100, 150, 150);
}, false);