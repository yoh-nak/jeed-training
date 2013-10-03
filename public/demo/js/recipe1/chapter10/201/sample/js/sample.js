window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 線の色とサイズ、塗りの色を設定
	context.strokeStyle = "rgba(255,0,0, 0.75)";
	context.lineWidth = 8;
	context.fillStyle = "cyan";
	// パスで四角形を描く
	context.beginPath();
	context.rect(20,20, 280,200);
	context.closePath();
	context.fill();
	context.stroke();
}, false);