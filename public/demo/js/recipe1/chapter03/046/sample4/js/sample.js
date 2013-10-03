window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output")[0];
	// 空っぽの配列を作成
	var myArray = [ ];
	// 配列の数を設定する
	myArray.length = 10;
	// 結果を出力
	ele.innerHTML = "myArrayの要素数："+myArray.length+"<br>";
	// 配列の15番目に代入(indexは14)
	myArray[14] = true;
	// 結果を出力
	ele.innerHTML += "myArrayの要素数："+myArray.length+"<br>";
}, false);