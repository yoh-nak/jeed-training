window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 文字列を変数に代入
	var str = "あいうえお";
	// 文字数だけ繰り返し変換
	for(var i=0; i<str.length; i++){
		// 文字コードに変換
		var code = "0x"+str.charCodeAt(i).toString(16);
		// 結果を出力
		ele.innerHTML += code+"<br>";
	}
	ele.innerHTML += "<hr>";
	// 文字コードから文字に変換
	for(code=0x41; code<=0x5a; code++){
		// 文字コードから文字に変換
		var str = String.fromCharCode(code);
		// 結果を出力
		ele.innerHTML += str;
	}
}, false);