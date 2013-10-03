window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("setFS").addEventListener("click", function(){
		var myImage = document.getElementById("sunflower");
		// Safari/Google Chrome用
		if(myImage.webkitRequestFullScreen){
			myImage.webkitRequestFullScreen();
		}
		// Firefox用
		if (myImage.mozRequestFullScreen){
			myImage.parentNode.mozRequestFullScreen();
		}
	}, false);
	// イベントハンドラを設定(Firefox用)
	document.addEventListener("mozfullscreenchange", function(){
		alert("画面が切り替わりました");
      }, false);
	// イベントハンドラを設定(Safari/Google Chrome用)
	document.addEventListener("webkitfullscreenchange", function(){
		alert("画面が切り替わりました");
      }, false);
}, false);
