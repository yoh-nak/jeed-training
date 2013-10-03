window.addEventListener("load", function(){
	// 映像と音声の両方を再生。新仕様では{ video : true, audio: true }
	navigator.webkitGetUserMedia("video, audio",
		// 処理できる場合
		function(stream){
			// ストリーム映像を表示するvideo要素
			var myVideo = document.getElementsByTagName("video")[0];
			// video要素のsrcプロパティにストリームをURLに変換した後に代入
			// Firefoxの場合はwindow.URL.createObjectURL()
			myVideo.src = webkitURL.createObjectURL(stream);
		}, 
		// エラーの場合
		function(error){
			var ele = document.getElementsByTagName("output")[0];
			ele.innerHTML = "エラー："+error.code;
		}
	);
}, false);
