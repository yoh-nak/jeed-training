window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// データを入れる配列を用意
	myArray = new Array();
	// 符号付き8ビット長配列を作成
	myArray[0] = new Int8Array(12);
	// 符号なし8ビット長配列を作成
	myArray[1] = new Uint8Array(12);
	// 符号付き16ビット長配列を作成
	myArray[2] = new Int16Array(12);
	// 符号なし16ビット長配列を作成
	myArray[3] = new Uint16Array(12);
	// 符号付き32ビット長配列を作成
	myArray[4] = new Int32Array(12);
	// 符号なし32ビット長配列を作成
	myArray[5] = new Uint32Array(12);
	// 浮動小数32ビット長配列を作成
	myArray[6] = new Float32Array(12);
	// 浮動小数64ビット長配列を作成
	myArray[7] = new Float64Array(12);
	// 値を代入し結果を表示
	ele.innerHTML = "■配列内容<br>";
	var n = [-32767, -1, 0, 127, 128, 255, 32767, 32768, 65535, 2147483647, 99999999999, 0.1];
	for(var j=0; j<myArray.length; j++){
		for(var i=0; i<n.length; i++){
			myArray[j][i] = n[i];
			ele.innerHTML += myArray[j][i] + ", ";
		}
		ele.innerHTML += "<br>";
	}
}, false);