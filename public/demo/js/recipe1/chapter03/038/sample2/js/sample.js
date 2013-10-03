window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// データを入れる配列を16バイト分用意
	var buffer = new ArrayBuffer(16);
	// ArrayBufferを符号なし16ビットとしてアクセスできるように設定
	byteData1 = new Uint16Array(buffer);
	// ArrayBufferを符号なし8ビットとしてアクセスできるように設定
	byteData2 = new Uint8Array(buffer);
	// 値を設定
	byteData1[0] = 32767;
	// 値を代入し結果を表示
	ele.innerHTML = byteData2[0] + "<br>";
	ele.innerHTML += byteData2[1] + "<br>";
}, false);