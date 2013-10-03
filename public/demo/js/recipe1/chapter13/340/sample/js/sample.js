window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("setFS").addEventListener("click", function(){
		var myText = document.getElementById("mainText");
		// Safari/Google Chrome用
		if(myText.webkitRequestFullScreen){
			myText.webkitRequestFullScreen();
		}
		// Firefox用
		if (myText.parentNode.mozRequestFullScreen){
			myText.parentNode.mozRequestFullScreen();
		}
	}, false);
}, false);
