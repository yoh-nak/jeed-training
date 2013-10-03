window.addEventListener("load", function(){
	// オーディオファイルのデータを入れておくバッファ
	var buf = null;
	// AudioContextオブジェクトを取得(WebKit)
	var context = new webkitAudioContext();
	// 非同期でオーディオファイルを読み込み
	var xhr = new XMLHttpRequest();
	// sound/sample.mp3ファイルを読み込み
	xhr.open("get", "sound/sample.mp3", true);
	// arraybufferを指定。指定しないとエラーになる
	xhr.responseType = "arraybuffer";
	// データの読み込みが完了した際の処理
	xhr.onload = function(){
		context.decodeAudioData(xhr.response, function(buffer){
			// 読み込んだデータをバッファに入れる
			buf = buffer;
			var ele = document.getElementsByTagName("output")[0];
			ele.innerHTML = "オーディオデータの読み込みが完了しました";
		});
	}
	xhr.send();
	// ボタンにイベントを設定する
	document.getElementById("playSound").addEventListener("click", function(){
		// バッファを作成
		var audioSource = context.createBufferSource();
		// ゲインノードを作成
		var gainNode = context.createGainNode();
		// 読み込んでバッファのデータを設定
		audioSource.buffer = buf;
		audioSource.connect(gainNode);
		gainNode.connect(context.destination);
		// ボリュームを読み出して設定
		var vol = parseFloat(document.getElementById("volume").value);
		gainNode.gain.value = vol;
		// オーディオを再生
		audioSource.noteOn(0);
	}, false);
}, false);
