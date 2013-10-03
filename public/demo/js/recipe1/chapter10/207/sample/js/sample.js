window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// フォントとサイズおよび色を設定する
	context.font = "24pt 'Tahoma-Bold'";
	context.fillStyle = "blue";
	// 描画する文字
	var text = "Sample";
	// 文字を左揃えで描画する
	context.textAlign = "left";
	context.fillText(text, 160, 50);
	// 文字を中揃えで描画する
	context.textAlign = "center";
	context.fillText(text, 160, 100);
	// 文字を右揃えで描画する
	context.textAlign = "right";
	context.fillText(text, 160, 150);
	// 中心に線(四角形)を描画
	context.fillStyle = "red";
	context.fillRect(160, 0, 1, 240);
}, false);