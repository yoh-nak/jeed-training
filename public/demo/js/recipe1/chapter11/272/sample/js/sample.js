window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input")[0];
	btn.addEventListener("click", function(){
		// 最初のビデオ要素をピックアップ
		var videoObj = document.getElementsByTagName("video")[0];
		// ビデオを再生する
		videoObj.play();
	}, false);
}, false);