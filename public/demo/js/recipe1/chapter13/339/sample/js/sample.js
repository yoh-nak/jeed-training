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
}, false);
