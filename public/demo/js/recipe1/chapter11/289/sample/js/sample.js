window.addEventListener("load", function(){
	// 映像と音声の両方を再生
	navigator.webkitGetUserMedia({ video : true, audio: true },
		// 処理できる場合
		function(stream){
			// ストリーム映像を表示するvideo要素
			var myVideo = document.getElementsByTagName("video")[0];
			// video要素のsrcプロパティにストリームをURLに変換した後に代入
			myVideo.src = webkitURL.createObjectURL(stream);
		}, 
		// エラーの場合
		function(error){
			var ele = document.getElementsByTagName("output")[0];
			ele.innerHTML = "エラー："+error.code;
		}
	);
	// WebRTCで取り込んだ映像をCanvasに描画
	document.getElementById("capture").addEventListener("click", function(){
		var myVideo = document.getElementsByTagName("video")[0];
		var myCanvas = document.getElementsByTagName("canvas")[0];
		var context = myCanvas.getContext("2d");
		context.fillStyle = "white";
		context.fillRect(0,0, myCanvas.width, myCanvas.height);
		context.drawImage(myVideo, 40, 40, 240, 160); 
	}, true);
}, false);
