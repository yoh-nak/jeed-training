window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 線の色とサイズを設定
	context.strokeStyle = "red";
	context.lineWidth = 4;
	// 3次ベジエ曲線を描く
	context.beginPath();
	context.moveTo(10,10);
	context.bezierCurveTo(50,120, 100, 120, 200, 50);
	context.stroke();
	// 2次ベジエ曲線を描く
	context.beginPath();
	context.moveTo(10,110);
	context. quadraticCurveTo(50,220, 200, 150);
	context.stroke();
}, false);