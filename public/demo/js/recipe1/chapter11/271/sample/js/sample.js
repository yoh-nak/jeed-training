window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// オーディオオブジェクトを生成する
	var audioObj = document.getElementsByTagName("audio")[0];
	// オーディオにイベントを割り当てる
	audioObj.addEventListener("volumechange", function(){
		// ボリュームを読み出し
		var n = audioObj.volume;
		// ボリュームが変更された事を示すメッセージを表示
		ele.innerHTML = "ボリュームが"+n+"に変更されました";
	}, false);
}, false);