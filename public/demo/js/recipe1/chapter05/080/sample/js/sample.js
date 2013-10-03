window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 文字列を変数に代入
	var myString = "C,JavaScript,Ruby,Python,Java,Dart,Lua,D";
	// 先頭からJavaの文字を探す
	var ptr1 = myString.indexOf("Java");
	// 31文字目からJavaの文字を探す
	var ptr2 = myString.indexOf("Java", 30);
	// 文字列の最後からJavaの文字を探す
	var ptr3 = myString.lastIndexOf("Java");
	// 結果を出力
	ele.innerHTML = "元の文字列："+myString+"<br>";
	ele.innerHTML += "先頭から検索："+ptr1+"<br>31文字目から検索："+ptr2+"<br>";
	ele.innerHTML += "最後から検索："+ptr3;
}, false);