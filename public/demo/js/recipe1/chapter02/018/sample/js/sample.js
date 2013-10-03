window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数に文字を代入
	var text = "#mz-700?text=いろは";
	// エスケープ文字に変換
	var str1 = escape(text);
	// エスケープされた文字から変換
	var str2 = unescape(str1);
	// 文字をエンコードする
	var str3 = encodeURI(text);
	// エンコードされた文字をデコードする
	var str4 = decodeURI(str3);
	// 文字をエンコードする
	var str5 = encodeURIComponent(text);
	// エンコードされた文字をデコードする
	var str6 = decodeURIComponent(str5);
	// 結果を出力
	ele.innerHTML = "escape : "+str1+"<br>unescape : "+str2+"<br>";
	ele.innerHTML += "decodeURI : "+str3+"<br>encodeURI : "+str4+"<br>";
	ele.innerHTML += "decodeURIComponent : "+str5+"<br>encodeURIComponent : "+str6;
}, false);