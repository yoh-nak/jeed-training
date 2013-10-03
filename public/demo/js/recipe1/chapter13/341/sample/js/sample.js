window.addEventListener("load", function(){
	// ボタンにイベントを設定
	document.getElementById("setFS").addEventListener("click", function(){
		var myIframe = document.getElementById("story");
		// Safari/Google Chrome用
		if(myIframe.webkitRequestFullScreen){
			myIframe.webkitRequestFullScreen();
		}
		// Firefox用
		if (myIframe.parentNode.mozRequestFullScreen){
			myIframe.parentNode.mozRequestFullScreen();
		}
	}, false);
}, false);
