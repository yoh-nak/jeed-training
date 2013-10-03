window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// フォントとサイズおよび色を設定する
	context.font = "24pt 'Tahoma-Bold'";
	context.fillStyle = "blue";
	// 描画する（文字幅を計算する）文字
	var text = "Canvas Sample";
	// 文字を描画する
	context.fillText(text, 10, 50);
	// 文字の横幅を求める
	var w = context.measureText(text).width;
	// 結果を表示する
	context.fillText("width = "+w, 10, 100);
	// 求めた横幅で赤い線を描画
	context.lineWidth = 8;
	context.strokeStyle = "rgba(255, 0, 0, 0.5)";
	context.beginPath();
	context.moveTo(10,50);
	context.lineTo(10+w, 50);
	context.stroke();
}, false);