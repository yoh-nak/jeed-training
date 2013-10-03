window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 線の色と幅を設定
	context.lineWidth = 4;
	context.strokeStyle = "red";
	// 角丸四角形を描く。x, y, 横幅, 縦幅, 角丸半径
	drawRoundRect(context, 40, 30, 200, 170, 20);
	// 角丸四角形を描くための関数
	function drawRoundRect(context, x, y, w, h, r){
		// 幅の小さい場合と大きい場合で半径を調整
		if (w<h){
			if ((w/2) < r){ r = w / 2; }
		}else{
			if ((h/2) < r){ r = h / 2; }
		}
		// 新規パスを作成
		context.beginPath();
		// 左上に移動
		context.moveTo(x+r, y);
		// 直線と角丸を描く
		context.lineTo(x+w-r, y);
		context.arc(x+w-r, y+r, r, -Math.PI/2, 0, false);
		context.lineTo(x+w, y+h-r);
		context.arc(x+w-r, y+h-r, r, 0, Math.PI/2, false);
		context.lineTo(x+r, y+h);
		context.arc(x+r, y+h-r, r, Math.PI/2, Math.PI, false);
		context.lineTo(x, y+r);
		context.arc(x+r, y+r, r, Math.PI, -Math.PI/2, false);
		// パスを閉じる
		context.closePath();
		// 線を描く
		context.stroke();
	}
}, false);