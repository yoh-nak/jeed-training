window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 画像を描画する
	var imgObj = new Image();
	imgObj.src = "images/sunflower.jpg";
	imgObj.onload = function(){
		// 座標を指定して元のサイズで描画
		context.drawImage(this, 0, 0);
		// 座標とサイズを指定して描画
		context.drawImage(this, 0, 150, 50, 80);
		//　元画像の一部をクリッピングした後で指定した座標とサイズで描画
		context.drawImage(this, 30, 10, 40, 20, 100, 150, 60, 80);
	}
}, false);