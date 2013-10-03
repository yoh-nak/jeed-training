window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input")[0];
	// ビデオオブジェクトを生成
	var videoObj = document.getElementsByTagName("video")[0];
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(){
		// オーディオファイルの長さ（尺）を変数に代入
		var sec = videoObj.duration;
		document.getElementsByTagName("output")[0].innerHTML = sec+"秒";
	}, false);
}, false);