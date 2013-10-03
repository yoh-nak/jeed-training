window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 線の色とサイズ、塗りの色を設定
	context.strokeStyle = "red";
	context.lineWidth = 8;
	context.fillStyle = "orange";
	// 塗り潰された四角形を描く
	context.fillRect(10,10, 300, 220);
	// 四角形で消去
	context.clearRect(50,50, 220, 140);
	// 枠だけの四角形を描く
	context.strokeRect(30,30, 260, 180);
	// 線の色とサイズ、塗りの色を設定
	context.strokeStyle = "blue";
	context.lineWidth = 4;
	context.fillStyle = "rgba(0,255,0, 0.5)";
	// パスで四角形を描く
	context.beginPath();
	context.rect(80,80, 160,80);
	context.closePath();
	context.fill();
	context.stroke();
}, false);