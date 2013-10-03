window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Numberオブジェクトにn桁で区切るメソッドを追加
	Number.prototype.numFormat = function(separate){
		// パラメータが省略された場合は3桁ごとにする
		separate = separate || 3;
		// 結果を入れる
		var n = "";
		var count = 0;
		// 数値を文字列に変換
		var str = new String(this);
		for (var i=str.length-1; i>=0; i--){
			n = str.charAt(i) + n;
			count++;
			if (((count % separate) == 0) && (i != 0)) n = ","+n;
		}
		return n;
	}
	// 数値を文字列として3桁で区切る
	var n = (12345678).numFormat();
	ele.innerHTML = n+"<br>";
	// 数値を文字列として4桁で区切る
	var n = (12345678).numFormat(4);
	ele.innerHTML += n;
}, false);