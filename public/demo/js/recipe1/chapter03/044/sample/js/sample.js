window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 配列を作成
	var myArray = ["Basic", "ルビ", "ADA", "ルビ", "ルビ", "Basic", "ルビ", "Perl"];
	// 配列を先頭から後方に検索
	var idx1 = myArray.indexOf("ルビ");
	// 配列を3番目の要素から後方に検索
	var idx2 = myArray.indexOf("ルビ", 2);
	// 配列を最後から前方に検索
	var idx3 = myArray.lastIndexOf("ルビ");
	// 配列を最後の3番目から前方に検索
	var idx4 = myArray.lastIndexOf("ルビ", -3);
	// 結果を出力
	ele.innerHTML = "idx1："+idx1+"<br>";
	ele.innerHTML += "idx2："+idx2+"<br>";
	ele.innerHTML += "idx3："+idx3+"<br>";
	ele.innerHTML += "idx4："+idx4;
}, false);