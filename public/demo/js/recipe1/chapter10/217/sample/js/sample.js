window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// フォントとサイズ、色を設定する
	context.font = "24pt 'Tahoma-Bold'";
	context.fillStyle = "rgba(0, 255, 0, 0.5)";
	// 影の設定を行う
	context.shadowColor = "blue";
	context.shadowBlur = 3;
	context.shadowOffsetX = 10;
	context.shadowOffsetY = 5;
	// 文字を描画する
	context.fillText("Shadow Sample", 10, 50);
	// 四角形を描画する
	context.strokeStyle = "red";
	context.lineWidth = 4;
	context.strokeRect(10, 100, 200, 60);
}, false);