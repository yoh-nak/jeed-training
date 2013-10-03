window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 変数に文字を代入
	var text = "";
	for(var i=0x20; i<0x7f; i++){
		text += String.fromCharCode(i);
	}
	// エスケープ文字に変換
	var str1 = escape(text);
	// 文字をエンコードする
	var str3 = encodeURI(text);
	// 文字をエンコードする
	var str5 = encodeURIComponent(text);
	// 結果を出力
	ele.innerHTML = text+"<hr>";
	ele.innerHTML += str1+"<hr>";
	ele.innerHTML += str3+"<hr>";
	ele.innerHTML += str5;
}, false);