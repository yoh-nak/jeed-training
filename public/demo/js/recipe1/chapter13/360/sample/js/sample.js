window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Web Audio APIが使えるか調べる
	if (!window.webkitAudioContext){
		ele.innerHTML = "Web Audio APIは使えません";
		return;
	}
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
			ele.innerHTML = "オーディオデータの読み込みが完了しました";
		});
	}
	xhr.send();
	// ボタンにイベントを設定する
	document.getElementById("playSound").addEventListener("click", function(){
		if (!buf){
			ele.innerHTML = "データが完全に読み込まれていません";
			return;
		}
		// バッファを作成
		var audioSource = context.createBufferSource();
		// 読み込んでバッファのデータを設定
		audioSource.buffer = buf;
		// オーディオノードを接続
		audioSource.connect(context.destination);
		// オーディオを再生
		audioSource.noteOn(0);
	}, false);
}, false);
