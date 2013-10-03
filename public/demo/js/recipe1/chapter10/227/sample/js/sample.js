window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Canvas要素を読み出し
	var myCanvas = document.getElementsByTagName("canvas")[0];
	// コンテキストを取得
	var context = myCanvas.getContext("2d");
	if (!context){ return; }
	// 画像を描画する
	var imgObj = new Image();
	imgObj.src = "images/matsumoto.jpg";
	imgObj.onload = function(){
		context.drawImage(this, 0, 0);
		// ピクセルデータを読み出しPNG形式にする
		var data = myCanvas.toDataURL("image/png");
		// 変換結果を画面に出力
		ele.innerText = ele.textContent = data;
	}
}, false);