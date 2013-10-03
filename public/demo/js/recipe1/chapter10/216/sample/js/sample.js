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
		// 画像をパターンとして登録
		var pattern1 = context.createPattern(this, "repeat");
		// 塗りつぶしをパターンにする
		context.fillStyle = pattern1;
		// 三角形を描画
		context.beginPath();
		context.moveTo(160,0);
		context.lineTo(310, 220);
		context.lineTo(10, 180);
		context.closePath();
		// パターンで塗り潰す
		context.fill();
	}
}, false);