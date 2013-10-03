window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 新規にパスを作成
	context.beginPath();
	// 直線の開始座標を指定
	context.moveTo(20, 50);
	context.lineTo(230, 80);
	// 線の色とサイズを設定
	context.strokeStyle = "red";
	context.lineWidth = 8;
	// 直線を描画
	context.stroke();
}, false);