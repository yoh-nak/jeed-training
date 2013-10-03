window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("setFS").addEventListener("click", function(){
		var myVideo = document.getElementsByTagName("video")[0];
		// Safari/Google Chrome用
		if(myVideo.webkitRequestFullScreen){
			myVideo.webkitRequestFullScreen();
		}
		// Firefox用
		if (myVideo.mozRequestFullScreen){
			myVideo.mozRequestFullScreen();
		}
	}, false);
}, false);
