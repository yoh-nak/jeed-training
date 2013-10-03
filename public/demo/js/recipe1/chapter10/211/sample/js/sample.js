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
		// エンボスに変換する関数を呼び出す
		toEmboss(context, myCanvas.width, myCanvas.height);
	}, false);
	// エンボスに加工する関数
	function toEmboss(context, w, h){
		// Canvas内のピクセルデータを読み出す
		var pixelData = context.getImageData(0,0, w, h).data;
		// 縦方向のピクセル数だけ繰り返す
		for(var y=h-1; y>=0; y--){
			// 横方向のピクセル数だけ繰り返す
			for(var x=w-1; x>=0; x--){
				// 処理するピクセルの配列内での位置を計算する
				// 配列要素は「赤」「緑」「青」「不透明度（α）」の順番
				var pointer = (y * w + x) * 4;
				// 差分を取るピクセルの位置を設定する
				var x2 = x - 2;
				var y2 = y - 2;
				// 画面外にならないように調整する
				if (x2 < 0){ x2 = 0; }
				if (y2 < 0){ y2 = 0; }
				var pointerLeft = (y2 * w + x2) * 4;
				// 色データを読み出し
				var red = pixelData[pointer+0];
				var green = pixelData[pointer+1];
				var blue = pixelData[pointer+2];
				var alpha = pixelData[pointer+3];
				var red2 = pixelData[pointerLeft+0];
				var green2 = pixelData[pointerLeft+1];
				var blue2 = pixelData[pointerLeft+2];
				// 差分を求める
				var r = Math.floor((red2 - red)/2)+128;
				var g = Math.floor((green2 - green)/2)+128;
				var b = Math.floor((blue2 - blue)/2)+128;
				// グレーにしたい場合は以下のコード
				//var gray = green*0.6+red*0.3+blue*0.1;
				//var gray2 = green2*0.6+red2*0.3+blue2*0.1;
				//var r = g = b = Math.floor((gray2 - gray)/2)+128;
				// 処理結果を配列に入れる
				pixelData[pointer+0] = r;
				pixelData[pointer+1] = g;
				pixelData[pointer+2] = b;
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