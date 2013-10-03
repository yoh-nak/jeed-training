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
	// 正円を描く
	context.beginPath();
	context.arc(160,120, 40, 0, Math.PI*2, true);
	context.stroke();
	// 円弧を描く
	context.beginPath();
	context.arc(50,50, 20, 0, -Math.PI/2, true);
	context.stroke();
	// 円弧を描く(2)
	context.beginPath();
	context.moveTo(20,100);
	context.arcTo(200,200, 150, 200, 30);
	context.stroke();
}, false);