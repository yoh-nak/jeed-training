window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// テキストフィールドに入力されたらリアルタイムに結果を表示
	document.getElementById("num").onkeyup = function(){
		ele.innerHTML = num3(this.value);
	}
	// 指定した桁数ごとに区切った結果を返す関数
	function num3(num, separate){
		// パラメータが省略された場合は3桁ごとにする
		separate = separate || 3;
		// 結果を入れる変数を初期化
		var n = "";
		var count = 0;
		// 数値を文字列に変換
		var str = new String(num);
		for (var i=str.length-1; i>=0; i--){
			n = str.charAt(i) + n;
			count++;
			if (((count % separate) == 0) && (i != 0)) n = ","+n;
		}
		return n;
	}
}, false);