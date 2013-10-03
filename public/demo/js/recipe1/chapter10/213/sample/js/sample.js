window.addEventListener("load", function(){
	// Canvas要素を読み出し2Dコンテキストを取得
	var myCanvas = document.getElementsByTagName("canvas")[0];
	var context = myCanvas.getContext("2d");
	// 描画を描画する
	var imgObj = new Image();
	imgObj.src = "images/sample.jpg";
	imgObj.onload = function(){
		// 画像が読み込まれたらCanvasに描画
		context.drawImage(this, 0, 0);
	}
	// ボタンにイベントを割り当て
	document.getElementById("effect").addEventListener("click", function(){
		// Canvasに画像を描画
		context.drawImage(imgObj, 0, 0);
		// 入力されたガンマ値を読み出す
		var gValue = parseFloat(document.getElementById("gamma").value);
		// ガンマ補正処理を行う関数を呼び出す
		gammaAdjust(context, myCanvas.width, myCanvas.height, gValue);
	}, false);
	// ガンマ補正処理関数
	function gammaAdjust(context, w, h, gamma){
		// Canvas内のピクセルデータを読み出す
		var pixelData = context.getImageData(0,0, w, h).data;
		// 縦方向のピクセル数だけ繰り返す
		for(var y=0; y<h; y++){
			// 横方向のピクセル数だけ繰り返す
			for(var x=0; x<w; x++){
				// 処理するピクセルの配列内での位置を計算する
				// 配列要素は「赤」「緑」「青」「不透明度（α）」の順番
				var pointer = (y * w + x) * 4;
				// 色データを読み出し
				var red = pixelData[pointer+0];
				var green = pixelData[pointer+1];
				var blue = pixelData[pointer+2];
				var alpha = pixelData[pointer+3];
				// ガンマ補正
				var red = 255 * Math.pow((red / 255), 1/gamma);
				var green = 255 * Math.pow((green / 255), 1/gamma);
				var blue = 255 * Math.pow((blue / 255), 1/gamma);
				// 補正結果を配列に入れる
				pixelData[pointer+0] = red;
				pixelData[pointer+1] = green;
				pixelData[pointer+2] = blue;
				pixelData[pointer+3] = alpha;
			}
		}
		// 処理結果をCanvasに描画するために新規にピクセルデータを生成
		var output = context.createImageData(w, h);
		// ピクセルデータの総数だけ繰り返す
		for(var i=0; i<w*h*4; i++){
			// 操作したピクセルを入れる
			output.data[i] = pixelData[i];
		}
		// Canvasに描画する
		context.putImageData(output, 0,0);
	}
}, false);