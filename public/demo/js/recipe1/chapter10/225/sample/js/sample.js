window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 塗りの色を設定
	context.fillStyle = "green";
	// 状態を保存
	context.save();
	// 不透明度を設定
	context.globalAlpha = 0.2;
	// 四角形を回転描画（10回繰り返す）
	for(var i=0; i<360; i+=36){
		// 状態を保存
		context.save();
		// 移動＆回転
		context.translate(160, 120);
		context.rotate(i * Math.PI/180);
		// 四角形を描画
		context.fillRect(0, 0, 150, 100);
		// 状態を復元
		context.restore();
	}
	// 最上部に四角形を描画
	context.fillRect(0, 0, 320, 10);
	// 状態を復元
	context.restore();
	// 最下部に四角形を描画
	context.fillRect(0, 230, 320, 10);
}, false);