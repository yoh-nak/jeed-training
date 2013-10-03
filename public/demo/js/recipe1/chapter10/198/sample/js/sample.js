window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 6角形を描く。n角形、半径、中心X座標、中心Y座標、初期角度
	drawPoly(6, 100, context, 160, 120, 30);

	// n角形を描く
	function drawPoly(n, size, context, baseX, baseY, startAngle){
		// Canvasの状態を保存
		context.save();
		// 指定された座標に移動
		context.translate(baseX, baseY);
		// 線の色とサイズを設定
		context.strokeStyle = "red";
		context.lineWidth = 1;
		// 新規にパスを作成
		context.beginPath();
		// 角度から初期座標を求める
		var degree = 360 / n;
		var rad = startAngle * Math.PI / 180;
		var x = size * Math.cos(rad);
		var y = size * Math.sin(rad);
		context.moveTo(x, y);
		// n回繰り返す
		for(var i=0; i<n; i++){
			// 角度を求める
			var angle = i * degree;
			rad = (angle + startAngle) * Math.PI / 180;
			// 角度からXY座標を求める
			x = size * Math.cos(rad);
			y = size * Math.sin(rad);
			// 直線の開始座標を指定
			context.lineTo(x, y);
		}
		// パスを閉じる
		context.closePath();
		// 線を描画
		context.stroke();
		// Canvasの状態を元に戻す
		context.restore();
	}
}, false);