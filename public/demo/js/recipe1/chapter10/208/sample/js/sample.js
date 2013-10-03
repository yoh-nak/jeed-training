window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 線形グラデーションを設定する
	var grad1 = context.createLinearGradient(0,0, 0, 240);
	// 開始点の色を指定する
	grad1.addColorStop(0, "rgb(0,50,255)");
	// 中間点1の色を指定する
	grad1.addColorStop(0.5, "rgb(0,0,255)");
	// 中間点2の色を指定する
	grad1.addColorStop(0.8, "yellow");
	// 終了点の色を指定する
	grad1.addColorStop(1, "orange");
	// 四角形をグラデーションで描画
	context.fillStyle = grad1;
	context.fillRect(0, 0, 320, 240);
	// 円形グラデーションを設定する
	var grad2 = context.createRadialGradient(160, 120, 20, 160, 120, 100);
	// 開始点の色を指定する
	grad2.addColorStop(0, "rgba(255,0,0, 0)");
	// 中間点1の色を指定する
	grad2.addColorStop(0.5, "rgba(255,0,0, 0.5)");
	// 終了点の色を指定する
	grad2.addColorStop(1, "rgba(255,255,255, 0.25)");
	// 正円をグラデーションで描画
	context.fillStyle = grad2;
	context.arc(160, 120, 100, 0, Math.PI*2, false);
	context.fill();
}, false);