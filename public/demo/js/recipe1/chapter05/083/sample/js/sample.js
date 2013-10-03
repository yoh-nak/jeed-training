window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 文字列を変数に代入
	var myString = "JavaScript";
	// 3文字目〜5文字目の文字を取り出す
	var str1 = myString.substring(2, 5);
	// 3文字目から最後まで取り出す
	var str2 = myString.substring(2);
	// 3文字目から5文字分を取り出す
	var str3 = myString.substr(3, 5);
	// 文字列の最後から3文字分を取り出す
	var str4 = myString.substr(-3);
	// 文字列の最後から数えて2〜4文字分を取り出す
	var str5 = myString.slice(-4, -2);
	// 結果を出力
	ele.innerHTML = "(1)："+str1+"<br>(2)："+str2+"<br>";
	ele.innerHTML += "(3)："+str3+"<br>(4)："+str4+"<br>(5)："+str5;
}, false);