window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// ビデオオブジェクトを生成する
	var videoObj = document.getElementsByTagName("video")[0];
	// イベントを割り当てるボタン要素を読み出し
	var btn = document.getElementsByTagName("input");
	// ボリューム設定を行うボタンにイベントを設定
	btn[1].addEventListener("click", function(){
		// 設定するボリューム値を読み出し
		var n = document.getElementById("vol").value;
		// 映像のボリュームとして設定
		videoObj.volume = n;
		// 設定した事を示すメッセージを表示
		ele.innerHTML = "ボリュームを設定しました";
	}, false);
	// ボリュームを読み出すボタンにイベントを設定
	btn[2].addEventListener("click", function(){
		// 現在のボリューム値を読み出し
		var n = videoObj.volume;
		// 設定した事を示すメッセージを表示
		ele.innerHTML = "現在のボリューム："+n;
	}, false);
	// ミュートを設定するボタンにイベントを設定
	btn[3].addEventListener("click", function(){
		// 現在のミュート状態を読み出し値を反転する
		var flag = videoObj.muted = !videoObj.muted;
		// 設定した事を示すメッセージを表示
		ele.innerHTML = "ミュート状態："+flag;
	}, false);
}, false);