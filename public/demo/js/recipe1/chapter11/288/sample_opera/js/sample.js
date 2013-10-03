window.addEventListener("load", function(){
	// 映像と音声の両方を再生
	navigator.getUserMedia("video, audio",
		// 処理できる場合
		function(stream){
			// ストリーム映像を表示するvideo要素
			var myVideo = document.getElementsByTagName("video")[0];
			// Opera Mobileではvideo要素のsrcプロパティにストリームを入れる
			myVideo.src = stream;
		}, 
		// エラーの場合
		function(error){
			var ele = document.getElementsByTagName("output")[0];
			ele.innerHTML = "エラー："+error.code;
		}
	);
}, false);
