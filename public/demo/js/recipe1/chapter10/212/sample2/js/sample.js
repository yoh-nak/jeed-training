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
		// ぼかし処理を行う関数を呼び出す
		blur(context, myCanvas.width, myCanvas.height,
			[	1/16, 2/16, 1/16,
				2/16, 4/16, 2/16,
				1/16, 2/16, 1/16 ]
		);
	}, false);
	// フィルタ処理関数
	function blur(context, w, h, pat){
		// Canvas内のピクセルデータを読み出す
		var pixelData = context.getImageData(0,0, w, h).data;
		// 縦方向のピクセル数だけ繰り返す
		for(var y=h; y>=-1; y--){
			// 横方向のピクセル数だけ繰り返す
			for(var x=w; x>=-1; x--){
				for(var c=0; c<3; c++){
					var total = 0;
					for(var py=0; py<3; py++){	// フィルタカーネルの縦サイズ
						for(var px=0; px<3; px++){	// フィルタカーネルの横サイズ
							var xx = x+px;
							var yy = y+py;
							// 座標が画面からはみ出さないように修正
							if (xx < 0){ xx = 0;}
							if (xx > (w-1)){ xx = w-1; }
							if (yy < 0){ yy = 0;}
							if (yy > (h-1)){ yy = h-1; }
							// 処理するピクセルの配列内での位置を計算する
							var pointer = (yy * w + xx) * 4 + c;
							// フィルタカーネルの位置を求める
							var kpos = py * 3 + px;
							// 色データを読み出し計算を行う
							var n = pixelData[pointer];
							n = n * pat[kpos];
							total = total + n;
						}
					}
					// 処理したピクセルを格納する位置を計算
					var xx = x+1;
					var yy = y+1;
					// 座標が画面からはみ出さないように修正
					if (xx < 0){ xx = 0;}
					if (xx > (w-1)){ xx = w-1; }
					if (yy < 0){ yy = 0;}
					if (yy > (h-1)){ yy = h-1; }
					// 処理結果を配列に入れる
					pointer = (yy * w + xx) * 4 + c;
					pixelData[pointer] = total;
				}
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