window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// パスで正円を2つ作成しクリッピング領域にする
	context.beginPath();
	context.arc(160,60, 50, 0, Math.PI*2, false);
	context.arc(160,130, 70, 0, Math.PI*2, false);
	context.clip();
	// 画像を描画する
	var imgObj = new Image();
	imgObj.src = "images/sunflower.jpg";
	imgObj.onload = function(){
		context.drawImage(this, -70, 0);
	}
}, false);