window.addEventListener("load", function(){
	// ボタンにイベントを割り当て
	document.getElementById("draw").addEventListener("click", function(){
		// 左側のCanvas要素を読み出し
		var myCanvasLeft = document.getElementsByTagName("canvas")[0];
		// 右側のCanvas要素を読み出し
		var myCanvasRight = document.getElementsByTagName("canvas")[1];
		// コンテキストを取得
		var context = myCanvasRight.getContext("2d");
		if (!context){ return; }
		// 映像を小さくして描画する
		context.drawImage(myCanvasLeft, 60, 40, 200, 150);
	}, false);
	// ランダムに左側のCanvasに四角形を描画
	setInterval(function(){
		// 左側のCanvas要素を読み出し
		var myCanvasLeft = document.getElementsByTagName("canvas")[0];
		// コンテキストを取得
		var context = myCanvasLeft.getContext("2d");
		// 枠の色を赤色に設定
		context.strokeStyle = "red";
		context.lineWidth = 2;
		var x = Math.random() * myCanvasLeft.width;
		var y = Math.random() * myCanvasLeft.height;
		context.strokeRect(x, y, 40, 20);
	}, 100);
}, false);