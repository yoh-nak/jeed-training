window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// input要素の読み出し
	var voice = document.getElementById("myVoice");
	// イベントを割り当て
	voice.addEventListener("webkitspeechchange", function(evt){
		// 音声入力された文字を出力
		ele.innerHTML = voice.value;
	}, false);
}, false);