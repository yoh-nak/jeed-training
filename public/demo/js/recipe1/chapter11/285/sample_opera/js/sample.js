window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ビデオ要素を読み出し
	var audioObj = document.getElementsByTagName("video")[0];
	// ビデオ要素にイベントを割り当てる
	audioObj.addEventListener("volumechange", function(){
		// ボリュームを読み出し
		var n = audioObj.volume;
		// ボリュームが変更された事を示すメッセージを表示
		ele.innerHTML = "ボリュームが"+n+"に変更されました";
	}, false);
}, false);