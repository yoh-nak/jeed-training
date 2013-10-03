window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// Stringオブジェクトを生成
	var str1 = new String();
	// 文字列として76を生成し5を連結
	var str2 = new String(76);
	str2 = str2 + 5;
	// 結果を出力
	ele.innerHTML = (str1 instanceof String)+"<br>"+str2;
}, false);