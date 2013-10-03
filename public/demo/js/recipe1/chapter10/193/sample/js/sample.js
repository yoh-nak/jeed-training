window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 新規にパスを作成
	context.beginPath();
	// 図形の座標値を設定
	context.moveTo(0,0);
	context.lineTo(130, 80);
	context.lineTo(20, 150);
	// パスを閉じる（クローズパス）
	context.closePath();
	// 塗りつぶす色を設定
	context.fillStyle = "red";
	context.fill();
}, false);