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
		// 画像を描画
		context.drawImage(imgObj, 0, 0);
		// しきい値を読み出す
		var n = parseInt(document.getElementById("threshold").value);
		// 白黒化（2値化）を行う関数を呼び出す
		mono(context, myCanvas.width, myCanvas.height, n);
	}, false);
	// 白黒化（2値化）処理関数（誤差拡散）
	function mono(context, w, h, threshold){
		// Canvas内のピクセルデータを読み出す
		var pixelData = context.getImageData(0,0, w, h).data;
		// 縦方向のピクセル数だけ繰り返す
		for(var y=0; y<h; y++){
			// 誤差を格納する変数
			var diff = 0;
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
				// 輝度を計算
				var gray = green * 0.6 + red * 0.3 + blue * 0.1;
				gray = gray + diff;
				// しきい値より大きいか小さいか
				if (gray > threshold){
					diff = gray - 255;
					gray = 255;	// 白にする
				}else{
					diff = 255 - gray;
					gray = 0;
				}
				// 補正結果を配列に入れる
				pixelData[pointer+0] = gray;
				pixelData[pointer+1] = gray;
				pixelData[pointer+2] = gray;
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