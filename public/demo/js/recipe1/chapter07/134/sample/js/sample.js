window.addEventListener("load", function(){
	// canvas要素を読み出す
	var canvasObj = document.getElementsByTagName("canvas")[0];
	// コンテキストを読み出す
	var context = canvasObj.getContext("2d");
	// 画像を読み込む
	var myImage = new Image();
	myImage.src = "images/photo0.jpg";
	// 画像の読み込み完了時に呼び出すイベントハンドラを設定
	myImage.onload = function(){
		context.drawImage(this, 20,10);
	}
}, false);