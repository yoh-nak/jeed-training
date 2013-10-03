window.addEventListener("load", function(){
	var ele = document.getElementsByTagName("output");
	// ul要素を取得
	var myList = document.getElementsByTagName("ul")[0];
	// 最初のノードにアクセスし読み出す
	var val1 = myList.firstChild.firstChild.nodeValue;
	// 結果を出力
	ele[0].innerHTML = "結果："+val1;
	// 最後のノードにアクセスし読み出す
	var val2 = myList.lastChild.firstChild.nodeValue;
	// 結果を出力
	ele[1].innerHTML = "結果："+val2;
}, false);