window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 線の色と幅を設定
	context.lineWidth = 4;
	context.fillStyle = "red";
	// ドーナツ型を描く。x, y, 外側の半径, 内側の半径
	drawDoughnut(context, 160, 120, 100, 40);
	// ドーナツ型を描くための関数
	function drawDoughnut(context, x, y, outR, inR){
		// 新規パスを作成
		context.beginPath();
		// 外側の円を描く
		context.arc(x, y, outR, 0, Math.PI*2, false);
		// 内側の円を描く（反時計回り）
		context.arc(x, y, inR, 0, Math.PI*2, true);
		// パスを閉じる
		context.closePath();
		// 線を描く
		context.fill();
	}
}, false);