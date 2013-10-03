window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 新規にパスを作成し三角形を描く
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(310, 80);
	context.lineTo(20, 240);
	context.closePath();
	context.fillStyle = "rgba(255,255,0, 0.5)";
	context.fill();
	// ボタンがクリックされたら指定した座標がパス内かどうか調べる
	document.getElementById("checkBtn").addEventListener("click", function(){
		// 入力されたX, Y座標値を読み出し
		var x = document.getElementById("xp").value;
		var y = document.getElementById("yp").value;
		// X, Y座標が現在のパス内かどうか調べる
		var flag = context.isPointInPath(x, y);
		// 結果を出力
		ele.innerHTML = flag;
	}, false);
}, false);