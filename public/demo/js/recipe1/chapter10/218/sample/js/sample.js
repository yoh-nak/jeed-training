window.addEventListener("load", function(){
	// ボタンにイベントを割り当て
	document.getElementById("draw").addEventListener("click", function(){
		// Video要素を読み出し
		var myVideo = document.getElementsByTagName("video")[0];
		// Canvas要素を読み出し
		var myCanvas = document.getElementsByTagName("canvas")[0];
		// コンテキストを取得
		var context = myCanvas.getContext("2d");
		if (!context){ return; }
		// 映像を小さくして描画する
		context.drawImage(myVideo, 60, 40, 200, 150);
	}, false);
}, false);