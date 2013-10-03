window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Web Audio APIが使えるか調べる
	if (!window.webkitAudioContext){
		ele.innerHTML = "Web Audio APIは使えません";
		return;
	}
	// ボタンにイベントを設定する
	document.getElementById("playSound").addEventListener("click", function(){
		// AudioContextオブジェクトを取得(WebKit)
		var context = new webkitAudioContext();
		// 音を鳴らすためのバッファを生成
		var audioSource = context.createBufferSource();
		// バッファのチャンネル数は1、3秒分の4096バイトバッファ、サンプリングレートは48KHz
		audioSource.buffer = context.createBuffer( 1, 4096*3, 48000 );
		// オーディオソース（ノード）を接続
		audioSource.connect(context.destination);
		// 最初のチャンネルのバッファに直接アクセス
		var data = audioSource.buffer.getChannelData(0);
		// Canvas
		var context = document.getElementsByTagName("canvas")[0].getContext("2d");
		context.strokeStyle = "red";
		context.beginPath();
		context.moveTo(0, 100);
		// 増幅
		var amp = 100;
		// サイン波形を生成してバッファに入れる
		for (var i=0; i<data.length; i++) {
			data[i] = Math.floor(amp*Math.sin(i * Math.PI/180));
   			// Canvasに波形を描画
			context.lineTo(i, data[i]+100);
		 }
		context.stroke();
		// 0秒から再生
		audioSource.noteOn( 0 );
	}, false);
}, false);
