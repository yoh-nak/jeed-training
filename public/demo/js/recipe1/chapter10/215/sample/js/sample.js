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
		// 色相の値を読み出す
		var n = parseFloat(document.getElementById("hueValue").value);
		// 特定の色相で塗り潰す処理を行う関数を呼び出す
		colorTone(context, myCanvas.width, myCanvas.height, n);
	}, false);
	// 白黒化（2値化）処理関数（誤差拡散）
	function colorTone(context, w, h, newTone){
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
				// RGBからHSVに変換
				var hsv = RGBtoHSV(red, green, blue);
				// 指定した色相にした後、再度RGBに変換する
				var rgb = HSVtoRGB(newTone, hsv.S, hsv.V);
				// 補正結果を配列に入れる
				pixelData[pointer+0] = rgb.R*255;
				pixelData[pointer+1] = rgb.G*255;
				pixelData[pointer+2] = rgb.B*255;
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
// RGBからHSV (R:0〜255, G:0〜255, B:0〜255, h:0〜360, s:0〜1, B:0〜1)
function RGBtoHSV(r, g, b){
	var h = s = v = 0;
	if ( r >= g)   cmax = r; else cmax = g;
	if ( b > cmax) cmax = b;
	if ( r <= g)   cmin = r; else cmin = g;
	if ( b < cmin) cmin = b;
	v = cmax;
	var c = cmax - cmin;
	if (cmax == 0) s = 0; else s = c/cmax;
	if (s != 0){
		if (r == cmax){ h = (g - b)/c;
		}else{
			if (g == cmax){ h = 2 + (b - r)/c;
			}else{
				if (b == cmax) h = 4 + ( r - g)/c;
			}
		}
		h = h * 60;
		if (h < 0) h = h + 360;
	}
	return { H:h, S:s, V:v/255 }
}
// HSVからRGB (R:0〜1, G:0〜1, B:0〜1, h:0〜360, s:0〜1, B:0〜1)
function HSVtoRGB(h, s, v){
    var r = g = b = 0;
	if (s < 0) s = 0;
	if (s > 1) s = 1;
	if (v < 0) v = 0;
	if (v > 1) v = 1;
	h = h % 360;
	if (h < 0) h = h + 360;
	h = h / 60;
	i = Math.floor(h);
	var f = h - i;
	p1 = v * (1 - s);
	p2 = v * (1 - s*f);
	p3 = v * (1 - s*(1 - f));
	if (i == 0) { r = v; g = p3; b = p1; }
	if (i == 1) { r = p2;g = v;  b = p1; }
	if (i == 2) { r = p1;g = v;  b = p3; }
	if (i == 3) { r = p1;g = p2; b = v;  }
	if (i == 4) { r = p3;g = p1; b = v;  }
	if (i == 5) { r = v; g = p1; b = p2; }
	return { R:r, G:g, B:b }
}
