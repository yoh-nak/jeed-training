window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 塗りの色を設定
	context.fillStyle = "rgba(255, 0, 0, 0.25)";
	// 四角形を描画
	context.fillRect(50, 50, 150, 100);
	// 15度回転
	context.rotate(15 * Math.PI/180);
	// 塗りの色を設定
	context.fillStyle = "rgba(0, 0, 255, 0.25)";
	// 四角形を描画
	context.fillRect(50, 50, 150, 100);
}, false);