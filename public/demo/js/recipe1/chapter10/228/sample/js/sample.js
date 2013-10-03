window.addEventListener("load", function(){
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 画像を描画する
	var imgObj = new Image();
	imgObj.src = "images/sunflower.jpg?1";
	imgObj.onload = function(){
		// 座標を指定して元のサイズで描画
		context.drawImage(this, 0, 0);
		// 画像のまわりに白い半透明の枠を描画
		context.strokeStyle = "rgba(255,255,255, 0.7)";
		context.lineWidth = 10;
		context.strokeRect(5,5, 310, 230);
	}
	// ボタンにイベントを設定
	document.getElementById("save").addEventListener("click", function(){
		// ピクセルデータを文字列に変換
		var data = myCanvas.toDataURL("image/png");
		// ローカルストレージに保存
		localStorage.setItem("pixelData", data);
		// 確認のダイアログを表示
		alert(data.length+"文字分、保存しました");
	}, false);
}, false);