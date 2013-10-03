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
		// スクロール処理を行う
		setInterval("scrollDown()", 100);
	}
}, false);
// スクロール処理(上から下)
function scrollDown(){
	// Canvas要素を読み出し2Dコンテキストを取得
	var myCanvas = document.getElementsByTagName("canvas")[0];
	var context = myCanvas.getContext("2d");
	// Canvasの幅を取得
	var w = myCanvas.width;
	var h = myCanvas.height;
	// Canvas内のピクセルデータを読み出す
	var pixelData = context.getImageData(0,0, w, h);
	// 一番下のピクセルデータを読み出す
	var pixelDataLast = context.getImageData(0,h-1, w, 1);
	// それぞれを特定の座標に描画する
	// 大きな画像はY=1の座標に描画
	context.putImageData(pixelData, 0,1);
	// 一番下のピクセルはY=0の座標に描画
	context.putImageData(pixelDataLast, 0,0);
}
