window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 文字列を変数に代入
	var myString = "白藤,佐藤,山田,轟,小鳥遊,種島,大藤,伊波";
	// ,の文字で分割
	var myArray = myString.split(",", 4);
	// 結果を出力
	for(var i=0; i<myArray.length; i++){
		var str = myArray[i];
		ele.innerHTML += str+"<br>";
	}
	ele.innerHTML += "<hr>";
	// 正規表現を使って「●藤」,の文字を削除
	var myArray2 = myString.split(/.藤/g);
	// 結果を出力
	for(var i=0; i<myArray2.length; i++){
		var str = myArray2[i];
		ele.innerHTML += str+"<br>";
	}
}, false);