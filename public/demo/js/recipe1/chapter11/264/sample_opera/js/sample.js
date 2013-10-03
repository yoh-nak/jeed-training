window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// オーディオオブジェクトを生成する
	var audioObj = document.getElementsByTagName("audio")[0];
	// イベントを割り当てるボタン要素を読み出し
	var btn = document.getElementsByTagName("input");
	// ボリューム設定を行うボタンにイベントを設定
	btn[1].addEventListener("click", function(){
		// 設定するボリューム値を読み出し
		var n = document.getElementById("vol").value;
		// オーディオのボリュームとして設定
		audioObj.volume = n;
		// 設定した事を示すメッセージを表示
		ele.innerHTML = "ボリュームを設定しました";
	}, false);
	// ボリュームを読み出すボタンにイベントを設定
	btn[2].addEventListener("click", function(){
		// 現在のボリューム値を読み出し
		var n = audioObj.volume;
		// 設定した事を示すメッセージを表示
		ele.innerHTML = "現在のボリューム："+n;
	}, false);
	// ミュートを設定するボタンにイベントを設定
	btn[3].addEventListener("click", function(){
		// 現在のミュート状態を読み出し値を反転する
		var flag = audioObj.muted = !audioObj.muted;
		// 設定した事を示すメッセージを表示
		ele.innerHTML = "ミュート状態："+flag;
	}, false);
}, false);