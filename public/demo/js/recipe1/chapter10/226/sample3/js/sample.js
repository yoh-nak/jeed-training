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
		setInterval("scrollLeft()", 100);
	}
}, false);
// スクロール処理(右から左)
function scrollLeft(){
	// Canvas要素を読み出し2Dコンテキストを取得
	var myCanvas = document.getElementsByTagName("canvas")[0];
	var context = myCanvas.getContext("2d");
	// Canvasの幅を取得
	var w = myCanvas.width;
	var h = myCanvas.height;
	// Canvas内のピクセルデータを読み出す
	var pixelData = context.getImageData(1,0, w-1, h);
	// 一番左のピクセルデータを読み出す
	var pixelDataLast = context.getImageData(0,0, 1, h);
	// それぞれを特定の座標に描画する
	// 大きな画像はX=0の座標に描画
	context.putImageData(pixelData, 0,0);
	// 一番左のピクセルはCanvasの一番右の座標に描画
	context.putImageData(pixelDataLast, w-1, 0);
}
