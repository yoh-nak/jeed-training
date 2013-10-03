window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 文字列を変数に代入
	var myString = "JavaScript";
	// 小文字に変換
	var str1 = myString.toLowerCase();
	// 大文字に変換
	var str2 = myString.toUpperCase();
	// 結果を出力
	ele.innerHTML = str1+"<br>"+str2;
}, false);