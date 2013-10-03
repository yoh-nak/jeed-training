window.addEventListener("load", function(){
	var btn = document.getElementsByTagName("input")[0];
	// オーディオオブジェクトを生成
	var audioObj = document.getElementsByTagName("audio")[0];
	// ボタンにイベントを割り当て
	btn.addEventListener("click", function(){
		// オーディオファイルの長さ（尺）を変数に代入
		var sec = audioObj.duration;
		document.getElementsByTagName("output")[0].innerHTML = sec+"秒";
	}, false);
}, false);