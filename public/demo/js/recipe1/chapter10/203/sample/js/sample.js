window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 赤色に設定
	context.fillStyle = "red";
	// デフォルトのモード（source-over）で四角形を描画
	context.fillRect(10,20, 200, 180);
	// 緑色に設定
	context.fillStyle = "#00ff00";
	// 描画モードをlighterに設定
	context.globalCompositeOperation = "lighter";
	// 四角形を描画
	context.fillRect(90, 60, 200, 180);
}, false);