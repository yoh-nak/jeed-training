window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// フォントとサイズを設定する
	context.font = "24pt 'Tahoma-Bold'";
	// 文字の色を設定する
	context.fillStyle = "blue";
	// アウトライン文字の線の色を設定する
	context.strokeStyle = "red";
	// 文字を描画する
	context.fillText("Canvas Sample", 10, 50);
	// 横幅を指定して文字を描画する(Safari 5は非対応)
	context.fillText("Canvas Sample", 10, 100, 100);
	// アウトライン文字を描画する
	context.strokeText("Canvas Sample", 10, 150);
	// 横幅を指定してアウトライン文字を描画する
	context.strokeText("Canvas Sample", 10, 200, 100);
}, false);